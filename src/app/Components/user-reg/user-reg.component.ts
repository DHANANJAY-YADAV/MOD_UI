import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import {UserDtlService}from '../../Services/user-dtl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:UserDtlService,private router: Router) { }
  submitted=false;
  MentorRegister:FormGroup;
  ngOnInit() {
    this.MentorRegister=this.fb.group({
      firstName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      lastName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      userName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contactNumber:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
      linkdinUrl:['',Validators.required],
      technology:['',Validators.required],
      yearOfExperience:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]]
      },{validator:this.MustMatch('password', 'confirmPassword')
    });
  
    this.getList();
    }
    result2:FormGroup;
  onSubmit(MentorRegister ?: FormGroup){
    this.submitted = true;
    if (this.MentorRegister.invalid) {
        return;
    }
    var result2={
      firstName:this.MentorRegister.value.firstName,
      lastName:this.MentorRegister.value.lastName,
      userName:this.MentorRegister.value.userName,
      password:this.MentorRegister.value.password,
      email:this.MentorRegister.value.email,
      linkdinUrl:this.MentorRegister.value.linkdinUrl,
      training:this.MentorRegister.value.technology,
      yearOfExperience:this.MentorRegister.value.yearOfExperience,
      contactNumber:this.MentorRegister.value.contactNumber,
      role:2,
      active:true
    }
    this.service.signin(result2).subscribe(res => {
      alert('successfully registered');
    })
    this.MentorRegister.reset();
    this.router.navigate(['/login']);
  }
  skillData:object;
  getList()
  {
  this.service.refreshList().subscribe(data=>{
    this.skillData=data;
    console.log("mydata " ,this.skillData)
  });
  }
  MustMatch( controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } 
      else {
          matchingControl.setErrors(null);
      }
    }
  }
  onReset() {
    this.submitted = false;
    this.MentorRegister.reset();
}


}
