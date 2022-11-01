const defOPI = document.querySelector(".defOPI").value
const defYTS = document.querySelector(".defYTS").value;
const defYTO = document.querySelector(".defYTO").value;
const defYOS = document.querySelector(".defYOS").value;
const defYOO = document.querySelector(".defYOO").value;
const defBowledYTs = document.querySelectorAll('input[name="defBowledYT"]');
const defBowledYOs = document.querySelectorAll('input[name="defBowledYO"]');

const defNRR = () => {
    let runRateYT
    let runRateYO
    let bowledYT
  let bowledYO
  let defNRR
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
  if (bowledYT === "yes") {
    const rrPerBall = defYTS / (defOPI*6)
    runRateYT = rrPerBall * 6
    console.log(runRateYT)
  } if (bowledYT === "no") {
    const rrPerBall = defYTS / (defYTO*6)
    runRateYT = rrPerBall * 6;
    console.log(runRateYT);
  }
  if (bowledYO === "yes") {
    const rrPerBall = defYOS / (defOPI*6);
    console.log(runRateYO);

    runRateYO = rrPerBall * 6;
    console.log(runRateYO);
  }
  if (bowledYO === "no") {
    const rrPerBall = defYOS / (defYOO*6);
    runRateYO = rrPerBall * 6;
    console.log(runRateYO);

  }
  defNRR = runRateYT - runRateYO
  console.log(defNRR)
}