import './style.scss';
// // import img from './assets/card-back.png';
// // import { App } from './app';
// // import { Main } from './pages/main/main';
// import { About } from './pages/about/about';

// window.onload = () => {
//   const appElement = document.getElementById('app');

//   if (!appElement) throw Error('App root element not found');
//   // new App(appElement).render();
//   // new App(appElement).start();
//   // new Main(appElement).start();
//   const about = new About(appElement);
// };

import { App } from './pages/app/index';

const app = new App();
app.run();
