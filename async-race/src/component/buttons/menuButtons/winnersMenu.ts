import renderWinners from '../../../pages/winners/renderWinners';
import store from '../../../state/store';
import updateStateWinners from '../../../state/winnersState';

const winnersMenuButtonListener = (): void => {
  const winnersMenuButton = <HTMLButtonElement>document.querySelector('.winners-menu-button');

  winnersMenuButton.addEventListener('click', async () => {
    const winnerView = <HTMLElement>document.getElementById('winners-view');
    winnerView.style.display = 'block';
    const garageView = <HTMLElement>document.getElementById('garage-view');
    garageView.style.display = 'none';
    store.view = 'winners';
    await updateStateWinners();
    winnerView.innerHTML = renderWinners();
  });
};

export default winnersMenuButtonListener;
