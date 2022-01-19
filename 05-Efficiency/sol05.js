function solution(n, m, arr) {
  // 3일간 최대 매출액을 출력할 answer 변수를 선언하고 0으로 초기화
  // 3일간 매출액의 합을 계산할 sum 변수 선언 및 0으로 초기화
  let answer = 0,
    sum = 0;
  // for문을 통해 arr 배열을 요소 m까지의 합을 구함
  for (let rt = 0; rt < m; rt++) sum += arr[rt];
  // 현재까지 3일 최대 매출액 sum을 answer에 할당
  answer = sum;
  // for문을 통해 배욜의 m번 요소 이후 m개의 요소의 합을 구함
  for (let i = m; i < n; i++) {
    sum += arr[i] - arr[i - m];
    // 현재 answer와 sum의 갑 중 큰 값을 answer에 할당
    answer = Math.max(answer, sum);
  }

  return answer;
}

let N = 5,
  M = 3,
  arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(N, M, arr));
