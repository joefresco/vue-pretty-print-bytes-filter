/* globals Vue */

// optional filter for formatting the bytes in the view
Vue.filter('prettyBytes', function (num, precision) {
  // jacked from: https://github.com/sindresorhus/pretty-bytes
  num = Number(num);
  if (isNaN(num)) {
    throw new TypeError('Expected a number');
  }
  if (isNaN(precision) || (precision === undefined || precision == null)) {
    precision = 3;
  }

  var neg = num < 0;
  var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (neg) {
    num = -num;
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B';
  }

  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);
  num = (num / Math.pow(1000, exponent)).toPrecision(precision) * 1;
  var unit = units[exponent];

  return (neg ? '-' : '') + num + ' ' + unit;
});
