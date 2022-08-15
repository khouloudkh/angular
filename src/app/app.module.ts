import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcStringComponent } from './components/abc-string/abc-string.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AbcStringComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
