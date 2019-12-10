import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { Role } from 'src/app/models/role';
import { AdminService } from 'src/app/services/admin.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  hide = true;

  genders = ["male", "female"];


  validation_messages = {
    'name': [
      { type: 'required', message: 'Full Name is required' },
      { type: 'minlength', message: 'Full Name must be at least 5 characters long' },
      { type: 'maxlength', message: 'Full Name cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Full Name no spaces please' }
    ],
    'CMND': [
      { type: 'required', message: 'User Name is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    ],
    'birthday': [
      { type: 'required', message: 'Age is required' },
      { type: 'min', message: 'Renting a house over 18 years old' },
      { type: 'max', message: 'Under 70 years old for renting house' }
    ],
    'gender': [
      { type: 'required', message: 'Please select your gender' },
    ],
    'phone': [
      { type: 'required', message: 'Phone Number is required' },
      { type: 'pattern', message: 'Phone Number is only number' }
    ],
    'address': [
      { type: 'required', message: 'Address is required' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please input correct email' },
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'role': [
      { type: 'required', message: 'role is required' }
    ]
  };

  form: any = {};
  userInfo: Account;
  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';
  roles = [new Role(2, "Student"), new Role(1, "Teacher")];
  md5=new Md5();

  constructor(private accountService: AccountService, private adminService: AdminService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
  }

  registerForm: FormGroup

  createFormRegister() {
    this.registerForm = this.fb.group({
      fullName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern(/^\S+.*\S+$/)
      ])),
      username: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\+?1?(\d{10,12}$)/)
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
      ])),
      role: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  };

  onSubmitRegisters() {
    console.log(this.registerForm.value);
    if (this.registerForm.value.role == "Student") {
      this.registerForm.value.role = 2;
    } else {
      this.registerForm.value.role = 1;
    }
    this.registerForm.value.password=this.md5.appendStr(this.registerForm.value.password).end();
    this.userInfo = this.registerForm.value;
    this.userInfo.classId="5de8c6dbf1df7323e4f4a277";
    console.log(this.userInfo)
    this.adminService.createAccount(this.userInfo)
      .subscribe(data => {
      }
      )
  }
}
