import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{ path:'',component:HomeComponent},
{ path:'questionnaire',component:QuestionnaireComponent},
{ path:'**',redirectTo:''}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
