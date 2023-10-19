function buildBoard() {
  let arr;
  for (let positionX = 0; positionX < 8; positionX++) {
    for (let positionY = 0; positionY < 8; positionY++) {
      arr = [positionX, positionY];
      console.log(arr);
    }
  }
  return arr;
}
