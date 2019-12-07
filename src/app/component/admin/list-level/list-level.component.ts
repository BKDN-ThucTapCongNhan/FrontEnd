import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Level } from 'src/app/models/level';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent implements OnInit {
  displayedColumns = ['name', 'code'];
  DataSource: MatTableDataSource<Level>;
  userData: any[] = [];
  id:any;
  level1=new Level("Advantage","AD");
  level2=new Level("Hai","Nam");
  constructor(private route: ActivatedRoute,private adminService:AdminService) {}

  getAllStudent(): void {
    this.adminService.getAllAccounts().subscribe((res) => {
      this.userData = res;
      this.DataSource.data = this.userData;
    }
    )
  }
  ngOnInit() {
    // this.getAllStudent();
      this.userData.push(this.level1);
      this.userData.push(this.level2);
      this.DataSource = new MatTableDataSource(this.userData);


  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }


}
