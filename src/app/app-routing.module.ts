import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegistrationComponent } from './dynamic-forms/user-registration.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuardService } from './auth.guard';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    canActivate:[AuthGuardService],
    component:DashboardComponent,
    children:[
      {
      path:"registration",
      canActivate:[AuthGuardService],
      component:RegistrationComponent
    },
    {
      path:"allUsers",
      canActivate:[AuthGuardService],
      component:UsersDashboardComponent
    }
  ]
  },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
