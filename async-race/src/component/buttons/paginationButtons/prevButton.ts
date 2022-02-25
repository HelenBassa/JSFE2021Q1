import renderGarage from '../../../pages/garage/renderGarage';
import renderWinners from '../../../pages/winners/renderWinners';
import updateStateGarage from '../../../state/garageState';
import store from '../../../state/store';
import updateStateWinners from '../../../state/winnersState';

const prevButtonListener = (): void => {
  const prevButton = <HTMLButtonElement>document.querySelector('.prev-button');

  prevButton.addEventListener('click', async () => {
    // eslint-disable-next-line default-case
    switch (store.view) {
      case 'winners': {
        store.winnersPage -= 1;
        await updateStateWinners();
        const winnerView = <HTMLElement>document.getElementById('winners-view');
        winnerView.innerHTML = renderWinners();
        break;
      }

      case 'garage': {
        store.carsPage -= 1;
        await updateStateGarage();
        const garage = <HTMLElement>document.getElementById('garage');
        garage.innerHTML = renderGarage();
        break;
      }
    }
  });
};

export default prevButtonListener;
