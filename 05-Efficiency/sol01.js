// sort 메서드를 통해 정렬을 할 경우 big O는 NlogN이므로 더 적은 시간을 소요해야함.
function solution(N, M, a, b) {
  // 두 배열을 오름차순으로 만들어 출력할 변수 answer를 선언 및 빈 배열로 초기화
  let answer = [];
  // a 배열과 b 배열을 탐색하기 위해 p1과 p2 변수를 선언 및 초기화
  let p1 = (p2 = 0);
  // while문을 통해 answer에 a, b 중 한 배열이 모두 추가될 때까지 순회
  while (p1 < N && p2 < M) {
    if (a[p1] <= b[p2]) answer.push(a[p1++]);
    answer.push(b[p2++]);
  }
  // a 또는 b 배열 중 answer에 추가되지 못한 나머지 요소를 추가
  while (p1 < N) answer.push(a[p1++]);
  while (p2 < M) answer.push(b[p2++]);

  return answer;
}
let N = 3;
let a = [1, 3, 5];
let M = 5;
let b = [2, 3, 6, 7, 9];

console.log(solution(N, M, a, b));
