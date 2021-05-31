import './title.scss';
import { BaseComponent } from '../../base-component';

export class Title extends BaseComponent {
  private text = '';

  constructor(text: string) {
    super('div', ['title']);
    this.text = text;
    this.element.innerHTML = `${this.text}`;
  }
}
