function solution(N, M, arr) {
  // 짝을 만들 수 있는 경우수의 담을 변수 answer를 선언하고 0을 할당
  let answer = 0;
  // 이중 for문을 통해 짝을 만들 수 있는지 탐색
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let cnt = 0;
      // for문을 통해 시험마다 멘토가 멘티보다 더 높은 점수이면 cnt를 1 증가
      for (let k = 0; k < M; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < N; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      // 모든 결과를 확인한 뒤, cnt 값이 시험 횟수 M과 같다면 멘토, 멘티 짝이 가능하므로 answer를 1 증가
      if (cnt === M) answer++;
    }
  }
  return answer;
}

let N = 4,
  M = 3,
  arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ];
console.log(solution(N, M, arr));
