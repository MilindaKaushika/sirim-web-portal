import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";
import {DashboardImporterComponent} from "./dashboard-importer/dashboard-importer.component";
import {DashboardCoaapplicationComponent} from "./dashboard-coaapplication/dashboard-coaapplication.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import { AuthGuard } from './services/auth-guard-routing';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: DashboardImporterComponent},
      {path: 'coa-applications', component: DashboardCoaapplicationComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule {
}
