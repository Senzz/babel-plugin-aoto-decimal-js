import Decimal from 'decimal.js';

const getNum = () => {
  return 10;
}

const test0 = new Decimal(0.57 * 100);
const test1 = Decimal(0.57 * 100);
const test2 = Decimal(10 * 20 * 30 * '50' * getNum());
const test3 = Decimal(10 * 20 * 30 - '50' * getNum());
const test4 = Decimal(10 - 10 * 30);
const test5 = Decimal((10 - 10 * 30) * 30 * (20 - 10)).toFixed(3, 1);
const test6 = Decimal(10 / 2 * 3 - 5 * 20 / 3.3);
const test7 = Decimal(20 % 3 * 11);
const test8 = Decimal(30 * 2 ** 2);