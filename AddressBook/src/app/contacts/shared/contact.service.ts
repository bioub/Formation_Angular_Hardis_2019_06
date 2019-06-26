import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  addEvent = new EventEmitter<Contact>();

  constructor(protected httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id) {
    return this.httpClient.get<Contact>('https://jsonplaceholder.typicode.com/users/' + id);
  }

  create(contact: Contact) {
    return this.httpClient.post<Contact>('https://jsonplaceholder.typicode.com/users', contact);
  }
}
