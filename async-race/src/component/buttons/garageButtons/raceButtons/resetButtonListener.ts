import store from '../../../../state/store';
import stopDriving from '../carButtons/stop';

const resetButtonListener = (): void => {
  const resetButton = <HTMLButtonElement>document.querySelector('.reset-button');

  resetButton.addEventListener('click', async () => {
    resetButton.disabled = true;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    store.cars.map(({ id }) => stopDriving(id!));
    const message = <HTMLElement>document.getElementById('message');
    message.classList.toggle('visible', false);
    const race = <HTMLButtonElement>document.getElementById('race');
    race.disabled = false;
  });
};

export default resetButtonListener;
