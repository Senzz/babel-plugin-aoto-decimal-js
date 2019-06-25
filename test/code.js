import Decimal from 'decimal.js'

const a = new Decimal(2).mul(10)
const b = new Decimal(0.57 * 100).mul(20)
const d = new Decimal(100 * '.57')
const e = new Decimal(a - 3 * 4 / 5)
const f = new Decimal(3 * 4 + 10 - a / 5)
const g = new Decimal(5 + 10 * 20).toFixed()
const pow = new Decimal(2 ** 10);
const mod = new Decimal(10 % 3);