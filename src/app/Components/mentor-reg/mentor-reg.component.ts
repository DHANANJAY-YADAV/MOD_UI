import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import {UserDtlService}from '../../Services/user-dtl.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-reg',
  templateUrl: './mentor-reg.component.html',
  styleUrls: ['./mentor-reg.component.css']
})
export class MentorRegComponent implements OnInit {
  UserRegister:FormGroup;
  constructor(private fb:FormBuilder,private service:UserDtlService,private router: Router) { }
  submitted=false;
  ngOnInit() {
    this.UserRegister=this.fb.group({
      firstName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      lastName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      userName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contactNumber:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]]
      }, { validator: this.MustMatch('password', 'confirmPassword')
    });
    this.getList();
  }
  resetForm(fb ?: FormGroup){
    this.UserRegister=this.fb.group({
      firstName :'',
      lastName :'',
      userName :'',
      password :'',
      email :'',
      contactNumber:'',
      confirmPassword:''
    })
  }
  skillData:object;
  getList()
  {
  this.service.refreshList().subscribe(data=>{
    this.skillData=data;
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
  result1:FormGroup;

  onSubmit(UserRegister ?: FormGroup){

    this.submitted = true;
    if (this.UserRegister.invalid) {
      alert("Username Unavailable");
      return;
    }
    
    var result1={
      firstName:this.UserRegister.value.firstName,
      lastName:this.UserRegister.value.lastName,
      userName:this.UserRegister.value.userName,
      password:this.UserRegister.value.password,
      email:this.UserRegister.value.email,
      contactNumber:this.UserRegister.value.contactNumber,
      role:1,
      active:true
    }

    this.service.signin(result1).subscribe(res => {
      console.log(res);
    })
    alert("Registration Done");
    this.router.navigate(['/login']);
    this.resetForm();
    
  }
  onReset() {
    this.submitted = false;
    this.UserRegister.reset();
}

}
