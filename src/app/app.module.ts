import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { environment } from '../environments/environment';

/* angularfire */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* ng-bootstrap */
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

/* charts.js */
import { ChartsModule } from 'ng2-charts';

/* ngx-translate */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader  } from '@ngx-translate/http-loader';

/* ngx-translate: required for AOT compilation */
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

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

/* atoms */
import { ButtonComponent } from './components/atoms/button/button.component';
import { ImageComponent } from './components/atoms/image/image.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { InputTextComponent } from './components/atoms/input-text/input-text.component';
import { InputNumberComponent } from './components/atoms/input-number/input-number.component';

/* molecules */
import { NotFoundComponent } from './components/molecules/not-found/not-found.component';
import { SpinnerComponent } from './components/molecules/spinner/spinner.component';
import { CardHeaderComponent } from './components/molecules/card-header/card-header.component';
import { CardBodyComponent } from './components/molecules/card-body/card-body.component';

/* organisms */
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { FilterComponent } from './components/organisms/filter/filter.component';
import { PaginationComponent } from './components/organisms/pagination/pagination.component';
import { CardComponent } from './components/organisms/card/card.component';

/* templates */
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { EditRecordComponent } from './components/templates/edit-record/edit-record.component';
import { ListRecordComponent } from './components/templates/list-record/list-record.component';
import { ReportComponent } from './components/templates/report/report.component';

/* pages */
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { EditRecordPageComponent } from './components/pages/edit-record-page/edit-record-page.component';
import { ListRecordPageComponent } from './components/pages/list-record-page/list-record-page.component';
import { ReportPageComponent } from './components/pages/report-page/report-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericDirective,
    SortableDirective,    
    ButtonComponent,
    InputTextComponent,
    InputNumberComponent,
    LinkComponent,    
    ImageComponent,
    
    NotFoundComponent,
    SpinnerComponent,
    CardHeaderComponent,
    CardBodyComponent,
        
    HeaderComponent,
    FooterComponent,
    FilterComponent,    
    PaginationComponent,
    CardComponent,

    DashboardComponent,
    EditRecordComponent,
    ListRecordComponent,
    DashboardPageComponent,
    EditRecordPageComponent,
    ListRecordPageComponent,    
    ReportComponent,
    ReportPageComponent,
    NotFoundPageComponent    
    
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
    ChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.contextPath
    },
    {
      provide: LOCALE_ID, useValue: 'pt'
    },
    AuthService,
    ConfigService,
    RecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
