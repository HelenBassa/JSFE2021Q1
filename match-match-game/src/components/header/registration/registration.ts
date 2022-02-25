import './registration.scss';
import { BaseComponent } from '../../base-component';
import { Popup } from '../../popup/popup';

// const REGISTER_CLASS = 'opened';

export class Registration extends BaseComponent {
  private static popup: Popup;

  private text = '';

  constructor(text: string) {
    super('div', ['registration']);
    this.text = text;
    this.element.innerHTML = `
      <div class="registration__text">${this.text}</div>
    `;
  }

  // registerNewPlayer(): void {
  //   this.element.addEventListener('click', () => {
  //     Registration.popup.element.classList.add('REGISTER_CLASS');
  //     console.log('click', Registration.popup.element.classList);
  //   });
  // }

  // run() {
  //   this.registerNewPlayer();
  // }
}
