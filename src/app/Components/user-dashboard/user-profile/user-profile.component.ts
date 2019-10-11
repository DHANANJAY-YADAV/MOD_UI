import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: any;
  userData: object;
  email: string;
  phoneNumber: number;
  fname: string;
  lname: string;
  uname: string;
  edit: boolean = false;

  constructor(private service: UserDtlService, private router:Router) { }

  ngOnInit() {
    this.userId = localStorage.getItem('user');
    //console.log(this.userId);
    this.UserDataById();
    if(localStorage.getItem('id')!="1")
    {
      this.router.navigate(['/index'])
    }
  }
  UserDataById() {
    this.service.getUserById(this.userId).subscribe(data => {
      this.userData = data;
      this.email = this.userData['email'];
      this.fname = this.userData['firstName'];
      this.lname = this.userData['lastName'];
      this.phoneNumber = this.userData['contactNumber'];
      this.uname = this.userData['userName'];
      //console.log(this.phoneNumber);
    });
  }
  editbutton() {
    this.edit = true;
  }
  savebutton() {
    var result = {
      firstName: this.fname,
      lastName: this.lname,
      email: this.userData['email'],
      contactNumber: this.phoneNumber,
      password: this.userData['password'],
      userName: this.userData['userName'],
      role: this.userData['role'],
      active: this.userData['active'],
    }
    //console.log(result);
    this.service.userDataEdit(this.userId, result).subscribe(data => {
      //console.log('success');
      alert('Profile Saved Successfully');
    });
    this.edit = false;

  }

}
