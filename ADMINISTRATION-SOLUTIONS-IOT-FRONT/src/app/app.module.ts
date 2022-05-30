import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardServerComponent } from './board-server/board-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserFormComponent } from './board-admin/user-form/user-form.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListServerAccountsComponent } from './board-admin/list-server-accounts/list-server-accounts.component';
import {MatPaginatorModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListWebAccountsComponent } from './board-admin/list-web-accounts/list-web-accounts.component';
import { DashComponent } from './board-admin/dash/dash.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    BoardUserComponent,
    BoardAdminComponent,
    BoardServerComponent,
    UserFormComponent,
    ListServerAccountsComponent,
    ListWebAccountsComponent,
    DashComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MultiSelectAllModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
