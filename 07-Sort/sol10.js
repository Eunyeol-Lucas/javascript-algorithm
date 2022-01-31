function solution(m, arr) {
  // 정렬된 상태에서 면 번째에 있는지 출력할 변수 answer를 선언하고 초기화
  let answer = 0;
  // 오름차순으로 배열 정렬
  arr.sort((a, b) => a - b);
  // 중앙값을 구하기 위하여 배열의 사작점 인덱스와, 배열의 끝의 인덱스를 구함
  let lt = 0,
    rt = arr.length - 1;
  // 왼쪽 인덱스가 오른쪽 인덱스의 값보다 커질떄까지 while문을 시행
  while (lt <= rt) {
    // 배열의 중앙 인덱스를 구함
    let mid = Math.ceil((lt + rt) / 2);
    // 타겟이 배열의 중앙값과 일치할 경우 answer에 현재 mid + 1을 하여 현재 위치를 출력
    if (m === arr[mid]) {
      answer = mid + 1;
      break;
      // 타겟이 현재 값보다 작을 경우, 오른쪽 인덱스를 현재 중앙값 -1의 위치로 이동
    } else if (m < arr[mid]) {
      rt = mid - 1;
      // 타겟이 현재 중앙값 보다 클 경우, 왼쪽 인덱스를 현재 중앙값 +1의 위치로 이동
    } else lt = mid + 1;
  }

  return answer;
}

let n = 8,
  m = 32;
let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(m, arr));
