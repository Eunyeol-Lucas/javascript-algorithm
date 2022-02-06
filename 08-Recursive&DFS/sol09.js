// 거스름돈을 가장 적은 수로 주는 개수를 구하는 함수
function solution(arr, change) {
  let answer = Number.MAX_SAFE_INTEGER;
  let len = arr.length;
  // L = 동전을 몇개나 사용하는지, sum = 누적 금액
  function DFS(L, sum) {
    // 거스름돈 금액을 초과할 경우 return
    if (sum > change) return;
    if (L >= answer) return;
    // 최소 개수로 answer 갱신
    if (sum === change) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < len; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
let change = 15;
console.log(solution(arr, change));
