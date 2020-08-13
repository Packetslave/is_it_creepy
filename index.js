u("form").handle("submit", function (e) {
  var older = u("#you").first().value;
  var younger = u("#them").first().value;

  if (them > you) {
    older = them;
    younger = you;
  }

  var min_age = older / 2 + 7;
  var answer = u("#answer");

  answer.removeClass("wtf");
  answer.removeClass("yes");
  answer.removeClass("borderline");
  answer.removeClass("nope");

  if (younger < 13 || older < 16) {
    answer.text("seriously?! yes!");
    answer.addClass("wtf");
  } else if (Math.abs(min_age - younger) <= 1) {
    answer.text("borderline");
    answer.addClass("borderline");
  } else if (younger > min_age) {
    answer.text("nope");
  } else {
    answer.text("yes");
    answer.addClass("nope");
  }
});
