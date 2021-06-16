import setSortOrder from './setSortOrder';

// const tableWinsButtonListener = (): void => {
//   const tableWinsButton = <HTMLElement>document.querySelector('.table-wins');

//   tableWinsButton.addEventListener('click', async () => {
//     setSortOrder('wins');
//   });
// };

const tableWinsButtonListener = (): void => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('table-wins')) {
      setSortOrder('wins');
    }
  });
};

export default tableWinsButtonListener;
