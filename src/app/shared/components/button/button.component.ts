import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() className: string;
  @Input() iconPos: 'left' | 'right';
  @Input() icon: string;
  @Input() disabled: boolean;
  @Input() type = 'button';
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleOnClick() {
    this.onClick.emit();
  }
}
