import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Teacher } from 'src/app/models/teacher';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  displayedColumns = ['fullName', 'gender', 'phone', 'email', 'address', 'username', 'action'];
  DataSource: MatTableDataSource<Teacher>;
  userData: any[] = [];
  id:any;
  constructor(private route: ActivatedRoute,private adminService:AdminService) {}

  getAllAccount() {
    this.adminService.getAllAccounts().subscribe(res => {
      // this.userData = res;
      // this.DataSource.data = this.userData;
      console.log(res.data.listAccount);
      let account = [];
      res.data.listAccount.forEach((element:any) => {
        let temp:any=new Object;
        if (element.role == 1) {
          temp.role = element.role;
          temp.email = element.email;
          temp.gender = element.detail.gender;
          temp.fullName = element.detail.fullName;
          temp.username = element.detail.username;
          temp.phone = element.detail.phone;
          temp.address = element.detail.address;
          temp._id = element.detail._id;
          account.push(temp);
        }
      });
      console.log(account)
      this.DataSource = new MatTableDataSource(account);
    }
    )
  }
  ngOnInit() {
    this.getAllAccount();
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }

}
