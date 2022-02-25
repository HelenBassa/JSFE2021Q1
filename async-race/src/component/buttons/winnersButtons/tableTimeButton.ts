import setSortOrder from './setSortOrder';

// const tableTimeButtonListener = (): void => {
//   const tableTimeButton = <HTMLElement>document.querySelector('.table-time');

//   tableTimeButton.addEventListener('click', async () => {
//     setSortOrder('time');
//   });
// };

const tableTimeButtonListener = (): void => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('table-time')) {
      setSortOrder('time');
    }
  });
};

export default tableTimeButtonListener;
