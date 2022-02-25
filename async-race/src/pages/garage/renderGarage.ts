/* eslint-disable @typescript-eslint/no-non-null-assertion */
import store from '../../state/store';
import { ICar } from '../../shared/types';
import renderCar from '../../component/car/renderCar';
import { MAX_CARS_PER_PAGE } from '../../shared/constants';

const renderGarage = (): string => `
    <h1>Garage (${store.carsCount})</h1>
    <h2>Page #${store.carsPage} of ${Math.ceil(+store.carsCount! / MAX_CARS_PER_PAGE)}</h2>
    <ul class="garage">
      ${store.cars
        .map(
          (car: ICar) => `
        <li>${renderCar(car)}</li>
      `
        )
        .join('')}
    </ul>
  `;

export default renderGarage;
