function solution1(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          path.push(nv);

          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
          path.pop();
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
  const graph = Array.from({ length: n + 1 }, () => []);
  const ch = Array.from({ length: n + 1 }, () => 0);
  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  function dfs(v) {
    if (v === n) {
      answer++;
      return;
    }
    for (const nv of graph[v]) {
      if (ch[nv] === 0) {
        ch[nv] = 1;
        dfs(nv);
        ch[nv] = 0;
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

console.log(solution1(5, arr));
console.log(solution2(5, arr));
