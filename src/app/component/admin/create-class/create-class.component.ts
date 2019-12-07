import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AdminService } from 'src/app/services/admin.service';
import { Class } from 'src/app/models/class';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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
    'nameCourse': [
      { type: 'required', message: 'Name course is required' },
      { type: 'minlength', message: 'Name course must be at least 5 characters long' },
      { type: 'maxlength', message: 'Name course cannot be more than 25 characters long' },
    ],
    'startDay': [
      { type: 'required', message: 'Start day is required' }
    ],
    'endDay': [
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
      nameCourse: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      startDay: new FormControl('', Validators.compose([
        Validators.required
      ])),
      endDay: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  };

  onSubmitRegisters() {
    this.class = new Class(
      this.form.name,
      this.form.nameCourse,
      this.form.startDay,
      this.form.endDay
    );

    this.adminService.createClass(this.class)
      .subscribe();

  }
}
