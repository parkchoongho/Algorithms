function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      this.keyMap[index].forEach(ele => {
        if (ele[0] === key) return ele[1];
      });
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    this.keyMap.forEach(bigEle => {
      if (bigEle) {
        bigEle.forEach(ele => {
          if (!valuesArr.includes(ele[1])) valuesArr.push(ele[1]);
        });
      }
    });
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    this.keyMap.forEach(bigEle => {
      if (bigEle) {
        bigEle.forEach(ele => {
          if (!keysArr.includes(ele[0])) keysArr.push(ele[0]);
        });
      }
    });
    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("keek", "#DDA0DD");
ht.set("plum", "#DDA0DD");

ht.get("plum");

console.log(ht.values());
console.log(ht.keys());
// console.log(ht.keyMap);
