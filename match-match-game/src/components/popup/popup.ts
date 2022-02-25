import './popup.scss';
import { BaseComponent } from '../base-component';

export class Popup extends BaseComponent {
  constructor(title: string) {
    super('div', ['popup']);
    this.element.innerHTML = `
      <div class="popup__body">
        <div class="popup__content">
          <div class="popup__title">${title}</div>
          <div class="popup__inner">
          <form class="popup__form" action="" method="post">
            <div class="popup__form--main">
            <div class="popup__inputs">
              <fieldset>
                <input class="popup__input" 
                name="first-name" 
                placeholder="First name" 
                type="text" 
                tabindex="1" 
                required="">
                <div class="requirements">
                  Please, enter your first name.
                </div>
              </fieldset>
              <fieldset>
                <input class="popup__input" 
                name="last-name" 
                placeholder="Last name" 
                type="text" 
                tabindex="2" 
                required="">
                <div class="requirements">
                  Please, enter your last name.
                </div>
              </fieldset>
              <fieldset>
                <input class="popup__input" 
                name="email" 
                placeholder="E-mail" 
                type="email" 
                tabindex="2" 
                required="">
                <div class="requirements">
                  Please, enter e-mail address.
                </div>
              </fieldset>
            </div>
            <div class="popup__avatar">
              <img src="icons/avatar.png"></div>
            </div>
            <div class="popup__footer">
              <div class="popup__buttons">
                <button class="popup__button popup__back">
                  <span>add user</span>
                </button>
                <button id="next-2" class="invalid popup__button popup__next">
                  <span>cancel</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}
