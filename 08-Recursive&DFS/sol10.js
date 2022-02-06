// 중복을 허용하지 않는 순열 구하기
function solution(n, m, arr) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  let visited = Array.from({ length: n }, () => 0);
  function DFS(L) {
    // 깊이가 m일 경우 answer에 순열 배열을 복사하여 추가
    if (L === m) answer.push(tmp.slice());
    // 깊이가 m이 될 때까지 tmp 배열에 원소를 추가
    else {
      for (let i = 0; i < n; i++) {
        // 자기 자신을 포함하지 않기 위해 자기 자신을 방문하지 않을 경우에만 추가
        if (visited[i] === 0) {
          tmp[L] = arr[i];
          // tmp 배열에 요소를 추가한 경우, 해당 요소는 이미 사용한 것이므로 방문한 것으로 변경
          visited[i] = 1;
          DFS(L + 1);
          // 재귀함수에서 반환된 후 방문 배열을 다시 0으로 변경
          visited[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let n = 3,
  m = 2;
let arr = [3, 6, 9];
console.log(solution(n, m, arr));
