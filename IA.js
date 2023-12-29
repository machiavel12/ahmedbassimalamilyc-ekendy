const select = document.getElementById("xlm");
const ens3 = document.querySelector(".enseignement3");
const emp3 = document.querySelector(".emploi3");
const pré3 = document.querySelector(".prérequis3");
const ens4 = document.querySelector(".enseignement4");
const emp4 = document.querySelector(".emploi4");
const pré4 = document.querySelector(".prérequis4");
select.addEventListener('change', element);
function element() {

    ens3.style.display = 'none';
    emp3.style.display = 'none';
    pré3.style.display = 'none';
    ens4.style.display = 'none';
    emp4.style.display = 'none';
    pré4.style.display = 'none';

    if (select.value === '1er Année') {
      ens3.style.display = 'block';
      emp3.style.display = 'block';
      pré3.style.display = 'block';
    } else if (select.value === '2ème Année') {
      ens4.style.display = 'block';
      emp4.style.display = 'block';
      pré4.style.display = 'block';
    }
  }