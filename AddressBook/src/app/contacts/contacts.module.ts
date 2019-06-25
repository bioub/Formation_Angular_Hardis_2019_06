import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactShowComponent } from './contact-show/contact-show.component';
import { ContactAddComponent } from './contact-add/contact-add.component';

@NgModule({
  declarations: [ContactComponent, ContactListComponent, ContactShowComponent, ContactAddComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
