const select = document.getElementById("xlm");
const ens5 = document.querySelector(".enseignement5");
const emp5 = document.querySelector(".emploi5");
const pré5 = document.querySelector(".prérequis5");
const ens6 = document.querySelector(".enseignement6");
const emp6 = document.querySelector(".emploi6");
const pré6 = document.querySelector(".prérequis6");
select.addEventListener('change', element);
function element() {

    ens5.style.display = 'none';
    emp5.style.display = 'none';
    pré5.style.display = 'none';
    ens6.style.display = 'none';
    emp6.style.display = 'none';
    pré6.style.display = 'none';

    if (select.value === '1er Année') {
      ens5.style.display = 'block';
      emp5.style.display = 'block';
      pré5.style.display = 'block';
    } else if (select.value === '2ème Année') {
      ens6.style.display = 'block';
      emp6.style.display = 'block';
      pré6.style.display = 'block';
    }
  }