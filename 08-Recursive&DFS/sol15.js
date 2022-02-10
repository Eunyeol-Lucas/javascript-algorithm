// 수들의 조합
function getCountOfPermutation1(n, k, arr, m) {
  let answer = 0;
  // 조합을 모을 배열 result를 선언 및 초기화
  let result = [];
  // 조합 구성할 임시 배열
  let tmp = Array.from({ length: k }, () => 0);
  // 조합을 구하는 재귀함수
  function DFS(L, s) {
    if (L === k) result.push(tmp.slice());
    else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  // result를 순회하며 요소의 합이 6의 배수일 경우 answer + 1
  for (let x of result) {
    total = x.reduce((a, b) => a + b);
    if (!(total % m)) answer += 1;
  }

  return answer;
}

let N = 5,
  K = 3;
let arr = [2, 4, 5, 8, 12];
let M = 6;
console.log(getCountOfPermutation1(N, K, arr, M));
