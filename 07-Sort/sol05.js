function solution1(s, arr) {
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

function solution2(s, arr) {
  // 캐쉬 메모리를 s 크기만큼 만들고 0으로 초기화
  let answer = Array.from({ length: s }, () => 0);
  // arr 배열을 순회
  arr.forEach((ele) => {
    // 캐쉬 메모리 위치 초기화
    let pos = -1;
    for (let i = 0; i < s; i++) {
      // 배열의 요소가 캐쉬 메모리 i 인덱스의 요소와 같을 경우 캐쉬 메모리 위치를 i로 재할당
      if (ele == answer[i]) {
        pos = i;
      }
    }
    // 미스인 경우 요소를 캐쉬 메모리에 가장 앞에 추가
    // 캐쉬 메모리의 길이가 5를 초과할 경우 가장 마지막 인덱스의 요소를 제거
    if (pos == -1) {
      answer.unshift(ele);
      if (answer.length > 5) answer.pop();
      //히트인 경우 히트한 위치의 요소를 제거
      // 히트한 요소를 캐쉬 메모리 가장 앞에 추가
    } else {
      answer.splice(pos, 1);
      answer.unshift(ele);
    }
  });

  return answer;
}

let s = 5,
  k = 9;
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution1(s, arr));
console.log(solution2(s, arr));
