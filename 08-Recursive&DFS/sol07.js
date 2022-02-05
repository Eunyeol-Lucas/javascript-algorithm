// 주어진 시간 내 획득할 수 있는 최대 점수를 구하는 함수
function solution(m, ps, pt) {
  let answer = 0;
  let len = ps.length;
  // ps와 pt 인자를 이진트리로 탐색하는 함수
  function DFS(L, sum, times) {
    // 누적된 시간이 주어진 시간 보다클 경우 반환
    if (times > m) return;
    // 탐색한 깊이가 배열의 길이와 일치할 경우, 누적된 점수와 answer 비교하여 최대점수를 구함
    if (L === len) {
      answer = Math.max(sum, answer);
    } else {
      // 배열의 모든 요소를 탐색하기 위해, 현재 요소를 포함하는 경우
      DFS(L + 1, sum + ps[L], times + pt[L]);
      // 배열의 모든 요소를 탐색하기 위해, 현재 요소를 포함하지 않는 경우
      DFS(L + 1, sum, times);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
