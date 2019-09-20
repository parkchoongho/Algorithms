function scope1() {
  let top = "top";
  bottom = "bottom";
  console.log(bottom);
  let bottom;
}

scope1();
