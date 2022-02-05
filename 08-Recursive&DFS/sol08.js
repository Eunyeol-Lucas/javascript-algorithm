// 순열을 구하는 함수
function solution(n, m) {
  let answer = [];
  // 주어진 숫자를 m번 뽑기 때문에 길이가 m인 배열을 만듦
  let arr = Array.from({ length: m }, () => 0);
  // n번 구술까지 이진트리로 탐색하는 함수
  function DFS(L) {
    // 탐색의 깊이가 m인경우 m번 뽑은 것이므로 해당 배열을 answer에 추가
    if (L === m) {
      answer.push(arr.slice());
      // m의 깊이만큼 L 인덱스에 i를 저장
    } else {
      for (let i = 1; i <= n; i++) {
        arr[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  answer.push(answer.length);

  return answer;
}

let n = 8
  m = 2;

console.log(solution(n, m));
