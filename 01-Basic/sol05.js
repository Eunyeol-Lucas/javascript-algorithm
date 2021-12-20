function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  // for 문을 통해 배열에 들어 있는 숫자 탐색
  for (let i = 0; i < arr.length; i++) {
    // if문읕 통해 현재 최소값보다 작을 경우 치소값 교체
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [1, 5, 7, 10, 11, 13, -2];

console.log(solution(arr));
