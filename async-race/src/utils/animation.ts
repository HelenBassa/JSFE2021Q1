import { IState } from '../shared/types';

function animation(car: HTMLElement, distance: number, animationTime: number): IState {
  let start: number | null = null;
  const state: IState = {};

  function step(timestamp: number): void {
    if (!start) {
      start = timestamp;
    }

    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));

    // eslint-disable-next-line no-param-reassign
    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }

  state.id = window.requestAnimationFrame(step);

  return state;
}

export default animation;
