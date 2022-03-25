import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Provider } from '@angular/core';

export class FormControlValueAccessor implements ControlValueAccessor {
  input: string;
  isDisabled: boolean;
  onChange: any = () => {};
  onTouch: any = () => {};
  writeValue(input: string): void {
    this.input = input;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
export function DefaultProviderFormControlValueAccessor(element): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => element),
  };
}
