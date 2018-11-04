export default function (x, y, operation) {
  const ops = {
    'addition': ['+', x + y],
    'subtraction': ['-', Math.abs(x - y)],
    'multiplication': ['*', x * y],
    'division': ['/', x]
  };
  console.log(ops[operation])
  return ops[operation];
};