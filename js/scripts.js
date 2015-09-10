var countUpBy = function(count_by, count_to) {
  var sum = count_by;
  while (sum <= count_to - count_by) {
    sum += count_by;
  }
  return sum;
}
