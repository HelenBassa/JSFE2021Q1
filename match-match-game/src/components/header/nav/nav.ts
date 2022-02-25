import './nav.scss';
import './nav-item/nav-item.scss';
// import { BaseComponent } from '../../base-component';
import { Component } from '../../../core/templates/components';
import { PageIds } from '../../../pages/page-ids';
import { NavItem } from './nav-item/nav-item';

const Buttons = [
  {
    id: PageIds.Main_Page,
    icon: 'icons/about-game.png',
    text: 'Main Page',
  },
  {
    id: PageIds.Settings_Page,
    icon: 'icons/game-settings.png',
    text: 'Settings Page',
  },
  {
    id: PageIds.Score_Page,
    icon: 'icons/best-score.png',
    text: 'Score Page',
  },
];

// export class Nav extends BaseComponent {
export class Nav extends Component {
  private static navItem: NavItem;

  constructor() {
    super('nav', 'nav');
    // this.navItem = new NavItem(
    //   '#about',
    //   './icons/about-game.png',
    //   'About Game'
    // );
    // this.element.appendChild(this.navItem.element);
    // this.navItem = new NavItem(
    //   '#score',
    //   './icons/best-score.png',
    //   'Best Score'
    // );
    // this.element.appendChild(this.navItem.element);
    // this.navItem = new NavItem(
    //   '#settings',
    //   './icons/game-settings.png',
    //   'Game Settings'
    // );
    // this.element.appendChild(this.navItem.element);
  }

  renderPageButtons(): void {
    const pageButtons = document.createElement('ul');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.className = 'nav__item';
      buttonHTML.href = `#${button.id}`;
      const iconButton = document.createElement('img');
      iconButton.src = button.icon;
      const textButton = document.createElement('div');
      // textButton.className = 'nav__text';
      textButton.innerText = button.text;
      buttonHTML.append(iconButton);
      buttonHTML.append(textButton);
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render(): HTMLElement {
    this.renderPageButtons();
    return this.container;
  }
}
