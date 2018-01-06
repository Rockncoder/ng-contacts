import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from '../about/about.component';
import {ContactsListComponent} from '../contacts-list/contacts-list.component';
import {ContactDetailsComponent} from '../contact-details/contact-details.component';
import {ContactNewComponent} from '../contact-new/contact-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'new', component: ContactNewComponent},
  {path: 'contactdetails/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
