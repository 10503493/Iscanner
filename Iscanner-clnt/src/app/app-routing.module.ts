import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
{ path:'',component:HomeComponent},
{ path:'questionnaire',component:QuestionnaireComponent},
{ path:'register',component:RegisterComponent},
{ path:'admin',component:AdminComponent},
{ path:'**',redirectTo:''}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
