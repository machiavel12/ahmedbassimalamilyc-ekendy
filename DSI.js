const select = document.getElementById("xlm");
const ens1 = document.querySelector(".enseignement");
const emp1 = document.querySelector(".emploi");
const pré1 = document.querySelector(".prérequis");
const ens2 = document.querySelector(".enseignement2");
const emp2 = document.querySelector(".emploi2");
const pré2 = document.querySelector(".prérequis2");
select.addEventListener('change', element);
function element() {

    ens1.style.display = 'none';
    emp1.style.display = 'none';
    pré1.style.display = 'none';
    ens2.style.display = 'none';
    emp2.style.display = 'none';
    pré2.style.display = 'none';

    if (select.value === '1er Année') {
      ens1.style.display = 'block';
      emp1.style.display = 'block';
      pré1.style.display = 'block';
    } else if (select.value === '2ème Année') {
      ens2.style.display = 'block';
      emp2.style.display = 'block';
      pré2.style.display = 'block';
    }
  }