import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  constructor(private fb: FormBuilder, private router: Router) { }
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    password: ['', Validators.required]
  });

  ngOnInit() {

  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
   if ((this.form.username === "ThaiQuyen" && this.form.password==="123123")||(this.form.username === "haiTan" && this.form.password==="123123")) {
      this.router.navigateByUrl("/student/home");
    } else if(this.form.username=="teacher" && this.form.password==="teacher") {
      this.router.navigateByUrl("/teacher/dashboard");
    } else{
      alert("Tài khoản hoặc mật khẩu không đúng")
    }

  }
}
