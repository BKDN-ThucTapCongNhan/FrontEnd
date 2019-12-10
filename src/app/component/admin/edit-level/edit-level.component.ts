import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.css']
})
export class EditLevelComponent implements OnInit {
  id: string;
  form: any = {};
  levelInfo: Level;
  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';
  registerForm: FormGroup

  constructor(private route: ActivatedRoute,private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.createFormRegister();
    this.id = this.route.snapshot.params["id"];
    this.adminService.getDetailLevel(this.id).subscribe(res => {
     this.levelInfo=res.data;
     console.log(this.levelInfo)
     this.registerForm.patchValue(this.levelInfo);
    })
    
  }
  hide = true;


  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Name no spaces please' }
    ],
    'code': [
      { type: 'required', message: 'Code is required' },
    ],
  };



  createFormRegister() {
   
    this.registerForm = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\S+.*\S+$/)
      ])),
      code: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  

  };

  onSubmitRegisters() {
    console.log(this.registerForm);
    this.levelInfo=this.registerForm.value;
    this.levelInfo._id=this.id;
    this.adminService.updateLevel(this.levelInfo,this.id).subscribe(data => {
      this.router.navigateByUrl("/admin/listLevel");
    })
  }

}
