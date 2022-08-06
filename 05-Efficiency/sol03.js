function solution1(N, M, arr) {
  // 연속부분수열의 개수를 담을 변수 answer를 선언하고 0을 할당
  // 배열에서 for문의 인덱스를 얕은 복사를 하기 위한 변수 l
  let answer = 0,
    l = 0;
  //for문을 통해 배열 탐색
  for (let i = 0; i < N; i++) {
    // sum 변수를 선언하고 배열의 i 번째 요소를 sum 변수에 추가
    let sum = arr[i];
    // 연속부분수열의 합이 N이 되는 경우 answer + 1
    if (sum === M) answer++;
    // i를 얕은복사함.
    l = i;
    // while문을 통해 해당 요소까지의 합이 M보다 작을 경우
    // sum이 특정숫자 M보다 작을 경우
    while (sum <= M) {
      // aa[i] 이후의 배열을 sum에 추가 후 l은 1 증가
      sum += arr[l + 1];
      l++;
      // if 문을 통해 sum이 M과 같을 경우 answer + 1
      if (sum === M) answer++;
    }
  }

  return answer;
}

function solution2(N, M, arr) {
  // answer를 선언하고 배열의 왼쪽에서 이동할 lt 및 요소의 합을 담을 변수 sum을 선언
  let answer = 0,
    lt = 0,
    sum = 0;
  // for 문을 통해 배열 탐색
  for (let rt = 0; rt < N; rt++) {
    // 요소의 값을 sum 변수에 추가
    sum += arr[rt];
    // sum 변수가 M과 같을 경우 answer + 1
    if (sum === M) answer++;
    // while문을 통해 sum이 M보다 크거나 같을 경우
    while (sum >= M) {
      // 현재까지 합에서 합에 포함된 요소의 가장 왼쪽을 뺌
      sum -= arr[lt++];
      // if 문을 통해 sum과 M이 같을 경우 answer + 1
      if (sum === M) answer++;
    }
  }
  return answer;
}

function solution3(N, M, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < N; rt++) {
    sum += arr[rt];
    if (sum === M) answer++;
    while (sum >= M) {
      sum -= arr[lt++];
      if (sum === M) answer++;
    }
  }
  return answer;
}
let N = 8,
  M = 6,
  arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution1(N, M, arr));
console.log(solution2(N, M, arr));
console.log(solution3(N, M, arr));
