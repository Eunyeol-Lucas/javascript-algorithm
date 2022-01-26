function solution(n, arr) {
  let answer = arr;
  for (let i = 0; i < n - 1; i++) {
    // arr을 순회하며 현재 요소가 다음 요소보다 클 경우 두 요소의 위치를 바꿈
    // for문을 순회하며 배열의 마지막 요소가 결정됨 -> 첫 for 문이 순회할 때마다 뒤 배열의 요쇼가 결정됨
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
let n = 8;
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(n, arr));
