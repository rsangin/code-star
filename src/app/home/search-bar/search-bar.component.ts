import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output()
  public searched = new EventEmitter<string>();

  @Input()
  public set value(val: string) {
    if (this._value !== val) {
      this._value = val;
      this.valueChange.emit(val);
    }
  }

  public get value(): string {
    return this._value;
  }

  @Output()
  public valueChange = new EventEmitter<string>();

  private _value = '';

  constructor() { }

  ngOnInit(): void {
  }

  public checkForEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searched.emit(this.value);
    }
  }

}
