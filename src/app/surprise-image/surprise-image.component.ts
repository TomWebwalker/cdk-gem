import { Component, inject } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { ComponentPortal } from '@angular/cdk/portal';
import { SurpriseImagePreviewComponent } from '../surprise-image-preview';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
  standalone: true,
  imports: [CdkDropListGroup],
  templateUrl: './surprise-image.component.html',
  styleUrl: './surprise-image.component.scss',
})
export default class SurpriseImageComponent {
  private readonly overlay = inject(Overlay);
  private overlayRef: OverlayRef | undefined;

  displayPreviewHandler(event: MouseEvent): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(event.target as HTMLElement)
        .withPositions([
          {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
          },
        ]),
    });
    const userProfilePortal = new ComponentPortal(SurpriseImagePreviewComponent);
    this.overlayRef.attach(userProfilePortal);
    this.overlayRef.outsidePointerEvents().subscribe(() => this.overlayRef?.dispose());
  }
}
