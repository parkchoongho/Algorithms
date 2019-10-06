function areThereDuplicates(...arr) {
  let arrObj = {};
  for (let i of arr) {
    if (!arrObj[i]) arrObj[i] = 1;
    else return true;
  }
  return false;
}

areThereDuplicates(6, 7, 8, 6, 5);
areThereDuplicates("opopo", 6, 7, 8);
