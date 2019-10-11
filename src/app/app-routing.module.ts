import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { MentorDashboardComponent } from './Components/mentor-dashboard/mentor-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserSearchResultsComponent } from './Components/user-dashboard/user-search-results/user-search-results.component';
import { UserCurrentTrainingsComponent } from './Components/user-dashboard/user-current-trainings/user-current-trainings.component';
import { UserCompletedTrainingsComponent } from './Components/user-dashboard/user-completed-trainings/user-completed-trainings.component';
import { UserProfileComponent } from './Components/user-dashboard/user-profile/user-profile.component';
import { UserPaymentComponent } from './Components/user-dashboard/user-payment/user-payment.component';
import { MentorCurrentTrainingsComponent } from './Components/mentor-dashboard/mentor-current-trainings/mentor-current-trainings.component';
import { MentorCompletedTrainingsComponent } from './Components/mentor-dashboard/mentor-completed-trainings/mentor-completed-trainings.component';
import { MentorProfileComponent } from './Components/mentor-dashboard/mentor-profile/mentor-profile.component';
import { MentorPaymentComponent } from './Components/mentor-dashboard/mentor-payment/mentor-payment.component';

import { AdminBlockMentorComponent } from './Components/admin-dashboard/admin-block-mentor/admin-block-mentor.component';
import { AdminBlockUserComponent } from './Components/admin-dashboard/admin-block-user/admin-block-user.component';
import { AdminPaymentsComponent } from './Components/admin-dashboard/admin-payments/admin-payments.component';
import { AdminTechnologiesComponent } from './Components/admin-dashboard/admin-technologies/admin-technologies.component';
import { AuthGuard } from './auth/auth.guard';
import { ProposeTrainingComponent } from './Components/user-dashboard/propose-training/propose-training.component';
import { UserNotificationComponent } from './Components/user-dashboard/user-notification/user-notification.component';
import { MentorNotificationComponent } from './Components/mentor-dashboard/mentor-notification/mentor-notification.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserRegComponent } from './Components/user-reg/user-reg.component';
import { MentorRegComponent } from './Components/mentor-reg/mentor-reg.component';
import { SearchComponent } from './Components/search/search.component';
import { LogoutComponent } from './Components/logout/logout.component';

const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  {path:'mentor-reg',component:UserRegComponent},
  {path:'user-reg',component:MentorRegComponent},
  {path:'search-nolog',component:SearchComponent },
  {path:'logout',component:LogoutComponent},
  {path:'user',component:UserDashboardComponent,
  children:[
    {path:'search-results',component:UserSearchResultsComponent},
    {path:'current-trainings',component:UserCurrentTrainingsComponent},
    {path:'completed-trainings',component:UserCompletedTrainingsComponent},
    {path:'profile',component:UserProfileComponent},
    {path:'payments',component:UserPaymentComponent},
    {path:'propose-training',component:ProposeTrainingComponent},
    {path:'notification',component:UserNotificationComponent}
  ]},
  {path:'mentor',component:MentorDashboardComponent,
  children:[
    {path:'current-trainings',component:MentorCurrentTrainingsComponent},
    {path:'completed-trainings',component:MentorCompletedTrainingsComponent},
    {path:'profile',component:MentorProfileComponent},
    {path:'payments',component:MentorPaymentComponent},
    {path:'notification',component:MentorNotificationComponent}
  ]},
  {path:'admin',component:AdminDashboardComponent,
  children:[
    {path:'block-mentor',component:AdminBlockMentorComponent},
    {path:'block-user',component:AdminBlockUserComponent},
    {path:'payments',component:AdminPaymentsComponent},
    {path:'add-remove-technologies',component:AdminTechnologiesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
