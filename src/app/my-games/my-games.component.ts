import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDropListGroup],
  templateUrl: './my-games.component.html',
  styleUrl: './my-games.component.scss',
})
export default class MyGamesComponent {
  readonly gamesToPlay = [
    'Grand Theft Auto',
    'The Legend of Zelda',
    'Super Mario Bros.',
    'Final Fantasy',
    'Minecraft',
    'World of Warcraft',
    'The Sims',
    'Call of Duty',
    'Halo',
    'Witcher III',
  ];

  readonly games: string[] = [];

  readonly gamesInProgress: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
