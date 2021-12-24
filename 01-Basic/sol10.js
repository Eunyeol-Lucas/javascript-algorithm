function solution(str, alp) {
  let answer = 0;
  for (let x of str) {
    if (x === alp) {
      answer++;
    }
  }

  return answer;
}

let str = "COMPUTERPROGRAMMING",
  alp = "R";

console.log(solution(str, alp));
