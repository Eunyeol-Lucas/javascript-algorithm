function solution(N, M, arr) {
  // 선물을 사 줄 수 있는 학생수를 구한 변수 answer를 선언하고 0으로 초기화
  let answer = 0;
  // 상품의 가격과 배송비가 적은 경우를 포함해야 최대 개수가 되므로, 상품의 가격과 배송비의 합을 기준으로 배열을 정렬
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  // for 문을 통해 arr 배열 탐색
  for (let i = 0; i < N; i++) {
    // 배열의 첫 번째 상품의 가격부터 반 가격 쿠폰을 사용했을 경우, 남은 총 예산을 담을 cost 변수 선언 및 잔여 예산 할당
    let cost = M - (arr[i][0] / 2 + arr[i][1]);
    // 선물을 사 줄 수 있는 학생들의 수를 계산할 cnt 변수를 선언하고 반값할인을 받은 상품을 기준으로 1 할당
    let cnt = 1;
    // 이중 for 문을 통해 반값 할인을 받은 상품을 제외한 배열 탐샋
    for (let j = 0; j < N; j++) {
      // if문을 통해 반값 할인을 받은 상품을 제외하고, 상품의 가격과 배송비의 합이 잔여 예산보다 클 경우 for문을 탈출
      if (j !== i && arr[j][0] + arr[j][1] > cost) break;
      // if문을 통해 상품의 가격과 배송비의 합이 잔여 예산보다 작으면, cnt를 1 추가하고, 예산에서 해당 비용을 뺌
      if (j !== i && arr[j][0] + arr[j][1] <= cost) {
        cost -= arr[j][0] + arr[j][1];
        cnt += 1;
      }
    }
    // 현재 answer와 선물을 사줄 수 있는 학생의 수 중 큰 수를 answer에 재할당
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let N = 5,
  M = 28,
  arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ];

console.log(solution(N, M, arr));
