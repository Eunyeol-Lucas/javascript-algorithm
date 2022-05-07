function solution(board) {
  let answer = 0;
  const di = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(x, y) {
    if (x > 7 || y > 7) return;
    if (x === 6 && y === 6) {
      answer++;
      return;
    }
    for (const [dx, dy] of di) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        dfs(nx, ny);
        board[nx][ny] = 0;
      }
    }
  }

  board[0][0] = 1;
  dfs(0, 0);
  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
