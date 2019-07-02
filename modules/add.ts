import { format } from '../lib/utils.js';

const add = (a: number, b: number) => {
  const ab = format(a, b);
  console.log(ab);
  return a + b;
};

export default add;
