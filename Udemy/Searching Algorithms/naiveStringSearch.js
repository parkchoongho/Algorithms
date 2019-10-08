function naiveStringSearch(str, pattern) {
  let count = 0;
  if (str.length < pattern.length) return count;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("popopodpopopodjd", "pppp"));
