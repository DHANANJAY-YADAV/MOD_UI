import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentnav',
  templateUrl: './mentnav.component.html',
  styleUrls: ['./mentnav.component.css']
})
export class MentnavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
