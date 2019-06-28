const switchOperator = (operator) => {
  switch (operator) {
    case '*': return 'mul';
    case '-': return 'sub';
    case '+': return 'add';
    case '/': return 'div';
    case '%': return 'mod';
    case '**': return 'pow';
    default: throw new Error(`auto-decimal-js can't support ${operator}`);
  }
};

export default function (babel) {
  const { types: t } = babel;

  function createDecimalCallee(decimalIdentifier, number) {
    return t.callExpression(t.identifier(decimalIdentifier.name), [number]);
  }

  const createCallExpression = (left, operator, right) => (
    t.callExpression(
      t.memberExpression(
        left,
        t.identifier(switchOperator(operator)),
      ),
      right,
    )
  );

  const newExpressionVisitor = {
    BinaryExpression(bPath, state) {
      const { left, right, operator } = bPath.node;
      const callExpressionArgs = [right];
      const isBinaryLeft = t.isBinaryExpression(left);

      const isBinaryRight = t.isBinaryExpression(right);

      if (isBinaryLeft) {
        bPath.replaceWith(createCallExpression(left, operator, callExpressionArgs));
        return;
      }

      if (isBinaryRight) {
        if (isBinaryLeft) {
          bPath.replaceWith(createCallExpression(left, operator, callExpressionArgs));
          return;
        }
      }

      bPath.replaceWith(
        createCallExpression(
          createDecimalCallee(state.decimalIdentifier, left),
          operator,
          callExpressionArgs,
        ),
      );
    },
  };

  return {
    name: 'babel-plugin-auto-decimal-js',
    visitor: {
      ImportDeclaration(path, state) {
        const { node } = path;
        if (node.source && node.source.value.toUpperCase().indexOf('DECIMAL') > -1) {
          state.decimalIdentifier = node.specifiers[0].local;  // eslint-disable-line
        }
      },
      'CallExpression|NewExpression' (path, state) {  // eslint-disable-line
        const { node } = path;
        if (!state.decimalIdentifier) {
          return;
        }
        if (
          node.callee.name === state.decimalIdentifier.name
          && t.isBinaryExpression(node.arguments[0])
        ) {
          path.traverse(newExpressionVisitor, state);
          path.replaceWith(
            node.arguments[0],
          );
        }
      },
    },
  };
}
