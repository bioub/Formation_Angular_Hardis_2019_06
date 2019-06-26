import { Component, OnInit } from "@angular/core";
import { Contact } from "../shared/contact.model";
import { ContactService } from "../shared/contact.service";

@Component({
  selector: "ab-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(protected contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getAll().subscribe(contacts => {
      this.contacts = contacts;
    });

    this.contactService.addEvent.subscribe(contact => {
      this.contacts.push(contact);
    });
  }
}
