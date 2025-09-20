import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {NgOptimizedImage} from "@angular/common";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardBreadcrumb } from './dashboard-breadcrumb/dashboard-breadcrumb';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardImporterComponent } from './dashboard-importer/dashboard-importer.component';
import { DashboardCoaapplicationComponent } from './dashboard-coaapplication/dashboard-coaapplication.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoaderPageComponent } from './shared/loader-page/loader-page.component';
import { MessageBoxComponent } from './shared/message-box/message-box.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardBreadcrumb,
    FooterComponent,
    LoginComponent,
    DashboardImporterComponent,
    DashboardCoaapplicationComponent,
    CreateAccountComponent,
    UserRegistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoaderPageComponent,
    MessageBoxComponent,

  ],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSortModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    NgbDropdownModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
