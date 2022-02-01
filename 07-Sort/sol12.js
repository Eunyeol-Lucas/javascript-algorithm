// 배열에서 중간 거리를 기준으로 몇 마리 배치가 가능한지 구하는 함수
function getNumber(mid, locations) {
  let number = 1;
  let ep = locations[0];
  for (let i = 1; i < locations.length; i++) {
    if (locations[i] - ep >= mid) {
      number++;
      ep = locations[i];
    }
  }
  return number;
}

// 이분검색 풀이
function solution(number, locations) {
  // 두 마구간의 최대 거리를 구할 변수 maxDistance를 선언하고 0으로 초기화
  let maxDistance = 0;
  // 좌표를 오름차순으로 정렬
  locations.sort((a, b) => a - b);
  // 이분 검색을 위하여 두 마구간의 최소거리가 될 수 있는 값을 lt에 할당
  let lt = 1;
  // 좌표에서 두 마구간의 최대 거리가 되는 값을 rt에 할당 (최대 좌표번호 - 1)
  let rt = locations[locations.length - 1] - 1;
  // 최소거리가 최대거리보다 커질때까지 while문을 반복
  while (lt <= rt) {
    // 최소 거리와 최대 거리의 중간값을 mid 변수에 할당
    let mid = parseInt((lt + rt) / 2);
    // 중간거리를 기준으로 마구간에 number 마리수 이상을 배치할 수 있다면
    // maxDistance를 중간거리인 mid로 설정
    // number보다 더 많이 배치가 가능할 경우 현재 mid 보다 더 넓은 거리에서 배치가 가능하므로
    // 최소 값을 mid + 1로 상향
    if (getNumber(mid, locations) >= number) {
      maxDistance = mid;
      lt = mid + 1;
      // number 마리수 보다 적을 경우 중간 거리를 줄여야 하므로 최대 거리를 mid - 1해줌
    } else rt = mid - 1;
  }

  return maxDistance;
}

let n = 5,
  c = 3;
let arr = [1, 2, 8, 4, 9];

console.log(solution(c, arr));
