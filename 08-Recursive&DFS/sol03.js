// 전위 순회 : 부 왼 오
// 중위 순회 : 왼 부 오
// 후위 순회 : 왼 오 부

function solution(n) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    DFS(v * 2);
    DFS(v * 2 + 1);
    console.log(v);
  }
  DFS(n);

  return answer;
}

console.log(solution(1));
