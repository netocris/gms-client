import { Directive, Input, EventEmitter, Output } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableDirective {

  @Input() 
  sortable: string;

  @Input() 
  direction: SortDirection = '';

  @Output() 
  sort: EventEmitter<SortEvent>;

  constructor() {
    this.sort = new EventEmitter<SortEvent>();
  }

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable, 
      direction: this.direction
    });
  }

}
