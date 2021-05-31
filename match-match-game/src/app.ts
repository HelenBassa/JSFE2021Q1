// import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { TimeField } from './components/time-field/time-field';
import { Timer } from './components/timer/timer';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './models/image-category-model';

export class App {
  // private readonly header: Header;

  private readonly content: Content;

  private readonly timeField: TimeField;

  private readonly timer: Timer;

  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    // this.header = new Header();
    // this.rootElement.appendChild(this.header.element);
    this.content = new Content();
    this.rootElement.appendChild(this.content.element);
    this.timeField = new TimeField();
    this.content.element.appendChild(this.timeField.element);
    this.timer = new Timer();
    this.timeField.element.appendChild(this.timer.element);
    this.game = new Game();
    this.content.element.appendChild(this.game.element);
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];

    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
