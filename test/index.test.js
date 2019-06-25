const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const decimalPlugin = require('../src/index');

const code = fs.readFileSync(path.resolve(__dirname, './code.js'), 'utf-8');

const result = babel.transform(code, {
  plugins: [
    [
      decimalPlugin
    ]
  ]
})

console.log(result.code);