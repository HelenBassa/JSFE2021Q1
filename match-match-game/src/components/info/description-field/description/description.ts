import './description.scss';
import { BaseComponent } from '../../../base-component';

export class Description extends BaseComponent {
  private item = 0;

  private text = '';

  constructor(item: number, text: string) {
    super('div', ['description']);
    this.item = item;
    this.text = text;
    this.element.innerHTML = `
      <div class="item"><div class="item__center">${this.item}</div></div>
      <div class="text">${this.text}</div>
    `;
  }
}
