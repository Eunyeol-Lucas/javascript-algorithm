function solution(arr) {
  let answer = 0;
  // 끝나는 시간을 기준으로 정렬
  arr.sort((a, b) => {
    // 끝나는 시간이 같을 경우에는 시작 시간을 기준으로 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  // 회의가 끝나는 시간을 저장할 변수
  let endTime = 0;
  // 회의 시간을 담은 배열을 순회하며
  for (let x of arr) {
    // 이전 회의가 끝난 시간보다 현재 요소의 회의 시작시간이 같거나 뒤면 이용회수 1 추가
    if (endTime <= x[0]) {
      answer++;
      // 회의가 끝난 시간을 현재 회의 끝난 시간으로 재할당
      endTime = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr1));
