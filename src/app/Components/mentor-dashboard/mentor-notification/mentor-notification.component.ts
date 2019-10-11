import { Component, OnInit } from '@angular/core';
import { UserDtlService } from '../../../Services/user-dtl.service';
import * as _ from "underscore";
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-notification',
  templateUrl: './mentor-notification.component.html',
  styleUrls: ['./mentor-notification.component.css']
})
export class MentorNotificationComponent implements OnInit {

  mentorId: any;
  userTrainingData: any;
  acceptedTraining: object;
  pendingTraining: object;
  rejectedTraining: object;
  TrainingData: object;
  TrainingDataById: any;
  constructor(private service: UserDtlService,private router:Router) { }

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    this.getTrainingByMentorId();
  }

  index: any;
  pending: any;
  getTrainingByMentorId() {
    this.service.mentorTrainingList(this.mentorId).subscribe(data => {
      this.userTrainingData = data;
      //console.log(this.userTrainingData);
      this.TrainingData = _.where(this.userTrainingData, { requested: true });
      this.pendingTraining = _.where(this.TrainingData, { rejectNotify: null });
      //console.log('pending trainings');
      //console.log(this.pendingTraining);
      this.acceptedTraining = _.where(this.TrainingData, { rejectNotify: false });
      //console.log('accepted trainings');
      //console.log(this.acceptedTraining);
    });
  }

  onAccept(id) {
    this.service.trainingById(id).subscribe(data => {
      this.TrainingDataById = data;
      var result = {
        rejectNotify: false,
        timeSlot: this.TrainingDataById.timeSlot,
        startDate: this.TrainingDataById.startDate,
        endDate: this.TrainingDataById.endDate,
        userName: this.TrainingDataById.userName,
        fees: this.TrainingDataById.fees,
        userId: this.TrainingDataById.userId,
        mentorId: this.TrainingDataById.mentorId,
        mentorName: this.TrainingDataById.mentorName,
        skillId: this.TrainingDataById.skillId,
        skillname: this.TrainingDataById.skillname,
        requested:true
      }
      //console.log(result);
      this.service.trainingEdit(id,result).subscribe(res => {
        this.getTrainingByMentorId();
      });
      
    });



  }

  onReject(id) {

    this.service.trainingById(id).subscribe(data => {
      this.TrainingDataById = data;
      console.log(this.TrainingDataById.id);

      var result = {
        rejectNotify: true,
        timeSlot: this.TrainingDataById.timeSlot,
        startDate: this.TrainingDataById.startDate,
        endDate: this.TrainingDataById.endDate,
        userName: this.TrainingDataById.userName,
        fees: this.TrainingDataById.fees,
        userId: this.TrainingDataById.userId,
        mentorId: this.TrainingDataById.mentorId,
        mentorName: this.TrainingDataById.mentorName,
        skillId: this.TrainingDataById.skillId,
        skillname: this.TrainingDataById.skillname,
        requested:true
      }
      //console.log(result);
      this.service.trainingEdit(id,result).subscribe(res => {
        console.log('success');
        console.log(res);
        this.getTrainingByMentorId();
      });
      
    });



  }
}
