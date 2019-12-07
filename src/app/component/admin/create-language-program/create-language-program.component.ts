import { Component, OnInit } from '@angular/core';
import { LanguageProgram } from 'src/app/models/languageProgram';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-language-program',
  templateUrl: './create-language-program.component.html',
  styleUrls: ['./create-language-program.component.css']
})
export class CreateLanguageProgramComponent implements OnInit {

  hide = true;


  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Name no spaces please' }
    ],
    'brief': [
      { type: 'required', message: 'Brief is required' },
    ],
  };

  form: any = {};
  languageProgramInfo: LanguageProgram;
  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private adminService:AdminService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

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
      brief: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  };

  onSubmitRegisters() {
    console.log(this.registerForm);

    this.languageProgramInfo = new LanguageProgram(
      this.form.name,
      this.form.brief
    );
    this.adminService.createLanguageProgram(this.languageProgramInfo).subscribe(data=>{
      
    })


  }

}
