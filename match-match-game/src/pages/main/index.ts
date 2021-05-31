import { Page } from '../../core/templates/page';

// import { Header } from '../../components/header/header';
import { Content } from '../../components/content/content';
import { Popup } from '../../components/popup/popup';

export class MainPage extends Page {
  // static TextObject = {
  //   MainTitle: 'Main Page',
  // };

  // private static header: Header;

  private static content: Content;

  static popup: Popup;

  // constructor(id: string) {
  //   super(id);
  // }

  render(): HTMLElement {
    // MainPage.header = new Header();
    // this.container.append(MainPage.header.render());
    MainPage.content = new Content();
    this.container.append(MainPage.content.element);
    MainPage.popup = new Popup('Register new Player');
    this.container.append(MainPage.popup.element);

    // const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    // this.container.append(title);
    return this.container;
  }
}
