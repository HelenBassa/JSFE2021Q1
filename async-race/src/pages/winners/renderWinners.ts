/* eslint-disable @typescript-eslint/no-non-null-assertion */
import store from '../../state/store';
import { IWinner } from '../../shared/types';
import getCarImage from '../../component/car/getCarImage';
import { MAX_WINNERS_PER_PAGE } from '../../shared/constants';

const renderWinners = (): string => `
  <h1>Winners (${store.winnersCount})</h1>
  <h2>Page #${store.winnersPage} of ${Math.ceil(+store.winnersCount! / MAX_WINNERS_PER_PAGE)}</h2>
  <table class="table" cellspacing="0" border="0" cellpadding="0">
    <thead>
      <th>Number</th>
      <th>Car</th>
      <th>Name</th>
      <th class="table-button table-wins ${store.sortBy === 'wins' ? store.sortOrder : ''}" id="sort-by-wins">Wins</th>
      <th class="table-button table-time ${
        store.sortBy === 'time' ? store.sortOrder : ''
      }" id="sort-by-time">Best time (seconds)</th>
    </thead>
    <tbody>
      ${store.winners
        .map(
          (winner: IWinner, index: number) => `
        <tr>
          <td>${index + 1}</td>
          <td>${getCarImage(winner.car!.color)}</td>
          <td>${winner.car?.name}</td>
          <td>${winner.wins}</td>
          <td>${winner.time}</td>
        </tr>
      `
        )
        .join('')}
    </tbody>
  </table>
  `;

export default renderWinners;
