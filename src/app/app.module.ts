import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

/* angularfire */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* ng-bootstrap */
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

/* charts.js */
import { ChartsModule } from 'ng2-charts';

/* services */
import { AuthService } from './services/auth/auth.service';
import { ConfigService } from './services/config.service';
import { RecordService } from './services/record.service';

/* directives */
import { NumericDirective } from './directives/numeric.directive';

/* components */
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { EditComponent } from './components/record/edit/edit.component';
import { ListComponent } from './components/record/list/list.component';
import { ReportComponent } from './components/report/report.component';
import { LineChartComponent } from './components/report/line-chart/line-chart.component';
import { FilterComponent } from './components/record/list/filter/filter.component';
import { PaginationComponent } from './components/record/list/pagination/pagination.component';

// TODO: commented
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent,
    ListComponent,
    FilterComponent,
    PaginationComponent,
    ReportComponent,
    LineChartComponent,
    LoginComponent,
    RegisterComponent,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
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
