// 소수를 한별하는 isPrime 함수
function isPrime(num) {
  // 인자가 1일 경우 false를 반환
  if (num === 1) return false;
  // 인자를 인자의 제곱근의 정수까지 for문을 통해 탐색
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    // 제곱근을 나누었을 때 나머지가 0일 경우 false 반환
    if (num % i === 0) return false;
  }
  // 소수일 경우 true를 반환
  return true;
}

function solution(arr) {
  // 소수를 담을 변수 선언
  let answer = [];
  // for문을 통해 배열의 요소를 탐색
  for (let x of arr) {
    let res = 0;
    // while문을 통해 요소의 숫자를 뒤집음
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    // 소수판별 함수이 true를 반환할 경우 answer 변수에 추가
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));
