import './header.scss';
import { Component } from '../../core/templates/components';
// import { BaseComponent } from '../base-component';
import { Menu } from './menu/menu';
import { Registration } from './registration/registration';
// import { Popup } from '../popup/popup';
import { MainPage } from '../../pages/main/index';

const REGISTER_CLASS = 'opened';

// export class Header extends BaseComponent {
export class Header extends Component {
  private menu: Menu;

  private registration: Registration;

  // private static popup: Popup;

  // private static mainPage: MainPage;

  constructor() {
    // super('header', ['header']);
    super('header', 'header');
    this.menu = new Menu();
    // this.element.appendChild(this.menu.element);
    this.registration = new Registration('Register new player');
    // this.element.appendChild(this.registration.element);
  }

  renderHeader(): void {
    // Header.menu = new Menu();
    // this.element.appendChild(Header.menu.element);
    this.container.appendChild(this.menu.element);
    // Header.registration = new Registration('Register new player');
    // this.element.appendChild(Header.registration.element);
    this.container.appendChild(this.registration.element);
  }

  render(): HTMLElement {
    this.renderHeader();
    return this.container;
  }

  registerNewPlayer(): void {
    this.registration.element.addEventListener('click', () => {
      // console.log(Header.registration.element);
      MainPage.popup.element.classList.add(REGISTER_CLASS);
      // console.log(MainPage.popup.element);
    });
  }
}
