import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})
export class MentorProfileComponent implements OnInit {

  mentorId: any;
  mentorData: object;
  email: string;
  phoneNumber: number;
  fname: string;
  lname: string;
  uname: string;
  linkdinUrl1:string;
  year1: number;
  training:string;
  edit: boolean = false;
  constructor(private service: UserDtlService,private router:Router) { }

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    //console.log(this.mentorId);
    this.MentorDataById();
  }
  MentorDataById() {
    this.service.getUserById(this.mentorId).subscribe(data => {
      this.mentorData = data;
      this.email = this.mentorData['email'];
      this.fname = this.mentorData['firstName'];
      this.lname = this.mentorData['lastName'];
      this.phoneNumber = this.mentorData['contactNumber'];
      this.uname = this.mentorData['userName'];
      this.training=this.mentorData['training'];
      this.linkdinUrl1=this.mentorData['linkdinUrl'];
      this.year1=this.mentorData['yearOfExperience'];
      console.log(this.phoneNumber);
      console.log(this.year1);
    });
  }

  editbutton() {
    this.edit = true;
  }
  savebutton() {
    var result = {
      firstName: this.fname,
      lastName: this.lname,
      email: this.mentorData['email'],
      contactNumber: this.phoneNumber,
      password: this.mentorData['password'],
      userName: this.mentorData['userName'],
      role: this.mentorData['role'],
      active: this.mentorData['active'],
      linkdinUrl:this.linkdinUrl1,
      training:this.mentorData['training'],
      yearOfExperience:+this.year1
    }
    console.log(result);
    this.service.userDataEdit(this.mentorId, result).subscribe(data => {
      //console.log('success');
      alert('Profile Updated Successfully');
      
    });
    this.edit = false;

  }

}
