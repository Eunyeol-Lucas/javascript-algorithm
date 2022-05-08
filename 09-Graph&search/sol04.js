function solution() {
  let answer = "";
  let q = []; // array를 queue로 활용
  q.push(1); // root 노드인 1을 q에 삽입
  while (q.length) { // q에 원소가 존재하는 경우에 반복
    let v = q.shift(); // queue의 가장 앞의 원소를 제거
    answer += v + " "; // 제거한 원소를 answer에 추가
    for (let nv of [v * 2, v * 2 + 1]) { // 왼쪽의 자식은 부모 노드의 값의 *2, 오른쪽 자식은 부모 노드 값 * 2 + 1
      if (nv > 7) continue; // 자식이 7을 초과한 값일 경우 pass
      q.push(nv); // 7이하의 값인 경우 queue에 넣고 while문을 반복함.
    }
  }
  return answer;
}

console.log(solution())
