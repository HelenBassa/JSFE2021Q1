/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { startEngine, drive } from '../../../../api/api';
import { IDrive } from '../../../../shared/types';
import animation from '../../../../utils/animation';
import getDistanceBetweenElements from '../../../../utils/getDistanceBetweenElements';
import store from '../../../../state/store';

const startDriving = async (id: number): Promise<IDrive> => {
  const startButton = <HTMLButtonElement>document.getElementById(`start-engine-car-${id}`);
  startButton.disabled = true;
  startButton.classList.toggle('enabling', true);

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);

  startButton.classList.toggle('enabling', false);

  const stopButton = <HTMLButtonElement>document.getElementById(`stop-engine-car-${id}`);
  stopButton.disabled = false;

  const car = <HTMLElement>document.getElementById(`car-${id}`);
  const flag = <HTMLElement>document.getElementById(`flag-${id}`);
  const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) + 100;

  store.animation = animation(car, htmlDistance, time);

  const { success } = await drive(id);

  if (!success) {
    window.cancelAnimationFrame(store.animation.id!);
  }

  return { success, id, time };
};

export default startDriving;
