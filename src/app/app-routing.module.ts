import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register-team',
    component: RegisterTeamComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error-no-auth',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
