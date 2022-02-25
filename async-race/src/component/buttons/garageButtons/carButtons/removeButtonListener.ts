import { deleteCar, deleteWinner } from '../../../../api/api';
import updateStateGarage from '../../../../state/garageState';
import renderGarage from '../../../../pages/garage/renderGarage';

// const removeButtonListener = (): void => {
//   const removeButtons = <NodeListOf<Element>>document.querySelectorAll('.remove-button');

//   removeButtons.forEach((button) => {
//     button.addEventListener('click', async () => {
//       const id = +button.id.split('remove-car-')[1];
//       await deleteCar(id);
//       await deleteWinner(id);
//       await updateStateGarage();
//       const garage = <HTMLElement>document.getElementById('garage');
//       garage.innerHTML = renderGarage();
//     });
//   });
// };

const removeButtonListener = (): void => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('remove-button')) {
      const id = +target.id.split('remove-car-')[1];
      await deleteCar(id);
      await deleteWinner(id);
      await updateStateGarage();
      const garage = <HTMLElement>document.getElementById('garage');
      garage.innerHTML = renderGarage();
    }
  });
};

export default removeButtonListener;
