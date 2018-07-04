console.log('js/main.js');

const tabela = document.getElementById('table0');
const button = document.getElementById('gerar');
const caption = document.querySelector('caption');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const span = document.querySelector('span');
const cabecalho = document.getElementById('cabecalho');
const titulo = document.getElementById('titulo');
const dados = document.getElementById('dados');
const fi = document.getElementById('Fi');
const fai = document.getElementById('FAi');
const fr = document.getElementById('Fr');
const far = document.getElementById('FAr');
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

    function calcfai() {
        const vet = [];
        let aux = 0;
        for (let i = 0; i < dados.value.split(' ').length; i++) {
            aux += parseInt(dados.value.split(' ')[i]);
            vet.push(aux);
            // console.log(tabfai);
        }
        return vet;
    }

    function calcfr() {
        const vet = [];
        const aux2 = calcfai();
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
        tabFAi = calcfai();
        console.log(tabFAi);
    } else {
        tabFAi = false;
    }

    if (Fr.checked === true) {
        tabFr = calcfr();
    } else {
        tabFr = false;
    }
    if (FAr.checked === true) {
        const vetaux = calcfr();
        let aux = 0;
        for (let i = 0; i < vetaux.length; i++) {
            aux += vetaux[i];
            tabFAr.push(aux);
        }
    } else {
        tabFAr = false;
    }
    
    caption.textContent = titulo.value;
    span.textContent = 'Fonte: '+fonte.value;
    thead.innerHTML = `<td>Fi</td><td>FAi</td><td>Fr</td><td>Fr</td>`

    for (let i = 0; i <= dados.length; i++) {
        tbody.innerHTML += `<tr><td>${cabecalho.value[i]}</td><td>${tabFi[i]}</td>
        <td>${tabFAi[i]}</td><td>${tabFr[i]}</td><td>${tabFAr[i]}</td></tr>`;
    }   
    
    // table0.innerHTML += `<thead><tr><th>${cabecalho.value}</th><th hidden>Fi</th><th hidden>FAi</th><th hidden>Fr</th><th hidden>FAr</th></tr></thead>`;
    // table0.innerHTML += `<thead><tr><th>${tabFi}</th><th>${tabFAi}</th><th>${tabFr}</th><th>${tabFAr}</th></tr></thead>`;
    //table0.innerHTML = `<span>Fonte:${document.getElementById('fonte').value}</span>`
    // Chamar função das frequencias e concatenar os dados na tabela.

});
