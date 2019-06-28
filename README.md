# babel-plugin-auto-decimal-js
automatically help you deal with decimal. 
solve the floating point problem

## why
- solve the tedious decimal.js code
- can solve the floating point problem like this

```javascript
// problem
Decimal(0.57 * 100).toNumber() // 56.999999999

// use this plugin to translate
Decimal(0.57).mul(100).toNumber() // 57
```

## Usage
```
import Decimal from 'decimal.js';

const getNum = () => {
  return 10;
}

const test1 = Decimal(0.57 * 100);
const test2 = new Decimtal(10 * 20 * 30 * '50' * getNum());
const test3 = new Decimal(10 * 20 * 30 - '50' * getNum());
const test4 = new Decimal(10 - 10 * 30);
const test5 = new Decimal((10 - 10 * 30) * 30 * (20 - 10)).toFixed(3, 1);
const test6 = new Decimal(10 / 2 * 3 - 5 * 20 / 3.3);
const test7 = new Decimal(20 % 3 * 11);
const test8 = new Decimal(30 * 2 ** 2);

    ↓ ↓ ↓ ↓ ↓ ↓
    
import Decimal from 'decimal.js';

const getNum = () => {
  return 10;
};

const test1 = Decimal(0.57).mul(100);
const test2 = new Decimtal(10 * 20 * 30 * '50' * getNum());
const test3 = Decimal(10).mul(20).mul(30).sub(Decimal('50').mul(getNum()));
const test4 = Decimal(10).sub(Decimal(10).mul(30));
const test5 = Decimal(10).sub(Decimal(10).mul(30)).mul(30).mul(Decimal(20).sub(10)).toFixed(3, 1);
const test6 = Decimal(10).div(2).mul(3).sub(Decimal(5).mul(20).div(3.3));
const test7 = Decimal(20).mod(3).mul(11);
const test8 = Decimal(30).mul(Decimal(2).pow(2));