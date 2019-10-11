import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import { Router } from '@angular/router';
import * as _ from "underscore";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-current-trainings',
  templateUrl: './user-current-trainings.component.html',
  styleUrls: ['./user-current-trainings.component.css']
})
export class UserCurrentTrainingsComponent implements OnInit {

  userId: any;
  userTrainingData: object;
  currentTraining: object;
  edit;
  Progress: FormGroup;
  TrainingData: object;
  constructor(private fb: FormBuilder, private service: UserDtlService, private router: Router) { }


  ngOnInit() {
    this.userId = localStorage.getItem('user');
    this.getTrainingByUserId();
    this.edit = false;
    if(localStorage.getItem('id')!="1")
    {
      this.router.navigate(['/index'])
    }
    this.Progress = this.fb.group({
      progress1: ['', Validators.required]
    });
  }

  getTrainingByUserId() {
    this.service.userTrainingList(this.userId).subscribe(data => {
      this.userTrainingData = data;
      this.currentTraining = _.where(this.userTrainingData, { status: "current" });
      console.log(this.currentTraining);
    });
  }
  editOption(id) {
    this.edit = id;
    console.log(id);
  }
  progressTraining(id) {
    this.edit = false;
    console.log(id);
    this.service.trainingById(id).subscribe(data => {
      this.TrainingData = data;
      console.log(this.TrainingData);

      let progress2=this.Progress.value.progress1;
      if(progress2<100)
      {
        var result1 = {
          rejectNotify: false,
          timeSlot: this.TrainingData["timeSlot"],
          startDate: this.TrainingData['startDate'],
          endDate: this.TrainingData['endDate'],
          userName: this.TrainingData['userName'],
          fees: this.TrainingData['fees'],
          userId: this.TrainingData['userId'],
          mentorId: this.TrainingData['mentorId'],
          mentorName: this.TrainingData['mentorName'],
          skillId: this.TrainingData['skillId'],
          skillname: this.TrainingData['skillname'],
          requested:this.TrainingData['requested'],
          status:this.TrainingData['status'],
          progress:this.Progress.value.progress1,
          paymentStatus:this.TrainingData['paymentStatus']
        }
        console.log(result1);
        this.service.trainingEdit(id,result1).subscribe(res => {
          console.log(res);
          this.getTrainingByUserId();
        });
      }
      else{
        var result2 = {
          rejectNotify: false,
          timeSlot: this.TrainingData["timeSlot"],
          startDate: this.TrainingData['startDate'],
          endDate: this.TrainingData['endDate'],
          userName: this.TrainingData['userName'],
          fees: this.TrainingData['fees'],
          userId: this.TrainingData['userId'],
          mentorId: this.TrainingData['mentorId'],
          mentorName: this.TrainingData['mentorName'],
          skillId: this.TrainingData['skillId'],
          skillname: this.TrainingData['skillname'],
          requested:this.TrainingData['requested'],
          status:"completed",
          progress:this.Progress.value.progress1,
          paymentStatus:this.TrainingData['paymentStatus']
        }
        console.log(result2);
        this.service.trainingEdit(id,result2).subscribe(res => {
          console.log(res);
          this.getTrainingByUserId();
        });
      }
      
    });
    
    
  }

}
