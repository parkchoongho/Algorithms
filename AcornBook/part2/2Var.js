function scope2(print) {
  if (print) {
    var insideIf = "12";
  }
  console.log(insideIf);
}

scope2(true);
