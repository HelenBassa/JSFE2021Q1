export interface ICar {
  name: string;
  color: string;
  id?: number;
  isEngineStarted?: boolean;
}

export interface ICars {
  items: ICar[];
  count: string | null;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export interface IDrive {
  id: number;
  success: boolean;
  time: number;
}

export type Success = Pick<IDrive, 'success'>;

export interface IGetWinners {
  page: number;
  limit?: number;
  sort?: string | null;
  order?: string | null;
}

export interface IWinner {
  wins?: number;
  time: number;
  id?: number;
  name?: string;
  car?: ICar;
}

export interface IWinners {
  items: IWinner[];
  count: string | null;
}

export interface IAnimation {
  id?: number;
}

export interface IRenderCar {
  id: number;
  name: string;
  color: string;
  isEngineStarted: boolean;
}

export interface IState {
  id?: number;
}

export interface IRaceAll {
  id: number;
  car?: ICar;
  time: number;
  success?: Success;
}
