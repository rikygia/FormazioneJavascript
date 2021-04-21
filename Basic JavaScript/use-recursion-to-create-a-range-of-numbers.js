function rangeOfNumbers(startNum, endNum) {
  if(startNum==endNum)
    return [startNum];
  let arr=rangeOfNumbers(startNum,endNum-1);
  arr.push(endNum);
  return arr;
};