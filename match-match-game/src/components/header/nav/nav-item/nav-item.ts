import './nav-item.scss';
import { BaseComponent } from '../../../base-component';

export class NavItem extends BaseComponent {
  private href = '';

  private icon = '';

  private text = '';

  constructor(href: string, icon: string, text: string) {
    super('a', ['nav__item']);
    this.icon = icon;
    this.text = text;
    this.element.setAttribute('href', `${href}`);
    this.element.innerHTML = `
      <img src="${this.icon}" alt="" />
      <div class="nav__text">${this.text}</div>
    `;
  }
}
