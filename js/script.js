const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPause = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const imgPaused = document.querySelector('.app__card-primary-butto-icon');
const music = document.querySelector('#alternar-musica');
const tempoNaTela = document.querySelector('#timer');

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('/sons/beep.mp3');
const musicaAudio = new Audio('/sons/luna-rise-part-one.mp3');


let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

music.loop = true;

music.addEventListener('change', () =>{
      if(musicaAoDio.paused) {
            musicaAudio.play()
      }else{
            musicaAudio.pause()
      }
});


focoBt.addEventListener('click', () => {
      tempoDecorridoEmSegundos = 1500;
      alterarContexto('foco')
      focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
      tempoDecorridoEmSegundos = 300
      alterarContexto('descanso-curto')
      curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
      tempoDecorridoEmSegundos = 900;
      alterarContexto('descanso-longo')
      longoBt.classList.add('active')
});

function alterarContexto(contexto){
      mostrarTempo()
      botoes.forEach(function(contexto){
          contexto.classList.remove('active');
      })
      html.setAttribute('data-contexto', contexto)
      banner.setAttribute('src', `/imagens/${contexto}.png`)
      switch(contexto){

         case"foco":
         titulo.innerHTML = `Otimize sua produtividade,<br>
         <strong class="app__title-strong">mergulhe no que importa.</strong> `;  
         break;

         case"descanso-curto":
         titulo.innerHTML = `Que tal dar uma respirada?<br>
         <strong class="app__title-strong">Faca uma pausa curta</strong> `;  
         break;

         case"descanso-longo":  
         titulo.innerHTML = `Hora de voltar a superficie.<br>
         <strong class="app__title-strong">Faca uma pausa longa</strong> `;  

         default:
      }
}

const contagemRegressiva = () => {
      if(tempoDecorridoEmSegundos <= 0){
            audioTempoFinalizado.play()
            alert('Tempo finalizado!')
            zerar()
            return
      }
      
      tempoDecorridoEmSegundos -=1
      mostrarTempo()
}

startPause.addEventListener('click', iniciarOuPausa);



function iniciarOuPausa(){
      if(intervaloId){
            audioPausa.play()
            zerar()
            return
      }

      audioPlay.play()
      intervaloId = setInterval(contagemRegressiva, 1000)
      iniciarOuPausarBt.textContent = "Pausar"
      imgPaused.setAttribute('src', `imagens/pause.png`);

}

function zerar (){
      clearInterval(intervaloId)
      iniciarOuPausarBt.textContent = "Comecar"
      imgPaused.setAttribute('src', `imagens/play_arrow.png`);
      intervaloId = null    
}
function mostrarTempo(){
      const tempo = new Date(tempoDecorridoEmSegundos *1000)
      const tempoFormatado = tempo.toLocaleTimeString('pt-Br',{minute: '2-digit', second: '2-digit'})
      tempoNaTela.innerHTML = `${tempoFormatado}`
}
mostrarTempo()