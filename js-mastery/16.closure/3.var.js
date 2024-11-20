function loop() {
  const array = [];

  // var와 let의 차이점
  // block scope
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
