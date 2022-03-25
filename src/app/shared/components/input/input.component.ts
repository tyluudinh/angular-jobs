import {Component, Input, OnInit} from '@angular/core';
import {DefaultProviderFormControlValueAccessor, FormControlValueAccessor} from '../../helper/form-control';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    DefaultProviderFormControlValueAccessor(InputComponent)
  ]
})
export class InputComponent extends FormControlValueAccessor  implements OnInit {
  @Input() placeholder: string;
  @Input() formControlName: string;
  @Input() form: FormGroup;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
