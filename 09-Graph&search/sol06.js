function solution(num, board) {
  let answer = 0;
  const ch = Array.from({ length: num }, () => Array(num).fill(0));

  function dfs(x, y) {
    // 좌 하 우 상 대각선($)종류 순회
    for (const [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1],
    ]) {
      let nx = x + dx;
      let ny = y + dy;
      // 유효할 경우 다음 dfs로 이동
      if (
        nx >= 0 &&
        nx < num &&
        ny >= 0 &&
        ny < num &&
        ch[nx][ny] === 0 &&
        board[nx][ny] === 1
      ) {
        ch[nx][ny] = 1;
        dfs(nx, ny);
      }
    }
  }
  // 2중 for 문을 순회하며 해당 좌표의 숫자가 1이고, 아직 방문하지 않았을 경우 깊이 우선 탐색 실시
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (board[i][j] === 1 && ch[i][j] === 0) {
        dfs(i, j);
        answer++;
      }
    }
  }
  return answer;
}

function solution2(num, board) {
  let answer = 0;
  function dfs(x, y) {
    for (const [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, -1],
      [-1, 1],
    ]) {
      let nx = x + dx;
      let ny = y + dy;
      // 유효할 경우 다음 dfs로 이동
      if (nx >= 0 && nx < num && ny >= 0 && ny < num && board[nx][ny] === 1) {
        board[nx][ny] = 0; // board가 1인 경우, 0으로 변경하여 다시 이동하지 못하도록 수정
        dfs(nx, ny);
      }
    }
  }
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (board[i][j] === 1) {
        dfs(i, j);
        answer++;
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
console.log(solution2(7, arr));
