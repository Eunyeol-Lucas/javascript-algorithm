function solution(num) {
  let answer = "";
  function DFS(L) {
    // 재귀에 들어오는 인자가 0일 때 재귀 종료
    if (L === 0) return;
    //2를 나눈 몫으로 재귀함수 반복
    DFS(parseInt(L / 2));
    // 나머지를 answer에 추가
    answer += String(L % 2);
  }
  DFS(num);
  return answer;
}

let num = 11;
console.log(solution(num));
