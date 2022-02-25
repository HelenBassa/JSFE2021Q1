import { Page } from '../../core/templates/page';
import { MainPage } from '../main/index';
import { SettingsPage } from '../settings/index';
import { ScorePage } from '../score/index';
import { PageIds } from '../page-ids';
// import { Header } from '../../core/components/header/index';
import { Header } from '../../components/header/header';
import { ErrorPage, ErrorTypes } from '../error/index';

// export const enum PageIds {
//   Main_Page = 'main-page',
//   Settings_Page = 'settings-page',
//   Score_Page = 'score-page',
// }

export class App {
  private container: HTMLElement = document.body;

  private defaultPageId = 'current-page';

  private mainPage: MainPage;

  private header: Header;

  renderNewPage(idPage: string): void {
    const currentPageHTML = document.querySelector(`#${this.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.Main_Page) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.Settings_Page) {
      page = new SettingsPage(idPage);
    } else if (idPage === PageIds.Score_Page) {
      page = new ScorePage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = this.defaultPageId;
      this.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderNewPage(hash);
    });
  }

  constructor() {
    // this.header = new Header('header', 'header');
    this.header = new Header();
    this.mainPage = new MainPage('main-page');
  }

  run(): void {
    this.container.append(this.header.render());
    this.renderNewPage('main-page');
    this.enableRouteChange();
    this.header.registerNewPlayer();
  }
}
