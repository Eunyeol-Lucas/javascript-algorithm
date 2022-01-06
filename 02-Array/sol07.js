function solution(arr) {
  // 2. 봉우리 개수를 카운트할 answer 변수를 0 으로 초기화하여 생성
  let answer = 0;
  let n = arr.length;
  // 사방 탐색에 사용할 dx, dy 배열 생성, (상 우 하 좌) 순서
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  //이중 for 문을 이용해 각 지점에서의 사방 탐색 진행
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        //사방 탐색 중 현재 지역보다 높은 지역이 있다면 flag 변수를 false로 변경하고 반복문 종료
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = false;
          break;
        }
      }
      //  만약 반복문이 중간에 종료되지 않고 무사히 다 탐색이 끝나 flag 변수값이 여전히 true라면 봉우리 숫자 +1 증가
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
