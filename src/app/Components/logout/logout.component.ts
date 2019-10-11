import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    this.work();
     
  }
  work()
  {
    alert("Logged Out");
    localStorage.setItem('mentor',"");
    localStorage.setItem('user',"");
    localStorage.setItem('admin',"");
    localStorage.setItem('id',"");
    console.log(localStorage.getItem('id'));
    this.router.navigate(['/index']);
  }

}
