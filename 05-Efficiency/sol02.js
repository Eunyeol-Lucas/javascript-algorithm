function solution(N, M, a, b) {
  // 공통원소를 담을 빈 배열을 가진 answer 변수를 선언
  let answer = [];
  // a와 b 배열을 오름차순으로 각각 정렬
  a.sort();
  b.sort();
  // 투 포인트 탐색을 위해 p1과 p2 변수를 선언하고 초기화
  let p1 = (p2 = 0);
  // while 문을 통해 a 배열과 b 배열을 순회하며 공통원소를 탐색
  while (p1 < N && p2 < M) {
    // if문을 통해 공통 원소인 경우 answer에 추가한 뒤 p1, p2 1씩 증가
    if (a[p1] === b[p2]) {
      answer.push(a[p1++]);
      p2++;
      // 공통 원소가 아닐 경우 a배열의 요소가 b 배열의 요소보다 작은 경우 p1++
    } else if (a[p1] < b[p2]) p1++;
    // 아닐 경우 p2++
    else p2++;
  }

  return answer;
}

let N = 5;
let a = [1, 3, 9, 5, 2];
let M = 5;
let b = [3, 2, 5, 7, 8];

console.log(solution(N, M, a, b));
