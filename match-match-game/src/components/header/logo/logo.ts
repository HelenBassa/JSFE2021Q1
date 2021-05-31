import './logo.scss';
import { BaseComponent } from '../../base-component';

export class Logo extends BaseComponent {
  private text = '';

  constructor(text: string) {
    super('div', ['logo']);
    this.text = text;
    this.element.innerHTML = `
      <div class="logo__up">${this.text}</div>
      <div class="logo__down">Match</div>
    `;
  }
}
