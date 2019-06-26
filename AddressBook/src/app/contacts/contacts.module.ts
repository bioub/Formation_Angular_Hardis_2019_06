import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactShowComponent,
    ContactAddComponent
  ],
  providers: [
  // {
  //   provide: ContactService,
  //   useClass: ContactService
  // }
  //  ContactService
  ],
  imports: [SharedModule, ContactsRoutingModule]
})
export class ContactsModule {}
