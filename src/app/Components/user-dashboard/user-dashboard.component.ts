import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserDtlService}from '../../Services/user-dtl.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router,private service:UserDtlService) { }

  id;
  name;
  dataobj;
  ngOnInit() {
    this.id=localStorage.getItem('user');
    if(localStorage.getItem('id')!="1")
    {
      this.router.navigate(['/index'])
    }
    this.Details();
    
  }
  Details()
  {
    this.service.getUserById(this.id).subscribe(data => {
      this.dataobj=data;
      this.name=this.dataobj.firstName;
    });
  }

}
