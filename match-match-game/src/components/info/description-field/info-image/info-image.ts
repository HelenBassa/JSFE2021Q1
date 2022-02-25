import './info-image.scss';
import { BaseComponent } from '../../../base-component';

export class InfoImage extends BaseComponent {
  private image = '';

  constructor(image: string) {
    super('div', ['info-image']);
    this.image = image;
    this.element.innerHTML = `
      <img src="${this.image}" alt="" />
    `;
  }
}
