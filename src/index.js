module.exports = function reverse (n) {
    n = Math.abs(n);
    let num = (n + '').split('').reverse().join('');
      return Number(num);
}
