const wBFs = document.querySelectorAll('input[name="wBF"]');
const rgBowledTBSs = document.querySelectorAll('input[name="rgBowledTBS"]');
const rgTarget = document.querySelector(".rgTarget");
const rgOvers = document.querySelector(".rgOvers");
const rgTBSScore = document.querySelector(".rgTBSScore");
const rgTBSOvers = document.querySelector(".rgTBSOvers");
const rgTBSBalls = document.querySelector(".rgTBSBalls");
const required1 = document.querySelector(".required1");
const required2 = document.querySelector(".required2");
const defh4 = document.querySelector(".defh4");
const defh1 = document.querySelector(".defh1");
const balls1 = document.querySelector(".balls1");
const radio1 = document.querySelector(".radio1");
const recheckField = document.querySelector(".recheckField");
const recheckText = document.querySelector(".recheck");

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    (charCode > 31 && (charCode < 48 || charCode > 57)) ||
    (evt.target.value.length == 0 && evt.which == 48)
  )
    return false;
  return true;
}

const checkEmpty = () => {
  required1.style.display = "inline";
  required1.textContent = "";
  required2.style.display = "inline";
  required2.textContent = "";

  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    if (emptyField.value === "") {
      emptyField.classList.add("emptyField");
    }
  }
  if (document.querySelectorAll('input[name="wBF"]:checked').length === 0) {
    required1.textContent = "*Required";
  }
  if (
    document.querySelectorAll('input[name="rgBowledTBS"]:checked').length ===
      0 &&
    document.querySelectorAll('input[name="rgBowledTBS"]:disabled').length === 0
  ) {
    required2.textContent = "*Required";
  }
  if (rgTBSBalls.value == "") {
    rgTBSBalls.classList.add("selectBalls");
  }
};

const removeClass = () => {
  for (const rgBowledTBS of rgBowledTBSs) {
    rgBowledTBS.removeAttribute("disabled");
  }
  required1.style.display = "inline";
  required2.style.display = "inline";
  radio1.style.opacity = "1";
  balls1.style.opacity = "1";
  recheckField.style.display = "none";
  defh4.innerHTML = "";
  defh1.innerHTML = "";
  defh1.style.backgroundColor = "transparent";
  rgTBSBalls.value = "";
  rgTBSBalls.options[0].disabled = "true";
  rgTBSBalls.removeAttribute("disabled");

  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    emptyField.classList.remove("emptyField");
  }
  required1.textContent = "";
  required2.textContent = "";
  rgTBSBalls.classList.remove("selectBalls");
};

const removeRequired1 = () => {
  required1.textContent = "";
};

const removeRequired2 = () => {
  required2.textContent = "";
};

const toggleDisable = (overs, balls) => {
  if (
    (overs.classList.contains("error") &&
      parseFloat(overs.value) <= parseFloat(rgOvers.value)) ||
    rgOvers.value === ""
  ) {
    overs.classList.remove("error");
  }
  if (
    parseFloat(overs.value) < parseFloat(rgOvers.value) ||
    rgOvers.value === "" ||
    overs.value === ""
  ) {
    for (const rgBowledTBS of rgBowledTBSs) {
      rgBowledTBS.removeAttribute("disabled");
    }
    radio1.style.opacity = "1";
    balls.value = "";
    balls.options[0].disabled = "true";
    balls.removeAttribute("disabled");
    balls1.style.opacity = "1";
    required2.style.display = "inline";
  } else if (parseFloat(overs.value) >= parseFloat(rgOvers.value)) {
    if (parseFloat(overs.value) > parseFloat(rgOvers.value)) {
      overs.classList.add("error");
    }
    for (const rgBowledTBS of rgBowledTBSs) {
      rgBowledTBS.setAttribute("disabled", "");
      rgBowledTBS.checked = false;
    }
    radio1.style.opacity = "0.25";
    balls.value = "0";
    balls.setAttribute("disabled", "");
    balls1.style.opacity = "0.25";
    required2.style.display = "none";
  }
};

