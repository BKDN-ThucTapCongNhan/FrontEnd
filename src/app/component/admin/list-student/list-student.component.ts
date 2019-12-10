import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { element } from 'protractor';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  displayedColumns = ['fullName', 'gender', 'phone', 'email', 'address', 'username', 'action'];
  DataSource: MatTableDataSource<Student>;
  userData: any[] = [];
  id: any;
  student1 = new Student("Quyên", "Nữ", "123456789", "thai.quyen@gmail.com", "Quang nam", "ThaiQuyen");
  student2 = new Student("Hai", "Nam", "123456789", "haitan28102408@gmail.com", "Quang nam", "haiTan");
  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  getAllAccount() {
    this.adminService.getAllAccounts().subscribe(res => {
      // this.userData = res;
      // this.DataSource.data = this.userData;
      console.log(res.data.listAccount);
      let account = [];
      res.data.listAccount.forEach((element:any) => {
        let temp:any=new Object;
        if (element.role == 2) {
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
