const wBFs = document.querySelectorAll('input[name="wBF"]');
const dlsPar = document.querySelector(".dlsPar");
const agOvers = document.querySelector(".agOvers");
const agBalls = document.querySelector(".agBalls");
const agTBS = document.querySelector(".agTBS");
const required1 = document.querySelector(".required1");
const defh4 = document.querySelector(".defh4");
const defh1 = document.querySelector(".defh1");

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
  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    if (emptyField.value === "") {
      emptyField.classList.add("emptyField");
    }
  }
  if (document.querySelectorAll('input[name="wBF"]:checked').length === 0) {
    required1.textContent = "*Required";
  }
  if (agBalls.value == "") {
    agBalls.classList.add("selectBalls");
  }
};

const removeRequired1 = () => {
  required1.textContent = "";
};

const removeClass = () => {
  defh4.innerHTML = "";
  defh1.innerHTML = "";
  defh1.style.backgroundColor = "transparent";
  agBalls.value = "";
  agBalls.options[0].disabled = "true";
  agBalls.removeAttribute("disabled");

  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    emptyField.classList.remove("emptyField");
  }
  required1.textContent = "";
  agBalls.classList.remove("selectBalls");
};

const agNRR = () => {
  defh4.innerHTML = "";
  defh1.innerHTML = "";
  defh1.style.backgroundColor = "transparent";
  let tBF;
  let balls = parseFloat(agOvers.value) * 6 + parseFloat(agBalls.value);
  let runRateYT;
  let runRateYO;
  let agNRR;
  for (const wBF of wBFs) {
    if (wBF.checked) {
      tBF = wBF.id;
      console.log(tBF);
      break;
    }
  }
  const emptyFields = document.querySelectorAll('input[type="number"]');
  for (const emptyField of emptyFields) {
    if (emptyField.value === "") {
      return;
    }
  }
  if (wBFs[0].checked === false && wBFs[1].checked === false) {
    return;
  }

  if (tBF === "yourTeam") {
    runRateYT = (dlsPar.value / balls) * 6;
    console.log(runRateYT);
    runRateYO = (agTBS.value / balls) * 6;
  } else if (tBF === "yourOpponent") {
    runRateYO = (dlsPar.value / balls) * 6;
    runRateYT = (agTBS.value / balls) * 6;
  }
  agNRR = (runRateYT - runRateYO).toFixed(3);
  console.log(agNRR);
  if (agNRR > 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `+${agNRR}`;
    defh1.style.backgroundColor = "green";
  }
  if (agNRR == 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `${agNRR}`;
    defh1.style.backgroundColor = "#737373";
  }
  if (agNRR < 0) {
    defh4.innerHTML = "Net run rate of your team:";
    defh1.innerHTML = `${agNRR}`;
    defh1.style.backgroundColor = "red";
  }
};
