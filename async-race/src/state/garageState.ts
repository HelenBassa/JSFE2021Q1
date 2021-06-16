import { getCars } from '../api/api';
import store from './store';
import { MAX_CARS_PER_PAGE } from '../shared/constants';

const updateStateGarage = async (): Promise<void> => {
  const next = <HTMLButtonElement>document.getElementById('next');
  const prev = <HTMLButtonElement>document.getElementById('prev');

  const { items, count } = await getCars(store.carsPage);
  store.cars = items;
  store.carsCount = count;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (store.carsPage * MAX_CARS_PER_PAGE < +store.carsCount!) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }

  if (store.carsPage > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
};

export default updateStateGarage;
