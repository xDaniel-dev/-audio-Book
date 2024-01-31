const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoAvancar = document.getElementById('proximo') 
const botaoVoltar = document.getElementById('anterior')
const nomeCapitulo = document.getElementById('capitulo')

const numeroCapitulos = 10
let taTocando = 0
let capituloAtual = 1

// .play() é um comando para acionar algo
// .pause() é usado para pausar algo
// .addEventListener é um comando usado para adicionar um evento a um elemento 
// .classList é usado para acessar uma classe do HTML
// .add é usado para adcionar algo
// .remove é usado par remover algo
// .innerText serve para modificar um texto no HTML 


function tocarFaixa(){
    audioCapitulo.play()
    botaoPlayPause.classList.remove('bi-play-circle')
    botaoPlayPause.classList.add('bi-pause-circle')
}
function pauseFaixa(){
    audioCapitulo.pause()
    botaoPlayPause.classList.add('bi-play-circle')
    botaoPlayPause.classList.remove('bi-pause-circle')
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa()
        taTocando = 1
    } else {
        pauseFaixa()
        taTocando = 0
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = `capitulo ${capituloAtual}`
}

function proximoFaixa(){
    if(capituloAtual === numeroCapitulos ){
        capituloAtual = 1
    } else {
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    trocarNomeFaixa()
    taTocando = 1
}

function voltarFaixa(){
    if(capituloAtual === 1 ){
        capituloAtual = numeroCapitulos
    } else {
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    trocarNomeFaixa()
    taTocando = 1
}

botaoPlayPause.addEventListener('click', tocarOuPausar)
botaoAvancar.addEventListener('click', proximoFaixa)
botaoVoltar.addEventListener('click', voltarFaixa)