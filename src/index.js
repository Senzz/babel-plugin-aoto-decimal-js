const switchOperator = (operator) => {
  switch (operator) {
    case '*': return 'mul';
    case '-': return 'sub';
    case '+': return 'add';
    case '/': return 'div';
    case '%': return 'mod';
    case '**': return 'pow';
  }
}

module.exports = function (babel) {
  const { types: t } = babel;
  const decimalIdentifier = t.identifier('Decimal')
  function createDecimalCallee (number) {
   	return t.newExpression(decimalIdentifier, [number])
  }
  return {
    name: "ast-transform", // not required
    visitor: {
      NewExpression(path) {
        const { node } = path
        if (node.callee.name === 'Decimal' && t.isBinaryExpression(node.arguments[0])) {
          path.traverse({
            BinaryExpression(bPath) {
              const { left, right, operator } = bPath.node
              let _left, _right
              _left = createDecimalCallee(left)

              _right = [right]

              bPath.replaceWith(
                t.callExpression(
                  t.memberExpression(
                    _left,
                    t.identifier(switchOperator(operator))
                  ),
                  _right
                )
              )
            }
          })
        }
      }
    }
  };
}