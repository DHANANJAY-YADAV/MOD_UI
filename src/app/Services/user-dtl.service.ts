import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDtlService {

  isUserLoggedIn:boolean;
  getId:number;
  readonly rootURL="https://localhost:44384/api";

  constructor(private http:HttpClient) {
    this.isUserLoggedIn=false;
   }

   getData(result){
    return this.http.post(this.rootURL+"/GetAllData",result);
  }
  getAllData(){
    return this.http.get(this.rootURL+"/GetAllData");
  }  
  signin(result){
    return this.http.post(this.rootURL+"/create",result);
  } 
  login(result1){
    this.isUserLoggedIn=true;
    return this.http.post(this.rootURL+"/login",result1);
  }
  addtech(result){
    return this.http.post(this.rootURL+"/addtech",result);
  } 
  addtraining(result){
    return this.http.post(this.rootURL+"/addtraining",result);
  } 
  addPayment(result){
    return this.http.post(this.rootURL+"/addPayment",result);
  } 
  refreshList(){
    return this.http.get(this.rootURL+"/showTech")
  }

  getUserById(id){
    return this.http.get(this.rootURL+"/Details/"+id)
  }
  
  deleteSkills(id){
    return this.http.delete(this.rootURL+"/deleteSkills/"+id)
  }
  skillList(){
    return this.http.get(this.rootURL+"/mentor")
  }
  paymentList(){
    return this.http.get(this.rootURL+"/GetAllPayment")
  }
  paymentDetailsById(id){
    return this.http.get(this.rootURL+"/paymentById/"+id)
  }
  paymentDetailsByMentorId(id){
    return this.http.get(this.rootURL+"/paymentByMentor/"+id)
  }
  skillEdit(id,result){
    return this.http.put(this.rootURL+"/skillEdit/"+id,result)
  }
  skillById(id){
    return this.http.get(this.rootURL+"/skillById/"+id)
  }
  paymentEdit(id,result){
    return this.http.put(this.rootURL+"/paymentEdit/"+id,result)
  }
  userEdit(id,result){
    return this.http.put(this.rootURL+"/EditUserData/"+id,result)
  }
  userDataEdit(id,result){
    return this.http.put(this.rootURL+"/EditUserData1/"+id,result)
  }
  trainerList(name){
    return this.http.get(this.rootURL+"/searchTrainer/"+name)
  }
  userTrainingList(id){
    return this.http.get(this.rootURL+"/userTrainings/"+id)
  }
  mentorTrainingList(id){
    return this.http.get(this.rootURL+"/mentorTrainings/"+id)
  }
  skilldetails(name){
    return this.http.get(this.rootURL+"/skillByName/"+name)
  }
  refreshList1(trainerTechnology){
    return this.http.get(this.rootURL+"/skillByName/"+trainerTechnology)
  }
  trainingEdit(id,result){
    return this.http.put(this.rootURL+"/trainingEdit/"+id,result)
  }
  trainingById(id){
    return this.http.get(this.rootURL+"/trainingDetails/"+id)
  }
}

