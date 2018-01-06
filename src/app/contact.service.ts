import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

const TABLE = 'contacts';

@Injectable()
export class ContactService {

  items: Observable<Contact[]>;
  contacts: Observable<Contact[]>;

  constructor(private af: AngularFireDatabase) {
    this.items = af.list(`/${TABLE}`).valueChanges();
  }

  getItems() {
    return this.items;
  }

  readContacts(): Observable<Contact[]> {
    return this.items;
  }

  getContactById(id: String) {
    return this.af.database.ref()
      .child(TABLE)
      .orderByChild('id')
      .equalTo(id as string);
  }

  readContact(id: String): Observable<any> {
    return Observable.create(observer => {
      this.af.database.ref()
        .child(TABLE)
        .orderByChild('id')
        .equalTo(id as string)
        .on('child_added', snapshot => {
          observer.next(snapshot.val());
          observer.complete();
        });
    });
  }

  updateContact(contact: Contact): void {
    this.af.database.ref()
      .child(TABLE)
      .orderByChild('id')
      .equalTo(contact.id as string)
      .on('child_added', snapshot => {
        snapshot.ref.set(contact);
      });
  }

  deleteContact(contact: Contact): void {
    // this.getContactById(contact.id)
    //   .on('child_added', snapshot => {
    //     snapshot.ref.remove();
    //   });
    this.af.database.ref()
      .child(TABLE)
      .orderByChild('id')
      .equalTo(contact.id as string)
      .on('child_added', snapshot => {
        snapshot.ref.remove();
      });
  }

  createContact(contact: Contact): void {
    this.af.database.ref()
      .child(TABLE)
      .push(contact);
  }
}
