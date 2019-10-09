function reverse(str) {
  if (str.length === 1) return str[0];
  let sumStr = str[str.length - 1];
  return sumStr + reverse(str.slice(0, str.length - 1));
}
console.log(reverse("HiiiiKO"));
