import { getCar, updateCar } from '../../api/api';
import renderGarage from '../../pages/garage/renderGarage';
import { ICar } from '../../shared/types';
import updateStateGarage from '../../state/garageState';

let selectedCar: ICar | null = null;

// export const selectButtonListener = (): void => {
//   const selectButtons = <NodeListOf<Element>>document.querySelectorAll('.select-button');

//   selectButtons.forEach((button) => {
//     button.addEventListener('click', async () => {
//       selectedCar = await getCar(+button.id.split('select-car-')[1]);
//       const updateName = <HTMLInputElement>document.getElementById('update-name');
//       updateName.value = selectedCar.name;
//       const updateColor = <HTMLInputElement>document.getElementById('update-color');
//       updateColor.value = selectedCar.color;
//       updateName.disabled = false;
//       updateColor.disabled = false;
//       const updateSubmit = <HTMLButtonElement>document.getElementById('update-submit');
//       updateSubmit.disabled = false;
//     });
//   });
// };

export const selectButtonListener = (): void => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('select-button')) {
      selectedCar = await getCar(+target.id.split('select-car-')[1]);
      const updateName = <HTMLInputElement>document.getElementById('update-name');
      updateName.value = selectedCar.name;
      const updateColor = <HTMLInputElement>document.getElementById('update-color');
      updateColor.value = selectedCar.color;
      updateName.disabled = false;
      updateColor.disabled = false;
      const updateSubmit = <HTMLButtonElement>document.getElementById('update-submit');
      updateSubmit.disabled = false;
    }
  });
};

export const updateFormListener = (): void => {
  const updateForm = <HTMLFormElement>document.getElementById('update');

  updateForm.addEventListener('submit', async (event) => {
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await updateCar(selectedCar!.id!, car);
    await updateStateGarage();
    const garage = <HTMLElement>document.getElementById('garage');
    garage.innerHTML = renderGarage();
    const updateName = <HTMLInputElement>document.getElementById('update-name');
    updateName.value = '';
    updateName.disabled = true;
    const updateColor = <HTMLInputElement>document.getElementById('update-color');
    updateColor.disabled = true;
    const updateSubmit = <HTMLButtonElement>document.getElementById('update-submit');
    updateSubmit.disabled = true;
    updateColor.value = '#ffffff';
    selectedCar = null;
  });
};
