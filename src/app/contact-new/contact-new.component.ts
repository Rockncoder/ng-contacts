import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contact: Contact;
  constructor(private contactService: ContactService,
              private location: Location,
              public snackBar: MatSnackBar,
              private router: Router) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  onSubmit() {
    // this method is called if the contact is valid and dirty (no point updating if no changes made)
    this.snackBar.open('Contact created.', '', {duration: 3000});
    this.contact.photo = 'https://robohash.org/etquasiqui.jpg?size=250x250&set=set1';
    this.contactService.createContact(this.contact);
    this.router.navigate(['contacts']);
  }

  goBack(): void {
    // location works the same as location in the DOM, .back() goes to the previous location
    this.location.back();
  }
}
