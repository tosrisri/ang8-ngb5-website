import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

interface company {
  id: number;
  name: string;
  role: string;
  months: number;
  location: string;
  type: string;
}

const COUNTRIES: company[] = [
  {
    id: 1,
    name: 'Solix Technologies',
    role: 'Executive Web Designer',
    months: 18,
    location: 'India, Hyderabad',
    type: 'Full Time' 
  },
  {
    id: 2,
    name: 'Impelsys India P Ltd.',
    role: 'Web Developer',
    months: 22,
    location: 'India, Bangalore',
    type: 'Full Time' 
  },
  {
    id: 3,
    name: 'Solix Technologies',
    role: 'Executive Web Designer',
    months: 18,
    location: 'India, Hyderabad',
    type: 'Full Time' 
  },
  {
    id: 4,
    name: 'Wipro Technologies',
    role: 'UX & UI Consultant',
    months: 90,
    location: 'USA, UK, India',
    type: 'Full Time' 
  },
  {
    id: 5,
    name: 'Comcast Communications',
    role: 'Sr. UX & UI Consultant',
    months: 8,
    location: 'USA, Philadelphia',
    type: 'Contract' 
  },
  {
    id: 6,
    name: 'West Agile Labs',
    role: 'Sr. Product Designer',
    months: 16,
    location: 'India, Hyderabad',
    type: 'Full Time' 
  },
  {
    id: 7,
     name: 'NeuDesic Technologies',
    role: 'UX & UI Consultant',
    months: 4,
    location: 'India, Hyderabad',
    type: 'Contract' 
  }

];

export type SortColumn = keyof company | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
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
export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  countries = COUNTRIES;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = compare(`${a[column]}`, `${b[column]}`);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
