function solution(s, e) {
  let answer = 0;
  const ch = Array.from({ length: 10001 }, () => 0);
  const dis = Array.from({ length: 10001 }, () => 0);

  const q = [];
  q.push(s);
  ch[s] = 1; // 방문
  dis[s] = 0; // 이동 횟수
  while (q.length) {
    let x = q.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1; // 이동한 좌표가 e인 경우 부모 노드의 이동 횟수 + 1
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) { // 주어진 범위 내이며 방문하지 않은 노드의 경우
        ch[nx] = 1; // 방문
        q.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

const S = 5;
const E = 14;
console.log(solution(8, 3));
