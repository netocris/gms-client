import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { ListComponent } from './components/record/list/list.component';
import { EditComponent } from './components/record/edit/edit.component';
import { ReportComponent } from './components/report/report.component';

import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportComponent, canActivate: [AuthGuard] },
  /*{ path: 'login', component: LoginComponent },*/
  /*{ path: 'register', component: RegisterComponent },*/
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
