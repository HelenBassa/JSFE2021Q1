import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  private seconds = 0;

  private minutes = 0;

  private formattedSeconds?: string;

  private formattedMinutes?: string;

  constructor() {
    super('div', ['timer']);
    setInterval(() => {
      this.seconds++;
      if (this.seconds > 59) {
        this.minutes++;
        this.seconds = 0;
      }

      if (this.seconds > 9) {
        this.formattedSeconds = `${this.seconds}`;
      } else {
        this.formattedSeconds = `0${this.seconds}`;
      }

      if (this.minutes > 9) {
        this.formattedMinutes = `${this.minutes}`;
      } else {
        this.formattedMinutes = `0${this.minutes}`;
      }

      this.element.innerHTML = `
        ${this.formattedMinutes} : ${this.formattedSeconds}
          `;
    }, 1000);
  }

  // timer(): void {
  //   this.seconds++;
  //   if (this.seconds > 59) {
  //     this.minutes++;
  //     this.seconds = 0;
  //   }

  //   if (this.seconds > 9) {
  //     this.formattedSeconds = `${this.seconds}`;
  //   } else {
  //     this.formattedSeconds = `0${this.seconds}`;
  //   }

  //   if (this.minutes > 9) {
  //     this.formattedMinutes = `${this.minutes}`;
  //   } else {
  //     this.formattedMinutes = `0${this.minutes}`;
  //   }

  //   this.element.innerHTML = `
  //   ${this.formattedMinutes} : ${this.formattedSeconds}
  //     `;
  // }
}
