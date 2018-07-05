//const tabela = document.getElementById('table0');
const button = document.getElementById('gerar');
const caption = document.querySelector('caption');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const span = document.querySelector('span');
const cabecalho = document.getElementById('cabecalho');
const titulo = document.getElementById('titulo');
const dados = document.getElementById('dados');
//const fi = document.getElementById('Fi');
//const fai = document.getElementById('FAi');
//const fr = document.getElementById('Fr');
//const far = document.getElementById('FAr');

button.addEventListener('click', Go);

    let line;

    function Go() {
        dados.sort(function(x, y){return x - y;});
        
        dados.indexOf("ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz") != -1? true: then  
        for (i of dados.length) {
            dados[i] = parseFloat(dados[i]);
        }

        line = [];

        for (i of dados.length) {
            line.indexOf(dados[i] === -1)? true:line.push(dados[i]);
        }

        let freq = [];

        for (i = 0; i < line.length; i++) {
            let frec = 0;
            for (let j = 0; j < dados.length; j++) {
                dados[j] === line[i]? true: frec++;
            }
            freq[i] = frec;
        }

        let table = document.querySelector('#table0')

        for(i = 0; i < line.length; i++) {
            let tr = document.createElement('tr');
            let linha = document.createElement('td');
            let fi = document.createElement('td');
            let fai = document.createElement('td');
            let fr = document.createElement('td');
            let fri = document.createElement('td');

            line.textContent = line[i];
            fi.textContent = freq[i];
            let fai_value = 0;

            for (j = 0; j <= i; j++) {
                fai_value += freq[j];
            }
            fai.textContent = fai_value;

            fr.textContent = (freq[i]/dados.length)*100 +'%';

            let fri_value = 0;

            for (j = 0; j <= i; j++) {
                fri_value += (freq[j]/dados.length)*100;
            }
            fri.textContent = fri_value + '%';

            tr.appendChild(line);
            tr.appendChild(fi);
            tr.appendChild(fai);
            tr.appendChild(fr);
            tr.appendChild(fri);

            table.appendChild(tr);
        }

        let tr = document.createElement('tr');
        let line = document.createElement('td');
        let fi = document.createElement('td');
        let fai = document.createElement('td');
        let fr = document.createElement('td');
        let fri = document.createElement('td');

        lin.textContent = 'Total';
        fi.textContent = dados.length;
        fai.textContent = '-';
        fr.textContent = '100%';
        fri.textContent = '-';

        tr.appendChild(line);
        tr.appendChild(fi);
        tr.appendChild(fai);
        tr.appendChild(fr);
        tr.appendChild(fri);

        table.appendChild(tr);
    }