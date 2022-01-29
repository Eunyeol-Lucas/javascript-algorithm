function solution(n, arr) {
  // 현수의 번호와 짝궁의 반 번호를 출력할 배열을 생성
  let answer = [];
  // 키 순서대로 배정했을 경우의 배열로 정렬하기 위해 arr 배열을 복사
  let sortArr = arr.slice();
  // 키 순서 오름차순으로 정렬
  sortArr.sort((a, b) => a - b);
  for (let i = 1; i < n - 1; i++) {
    // arr의 배열과 키순서로 정렬한 배열에서 다른 위치의 인덱스를 answer에 추가
    // 키가 작은 친구의 인덱스가 현수의 번호, 현수의 인덱스가 짝궁의 번호
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

let n = 9;
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(n, arr));
