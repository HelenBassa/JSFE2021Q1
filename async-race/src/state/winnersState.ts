import { getWinners } from '../api/api';
import store from './store';
import { MAX_WINNERS_PER_PAGE } from '../shared/constants';

const updateStateWinners = async (): Promise<void> => {
  const next = <HTMLButtonElement>document.getElementById('next');
  const prev = <HTMLButtonElement>document.getElementById('prev');
  const { items, count } = await getWinners({ page: store.winnersPage, sort: store.sortBy, order: store.sortOrder });
  store.winners = items;
  store.winnersCount = count;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (store.winnersPage * MAX_WINNERS_PER_PAGE < +store.winnersCount!) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }

  if (store.winnersPage > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
};

export default updateStateWinners;
