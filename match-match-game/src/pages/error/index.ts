import { Page } from '../../core/templates/page';

export const enum ErrorTypes {
  Error_404 = 404,
}

export class ErrorPage extends Page {
  private errorType: ErrorTypes | string;

  private TextObject: { [prop: string]: string } = {
    '404': 'Error! the page was not found.',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render(): HTMLElement {
    // const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
    const title = this.TextObject[this.errorType];
    this.container.append(title);
    return this.container;
  }
}
