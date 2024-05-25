import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-attendance-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './attendance-list.component.html',
  styleUrl: './attendance-list.component.scss'
})
export default class AttendanceListComponent {
  readonly selection = new SelectionModel<string>(true)
  readonly attendees: { name: string, id: string }[] = [
    {
      id: '1',
      name: 'Alice'
    },
    {
      id: '2',
      name: 'Bob'
    },
    {
      id: '3',
      name: 'Charlie'
    },
    {
      id: '4',
      name: 'David'
    },
    {
      id: '5',
      name: 'Eve'
    }
  ];

  constructor() {
    this.selection.changed.subscribe(data => console.log(data))
  }
}
