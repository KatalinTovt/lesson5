function count() {
  let a = 0;
  return function memory(x) {
    a = a + x;
    console.log('Count = ', a);
  }
}

let sum = count();
sum(3);
sum(5);
sum(228);