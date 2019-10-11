import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder,  Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { MentorDashboardComponent } from './Components/mentor-dashboard/mentor-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { UserCompletedTrainingsComponent } from './Components/user-dashboard/user-completed-trainings/user-completed-trainings.component';
import { UserCurrentTrainingsComponent } from './Components/user-dashboard/user-current-trainings/user-current-trainings.component';
import { UserSearchResultsComponent } from './Components/user-dashboard/user-search-results/user-search-results.component';
import { MentorCurrentTrainingsComponent } from './Components/mentor-dashboard/mentor-current-trainings/mentor-current-trainings.component';
import { MentorCompletedTrainingsComponent } from './Components/mentor-dashboard/mentor-completed-trainings/mentor-completed-trainings.component';
import { MentorProfileComponent } from './Components/mentor-dashboard/mentor-profile/mentor-profile.component';
import { MentorPaymentComponent } from './Components/mentor-dashboard/mentor-payment/mentor-payment.component';
import { UserProfileComponent } from './Components/user-dashboard/user-profile/user-profile.component';
import { UserPaymentComponent } from './Components/user-dashboard/user-payment/user-payment.component';
import { AdminPaymentsComponent } from './Components/admin-dashboard/admin-payments/admin-payments.component';
import { AdminTechnologiesComponent } from './Components/admin-dashboard/admin-technologies/admin-technologies.component';
import { AdminBlockUserComponent } from './Components/admin-dashboard/admin-block-user/admin-block-user.component';
import { AdminBlockMentorComponent } from './Components/admin-dashboard/admin-block-mentor/admin-block-mentor.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDtlService }from './Services/user-dtl.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { ProposeTrainingComponent } from './Components/user-dashboard/propose-training/propose-training.component';
import { UserNotificationComponent } from './Components/user-dashboard/user-notification/user-notification.component';
import { MentorNotificationComponent } from './Components/mentor-dashboard/mentor-notification/mentor-notification.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserRegComponent } from './Components/user-reg/user-reg.component';
import { MentorRegComponent } from './Components/mentor-reg/mentor-reg.component';
import { SearchComponent } from './Components/search/search.component';
import { AdminnavComponent } from './Components/admin-dashboard/adminnav/adminnav.component';
import { MentnavComponent } from './Components/mentor-dashboard/mentnav/mentnav.component';
import { UsernavComponent } from './Components/user-dashboard/usernav/usernav.component';
import { LogoutComponent } from './Components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    MentorDashboardComponent,
    AdminDashboardComponent,
    HomePageComponent,
    UserCompletedTrainingsComponent,
    UserCurrentTrainingsComponent,
    UserSearchResultsComponent,
    MentorCurrentTrainingsComponent,
    MentorCompletedTrainingsComponent,
    MentorProfileComponent,
    MentorPaymentComponent,
    UserProfileComponent,
    UserPaymentComponent,
    AdminPaymentsComponent,
    AdminTechnologiesComponent,
    AdminBlockUserComponent,
    AdminBlockMentorComponent,
    ProposeTrainingComponent,
    UserNotificationComponent,
    MentorNotificationComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserRegComponent,
    MentorRegComponent,
    SearchComponent,
    AdminnavComponent,
    MentnavComponent,
    UsernavComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [UserDtlService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
