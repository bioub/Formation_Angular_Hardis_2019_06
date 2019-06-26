import { Component, OnInit } from "@angular/core";
import { Contact } from "../shared/contact.model";
import { ContactService } from "../shared/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "ab-contact-add",
  templateUrl: "./contact-add.component.html",
  styleUrls: ["./contact-add.component.scss"]
})
export class ContactAddComponent implements OnInit {
  contact = new Contact();

  constructor(
    protected contactService: ContactService,
    protected router: Router
  ) {}

  ngOnInit() {}

  sendData() {
    this.contactService.create(this.contact).subscribe(() => {
      this.contactService.addEvent.emit(this.contact);
      this.router.navigate(["contacts"]);
    });
  }
}
