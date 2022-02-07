import { CORRECT_LEVEL } from '../constants';

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const actionsMixin = {
  data() {
    return { CORRECT_LEVEL };
  },
};
