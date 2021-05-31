// import { Header } from '../../components/header/header';
import { Content } from '../../components/content/content';
import { Popup } from '../../components/popup/popup';

export class About {
  // private readonly header: Header;

  private readonly content: Content;

  private readonly popup: Popup;

  constructor(private readonly rootElement: HTMLElement) {
    // this.header = new Header();
    // this.rootElement.appendChild(this.header.render());
    this.content = new Content();
    this.rootElement.appendChild(this.content.element);
    this.popup = new Popup('Register new Player');
    this.rootElement.appendChild(this.popup.element);
  }
}
