import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import * as _ from "underscore";
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-block-user',
  templateUrl: './admin-block-user.component.html',
  styleUrls: ['./admin-block-user.component.css']
})
export class AdminBlockUserComponent implements OnInit {

  AllData:object;
  UserData: object;
  UserDataById: object;
  UserDataBlock:object;
  UserDataUnblock:object;
  showub;
  constructor(private fb: FormBuilder, private service: UserDtlService,private router:Router) { 
    this.showub=true;
  }

  ngOnInit() {
    this.getUser();
    if(localStorage.getItem('id')!="3")
    {
      this.router.navigate(['/index'])
    }
  }

  getUser() {
    this.service.getAllData().subscribe(data => {
      this.AllData = data;
      this.UserData=_.where(this.AllData,{role:1});
      this.UserDataBlock=_.where(this.UserData,{active:true});
      this.UserDataUnblock=_.where(this.UserData,{active:false});
    });
  }
  block(id) {
    console.log(id);
    this.service.getUserById(id).subscribe(data => {
      this.UserDataById = data;


      var result = {
        email:this.UserDataById['email'],
        userName:this.UserDataById['userName'],
        password:this.UserDataById['password'],
        firstName:this.UserDataById['firstName'],
        lastName:this.UserDataById['lastName'],
        contactNumber:this.UserDataById['contactNumber'],
        role:this.UserDataById['role'],
        linkdinUrl:this.UserDataById['linkdinUrl'],
        yearOfExperience:this.UserDataById['yearOfExperience'],
        active:false,
        training:this.UserDataById['training']

      }
      this.service.userEdit(id, result).subscribe(res => {
        //console.log(res);
        this.getUser();
      });
      alert(this.UserDataById['firstName']+'   Blocked');

    });
  }
  Toggle()
  {
    this.showub=!this.showub;
  }
  unblock(id) {
    this.service.getUserById(id).subscribe(data => {
      this.UserDataById = data;


      var result = {
        email:this.UserDataById['email'],
        userName:this.UserDataById['userName'],
        password:this.UserDataById['password'],
        firstName:this.UserDataById['firstName'],
        lastName:this.UserDataById['lastName'],
        contactNumber:this.UserDataById['contactNumber'],
        role:this.UserDataById['role'],
        linkdinUrl:this.UserDataById['linkdinUrl'],
        yearOfExperience:this.UserDataById['yearOfExperience'],
        active:true,
        training:this.UserDataById['training']

      }
      console.log(result);
      this.service.userEdit(id, result).subscribe(res => {
        
        //console.log(res);
        this.getUser();
      });
      alert(this.UserDataById['firstName']+'   Unblocked');

    });
  }

}
