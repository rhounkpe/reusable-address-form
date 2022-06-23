import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-postal-address-form',
  templateUrl: './postal-address-form.component.html',
  styleUrls: ['./postal-address-form.component.css']
})
export class PostalAddressFormComponent {
  @Input()
  addressForm: FormGroup | undefined;
  @Input()
  index: any;
  @Input()
  isFolded: any;
  @Input()
  deleted = new EventEmitter<String>();

  constructor() { }

  get street() {
    return this.addressForm?.get('street');
  }

  get houseNumber() {
    return this.addressForm?.get('houseNumber');
  }

  get postBox() {
    return this.addressForm?.get('postBox');
  }

  get postCode() {
    return this.addressForm?.get('postCode');
  }

  get commune() {
    return this.addressForm?.get('commune');
  }

}
