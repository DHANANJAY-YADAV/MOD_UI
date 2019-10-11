import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserDtlService }from '../../../Services/user-dtl.service';
import { Router } from '@angular/router';

import { VirtualTimeScheduler } from 'rxjs';
@Component({
  selector: 'app-admin-technologies',
  templateUrl: './admin-technologies.component.html',
  styleUrls: ['./admin-technologies.component.css']
})
export class AdminTechnologiesComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:UserDtlService,private router: Router) { }

  AddTech:FormGroup;
  edit=0;
  submitted = false;
  skillData:object;
  skillById;
  name;
  fees;
  prerequisites;
  toc;
  resetForm(fb ?: FormGroup){
    this.AddTech=this.fb.group({
      name :'',
      toc :'',
      prerequisites :'',
      fees:''
    })
  }

  ngOnInit() {

    if(localStorage.getItem('id')!="3")
    {
      this.router.navigate(['/index'])
    }

    this.AddTech=this.fb.group({
      name:['',Validators.required],
      toc:['',Validators.required],
      prerequisites:['',Validators.required],
      fees:['',Validators.required]
  });


  this.getList();

  }

  Cancel(id)
  {
    this.edit=0;
  }
  EditS(id)
  {
    this.edit=id;
    this.service.skillById(id).subscribe(data=>{
      this.skillById=data[0];
      this.name=this.skillById['name'],
      this.toc=this.skillById['toc'],
      this.prerequisites=this.skillById['prerequisites'],
      this.fees=this.skillById['fees']      
    });
  }
getList()
{
  this.service.refreshList().subscribe(data=>{
    this.skillData=data;
  });
}


  onSubmit(AddTech ?: FormGroup){
    this.submitted = true;
    if (this.AddTech.invalid) {
      return;
    }
    
    var result={
      name:this.AddTech.value.name,
      toc:this.AddTech.value.toc,
      prerequisites:this.AddTech.value.prerequisites,
      fees:this.AddTech.value.fees,
    }

    this.service.addtech(result).subscribe(res => {
      console.log(res);
      this.getList();
    })
    this.resetForm();
    
  }
  deleteSkill(id){
    this.service.deleteSkills(id).subscribe(res => {
      this.getList();
    })
    alert("Skill Added");
    
    this.resetForm();
    
  }
  EditSkill(id)
  {
    this.service.skillById(id).subscribe(data=>{
      var result={
        name:this.name,
        fees:this.fees,
        toc:this.toc,
        prerequisites:this.prerequisites
      }     
      console.log(result); 
      this.service.skillEdit(id,result).subscribe(data=>{
        alert("Edit Successful")
        this.getList();
      })
      
    });
    {
    
      this.edit=0;
    }
    
  }
}
