function solution(a, b, c) {
  let answer = "YES",
    max;
  let total = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (total - max <= max) answer = "NO";

  return answer;
}

