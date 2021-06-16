/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRaceAll, IWinner } from '../shared/types';
import store from '../state/store';

const raceAll = async (promises: Array<Promise<IRaceAll>>, ids: number[]): Promise<IWinner> => {
  const { success, id, time } = await Promise.race(promises);

  if (!success) {
    const failedIndex = ids.findIndex((i) => i === id);
    const restPromises = [...promises.slice(0, failedIndex), ...promises.slice(failedIndex + 1, promises.length)];
    const restIds = [...ids.slice(0, failedIndex), ...ids.slice(failedIndex + 1, ids.length)];

    return raceAll(restPromises, restIds);
  }

  return { ...store.cars.find((car) => car.id === id), time: +(time / 1000).toFixed(2) };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const race = async (action: any): Promise<IWinner> => {
  const promises = store.cars.map(({ id }) => action(id));

  const winner = await raceAll(
    promises,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    store.cars.map((car) => car.id!)
  );

  return winner;
};

export default race;
