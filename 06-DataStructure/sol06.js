function solution(n, k) {
  // 마지막에 남은 왕자의 번호를 출력할 변수 answer를 선언
  let answer;
  // FIFO를 활용하기 위해 queue를 선언 및 할당
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  // while문을 통해 queue의 길이가 0이 될 때까지 반복
  while (queue.length) {
    // for 문을 k-1번 순회하며 queue의 맨 앞 요소를 뒤에 추가
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    // k 번째에서 queue의 맨 앞 요소를 제거
    queue.shift();
    // queue의 길이가 1일 때, 마지막 왕자를 answer 변수에 할당
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

let N = 5,
  K = 2;
console.log(solution(N, K));
