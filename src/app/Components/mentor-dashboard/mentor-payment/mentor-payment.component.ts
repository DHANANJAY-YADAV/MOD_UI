import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import * as _ from "underscore";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-payment',
  templateUrl: './mentor-payment.component.html',
  styleUrls: ['./mentor-payment.component.css']
})
export class MentorPaymentComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: UserDtlService,private router:Router) { }
  PaymentData: object;
  PaymentDataById: object;
  mentorId:any;

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    this.getPayment();
    console.log(this.mentorId);

  }

  getPayment() {
    this.service.paymentDetailsByMentorId(this.mentorId).subscribe(data => {
      this.PaymentData = data;
      console.log(this.PaymentData);
    });
  }

}
