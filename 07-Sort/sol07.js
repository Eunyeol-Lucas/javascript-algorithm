// 2d array에서 x값이 같을 경우 y끼리 비교
// x 값이 다르다면 x 값을 비교
function sortArr(a, b) {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
}

function solution(arr) {
  let answer = arr;
  arr.sort(sortArr);
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr));
