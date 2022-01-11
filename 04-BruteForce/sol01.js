function solution(arr) {
  // 자릿수의 합이 가장 큰 숫자를 담을 변수 answer를 선언하고, 최대값을 비교하기 위해 가장 적은 값을 max 변수에 할당
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  // for문을 통해 요소를 탐색
  for (let x of arr) {
    // 자리숫의 합을 담을 변수 sum을 초기화하고, 임시 변수 tmp에 배열의 요소를 할당
    let sum = 0,
      tmp = x;
    // tmp가 0이 아닐 경우 10으로 나누어 나머지를 sum 변수에 추가하고, 몫을 tmp에 재할당하여 0이 될때까지 반복
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    // if문을 통해 자리수의 합이 최대값 max보다 클 경우
    if (sum > max) {
      // max 변수에 sum을 재할당하고 출력될 변수 answer에 최대값 요소를 할당
      max = sum;
      answer = x;
      // sum이 max 값과 같을 경우 요소 x가 answer 보다 클 경우 answer 변수에 x 요소를 재할당
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

const n = 7;
const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
