// for 문을 통해 1부터 N 까지 합을 도출
function solution(n) {
  let answer = 0;
  for (let num = 1; num <= n; num++) {
    answer = num + answer;
  }
  return answer;
}

let n = 5;
console.log(solution(n));
