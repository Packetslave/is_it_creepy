u("form").handle("submit", function (e) {
  var older = u("#you").first().value;
  var younger = u("#them").first().value;

  if (them > you) {
    older = them;
    younger = you;
  }

  var min_age = older / 2 + 7;
  var answer = u("#answer");

  answer.removeClass("alert-danger");
  answer.removeClass("alert-warning");
  answer.removeClass("alert-success");

  if (younger < 13 || older < 16) {
    answer.text("seriously?! yes!");
    answer.addClass("alert-danger");
  } else if (Math.abs(min_age - younger) <= 1) {
    answer.text("borderline");
    answer.addClass("alert-warning");
  } else if (younger > min_age) {
    answer.addClass("alert-success");
    answer.text("nope");
  } else {
    answer.text("yes");
    answer.addClass("nope");
  }
});
