import { Page } from '../../core/templates/page';

export class SettingsPage extends Page {
  private TextObject = {
    MainTitle: 'Settings Page',
  };

  // constructor(id: string) {
  //   super(id);
  // }

  render(): HTMLElement {
    // const title = this.createHeaderTitle(this.TextObject.MainTitle);
    const title = this.TextObject.MainTitle;
    this.container.append(title);
    return this.container;
  }
}
