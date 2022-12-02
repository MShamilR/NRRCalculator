const defOPI = document.querySelector(".defOPI");
const defYTS = document.querySelector(".defYTS");
const defYTO = document.querySelector(".defYTO");
const defYOS = document.querySelector(".defYOS");
const defYOO = document.querySelector(".defYOO");
const defBowledYTs = document.querySelectorAll('input[name="defBowledYT"]');
const defBowledYOs = document.querySelectorAll('input[name="defBowledYO"]');
const defh4 = document.querySelector(".defh4");
const defh1 = document.querySelector(".defh1");
const required1 = document.querySelector(".required1");
const required2 = document.querySelector(".required2");
const defYTB = document.querySelector(".defYTB");
const defYOB = document.querySelector(".defYOB");
const recheckField = document.querySelector(".recheckField");
const recheckText = document.querySelector(".recheck");
const balls1 = document.querySelector(".balls1");
const balls2 = document.querySelector(".balls2");
const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");

const onloadFunc = () => {
  toggleDisable(defYTO, defYTB, balls1, defBowledYTs, radio1, required1);
  toggleDisable(defYOO, defYOB, balls2, defBowledYOs, radio2, required2);
};

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    (charCode > 31 && (charCode < 48 || charCode > 57)) ||
    (evt.target.value.length == 0 && evt.which == 48)
  )
    return false;
  return true;
}

const removeRequired1 = () => {
  required1.textContent = "";
};

const removeRequired2 = () => {
  required2.textContent = "";
};

const toggleDisable = (overs, balls, number, isBowled, radio, required) => {
  if (
    (overs.classList.contains("error") &&
      parseFloat(overs.value) <= parseFloat(defOPI.value)) ||
    defOPI.value === ""
  ) {
    overs.classList.remove("error");
  }
  if (
    parseFloat(overs.value) < parseFloat(defOPI.value) ||
    defOPI.value === "" ||
    overs.value === ""
  ) {
    for (const defBowled of isBowled) {
      defBowled.removeAttribute("disabled");
    }
    radio.style.opacity = "1";
    balls.value = "";
    balls.options[0].disabled = "true";
    balls.removeAttribute("disabled");
    number.style.opacity = "1";
    required.style.display = "inline";
  } else if (parseFloat(overs.value) >= parseFloat(defOPI.value)) {
    if (parseFloat(overs.value) > parseFloat(defOPI.value)) {
      overs.classList.add("error");
    }
    for (const defBowled of isBowled) {
      defBowled.setAttribute("disabled", "");
      defBowled.checked = false;
    }
    radio.style.opacity = "0.25";
    balls.value = "0";
    balls.setAttribute("disabled", "");
    number.style.opacity = "0.25";
    required.style.display = "none";
  }
};

const checkEmpty = () => {
  /* console.log(
    document.querySelectorAll('input[name="defBowledYT"]:checked').length === 0
    
  ); */
  required1.style.display = "inline";
  required2.style.display = "inline";
  required1.textContent = "";
  required2.textContent = "";

  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    if (emptyField.value === "") {
      emptyField.classList.add("emptyField");
      /* console.log("empty"); */
    }
  }
  if (
    document.querySelectorAll('input[name="defBowledYT"]:checked').length ===
      0 &&
    document.querySelectorAll('input[name="defBowledYT"]:disabled').length === 0
  ) {
    required1.textContent = "*Required";
  }

  if (
    document.querySelectorAll('input[name="defBowledYO"]:checked').length ===
      0 &&
    document.querySelectorAll('input[name="defBowledYO"]:disabled').length === 0
  ) {
    required2.textContent = "*Required";
  }
  if (defYTB.value == "") {
    defYTB.classList.add("selectBalls");
  }
  if (defYOB.value == "") {
    defYOB.classList.add("selectBalls");
  }
};

const removeClass = () => {
  for (const defBowledYT of defBowledYTs) {
    defBowledYT.removeAttribute("disabled");
  }
  for (const defBowledYO of defBowledYOs) {
    defBowledYO.removeAttribute("disabled");
  }
  required1.style.display = "inline";
  required2.style.display = "inline";
  radio1.style.opacity = "1";
  radio2.style.opacity = "1";
  balls1.style.opacity = "1";
  balls2.style.opacity = "1";
  recheckField.style.display = "none";
  defh4.innerHTML = "";
  defh1.innerHTML = "";
  defh1.style.backgroundColor = "transparent";
  defYTB.value = "";
  defYTB.options[0].disabled = "true";
  defYTB.removeAttribute("disabled");
  defYOB.value = "";
  defYOB.options[0].disabled = "true";
  defYOB.removeAttribute("disabled");
  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    emptyField.classList.remove("emptyField");
  }
  required1.textContent = "";
  required2.textContent = "";
  defYTB.classList.remove("selectBalls");
  defYOB.classList.remove("selectBalls");
  // console.log(defYTB.value);
};

