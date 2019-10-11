import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import * as _ from "underscore";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit {

  PaymentData: object;
  PaymentDataById: object;
  noCommisionTaken: object;
  edit;
  Commission: FormGroup;
  constructor(private fb: FormBuilder, private service: UserDtlService,private router:Router) { }

  ngOnInit() {
    this.getPayment();
    this.edit = 0;
    this.Commission = this.fb.group({
      com: ['', Validators.required]
    });
    if(localStorage.getItem('id')!="3")
    {
      this.router.navigate(['/index'])
    }
  }

  getPayment() {
    this.service.paymentList().subscribe(data => {
      this.PaymentData = data;
    });
  }
  editOption(id) {
    this.edit = id;
  }

  commissionEdit(id) {
    this.edit = 0;
    this.service.paymentDetailsById(id).subscribe(data => {
      this.PaymentDataById = data;
      var result1 = {
        amount:this.PaymentDataById[0].amount,
        mentorId:this.PaymentDataById[0].mentorId,
        mentorName:this.PaymentDataById[0].mentorName,
        trainingId:this.PaymentDataById[0].trainingId,
        skillName:this.PaymentDataById[0].trainingId,
        totalAmountToMentor:this.PaymentDataById[0].amount-this.Commission.value.com,
        commision:this.Commission.value.com
        
      }
      
       this.service.paymentEdit(id, result1).subscribe(res => {
        alert("Saved Commision");
        this.getPayment();
      });


    });
  }
}
