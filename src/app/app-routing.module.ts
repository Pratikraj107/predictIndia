import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PollHomeComponent } from './poll-details/poll-home/poll-home.component';
import { HomeComponent } from './home/home.component';
import { PollFormComponent } from './Admin/poll-form/poll-form.component';
import { SidenavAdminComponent } from './Admin/sidenav-admin/sidenav-admin.component';
import { PollTableComponent } from './Admin/poll-table/poll-table.component';
import { CandidateFormComponent } from './Admin/candidate-form/candidate-form.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  // {path:'dashboard', component: PollHomeComponent},
  {path:'admin', component: SidenavAdminComponent,
  children: [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'poll-form', component: PollFormComponent },
    { path: 'candidate-form', component: CandidateFormComponent },
    { path: 'poll-table', component: PollTableComponent }
  ] },
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
