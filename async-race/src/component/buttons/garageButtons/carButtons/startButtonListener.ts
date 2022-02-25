import startDriving from './start';

// const startButtonListener = (): void => {
//   const startButtons = <NodeListOf<Element>>document.querySelectorAll('.start-engine-button');
//   startButtons.forEach((button) => {
//     button.addEventListener('click', async () => {
//       const id = +button.id.split('start-engine-car-')[1];
//       startDriving(id);
//     });
//   });
// };

const startButtonListener = (): void => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('start-engine-button')) {
      const id = +target.id.split('start-engine-car-')[1];
      startDriving(id);
    }
  });
};

export default startButtonListener;
