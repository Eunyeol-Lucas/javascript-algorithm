function solution(n, m, arr) {
  // 연속 부분수열을 계산할 answer 변수 선언하고 0으로 초기화
  // 연속 부분 수열의 합을 할당할 sum 변수를 0으로 초기화
  // 투 포인터 중 왼쪽 포인터 위치를 0으로 초기화
  let answer = 0,
    sum = 0,
    lt = 0;
  // for 문을 사용하여 오른쪽 포인터 rt를 움직여 m 값을 넘지 않는 부분 수열 개수를 확인
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    // sum 값이 m을 넘으면 lt 포인터를 증가시키고 그 값 만큼 sum에서 감소시켜 값이 m 이하가 되도록 함
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let N = 5,
  M = 5,
  arr = [1, 3, 1, 2, 3];
console.log(solution(N, M, arr));
