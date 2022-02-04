// 바둑이들을 태울 수 있는 가장 무거운 무게를 구하는 함수
function solution(limitWeight, Dogs) {
  let answer = 0;
  let len = Dogs.length;
  // Dogs 인자로 전달받는 배열을 이진트리로 탐색하는 함수
  function DFS(L, weights) {
    // 현재까지 합한 바둑이들의 무게가 제한 무게보다 높을 경우 return
    if (weights > limitWeight) return;
    // 모든 배열을 탐색한 결과 현재까지 합과 answer에 저장된 무게 중 더 무게가 높은 것을 answer에 저장
    if (L === len) {
      answer = Math.max(weights, answer);
      // 모든 배열을 탐새하기 위해 인덱스를 1 증가시키고, 현재 인덱스의 바둑이 무게를 추가 하는 경우
    } else {
      DFS(L + 1, weights + Dogs[L]);
      // 현재 인덱스의 바둑이 무게를 추가하지 않는 경우
      DFS(L + 1, weights);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
