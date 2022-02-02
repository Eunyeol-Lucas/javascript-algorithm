function solution(number) {
  let answer = [];
  function DFS(L) {
    if (L === 1) {
      answer.push(L);
      return;
    }
    DFS(L - 1);
    answer.push(L);
  }

  DFS(number);
  return answer;
}

let n = 3;
console.log(solution(n));
