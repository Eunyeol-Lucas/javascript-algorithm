function solution(board, moves) {
  // 터트려진 인형의 개수를 구하기 위한 answer 변수를 선언하고 0으로 초기화
  // 인형을 담을 stack을 선언 및 빈 배열로 초기화
  let answer = 0,
    stack = [];
  // forEach 메서드를 이용하여 moves 객체를 순회
  moves.forEach((position) => {
    // for 문을 통해 board 객체 순회
    for (let i = 0; i < board.length; i++) {
      // board의 i행 position - 1 열이 0이 아닐 경우
      if (board[i][position - 1] !== 0) {
        // 해당 행열의 수를 임시 변수에 할당
        let temp = board[i][position - 1];
        // 해당 행열을 0으로 재할당
        board[i][position - 1] = 0;
        // 임시변수가 stack의 마지막 요소와 같을 경우 해당 요소를 제거하고 터트려진 인형이 2개이므로 + 2
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
          // stack의 마지막 요소와 다를 경우 stack에 추가
        } else stack.push(temp);
        // stack에 요소를 추가하거나, 제거하는 경우 다음 탐색을 위해 해당 for문 stop
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
