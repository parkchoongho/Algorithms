// let array = ["cow", "monkey", "lion", "tiger", "biber"];

// let revisedArray = array.splice(2, 2, ["elephant"], { cat: "sad" });

// console.log(revisedArray);
// console.log(array[3].cat);

const findSum = (arr, num) => {
  arr.forEach((ele, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (ele + arr[i] === num) return console.log(index, i);
    }
  });
  return -1;
};

findSum([0, 9, 2, 3, 4, 5, 4], 7);
