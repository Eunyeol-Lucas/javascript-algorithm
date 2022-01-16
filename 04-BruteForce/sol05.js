function solution(n, k, card) {
  // k 번째로 큰 수를 출력할 변수 answer를 선언하고 초기화, 카드에 적힌 수의 합을 중복없이 기록하기 위해 tmp 변수에 set() 객체 할당
  let answer = 0,
    tmp = new Set();
  // 3문 for문을 통해 card 배열의 3장 뽑는 경우를 탐색
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let o = j + 1; o < n; o++) {
        // tmp 객체에 3장의 카드의 숫자 합을 추가
        tmp.add(card[i] + card[j] + card[o]);
      }
    }
  }
  // 3장의 카드 숫자의 합을 내림 차순으로 정렬하고 sumArr 변수에 할당
  let sumArr = Array.from(tmp).sort((a, b) => b - a);
  // 배열에서 k 번째 로 큰 수 answer에 재 할당
  answer = sumArr[k - 1];

  return answer;
}
let N = 10,
  K = 3,
  arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(N, K, arr));
