/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { stopEngine } from '../../../../api/api';
import store from '../../../../state/store';

const stopDriving = async (id: number): Promise<void> => {
  const stopButton = <HTMLButtonElement>document.getElementById(`stop-engine-car-${id}`);
  stopButton.disabled = true;
  stopButton.classList.toggle('enabling', true);
  await stopEngine(id);
  stopButton.classList.toggle('enabling', false);

  const startButton = <HTMLButtonElement>document.getElementById(`start-engine-car-${id}`);
  startButton.disabled = false;

  const car = <HTMLElement>document.getElementById(`car-${id}`);
  car.style.transform = `translateX(0)`;

  if (store.animation) {
    window.cancelAnimationFrame(store.animation.id!);
  }
};

export default stopDriving;
