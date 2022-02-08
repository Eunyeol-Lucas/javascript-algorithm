function solution(n, f) {
  let answer,
    flag = 0;
  // 조합수를 구하기 위해 이미 계산한 자료를 저장하는 배열
  let dy = Array.from(Array(n), () => Array(n).fill(0));
  // 순열 배열을 돌기위한 체크 배열
  let visited = Array.from({ length: n + 1 }, () => 0);
  // 순열 저장
  let combinations = Array.from({ length: n }, () => 0);
  // 조합 수
  let permutations = Array.from({ length: n }, () => 0);
  // 1. 파스칼 삼각형의 조합 수 구하기
  // 2. 조합수를 통해 DFS를 돌며 순열 계산
  // 조합 nCr = n-1Cr-1 + n-1Cr을 통해 조합수를 구하는 함수
  function get_combination_num(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    return (dy[n][r] =
      get_combination_num(n - 1, r - 1) + get_combination_num(n - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = permutations.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        // 중복 없는 순열을 구하기 위해 방문 체크
        if (visited[i] === 0) {
          visited[i] = 1;
          permutations[L] = i;
          // sum + 4개의 경우 [1, 3, 3, 1]로 해당 요소의 값 * 조합수의 요소(ex, 3 * 2)
          DFS(L + 1, sum + permutations[L] * combinations[L]);
          visited[i] = 0;
        }
      }
    }
  }
  // i가 n 일때 combination함수를 통해 조합수를 구함
  // ex, n = 4일 때 파스칼의 삼각형에서 최하단의 값은 최상단 숫자들의 3C0, 3C1, 3C2, 3C3 각각 곱의 합
  for (let i = 0; i < n; i++) {
    combinations[i] = get_combination_num(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}

let n = 4,
  f = 16;
console.log(solution(n, f));
