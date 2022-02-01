// 현재 중앙값을 기준으로, 몇 개의 DVD로 제작이 가능한지 구하는 함수
function getCount(arr, mid) {
  let cnt = 1,
    sum = 0;
  for (let x of arr) {
    if (sum + x > mid) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}
// 이분 검색
function solution(m, arr) {
  // DVD 크기 최소 크기를 출력할 answer 변수를 선언하고 0으로 초기화
  let answer = 0;
  // 최소 길이가 곡 길이 중 가장 긴 시간이상이어야 하므로, 최장 길이의 곡의 길이를 최소값으로 저장
  let lt = Math.max(...arr);
  // 모든 곡을 모두 더한 길이가 곡을 담을 수 있는 최대 길이로 저장
  // DVD 용량은 곡의 길이 중 가장 긴 길이와 모든 곡을 더한 길이의 사이에 존재
  let rt = arr.reduce((a, b) => a + b);
  while (lt <= rt) {
    // 최소 최대값의 중앙값을 구함
    let mid = parseInt((lt + rt) / 2);
    // getCount 함수를 통해 현재 중앙값을 크기로 하였을 때 DVD 개수를 구함
    // DVD 개수가 m 보다 적거나 같다면, m으로 DVD 제작이 가능하므로 answer 변수에 저장
    // m보다 적을 경우 개수를 늘리면, 용량을 줄일 수 있으므로 최대 값을 현재 중앙 값보다 하나 적은 값으로 변경
    if (getCount(arr, mid) <= m) {
      answer = mid;
      rt = mid - 1;
      // m 보다 개수가 많을 경우 개수를 줄여야 하므로, 최소값을 현재 중앙값 보다 하나 큰 값으로 변경
    } else lt = mid + 1;
  }

  return answer;
}
let n = 9,
  m = 3;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(m, arr));
