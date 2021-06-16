import { createCar } from '../../api/api';
import renderGarage from '../../pages/garage/renderGarage';
import { ICar } from '../../shared/types';
import updateStateGarage from '../../state/garageState';

const createFormListener = (): void => {
  const createForm = <HTMLFormElement>document.getElementById('create');

  createForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arrayEvents: any[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Events: any = event.target;

    // eslint-disable-next-line no-restricted-syntax
    for (const ev of Events) {
      arrayEvents.push(ev);
    }

    const car: ICar = Object.fromEntries(
      new Map(arrayEvents.filter(({ name }) => !!name).map(({ value, name }) => [name, value]))
    );
    await createCar(car);
    await updateStateGarage();
    const garage = <HTMLElement>document.getElementById('garage');
    garage.innerHTML = renderGarage();
    const createName = <HTMLInputElement>document.getElementById('create-name');
    createName.value = '';
  });
};

export default createFormListener;
