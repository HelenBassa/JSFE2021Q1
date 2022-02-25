import './content.scss';
import { BaseComponent } from '../base-component';
import { Info } from '../info/info';

export class Content extends BaseComponent {
  private info: Info;

  constructor() {
    super('main', ['content']);
    this.info = new Info();
    this.element.appendChild(this.info.element);
  }
}
