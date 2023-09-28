function findDupChar(str) {
    str = str.toLowerCase();
  
    const obj = {};
    const res = [];
  
    for (const char of str) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  
    for (const char in obj) {
      if (obj[char] === 2) {
        res.push(char);
      }
    }
  
    return res;
  }
  
  module.exports = findDupChar;
  