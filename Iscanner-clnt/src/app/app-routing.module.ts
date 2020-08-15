import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AirportauthorityComponent } from './airportauthority/airportauthority.component';
import { HseComponent } from './hse/hse.component';
import { OtpComponent } from './otp/otp.component';
const routes: Routes = [
{ path:'',component:HomeComponent},
{ path:'questionnaire',component:QuestionnaireComponent},
{ path:'register',component:RegisterComponent},
{ path:'admin',component:AdminComponent},
{ path:'airport',component:AirportauthorityComponent},
{ path:'hse',component:HseComponent},
{ path:'otp',component:OtpComponent},
{ path:'**',redirectTo:''}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
