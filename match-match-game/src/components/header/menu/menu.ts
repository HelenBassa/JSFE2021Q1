import './menu.scss';
import { BaseComponent } from '../../base-component';
import { Logo } from '../logo/logo';
import { Nav } from '../nav/nav';

export class Menu extends BaseComponent {
  private logo: Logo;

  private nav: Nav;

  constructor() {
    super('div', ['menu']);
    this.logo = new Logo('Match');
    this.element.appendChild(this.logo.element);
    this.nav = new Nav();
    this.element.appendChild(this.nav.render());
  }
}
