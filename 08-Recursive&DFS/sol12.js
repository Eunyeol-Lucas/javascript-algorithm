function solution(n, r) {
  let answer = 0;
  // 메모이제이션 필요
  // 재귀함수를 통해 이미 계산된 값이라면 그것을 저장해둘 배열을 만듦.
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    // 배열에 존재하는 값일 경우 그 값을 반환
    if (dy[n][r]) return dy[n][r];
    // n과 r이 일치하거나 r이 0일 경우의 조합은 1이므로, 1 반환
    if (n === r || r === 0) return 1;
    // 재귀함수를 통해 값을 구함
    return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);

  return answer;
}

let n = 33,
  r = 19;

console.log(solution(n, r));
