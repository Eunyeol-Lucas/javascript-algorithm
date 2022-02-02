function solution(num) {
  let answer = [];
  // 방문여부를 체크하기 위한 배열을 만들어줌
  let checkArr = Array.from({ length: num + 1 }, () => 0);
  // 재귀함수
  function DFS(v) {
    // 인자가 입력값 + 1에 도달했을 때, 방문 여부를 확인 한 결과 1인 요소들의 인덱스만 모아서 answer 에 저장
    if (v === num + 1) {
      let tmp = "";
      for (let i = 1; i <= num; i++) {
        if (checkArr[i] === 1) tmp += i + " ";
      }
      // 공집합은 제외하여 저장
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // 해당 요소 방문
      checkArr[v] = 1;
      DFS(v + 1);
      // 해당 요소 방문하지 않음
      checkArr[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

let num = 3;
console.log(solution(num));
