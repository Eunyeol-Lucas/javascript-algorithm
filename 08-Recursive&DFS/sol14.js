// 조합 구하기
function getCombination(n, m) { 
  let answer = [];
  // 임시로 만들 배열 초기화
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    // 종착점에 오는 경우, answer에 tmp를 복사한것을 추가
    if (L == m) answer.push(tmp.slice());
      // 배열을 순회하며 재귀함수를 통해 조합을 구함
    else {
      for (let i = s; i <= n; i++) {
        // i를 뽑은 것을 기록해둠
        tmp[L] = i;
        // tmp 배열의 첫 번째 자리를 지정한 경우 -> m이 2일 경우 재귀함수를 통해 2번째 자리를 구하고 -> 한 번더 재귀를 통해 접근할 경우
        // depth가 m과 일치하므로, tmp 배열을 복사하여 저장 -> 재귀를 마치고 돌아가서 2번 째 for문을 수행 -> 반복
        DFS(L + 1, i + 1);
      }
    }
  }
  // 첫번째 매개변수에는 depth(깊이 또는 레벨)를, 두번째 매개변수에는 처음 뽑을 숫자의 인덱스
  DFS(0, 1);
  return answer;
}

let N = 4,
  M = 2;
console.log(getCombination(N, M));