const defNRR = () => {
  //console.log(defYTB.value);
  recheckField.style.display = "none";
  defh4.innerHTML = "";
  defh1.innerHTML = "";
  defh1.style.backgroundColor = "transparent";
  //console.log((2 * 5) / defYTO.value);
  //console.log(parseFloat(defYTO.value));
  //console.log(parseFloat(defOPI.value));
  //console.log(parseFloat(defYTO.value) < parseFloat(defOPI.value));
  //console.log(isNaN(parseFloat(defYTO.value)));

  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    if (emptyField.value === "") {
      return;
    }
  }

  if (
    defBowledYTs[0].checked === false &&
    defBowledYTs[1].checked === false &&
    defBowledYTs[0].disabled === false &&
    defBowledYTs[1].disabled === false
  ) {
    return;
  }

  if (
    defBowledYOs[0].checked === false &&
    defBowledYOs[1].checked === false &&
    defBowledYOs[0].disabled === false &&
    defBowledYOs[1].disabled === false
  ) {
    return;
  }

  if (defYTB.value === "" || defYOB.value === "") {
    return;
  }

  if (
    parseFloat(defYTO.value) > parseFloat(defOPI.value) ||
    parseFloat(defYOO.value) > parseFloat(defOPI.value)
  ) {
    recheckField.style.display = "block";
    recheckField.innerHTML =
      "<p class='recheck'><strong>Are you sure you didn't mistype anything?</strong><br> Overs faced by <strong>Your Team</strong> or <strong>Your Opponent</strong> cannot be greater than the <strong>Overs per Innings</strong></p>";

    /* alert(
      "Overs faced by 'Your Team' or 'Your Opponent' cannot be greater than the 'Overs per Innings'"
    ); */
    return;
  }
  let runRateYT;
  let runRateYO;
  let bowledYT;
  let bowledYO;
  let defNRR;
  /* console.log(bowledYO); */
  for (const defBowledYT of defBowledYTs) {
    if (defBowledYT.checked) {
      bowledYT = defBowledYT.id;
      break;
    }
  }
  for (const defBowledYO of defBowledYOs) {
    if (defBowledYO.checked) {
      bowledYO = defBowledYO.id;
      break;
    }
  }
  if (
    bowledYT === "no" &&
    bowledYO === "no" &&
    parseFloat(defYTO.value) < parseFloat(defOPI.value) &&
    parseFloat(defYOO.value) < parseFloat(defOPI.value) &&
    defYTB.value !== "" &&
    defYOB.value !== ""
  ) {
    recheckField.innerHTML =
      "<p class='recheck'><strong>Please recheck your values and choices.</strong><br>In an ODI match, there is no possible scenario that both the teams haven't faced the full <strong>Overs per Innings</strong> and are <strong>both not all out</strong></p>";
    recheckField.style.display = "block";
    return;
  }
  if (
    parseFloat(defYTS.value) <= parseFloat(defYOS.value) &&
    parseFloat(defYTO.value) < parseFloat(defOPI.value) &&
    defBowledYTs[1].checked === true
  ) {
    recheckField.innerHTML =
      "<p class='recheck'><strong>Seems like you've messed up the values.</strong><br>According to your data, <strong>Your Team</strong> has not yet surpassed <strong>Your Opponent</strong> score, are <strong>not all out</strong> and have overs left to bat, which is an impossible scenario in a completed match </p>";
    recheckField.style.display = "block";
    return;
  }
  if (
    parseFloat(defYOS.value) <= parseFloat(defYTS.value) &&
    parseFloat(defYOO.value) < parseFloat(defOPI.value) &&
    defBowledYOs[1].checked === true
  ) {
    recheckField.innerHTML =
      "<p class='recheck'><strong>Seems like you've messed up the values.</strong><br>According to your data, <strong>Your Opponent</strong> has not yet surpassed <strong>Your Team</strong> score, are <strong>not all out</strong> and have overs left to bat, which is an impossible scenario in a completed match </p>";
    recheckField.style.display = "block";
    return;
  }

  if (
    bowledYT === "yes" ||
    document.querySelectorAll('input[name="defBowledYT"]:disabled').length === 2
  ) {
    const rrPerBall = defYTS.value / (defOPI.value * 6);
    runRateYT = rrPerBall * 6;
    //console.log(runRateYT);
  }
  if (bowledYT === "no") {
    const rrPerBall =
      defYTS.value / (defYTO.value * 6 + parseFloat(defYTB.value));
    runRateYT = rrPerBall * 6;
    //console.log(runRateYT);
  }
  if (
    bowledYO === "yes" ||
    document.querySelectorAll('input[name="defBowledYO"]:disabled').length === 2
  ) {
    const rrPerBall = defYOS.value / (defOPI.value * 6);
    //console.log(runRateYO);

    runRateYO = rrPerBall * 6;
    //console.log(runRateYO);
  }
  if (bowledYO === "no") {
    const rrPerBall =
      defYOS.value / (defYOO.value * 6 + parseFloat(defYOB.value));
    runRateYO = rrPerBall * 6;
    //console.log(runRateYO);
  }
  defNRR = (runRateYT - runRateYO).toFixed(3);
  //console.log(defNRR);
  if (defNRR > 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `+${defNRR}`;
    defh1.style.backgroundColor = "green";
  }
  if (defNRR == 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `${defNRR}`;
    defh1.style.backgroundColor = "#737373";
  }
  if (defNRR < 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `${defNRR}`;
    defh1.style.backgroundColor = "red";
  }
};
