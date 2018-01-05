import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase as FirebaseAppConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
