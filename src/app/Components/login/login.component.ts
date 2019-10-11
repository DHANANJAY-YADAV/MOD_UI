import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import {UserDtlService}from '../../Services/user-dtl.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  ud;
  constructor(private formBuilder: FormBuilder,private service:UserDtlService,private router: Router) { 
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required,Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')]],
          password: ['', [Validators.required, ]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  res;
  id;
  onSubmit(loginForm ?: FormGroup){
  
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      var result1={
        password:this.loginForm.value.password,
        email:this.loginForm.value.email
      }

      this.service.login(result1).subscribe((data) => {
      this.res=data;
      if(this.res!=undefined)
      {
        console.log(this.res||JSON);
        if(this.res.role==2 && this.res.active==true)
        {
            localStorage.setItem('mentor',this.res.id);
            localStorage.setItem('id',this.res.role);
            alert("Logged Successfully");
            this.id=this.res.id;
            console.log(this.id);
            this.router.navigate(['mentor']);
        }
        if(this.res.role==3 && this.res.active==true)
        {
          localStorage.setItem('id',this.res.role);
            alert("Logged Successfully");
            this.router.navigate(['admin']);
        }
        if(this.res.role==1 && this.res.active==true)
        {
          localStorage.setItem('id',this.res.role);
          alert("Logged Successfully");
          this.service.isUserLoggedIn=true;
          localStorage.setItem('user',this.res.id);
          console.log(localStorage.getItem('user'));
          this.router.navigate(['user']);
        }
      }
      else{
        alert("Invalid Email or Password");
      }
      });
      
      
    }
    onReset() {
      this.submitted = false;
      this.loginForm.reset();
  }

}
