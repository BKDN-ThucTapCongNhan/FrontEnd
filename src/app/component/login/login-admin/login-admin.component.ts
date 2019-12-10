import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  form: any = {};
  constructor(private fb: FormBuilder, private router: Router) { }
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }
  onSubmit() {
    if (this.form.username === "admin" && this.form.password == "admin") {
      this.router.navigateByUrl("/admin/dashboard");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng")
    }
  }
}
