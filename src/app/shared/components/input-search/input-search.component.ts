import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DefaultProviderFormControlValueAccessor} from '../../helper/form-control';
import {InputComponent} from '../input/input.component';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  providers: [
    DefaultProviderFormControlValueAccessor(InputSearchComponent)
  ]
})
export class InputSearchComponent extends InputComponent implements OnInit, AfterViewInit {
  @ViewChild('input', {static: true}) inputSearch: ElementRef;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onModelChange($event: any) {
  }

  ngAfterViewInit() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        filter(res => res.length > 2),
        debounceTime(1500),
        distinctUntilChanged(),
        tap((event: KeyboardEvent) => {
          console.log(this.inputSearch.nativeElement?.value);
        })
      )
      .subscribe();
  }
}
