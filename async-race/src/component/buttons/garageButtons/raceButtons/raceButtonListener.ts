import { saveWinner } from '../../../../api/api';
import race from '../../../../utils/race';
import startDriving from '../carButtons/start';

const raceButtonListener = (): void => {
  const raceButton = <HTMLButtonElement>document.querySelector('.race-button');

  raceButton.addEventListener('click', async () => {
    raceButton.disabled = true;
    const winner = await race(startDriving);
    await saveWinner(winner);
    const message = <HTMLElement>document.getElementById('message');
    message.innerHTML = `${winner.name} went first (${winner.time}sec)!`;
    message.classList.toggle('visible', true);
    const reset = <HTMLButtonElement>document.getElementById('reset');
    reset.disabled = false;
  });
};

export default raceButtonListener;
