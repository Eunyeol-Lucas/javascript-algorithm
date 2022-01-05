function solution(arr) {
  // 출력변수를 생성하고 최소 값을 저장
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  // 배열 내 요소들의 합을 위한 sum1, sum2 변수 생성 후 초기화
  let sum1 = (sum2 = 0);
  // for문을 통해 배열의 가로의 합, 세로의 합을 구함
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    // 현재까지 구한 합 중 최대 값을 answer 변수에 저장
    answer = Math.max(answer, sum1, sum2);
  }
  // sum1, sum2 변수를 초기화
  sum1 = sum2 = 0;
  // for문을 통해 대각선의 합을 구함
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - 1 - i];
  }
  // Math 객체의 max 메서드를 통해 최대 값을 answer 변수에 저장
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
