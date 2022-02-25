import generateButtonListener from './buttons/garageButtons/carButtons/generateButtonListener';
import removeButtonListener from './buttons/garageButtons/carButtons/removeButtonListener';
import startButtonListener from './buttons/garageButtons/carButtons/startButtonListener';
import stopButtonListener from './buttons/garageButtons/carButtons/stopButtonListener';
import raceButtonListener from './buttons/garageButtons/raceButtons/raceButtonListener';
import resetButtonListener from './buttons/garageButtons/raceButtons/resetButtonListener';
import garageMenuButtonListener from './buttons/menuButtons/garageMenuButtonListener';
import winnersMenuButtonListener from './buttons/menuButtons/winnersMenu';
import nextButtonListener from './buttons/paginationButtons/nextButton';
import prevButtonListener from './buttons/paginationButtons/prevButton';
import tableTimeButtonListener from './buttons/winnersButtons/tableTimeButton';
import tableWinsButtonListener from './buttons/winnersButtons/tableWinsButton';
import createFormListener from './forms/createCar';
import { selectButtonListener, updateFormListener } from './forms/updateCar';

const listen = (): void => {
  startButtonListener();
  stopButtonListener();
  selectButtonListener();
  removeButtonListener();
  generateButtonListener();
  raceButtonListener();
  resetButtonListener();
  prevButtonListener();
  nextButtonListener();
  garageMenuButtonListener();
  winnersMenuButtonListener();
  tableWinsButtonListener();
  tableTimeButtonListener();
  createFormListener();
  updateFormListener();
};

export default listen;
