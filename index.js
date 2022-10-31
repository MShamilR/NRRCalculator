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
    for (const defBowledYT of defBowledYTs) {
      if (defBowledYT.checked) {
        bowledYT = defBowledYT.id;
        break;
      }
    }
    console.log(bowledYT)
}