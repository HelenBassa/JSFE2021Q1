const garageMenuButtonListener = (): void => {
  const garageMenuButton = <HTMLButtonElement>document.querySelector('.garage-menu-button');

  garageMenuButton.addEventListener('click', async () => {
    const garageView = <HTMLElement>document.getElementById('garage-view');
    garageView.style.display = 'block';
    const winnerView = <HTMLElement>document.getElementById('winners-view');
    winnerView.style.display = 'none';
  });
};

export default garageMenuButtonListener;
