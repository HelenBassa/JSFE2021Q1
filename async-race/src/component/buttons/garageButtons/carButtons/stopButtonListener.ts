import stopDriving from './stop';

// const stopButtonListener = (): void => {
//   const stopButtons = <NodeListOf<Element>>document.querySelectorAll('.stop-engine-button');

//   stopButtons.forEach((button) => {
//     button.addEventListener('click', async () => {
//       const id = +button.id.split('stop-engine-car-')[1];
//       stopDriving(id);
//     });
//   });
// };

const stopButtonListener = (): void => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('stop-engine-button')) {
      const id = +target.id.split('stop-engine-car-')[1];
      stopDriving(id);
    }
  });
};

export default stopButtonListener;
