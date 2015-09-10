var countUpBy = function(count_by, count_to) {
  var result = [count_by];
  var sum = count_by;
  while (sum <= count_to - count_by) {
    var i = sum += count_by;
    result.push(i);
  }
  return result;
}

$(document).ready(function() {
  $("form#countupby").submit(function(event) {
    var count_by = parseInt($("input#number1").val());
    var count_to = parseInt($("input#number2").val());
    var result = countUpBy(count_by, count_to);

    $(".number1").text(count_by);
    $(".number2").text(count_to);
    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
