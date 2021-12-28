function solution(str) {
  let answer = "";
  for (let i of str) {
    if (!answer.includes(i)) {
      answer += i;
    }
  }

  return answer;
}

let str = "ksekkset";

console.log(solution(str));
