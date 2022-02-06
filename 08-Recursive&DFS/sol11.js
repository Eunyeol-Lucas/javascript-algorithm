// 팩토리얼을 구하는 함수
function solution(n) {
  let answer = 0;
  function DFS(n) {
    if (n === 1) return 1;
    // 인자 * 인자 -1 재귀함수의 값을 곱함
    return n * DFS(n - 1);
  }
  answer = DFS(n);

  return answer;
}

let n = 5;
console.log(solution(n));
