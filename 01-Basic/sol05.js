function solution1(arr) {
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

function solution2(arr) {
  // Math 객체의 min 메서드를 통해 배열을 전개 구문을 통해 복사하여 최소값을 찾음
  let answer = Math.min(...arr);

  return answer;
}

let arr = [1, 5, 7, 10, 11, 13, -2];
console.log(solution1(arr));
console.log(solution2(arr));
