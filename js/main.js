console.log('js/main.js');

const tabela = document.getElementById('table0');
const button = document.getElementById('gerar');
const cabecalho = document.getElementById('cabecalho');
const titulo = document.getElementById('titulo');
const fonte = document.getElementById('fonte');
const dados = document.getElementById('dados');
const Fi = document.getElementById('Fi');
const FAi = document.getElementById('FAi');
const Fr = document.getElementById('Fr');
const FAr = document.getElementById('FAr');
// Script here \/;

button.addEventListener('click', function() {
    let tabFi = [];
    let tabFAi = [];
    let tabFr = [];
    let tabFAr = [];
    const event = tabela.children.length;
    /* for (let i=0; i < event; i++) {
        document.querySelector('#table0'); this.children[0];
    } estava dando problema com o this.children[0],
     entao comentei para poder testar o resto do codigo*/

    function calcFAi() {
        const vet = [];
        let aux = 0;
        for (let i = 0; i < dados.value.split(' ').length; i++) {
            aux += parseInt(dados.value.split(' ')[i]);
            vet.push(aux);
            // console.log(tabfai);
        }
        return vet;
    }

    function calcFr() {
        const vet = [];
        const aux2 = calcFAi();
        for (let i = 0; i < dados.value.split(' ').length; i++) {
            const aux3 = ((parseInt(dados.value.split(' ')[i]) * 100)
             / aux2[aux2.length - 1]);
            vet.push(aux3);
        }
        return vet;
    }
    if (Fi.checked === true) {
        tabFi = (dados.value.split(' '));
    } else {
        tabFi = false;
    }

    if (FAi.checked === true) {
        tabFAi = calcFAi();
        console.log(tabFAi);
    } else {
        tabFAi = false;
    }

    if (Fr.checked === true) {
        tabFr = calcFr();
    } else {
        tabFr = false;
    }

    if (FAr.checked === true) {
        const vetaux = calcFr();
        let aux = 0;
        for (let i = 0; i < vetaux.length; i++) {
            aux += vetaux[i];
            tabFAr.push(aux);
        }
    } else {
        tabFAr = false;
    }

    table0.innerHTML += `<caption>${titulo.value}</caption>`;
    table0.innerHTML += `<thead><tr><th>${cabecalho.value}</th><th hidden>Fi</th><th hidden>FAi</th><th hidden>Fr</th><th hidden>FAr</th></tr></thead>`;
    table0.innerHTML += `<thead><tr><th>${tabFi}</th><th>${tabFAi}</th><th>${tabFr}</th><th>${tabFAr}</th></tr></thead>`;
    //table0.innerHTML = `<span>Fonte:${document.getElementById('fonte').value}</span>`
    // Chamar função das frequencias e concatenar os dados na tabela.
});
