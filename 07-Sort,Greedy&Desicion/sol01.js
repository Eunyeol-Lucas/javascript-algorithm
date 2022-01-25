// sort 함수는 n log n의 시간을 가지므로 시간이 적게 소모되는 방법이 필요
function solution1(arr) {
  let answer = arr.sort((a, b) => a - b);
  return answer;
}
function solution2(arr) {
  // 배열을 얕은 출력 변수 answer에 복사함
  let answer = arr;
  // for문을 통해 arr을 순회하며
  for (let i = 0; i < arr.length - 1; i++) {
    // 가장 값이 작은 index 선언 및 i로 초기화
    let idx = i;
    // for문을 통해 첫 for문 다음의 요소 다음부터 arr을 순회
    for (let j = i + 1; j < arr.length; j++) {
      // 현재 요소의 값이 idx번째 요소의 값 보다 작을 경우, 오름차순 정렬을 위해 idx는 j가 됨
      if (arr[j] < arr[idx]) idx = j;
    }
    // i번째 요소와 idx번째 요소를 변경하며 요소를 선택 정렬
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}

let n = 6;
let arr = [13, 5, 11, 7, 23, 15];
console.log(solution1(arr));
console.log(solution2(arr));
