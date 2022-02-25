import { ICar, ICars, IEngine, IDrive, IGetWinners, IWinner, IWinners } from '../shared/types';
import { MAX_CARS_PER_PAGE, MAX_WINNERS_PER_PAGE } from '../shared/constants';

const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const getCars = async (page: number, limit = MAX_CARS_PER_PAGE): Promise<ICars> => {
  const getCarsResponce = `${garage}?_page=${page}&_limit=${limit}`;
  const response = await fetch(getCarsResponce);
  const items: ICar[] = await response.json();

  return {
    items,
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<ICar> => {
  const getCarResponce = `${garage}/${id}`;

  return (await fetch(getCarResponce)).json();
};

export const createCar = async (body: ICar): Promise<ICar> =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCar = async (id: number): Promise<ICar> => {
  const deleteCarResponce = `${garage}/${id}`;

  return (
    await fetch(deleteCarResponce, {
      method: 'DELETE',
    })
  ).json();
};

export const updateCar = async (id: number, body: ICar): Promise<ICar> => {
  const updateCarResponce = `${garage}/${id}`;

  return (
    await fetch(updateCarResponce, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const startEngine = async (id: number): Promise<IEngine> => {
  const startEngineResponce = `${engine}?id=${id}&status=started`;

  return (await fetch(startEngineResponce)).json();
};

export const stopEngine = async (id: number): Promise<IEngine> => {
  const startEngineResponce = `${engine}?id=${id}&status=stopped`;

  return (await fetch(startEngineResponce)).json();
};

export const drive = async (id: number): Promise<IDrive> => {
  const driveResponce = `${engine}?id=${id}&status=drive`;
  const res = await fetch(driveResponce).catch();

  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

const getSortOrder = (sort: IGetWinners['sort'], order: IGetWinners['order']): string => {
  if (sort && order) {
    const sortOrderResponce = `&_sort=${sort}&_order=${order}`;

    return sortOrderResponce;
  }

  return '';
};

export const getWinners = async ({
  page,
  limit = MAX_WINNERS_PER_PAGE,
  sort,
  order,
}: IGetWinners): Promise<IWinners> => {
  const getWinnersResponce = `${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`;
  const response = await fetch(getWinnersResponce);
  const items: IWinner[] = await response.json();

  return {
    items: await Promise.all(
      items.map(async (winner) => {
        return {
          ...winner,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          car: await getCar(winner.id!),
        };
      })
    ),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getWinner = async (id: number): Promise<IWinner> => {
  const getWinnerResponce = `${winners}/${id}`;

  return (await fetch(getWinnerResponce)).json();
};

export const getWinnerStatus = async (id: number): Promise<number> => {
  const getWinnerStatusResponce = `${winners}/${id}`;

  return (await fetch(getWinnerStatusResponce)).status;
};

export const deleteWinner = async (id: number): Promise<IWinner> => {
  const deleteWinnerResponce = `${winners}/${id}`;

  return (await fetch(deleteWinnerResponce, { method: 'DELETE' })).json();
};

export const createWinner = async (body: IWinner): Promise<IWinner> =>
  (
    await fetch(winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const updateWinner = async (id: number, body: IWinner): Promise<IWinner> => {
  const updateWinnerResponce = `${winners}/${id}`;

  return (
    await fetch(updateWinnerResponce, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const saveWinner = async ({ id, time }: IWinner): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const winnerStatus: number = await getWinnerStatus(id!);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const winner = await getWinner(id!);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await updateWinner(id!, {
      id,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      wins: winner.wins! + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};
