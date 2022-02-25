import { createCar } from '../../../../api/api';
import renderGarage from '../../../../pages/garage/renderGarage';
import updateStateGarage from '../../../../state/garageState';
import generateRandomCars from '../../../../utils/generateRandomCars';

const generateButtonListener = (): void => {
  const generateButton = <HTMLButtonElement>document.querySelector('.generator-button');

  generateButton.addEventListener('click', async () => {
    generateButton.disabled = true;
    const cars = generateRandomCars();
    await Promise.all(cars.map(async (c) => createCar(c)));
    await updateStateGarage();
    const garage = <HTMLElement>document.getElementById('garage');
    garage.innerHTML = renderGarage();
    generateButton.disabled = false;
  });
};

export default generateButtonListener;
