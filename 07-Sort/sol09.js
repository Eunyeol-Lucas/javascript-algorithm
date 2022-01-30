function solution(arr) {
  let answer = 0;
  timeLine = [];
  // 도착 시간과 출발 시간을 분리하여 저장
  for (let x of arr) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }
  // 도착시간과 출발 시간이 같은 경우, 출발 시간의 사람은 존재 하지 않으므로
  // 출발시간이 도착시간보다 배열의 앞에 위치하게 함
  // 출발 시간과 도착 시간이 같은 사람이 없는 경우 시간 순서로 배열 정렬
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else return a[0] - b[0];
  });

  let tmp = 0;
  // 배열의 요소의 시간이 도착 시간인 경우 임시 변수 tmp를 1 증가
  // 출발 시간인 경우 tmp에서 1 감도
  // tmp가 최대인 경우를 answer 변수에 할당
  for (let x of timeLine) {
    if (x[1] === "s") {
      tmp++;
      answer = Math.max(answer, tmp);
    } else tmp--;
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 15],
];
console.log(solution(arr));
