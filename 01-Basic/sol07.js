function solution(day, arr) {
    let answer = 0;
    // for문을 통해 arr 배열 탐색
    for (let i of arr) {
      // 10으로 나눈 몫이 day와 같을 경우
        if (i % 10 === day) {
        // 1을 더해줌
      answer++;
    }
  }

  return answer;
}

let day = 3,
  arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(day, arr));
