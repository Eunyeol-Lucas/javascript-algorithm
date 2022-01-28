function solution(s, k, arr) {
  // s 크기 만큼 캐쉬 메모리를 만들고 0으로 초기화
  let answer = Array.from({ length: s }, () => 0);
  arr.forEach((element) => {
    // 캐쉬 메모리 위치 초기화
    let pos = -1;
    // 히트인 경우 캐쉬 메모리 위치를 저장
    for (let i = 0; i < s; i++) {
      if (element === answer[i]) pos = i;
    }
    // 미스인 경우 제일 뒤로 당김
    if (pos === -1) {
      for (let i = s - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
        // 히트인 경우 히트난 경우의 인덱스 부터 당겨줌
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = element;
  });
  return answer;
}

let s = 5,
  k = 9;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(s, k, arr));
