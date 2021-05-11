let jogador = 'X';
let bloqueio = false;

function quadradoSelecionado(id) {
    let quadrado = document.getElementById(id);

    if(bloqueio) return;

    if (quadrado.innerHTML === '-' ) {
        quadrado.innerHTML = jogador;
        quadrado.style.color = '#333';
        quadrado.style.fontSize = '40px';
        quadrado.style.fontWeight = 'bold';

        mudarJogador();
        verificaGanhadorColuna();
        verificaGanhadorLinha();
        verificaGanhadorDiagonal();
    }
}

function mudarJogador() {
    let jogada = document.getElementById('jogador-selecionado');

    (jogador === 'X') ? jogador = 'O' : jogador = 'X';
    jogada.innerHTML = jogador;
}

function verificaGanhadorColuna() {
    let countColunaX = 0, countColunaO = 0;

    for(let linha = 1; linha < 4; linha++) {
        for(let coluna = linha; coluna < 10; coluna += 3) {
            if(document.getElementById(coluna).innerHTML === 'X') {
                countColunaX++;
            }

            if(document.getElementById(coluna).innerHTML === 'O') {
                countColunaO++;
            }
        } 

        if(countColunaX === 3) {
            document.getElementById('vencedor-selecionado').innerHTML = 'X';
            bloqueio = true;
            mudaCor('X');
        }

        if(countColunaO === 3) {
            document.getElementById('vencedor-selecionado').innerHTML = 'O';
            bloqueio = true;
            mudaCor('O');
        }

        countColunaX = 0;
        countColunaO = 0;
    } 

     
}

function verificaGanhadorLinha() {
    let countLinhaX = 0, countLinhaO = 0;

    for(let linha = 1; linha < 10; linha += 3) {
        let coluna = linha;
        let count = 0;

        while(count < 3) {
            if(document.getElementById(coluna).innerHTML === 'X') {
                countLinhaX++;
            }

            if(document.getElementById(coluna).innerHTML === 'O') {
                countLinhaO++;
            }

            count++;
            coluna++;
            
        } 

        if(countLinhaX === 3) {
            document.getElementById('vencedor-selecionado').innerHTML = 'X';
            bloqueio = true;
            mudaCor('X');
        }

        if(countLinhaO === 3) {
            document.getElementById('vencedor-selecionado').innerHTML = 'O';
            bloqueio = true;
            mudaCor('O');
        }

        countLinhaX = 0;
        countLinhaO = 0;
    }
}

function verificaGanhadorDiagonal() {
    let countDiagonalX = 0, countDiagonalO = 0;
    
    for (let i = 1; i < 10; i += 4) {
        if(document.getElementById(i).innerHTML === 'X') {
            countDiagonalX++;
        }

        if(document.getElementById(i).innerHTML === 'O') {
            countDiagonalO++;
        }        
    }

    if(countDiagonalX === 3) {
        document.getElementById('vencedor-selecionado').innerHTML = 'X';
        bloqueio = true;
        mudaCor('X');
    }

    if(countDiagonalO === 3) {
        document.getElementById('vencedor-selecionado').innerHTML = 'O';
        bloqueio = true;
        mudaCor('O');
    }

    countDiagonalX = 0;
    countDiagonalO = 0;

    for (let i = 3; i < 10; i += 2) {
        if(document.getElementById(i).innerHTML === 'X') {
            countDiagonalX++;
        }

        if(document.getElementById(i).innerHTML === 'O') {
            countDiagonalO++;
        }        
    }

    if(countDiagonalX === 3) {
        document.getElementById('vencedor-selecionado').innerHTML = 'X';
        bloqueio = true;
        mudaCor('X');
    }

    if(countDiagonalO === 3) {
        document.getElementById('vencedor-selecionado').innerHTML = 'O';
        bloqueio = true;
        mudaCor('O');
    }
}

function mudaCor(letra) {
    for (let i = 1; i < 10; i++) {
        let quadrado = document.getElementById(i);
        if(quadrado.innerHTML === letra) {
            quadrado.style.backgroundColor = 'rgb(42, 165, 48)';
            quadrado.style.boxShadow = 'rgb(87, 212, 93) 3px 3px 3px'
        }
    }
}

function reiniciar() {
    bloqueio = false;
    document.getElementById('vencedor-selecionado').innerHTML = '';
    document.getElementById('jogador-selecionado').innerHTML = '';

    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = '-';
        document.getElementById(i).style.color = 'brown';
        document.getElementById(i).style.backgroundColor = 'brown';
        document.getElementById(i).style.boxShadow = 'rgb(216, 98, 98) 3px 3px 3px';
    }
}