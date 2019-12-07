import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { AccountService } from 'src/app/services/account.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-level',
  templateUrl: './create-level.component.html',
  styleUrls: ['./create-level.component.css']
})
export class CreateLevelComponent implements OnInit {

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

  form: any = {};
  levelInfo: Level;
  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private adminService: AdminService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
  }

  registerForm: FormGroup

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

    this.levelInfo = new Level(
      this.form.name,
      this.form.level,
    );
    this.adminService.createLevel(this.levelInfo).subscribe(data=>{
      
    })
  }
}
