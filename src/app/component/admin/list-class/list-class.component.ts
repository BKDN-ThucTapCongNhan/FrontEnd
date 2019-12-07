import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Class } from 'src/app/models/class';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {

  displayedColumns = ['name', 'nameCourse', 'startDay', 'endDay'];
  DataSource: MatTableDataSource<Class>;
  userData: any[] = [];
  id:any;
  class1=new Class("C069H1","Java",new Date(2019,11,21),new Date(2019,12,21));
  class2=new Class("C069H1","PHP",new Date(2019,12,21),new Date(2019,12,21));
  constructor(private route:ActivatedRoute,private adminService:AdminService) {}

  getAllClass(): void {
    this.adminService.getAllClass().subscribe((res) => {
      this.userData = res;   
      this.DataSource.data = this.userData;
    }
    )};
  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    if(this.id!=null) {
      this.userData.push(this.class1);
      this.DataSource = new MatTableDataSource(this.userData);
    } else {
    this.userData.push(this.class1);
    this.userData.push(this.class2);
    this.DataSource = new MatTableDataSource(this.userData);
    }
    // this.getAllAccount();

  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
}
