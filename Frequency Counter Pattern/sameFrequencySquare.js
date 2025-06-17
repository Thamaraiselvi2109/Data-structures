// first i have to check the length of the two arrays is true proceed further false return the fn
// then i simplify the repeated values to avoid taking same square for 2 values
// after simplification loop the first simplified array and square the number if the squared number is not in second simplified array return the fn false if same print true

const sameFrequencySquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return `length of the array is not matched, ${false}`;
  }

  const freq1 = {};
  const freq2 = {};

  for (let num of arr1) {
    freq1[num] = (freq1[num] || 0) + 1;
  }

  for (let num of arr2) {
    freq2[num] = (freq2[num] || 0) + 1;
  }

  for (let key in freq1) {
    let squared = key ** 2;
    if (!(squared in freq2)) {
      return `square value ${squared} is not found, ${false}`;
    }
    if (freq2[squared] !== freq1[key]) {
      return `frequency of square value ${squared} does not match, ${false}`;
    }
  }

  return `${true}, all the square values are matched`;
};

console.log(sameFrequencySquared([1, 2], [1, 4, 9])); // true
console.log(sameFrequencySquared([1, 2, 2], [1, 4, 4])); // true
console.log(sameFrequencySquared([1, 2, 2], [1, 4, 9])); // false
