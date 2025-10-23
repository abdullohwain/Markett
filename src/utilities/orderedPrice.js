const numberSpace = (num) => {
  num = num.toString();
  let newNum = "";
  let count = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    count++;
    newNum += num[i];
    if (count % 3 === 0 && count != 0) {
      newNum += " ";
    }
  }
  return newNum.split("").reverse().join("");
};
export default numberSpace