function solution(n, arr) {
  let answer = "NO",
    flag = 0;
  let totalSum = arr.reduce((a, b) => a + b);
  // L = 레벨(탐색하는 인덱스로 사용), sum = 합
  function DFS(L, sum) {
    // flag가 true일 경우 return함.
    if (flag) return;
    if (L === n) {
      // 전체 합에서 현재까지의 합을 뺀 경과가
      if (totalSum - sum === sum) {
        answer = "YES";
        // 답을 구헀을 때 더이상 재귀를 돌 필요가 없으므로 flag를 통해 재귀를 멈추도록함.
        flag = 1;
      }
    } else {
      // sum에 현재 인덱스의 요소를 더한 것과 더하지 않은 것으로 재귀 함수를 동작
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let n = 6;
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(n, arr));
