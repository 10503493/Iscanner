import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AirportauthorityComponent } from './airportauthority/airportauthority.component';
import { HseComponent } from './hse/hse.component';
import { OtpComponent } from './otp/otp.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    AirportauthorityComponent,
    HseComponent,
    OtpComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
