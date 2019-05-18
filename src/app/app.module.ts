import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {
  NgbAlertModule, NgbDatepickerModule,
  NgbTimepickerModule, NgbPaginationModule
} from "@ng-bootstrap/ng-bootstrap";

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecordComponent } from './components/record/record.component';
import { HistoryComponent } from './components/history/history.component';
import { ReportComponent } from './components/report/report.component';
// TODO: commented
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { NumericDirective } from './directives/numeric.directive';

import { AuthService } from './services/auth.service';
import { ConfigService } from './services/config.service';
import { RecordService } from './services/record.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    RecordComponent,
    HistoryComponent,
    ReportComponent,
    LoginComponent,
    RegisterComponent,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbPaginationModule,
    ChartsModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.contextPath
    },
    AuthService,
    ConfigService,
    RecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
