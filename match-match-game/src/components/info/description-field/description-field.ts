import './description-field.scss';
import { BaseComponent } from '../../base-component';
import { Description } from './description/description';
import { InfoImage } from './info-image/info-image';

export class DescriptionField extends BaseComponent {
  private description: Description;

  private infoImage: InfoImage;

  constructor(item: number, description: string, infoImage: string) {
    super('div', ['description-field']);
    this.description = new Description(item, description);
    this.element.appendChild(this.description.element);
    this.infoImage = new InfoImage(infoImage);
    this.element.appendChild(this.infoImage.element);
  }
}
