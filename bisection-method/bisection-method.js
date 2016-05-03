// 二分法

// 有効数字6桁
const digit = 6;

// x^3 - 2(x^2) - x + 2 = 0
function f(x) {
  return Math.pow(x, 3) - (2 * Math.pow(x, 2)) - x + 2
}

function equalZero(value) {
  return value === 0;
}

function resolve(left, right, results) {
  const middle = left + (Math.abs(left - right) / 2);
  const values = [
    left.toPrecision(digit),
    middle.toPrecision(digit),
    right.toPrecision(digit)
  ];
  const result = [
    f(left),
    f(middle),
    f(right)
  ];

  results.push(values.concat(result));

  if (result.some(equalZero) || values.every(function(val) {
    return val === values[0];
  })) {
    return results;
  } else {
      if (result[1] < 0) {
        return resolve(left, middle, results);
      } else {
        return resolve(middle, right, results);
      }
  }
}

console.table(resolve(0.9, 1.2, []));
