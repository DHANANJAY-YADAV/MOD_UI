import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import {UserDtlService}from '../../Services/user-dtl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit() {
  }
 slog()
 {
  this.router.navigate(['/registration']);
 }
 rlog()
 {
  this.router.navigate(['/login']);
 }
    /* ---------------------------------------------------------- */
  
}

