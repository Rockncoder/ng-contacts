import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;
  id: String;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService,
              private location: Location,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        // get the id and save it locally
        this.id = params['id'];
        return this.contactService.readContact(this.id);
      }).subscribe(contact => {
        this.contact = contact;
        console.log(`contact name = ${contact.firstName} ${contact.lastName}`);
      });
  }

  onSubmit() {
    // this method is called if the contact is valid and dirty (no point updating if no changes made)
    this.snackBar.open('Contact updated.', '', { duration: 3000 });
    this.contactService.updateContact(this.contact);
    this.goBack();
  }

  goBack(): void {
    // location works the same as location in the DOM, .back() goes to the previous location
    this.location.back();
  }
}
