function solution(num, board) {
  let answer = 0;

  function bfs(i, j) {
    const q = [];
    q.push([i, j]);
    board[i][j] = 0;
    while (q.length) {
      const [x, y] = q.shift();
      for (const [dx, dy] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ]) {
        const nx = x + dx;
        const ny = y + dy;
        if (0 <= nx && nx < num && 0 <= ny && ny < num && board[nx][ny]) {
          board[nx][ny] = 0;
          q.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (board[i][j]) {
        answer++;
        bfs(i, j);
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
console.log(solution(7, arr));
