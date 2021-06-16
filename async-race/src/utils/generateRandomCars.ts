import { ICar } from '../shared/types';

const models = [
  'Ford',
  'Rolls-Royce',
  'Alfa Romeo',
  'Bugatti',
  'Cadillac',
  'Jaguar',
  'Aston Martin',
  'Ford Shelby',
  'Studebaker',
  'Mersedes Benz',
];
const names = ['Model T', 'Phantom', '8C', 'Veyron', 'Eldorado', 'E-Type', 'DB5', 'Mustang', 'Commander', 'W123'];

const getRandomName = (): string => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];

  return `${model} ${name}`;
};

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const generateRandomCars = (count = 100): ICar[] =>
  new Array(count).fill(1).map(() => {
    return { name: getRandomName(), color: getRandomColor() };
  });

export default generateRandomCars;
