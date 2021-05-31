import { Component } from '../../templates/components';
import { PageIds } from '../../../pages/page-ids';

const Buttons = [
  {
    id: PageIds.Main_Page,
    text: 'Main Page',
  },
  {
    id: PageIds.Settings_Page,
    text: 'Settings Page',
  },
  {
    id: PageIds.Score_Page,
    text: 'Score Page',
  },
];

export class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}
