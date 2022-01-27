function solution(arr) {
  let answer = arr;
  // for문을 통해 이전의 요소와 비교하기 위해 1번 인덱스부터 arr 배열 순회
  for (let i = 1; i < arr.length; i++) {
    // i 요소 이전을 역순으로 순회하기 위하여 i - 1 변수 생성
    j = i - 1;
    // 현재 요소의 값을 임시 변수에 저장
    key = arr[i];
    // while 문을 통해 현재 요소의 이전의 요소가 현재 값 보다 크고, 인덱스가 0 이상일 경우
    while (arr[j] > key && j >= 0) {
      // j + 1의 요소에 j의 요소를 저장하고
      // 더 이전을 탐색하기 위해 j -1을 함
      arr[j + 1] = arr[j--];
    }
    // j가 음수이거나 key값보다 작은 경우, j +1의 위치에 key값을 할당하여 정렬시킴
    arr[j + 1] = key;
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
