import { ReportPageComponent } from './components/pages/report-page/report-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { EditRecordPageComponent } from './components/pages/edit-record-page/edit-record-page.component';
import { ListRecordPageComponent } from './components/pages/list-record-page/list-record-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'edit', component: EditRecordPageComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListRecordPageComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportPageComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
