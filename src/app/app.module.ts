import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import 'hammerjs';

import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {ContactsListComponent} from './contacts-list/contacts-list.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {AboutComponent} from './about/about.component';

import {ContactService} from './contact.service';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import { ContactNewComponent } from './contact-new/contact-new.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsListComponent,
    ContactDetailsComponent,
    ContactNewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase as FirebaseAppConfig)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
