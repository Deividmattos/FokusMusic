const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPause = document.querySelector('#start-pause');

const music = document.querySelector('#alternar-musica');
const musicaAoDio = new Audio('/sons/luna-rise-part-one.mp3');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;



music.loop = true;

music.addEventListener('change', () =>{
      if(musicaAoDio.paused) {
            musicaAoDio.play()
      }else{
            musicaAoDio.pause()
      }
});


focoBt.addEventListener('click', () => {
      alterarContexto('foco')
      focoBt.classList.add('active')
});

curtoBt.addEventListener('click', () => {
      alterarContexto('descanso-curto')
      curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
      alterarContexto('descanso-longo')
      longoBt.classList.add('active')
});

function alterarContexto(contexto){
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
            zerar()
            alert('Tempo finalizado!')
            return
      }
      
      tempoDecorridoEmSegundos -=1
      console.log('Temporizador: ' + tempoDecorridoEmSegundos)
}

startPause.addEventListener('click', iniciarOuPausa);


function iniciarOuPausa(){
      if(intervaloId){
            zerar()
            return
      }
      intervaloId = setInterval(contagemRegressiva, 1000)

}

function zerar (){
      clearInterval(intervaloId)
      intervaloId = null    
}