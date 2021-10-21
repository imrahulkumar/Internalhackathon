import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHackathonComponent } from './create-hackathon/create-hackathon.component';
import { HackathonsDashboardComponent } from './hackathons-dashboard/hackathons-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'hackathon-dashboard', component: HackathonsDashboardComponent },
  { path: 'create-hackathon', component: CreateHackathonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
