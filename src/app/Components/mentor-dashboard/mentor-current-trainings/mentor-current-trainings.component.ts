import { Component, OnInit } from '@angular/core';
import { UserDtlService } from 'src/app/Services/user-dtl.service';
import * as _ from "underscore";
import { Router } from '@angular/router';
@Component({
  selector: 'app-mentor-current-trainings',
  templateUrl: './mentor-current-trainings.component.html',
  styleUrls: ['./mentor-current-trainings.component.css']
})
export class MentorCurrentTrainingsComponent implements OnInit {

  mentorId: any;
  mentorTrainingData: object;
  currentTraining: object;
  TrainingData: object;
  constructor(private service: UserDtlService, private router:Router) { }

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    this.getTrainingByUserId();

  }

  getTrainingByUserId() {
    this.service.mentorTrainingList(this.mentorId).subscribe(data => {
      this.mentorTrainingData = data;
      this.currentTraining = _.where(this.mentorTrainingData, { status: "current" });
      console.log(this.currentTraining);
    });
  }

}
