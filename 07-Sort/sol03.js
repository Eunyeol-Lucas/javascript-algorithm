function solution(arr) {
  let answer = arr;
  // arr을 순회하며 현재 요소가 양수이고 다음 요소보다 음수일 경우 두 요소의 위치를 바꿈
  // for문을 순회하며 배열의 마지막 요소가 결정됨 -> 첫 for 문이 배열을 순회할 때마다 뒤 배열의 요쇼가 결정됨
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution(arr));
