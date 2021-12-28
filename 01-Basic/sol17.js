function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }
  return answer;
}

let num = 5;
let arr = ["good", "time", "good", "time", "student"];

console.log(solution(arr));
