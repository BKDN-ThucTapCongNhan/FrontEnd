import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AdminService } from 'src/app/services/admin.service';
import { Class } from 'src/app/models/class';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  hide = true;
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 5 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 25 characters long' }
    ],
    'courseID': [
      { type: 'required', message: 'Name course is required' },
      { type: 'minlength', message: 'Name course must be at least 5 characters long' },
      { type: 'maxlength', message: 'Name course cannot be more than 25 characters long' },
    ],
    'dateBegin': [
      { type: 'required', message: 'Start day is required' }
    ],
    'dateEnd': [
      { type: 'required', message: 'Start day is required' }
    ]
  };

  form: any = {};
  class: Class;
  errorMessage = '';
  dateNow: Date = new Date();
  registerForm: FormGroup

  constructor(private accountService: AccountService, private adminService: AdminService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
  }

  createFormRegister() {
    this.registerForm = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(5)
      ])),
      courseID: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      dateBegin: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dateEnd: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  };

  onSubmitRegisters() {
    this.class=this.registerForm.value;
    this.class.courseID="5de68d426f67ae2472f678db";
    this.class.dateBegin=this.registerForm.value.dateBegin.getFullYear()+"-"+(this.registerForm.value.dateBegin.getMonth()+1)+"-"+this.registerForm.value.dateBegin.getDate();
    this.class.dateEnd=this.registerForm.value.dateEnd.getFullYear()+"-"+(this.registerForm.value.dateEnd.getMonth()+1)+"-"+this.registerForm.value.dateEnd.getDate();
    console.log(this.class)
    this.adminService.createClass(this.class)
      .subscribe(data=> {
        this.router.navigateByUrl("/admin/listClass");
      });

  }
}
