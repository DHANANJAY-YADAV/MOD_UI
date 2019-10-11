import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserDtlService}from '../../Services/user-dtl.service';

@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.css']
})
export class MentorDashboardComponent implements OnInit {

  constructor(private router: Router,private service:UserDtlService) { }

  id;
  name;
  dataobj;
  ngOnInit() {
    this.id=localStorage.getItem('mentor');
    if(localStorage.getItem('id')!="2")
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
