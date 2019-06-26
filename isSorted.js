const isSorted = numbers => {
  if (!numbers || numbers.length === 0) throw new Error();

  let lastNumber = null;

  for (number of numbers) {
    if (number < lastNumber) return false;
    else lastNumber = number;
  }
  return true;
};

module.exports = isSorted;