const rgNRR = () => {
  recheckField.style.display = "none";
  defh4.innerHTML = "";
  defh1.innerHTML = "";
  defh1.style.backgroundColor = "transparent";
  const runs = rgTarget.value - 1;
  console.log(runs); ////
  const balls = rgOvers.value * 6;
  console.log(balls); ////
  const ballsTBS = rgTBSOvers.value * 6 + parseFloat(rgTBSBalls.value);
  console.log(ballsTBS); ////
  let tBF;
  let runRateYT;
  let runRateYO;
  let bowledTBS;
  let rgNRR;

  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    if (emptyField.value === "") {
      return;
    }
  }

  if (wBFs[0].checked === false && wBFs[1].checked === false) {
    return;
  }

  if (
    rgBowledTBSs[0].checked === false &&
    rgBowledTBSs[1].checked === false &&
    rgBowledTBSs[0].disabled === false &&
    rgBowledTBSs[1].disabled === false
  ) {
    return;
  }

  if (rgTBSBalls.value === "") {
    return;
  }

  if (parseFloat(rgTBSOvers.value) > parseFloat(rgOvers.value)) {
    recheckField.style.display = "block";
    recheckField.innerHTML =
      "<p class='recheck'><strong>Are you sure you didn't mistype anything?</strong><br> Overs faced by the 'team batting second' cannot be greater than the 'Revised Overs'</p>";
    return;
  }
  for (const wBF of wBFs) {
    if (wBF.checked) {
      tBF = wBF.id;
      console.log(tBF);
      break;
    }
  }
  for (const rgBowledTBS of rgBowledTBSs) {
    if (rgBowledTBS.checked) {
      bowledTBS = rgBowledTBS.id;
      console.log(bowledTBS);
      break;
    }
  }
  if (
    parseFloat(rgTBSScore.value) <= parseFloat(rgTarget.value) &&
    parseFloat(rgTBSOvers.value) < parseFloat(rgOvers.value) &&
    rgBowledTBSs[1].checked === true
  ) {
    recheckField.innerHTML =
      "<p class='recheck'><strong>Seems like you've messed up the values</strong><br>According to your data, the 'Team batting second' has not yet surpassed 'Revised Target', not 'all out' and have overs left to bat, which is an impossible scenario in a completed match </p>";
    recheckField.style.display = "block";
    return;
  }
  if (parseFloat(rgTBSScore.value) > parseFloat(runs) + parseFloat(6)) {
    console.log ('hi')
    recheckField.innerHTML =
      "<p class='recheck'><strong>Please recheck your values</strong><br>It is an impossible scenario for the 'team batting second' to score 5 runs more than the revised target</p>";
    recheckField.style.display = "block";
    return;
  }
  if (tBF === "yourTeam") {
    runRateYT = (runs / balls) * 6;
    if (
      bowledTBS === "yes" ||
      document.querySelectorAll('input[name="rgBowledTBS"]:disabled').length ===
        2
    ) {
      runRateYO = (rgTBSScore.value / balls) * 6;
    } else if (bowledTBS === "no") {
      runRateYO = (rgTBSScore.value / ballsTBS) * 6;
    }
  } else if (tBF === "yourOpponent") {
    runRateYO = (runs / balls) * 6;

    if (
      bowledTBS === "yes" ||
      document.querySelectorAll('input[name="rgBowledTBS"]:disabled').length ===
        2
    ) {
      runRateYT = (rgTBSScore.value / balls) * 6;
    } else if (bowledTBS === "no") {
      runRateYT = (rgTBSScore.value / ballsTBS) * 6;
    }
  }
  console.log(runRateYT);
  console.log(runRateYO);
  rgNRR = (runRateYT - runRateYO).toFixed(3);
  console.log(rgNRR);
  if (rgNRR > 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `+${rgNRR}`;
    defh1.style.backgroundColor = "green";
  }
  if (rgNRR == 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `${rgNRR}`;
    defh1.style.backgroundColor = "#737373";
  }
  if (rgNRR < 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `${rgNRR}`;
    defh1.style.backgroundColor = "red";
  }
};
