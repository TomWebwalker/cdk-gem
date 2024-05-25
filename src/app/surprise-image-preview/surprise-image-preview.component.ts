import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-surprise-image-preview',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<img [ngSrc]="imgSrc" width="300" height="300" alt="image" />`,
  styleUrl: './surprise-image-preview.component.scss',
})
export class SurpriseImagePreviewComponent {
  readonly imgSrc = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`;
}
