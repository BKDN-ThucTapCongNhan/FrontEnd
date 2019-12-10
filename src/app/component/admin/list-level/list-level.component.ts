import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Level } from 'src/app/models/level';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent implements OnInit {
  displayedColumns = ['name', 'code','action'];
  DataSource: MatTableDataSource<Level>;
  userData: any[] = [];
  id: any;
  levelInfo:Level;
  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) {
  }

  getAllLevel(): void {
    this.adminService.getAllLevel().subscribe((res) => {
      this.userData = res;
      this.DataSource = new MatTableDataSource(res.data.levels);
    }
    )
  }
  ngOnInit() {
    this.getAllLevel();
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
  updateLevel(id: String) {
    this.router.navigateByUrl("/admin/level/"+id);
  }
  deleteLevel(idLevel:String) {
    this.adminService.getDetailLevel(idLevel).subscribe(res => {
      console.log(res)
      this.levelInfo=res.data;
     })
    if(confirm("I want delete this level?")){
      this.adminService.deleteLevel(this.levelInfo,idLevel).subscribe(data => {
        // this.router.navigateByUrl("/admin/listLevel");
        window.location.reload();
      })
    }
  }

}
