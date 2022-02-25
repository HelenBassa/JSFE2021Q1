import { getCars, getWinners } from '../api/api';
import { IState } from '../shared/types';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners({ page: 1 });
const animation: IState = {};

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  animation,
  view: 'garage',
  sortBy: '',
  sortOrder: '',
};
