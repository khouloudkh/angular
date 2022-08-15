import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'UserProfile', pathMatch: 'full' },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'UserProfile', component: UserProfileComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
