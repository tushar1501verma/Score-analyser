function onSubmitButton() {
  var quantCurrentScore = document.getElementById("quant-current").value;
  var quantCurrent = Number(quantCurrentScore)
  var quantTargetScore = document.getElementById("quant-target").value;
  var quantTarget = Number(quantTargetScore);
  var verbalCurrentScore = document.getElementById("verbal-current").value;
  var verbalCurrent = Number(verbalCurrentScore);
  var verbalTargetScore = document.getElementById("verbal-target").value;
  var verbalTarget = Number(verbalTargetScore);
  var totalCurrentScore = 200 + (quantCurrent + verbalCurrent) * 5;
  var totalTargetScore = 200 + (quantTarget + verbalTarget) * 5;
  var totalCurrentScoreWidthArrow = (totalCurrentScore / 800) * 100;
  var quantCurrentScoreWidth = (quantCurrent / 60) * 100;
  var quantTargetScoreWidth = (quantTarget / 60) * 100;
  var verbalCurrentScoreWidth = (verbalCurrent / 60) * 100;
  var verbalTargetScoreWidth = (verbalTarget / 60) * 100;
  var totalTargetScoreWidthArrow = (totalTargetScore / 800) * 100;

  var totalDifference = totalTargetScore - totalCurrentScore;
  var totalScoreDifference = Number(totalDifference);
  var arrowTargetDown = document.getElementById("arrow-total-target-down")
  arrowTargetDown.style.margin = `0 0 0 ${0.75 * totalTargetScoreWidthArrow}%`
  var totalScoreCurrentWidth = document.getElementById("totalScoreCurrent");
  totalScoreCurrentWidth.style.margin = `0 0 0 ${0.75 * totalCurrentScoreWidthArrow}%`
  var quantScoreCurrentWidth = document.getElementById("qcsUpper");
  quantScoreCurrentWidth.style.margin = `0 0 0 ${0.75 * quantCurrentScoreWidth}%`
  var verbalScoreCurrentWidth = document.getElementById("vcsUpper");
  verbalScoreCurrentWidth.style.margin = `0 0 0 ${0.75 * verbalCurrentScoreWidth}%`

  var quantScoreTargetWidth = document.getElementById("qcsLower");
  quantScoreTargetWidth.style.margin = `0 0 0 ${0.75 * quantTargetScoreWidth}%`
  var verbalScoreTargetWidth = document.getElementById("vcsLower");
  verbalScoreTargetWidth.style.margin = `0 0 0 ${0.75 * verbalTargetScoreWidth}%`

  var totalScoreTargetWidth = document.getElementById("totalScoreTarget");
  totalScoreTargetWidth.style.margin = `0 0 0 ${0.75 * totalTargetScoreWidthArrow}%`

  var arrowTargetUp = document.getElementById("arrow-total-target-up")
  var arrowTotalCurrent = document.querySelector(".arrow-total-current");
  arrowTotalCurrent.style.margin = `0 0 0 ${0.75 * totalCurrentScoreWidthArrow}%`;
  var arrowQuantCurrent = document.querySelector(".arrow-quant-current");
  arrowQuantCurrent.style.margin = `0 0 0 ${0.75 * quantCurrentScoreWidth}%`
  var arrowVerbalCurrent = document.querySelector(".arrow-verbal-current");
  arrowVerbalCurrent.style.margin = `0 0 0 ${0.75 * verbalCurrentScoreWidth}%`

  var arrowQuantTargetUp = document.getElementById("arrow-quant-target-up");
  arrowQuantTargetUp.style.margin = `0 0 0 ${0.75 * quantTargetScoreWidth}%`
  var arrowVerbalTargetUp = document.getElementById("arrow-verbal-target-up");
  arrowVerbalTargetUp.style.margin = `0 0 0 ${0.75 * verbalTargetScoreWidth}%`

  var arrowQuantTargetDown = document.getElementById("arrow-quant-target-down");
  arrowQuantTargetDown.style.margin = `0 0 0 ${0.75 * quantTargetScoreWidth}%`
  var arrowVerbalTargetDown = document.getElementById("arrow-verbal-target-down");
  arrowVerbalTargetDown.style.margin = `0 0 0 ${0.75 * verbalTargetScoreWidth}%`
  arrowTargetUp.style.margin = `0 0 0 ${0.75 * totalTargetScoreWidthArrow}%`
  var progressBarCurrentWidth = document.querySelector(".currentBar");
  progressBarCurrentWidth.style.width = `${totalCurrentScoreWidthArrow}%`
  var progressBarTargetWidth = document.querySelector(".targetBar");
  progressBarTargetWidth.style.width = `${totalTargetScoreWidthArrow}%`
  var quantBarTargetWidth = document.querySelector(".quantTargetBar");
  quantBarTargetWidth.style.width = `${quantTargetScoreWidth}%`
  var verbalBarTargetWidth = document.querySelector(".verbalTargetBar");
  verbalBarTargetWidth.style.width = `${verbalTargetScoreWidth}%`

  var quantBarCurrentWidth = document.querySelector(".quantCurrentBar");
  quantBarCurrentWidth.style.width = `${quantCurrentScoreWidth}%`
  var verbalBarCurrentWidth = document.querySelector(".verbalCurrentBar");
  verbalBarCurrentWidth.style.width = `${verbalCurrentScoreWidth}%`


  document.getElementById("totalScoreCurrent").innerHTML = totalCurrentScore;
  document.getElementById("totalScoreTarget").innerHTML = totalTargetScore;
  document.getElementById("score").innerHTML = totalCurrentScore;
  document.getElementById("quantScore").innerHTML = "Q" + quantCurrentScore;
  document.getElementById("verbalScore").innerHTML = "V" + verbalCurrentScore;
  document.getElementById("qcs").innerHTML = "Q" + quantCurrentScore;
  document.getElementById("vcs").innerHTML = "V" + verbalCurrentScore;
  document.getElementById("tcs").innerHTML = totalCurrentScore;
  document.getElementById("qscore").innerHTML = "Q" + quantTargetScore;
  document.getElementById("vscore").innerHTML = "V" + verbalTargetScore;
  document.getElementById("tscore").innerHTML = totalTargetScore;
  document.getElementById("quantDifference").innerHTML = Math.abs((quantTarget - quantCurrent)) + " Points";
  document.getElementById("verbalDifference").innerHTML = Math.abs((verbalTarget - verbalCurrent)) + " Points";
  document.getElementById("totalDifference").innerHTML = Math.abs((totalTargetScore - totalCurrentScore)) + " Points";
  document.getElementById("qcsUpper").innerHTML = "Q" + quantCurrentScore;
  document.getElementById("qcsLower").innerHTML = "Q" + quantTargetScore;
  document.getElementById("vcsUpper").innerHTML = "V" + verbalCurrentScore;
  document.getElementById("vcsLower").innerHTML = "V" + verbalTargetScore;
  var scoreDiv = document.getElementById("scoreDiv");
  scoreDiv.classList.remove("hide");
  scoreDiv.classList.add("show");
  if (verbalCurrent == verbalTarget) {
    document.getElementById("verStatus").innerHTML = "equal to your target sccore of ";
  }
  else if (verbalCurrent > verbalTarget) {
    document.getElementById("verStatus").innerHTML = "higher than your target GMAT score of "
  }
  else {
    document.getElementById("verStatus").innerHTML = "lower than your target GMAT score of "
  }
  if (quantCurrent == quantTarget) {
    document.getElementById("quantStatus").innerHTML = "equal to your target sccore of ";
  }
  else if (quantCurrent > quantTarget) {
    document.getElementById("quantStatus").innerHTML = "higher than your target GMAT score of "
  }
  else {
    document.getElementById("quantStatus").innerHTML = "lower than your target GMAT score of "
  }
  if (totalTargetScore - totalCurrentScore >= -10 && totalTargetScore - totalCurrentScore <= 10) {
    arrowTargetDown.classList.remove("hide")
  }
  else {
    arrowTargetUp.classList.remove("hide")
  }
  if (quantTarget - quantCurrent >= -2 && quantTarget - quantCurrent <= 2) {
    arrowQuantTargetDown.classList.remove("hide")
  }
  else {
    arrowQuantTargetUp.classList.remove("hide")
  }
  if (verbalTarget - verbalCurrent >= -2 && verbalTarget - verbalCurrent <= 2) {
    arrowVerbalTargetDown.classList.remove("hide")
  }
  else {
    arrowVerbalTargetUp.classList.remove("hide")
  }
}
