import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  jmeno = '';
  heslo = '';
  potvrdit = '';

  constructor() { }

  ngOnInit(): void {
  }

  printValues(): void{
    console.log('jmeno: ' + this.jmeno);
    console.log('heslo: ' + this.heslo);
    console.log('potvrdit: ' + this.potvrdit);
  }
}
