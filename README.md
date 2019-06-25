# babel-plugin-auto-decimal-js
automatically help you deal with decimal

## Usage
```
import Decimal from 'decimal.js'
// import Decimal from 'decimal.js-light'

const a = new Decimal(2).mul(10)
const b = new Decimal(0.57 * 100).mul(20)
const d = new Decimal(100 * '.57')
const e = new Decimal(a - 3 * 4 / 5)
const f = new Decimal(3 * 4 + 10 - a / 5)
const g = new Decimal(5 + 10 * 20).toFixed()
const pow = new Decimal(2 ** 10)
const mod = new Decimal(10 % 3)

    ↓ ↓ ↓ ↓ ↓ ↓

const a = new Decimal(2).mul(10);  // no change
const b = new Decimal(new Decimal(0.57).mul(100)).mul(20);
const d = new Decimal(new Decimal(100).mul('.57'));
const e = new Decimal(new Decimal(a).sub(new Decimal(new Decimal(3).mul(4)).div(5)));
const f = new Decimal(new Decimal(new Decimal(new Decimal(3).mul(4)).add(10)).sub(new Decimal(a).div(5)));
const g = new Decimal(new Decimal(5).add(new Decimal(10).mul(20))).toFixed();
const pow = new Decimal(new Decimal(2).pow(10));
const mod = new Decimal(new Decimal(10).mod(3));
