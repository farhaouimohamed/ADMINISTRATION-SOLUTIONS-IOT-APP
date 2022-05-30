import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListServerAccountsComponent } from './board-admin/list-server-accounts/list-server-accounts.component';
import { ListWebAccountsComponent } from './board-admin/list-web-accounts/list-web-accounts.component';
import { UserFormComponent } from './board-admin/user-form/user-form.component';
import { BoardServerComponent } from './board-server/board-server.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardServerComponent },
  { path: 'admin', component: BoardAdminComponent},
  { path: 'listusers', component: UserFormComponent},
  { path: 'listWebAccounts', component: ListWebAccountsComponent},
  { path: 'listServerAccounts', component: ListServerAccountsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
