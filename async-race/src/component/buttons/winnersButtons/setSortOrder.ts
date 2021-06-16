import store from '../../../state/store';
import updateStateWinners from '../../../state/winnersState';
import renderWinners from '../../../pages/winners/renderWinners';

const setSortOrder = async (sortBy: string): Promise<void> => {
  store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
  store.sortBy = sortBy;
  await updateStateWinners();
  const winnerView = <HTMLElement>document.getElementById('winners-view');
  winnerView.innerHTML = renderWinners();
};

export default setSortOrder;
