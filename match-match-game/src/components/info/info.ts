import './info.scss';
import { BaseComponent } from '../base-component';
import { Title } from './title/title';
import { DescriptionField } from './description-field/description-field';

export class Info extends BaseComponent {
  private title: Title;

  private descriptionField: DescriptionField;

  constructor() {
    super('div', ['info']);
    this.title = new Title('How to play?');
    this.element.appendChild(this.title.element);
    this.descriptionField = new DescriptionField(
      1,
      'Register new player in game',
      './images/info/step1.jpg'
    );
    this.element.appendChild(this.descriptionField.element);
    this.descriptionField = new DescriptionField(
      2,
      'Configure your game settings',
      './images/info/step2.jpg'
    );
    this.element.appendChild(this.descriptionField.element);
    this.descriptionField = new DescriptionField(
      3,
      'Start you new game! Remember card positions and match it before times up.',
      './images/info/step3.jpg'
    );
    this.element.appendChild(this.descriptionField.element);
  }
}
