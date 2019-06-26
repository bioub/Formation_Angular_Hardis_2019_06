import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'ab-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: any[];

  constructor(protected httpClient: HttpClient) { }

  ngOnInit() {
    // GET https://jsonplaceholder.typicode.com/users
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }

}
