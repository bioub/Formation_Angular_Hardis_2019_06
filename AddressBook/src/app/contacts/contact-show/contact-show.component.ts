import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'ab-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.scss']
})
export class ContactShowComponent implements OnInit {
  contact: Contact;

  constructor(
    protected contactService: ContactService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // snapshot = à un instant t
    // console.log(this.activatedRoute.snapshot.params.id);

    //
    // |-----1----------------4-----3-----------------9--------------> temps
    // filter((params) => params.id % 2 === 0)
    // |----------------------4--------------------------------------> temps
    // map(params => params.id),
    // delayWhen(id => (id === "5" ? timer(5000) : timer(0))),
    // filter((params) => params.id % 2 === 0)
    //
    // |-----{id:1}----------------{id:4}---------------------------------> temps
    // filter((params) => params.id % 2 === 0)
    // |-----1---------------------4--------------------------------------> temps

    this.activatedRoute.params
      .pipe(
        map(params => params.id),
        switchMap(id => this.contactService.getById(id))
      )
      .subscribe(contact => {
        this.contact = contact;
      });
  }
}
