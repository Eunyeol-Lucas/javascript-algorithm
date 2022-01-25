function solution(need, plan) {
  let answer = "YES";
  // 필수과목 순서를 queue로 활용하기 위해 배열로 만들어줌
  let queue = need.split("");
  // 수업설계를 순회하며
  for (let x of plan) {
    // 수업 설계의 요소가 queue에 있을 경우, queue 배열의 맨 앞에 위치 하지 않으면 "NO" 반환
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  // for 문이 끝났을 때 queue가 빈 배열이 아닐경우 필수 과목을 모두 설계에 넣지 않았으므로 "NO" 반환
  if (queue.length) return "NO";

  return answer;
}

let a = "CBA";
let b = "QZCAHIBJDAGE";

console.log(solution(a, b));
