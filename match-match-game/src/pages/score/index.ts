import { Page } from '../../core/templates/page';

export class ScorePage extends Page {
  private TextObject = {
    MainTitle: 'Score Page',
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
