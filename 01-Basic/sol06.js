function solution(arr) {
  let answer = [],
    sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let i of arr) {
    // 2를 나눌 경우 몫이 1인 숫자를 찾고(홀수) sum에 더해줌
    if (i % 2 === 1) {
      sum += i;
      // 최솟값과 비교하여 min 보다 작을 경우, min을 교체
      if (i < min) min = i;
    }
  }
  answer.push(sum);
  answer.push(min);

  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(arr));
