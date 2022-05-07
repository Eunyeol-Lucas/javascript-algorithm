// 경로 탐색(인접리스트)
// 1번 정점에서 5번 정점으로 가는 가지수를 구하는 문제
// 그래프에서 중요한 것은 행 -> 열 방향으로 이동
function solution(n, arr) {
  let answer = 0;
  // 인자를 담을 2차원 배열을 선언
  let graph = Array.from({ length: n + 1 }, () => Array(5).fill(0));
  // 해당 위치 방문 여부 체크리스트
  let ch = Array.from({ length: n + 1 }, () => 0);
  // arr을 순회하며 graph 2차원 배열의 인덱스에 1을 삽입
  for ([a, b] of arr) {
    graph[a][b] = 1;
  }

  // 그래프를 순회하며 재귀적으로 1번 정점에서 5번 정점으로 가는 경우 answer + 1
  function DFS(v) {
    if (v === n) answer++;
    else {
      // graph 배열을 순회하며, v행 i열에 1있고, 방문하지 않은 노드일 경우에 다음 요소로 이동
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          // 재귀함수를 통해 다음 행으로 이동
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);

  return answer;
}

function solution2(n, arr) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => Array(5).fill(0));
  const ch = Array(n + 1).fill(0);
  for (const [a, b] of arr) {
    graph[a][b] = 1;
  }
  function dfs(v) {
    if (v === n) {
      answer++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (graph[v][i] && !ch[i]) {
        ch[i] = 1;
        dfs(i);
        ch[i] = 0;
      }
    }
  }
  ch[1] = 1;
  dfs(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution2(5, arr));
