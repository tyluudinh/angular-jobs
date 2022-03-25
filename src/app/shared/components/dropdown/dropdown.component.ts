import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DefaultProviderFormControlValueAccessor, FormControlValueAccessor} from '../../helper/form-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    DefaultProviderFormControlValueAccessor(DropdownComponent)
  ]
})
export class DropdownComponent extends FormControlValueAccessor implements OnInit {
  @Input() optionLabel = 'name';
  @Input() optionValue = 'name';
  @Input() formControlName: string;
  @Input() form: FormGroup;
  @Input() placeholder: string;
  @Input() filter: boolean;
  @Input() options: Array<any> = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.options = this.options.map(o => {
      return {
        ...o,
        label: o[this.optionLabel] || '',
        value: o[this.optionValue] || '',
      };
    });
  }

}
