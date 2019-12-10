import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  account: Account = new Account("hai", "hai.tan", "20", "Male", "01216295776", "Quang Nam", "hai.tan@codegym.vn", "1234567", 1);
  editAccountForm: FormGroup;
  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.updateAccountForm();
  }

  updateAccountForm() {
    this.editAccountForm = this.fb.group({
      fullName: ['hai', [Validators.required, Validators.pattern('^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z]*)*$')]],
      gender: ['Male', Validators.required],
      email: ['hai.tan@codegym.vn', [Validators.required, Validators.email]],
      phone: ['012345678', [Validators.required, Validators.pattern('[0]\\d{9}')]],
      address: ['Quang Nam', [Validators.required]],
      username: new FormControl({value: 'hai.tan',disabled:true}),
    })
  }

}
