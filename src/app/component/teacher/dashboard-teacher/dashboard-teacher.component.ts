import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Class } from 'src/app/models/class';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css']
})
export class DashboardTeacherComponent implements OnInit {

  displayedColumns = ['name', 'nameCourse', 'startDay', 'endDay'];
  DataSource: MatTableDataSource<Class>;
  userData: any[] = [];
  id:any;
  class1=new Class("C069H1","123","2019-11-21","2019,12,21");
  class2=new Class("C079H1","123","2018-11-21","2019,12,21");

  constructor(private route:ActivatedRoute,private adminService:AdminService) {}

  getAllClass(): void {
    this.adminService.getAllClass().subscribe((res) => {
      this.userData = res;   
      this.DataSource.data = this.userData;
    }
    )};
  ngOnInit() {
    this.userData.push(this.class1);
    this.userData.push(this.class2);
    this.DataSource = new MatTableDataSource(this.userData);
    // this.getAllAccount();

  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
}
