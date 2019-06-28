import { transformFileSync, transform } from "@babel/core";
import { join } from 'path';
import plugin from '../src/index';

import { readdirSync, readFileSync } from 'fs';
describe('index', () => {
  const modulesDir = join(__dirname, 'modules');
  const modules = readdirSync(modulesDir);

  modules.map(caseName => {
    const moduleDir = join(modulesDir, caseName);
    const actualFile = join(moduleDir, 'actual.js');
    const expectedFile = join(moduleDir, 'expected.js');
    
    it(`should work with ${caseName}`, () => {
      const actualCode = (() => {
        return transformFileSync(actualFile, {
          presets: ['@babel/preset-react'],
          plugins: [plugin]
        }).code;
      })();

      const expectedCode = readFileSync(expectedFile, 'utf-8');
      expect(actualCode.trim()).toEqual(expectedCode.trim())
    })
  })
})

// const a = new Decimal(2).mul(10)
// const b = new Decimal(0.57 * 100).mul(20)
// const d = new Decimal(100 * '.57')
// const e = new Decimal(a - 3 * 4 / 5)
// const f = new Decimal(3 * 4 + 10 - a / 5)
// const g = new Decimal(5 + 10 * 20).toFixed()
// const pow = new Decimal(2 ** 10);
// const mod = new Decimal(10 % 3);