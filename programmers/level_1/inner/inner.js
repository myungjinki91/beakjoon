function solution(a, b) {
  var answer = 0;
  a.map((value, index) => {
    answer += value * b[index];
  });
  return answer;
}
