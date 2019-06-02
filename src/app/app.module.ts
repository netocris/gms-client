import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

/* directives */
import { NumericDirective } from './directives/numeric.directive';
import { SortableDirective } from './directives/sortable.directive';

/* services */
import { AuthService } from './services/auth/auth.service';
import { ConfigService } from './services/config.service';
import { RecordService } from './services/record.service';

/* components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListComponent } from './components/records/list/list.component';
import { EditComponent } from './components/records/edit/edit.component';
import { FilterComponent } from './components/records/list/filter/filter.component';
import { PaginationComponent } from './components/records/list/pagination/pagination.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LineChartComponent } from './components/reports/line-chart/line-chart.component';
import { BarChartComponent } from './components/reports/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericDirective,
    NotFoundComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    ListComponent,
    EditComponent,
    FilterComponent,
    PaginationComponent,
    ReportsComponent,
    LineChartComponent,
    BarChartComponent,
    SortableDirective
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
