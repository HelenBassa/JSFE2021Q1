// import { listen } from './ui';
import listen from './component/listener';
import render from './pages/render';
import updateStateGarage from './state/garageState';

render();
await updateStateGarage();
listen();
