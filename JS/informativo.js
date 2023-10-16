 // Aguarde até que o documento esteja carregado
 document.addEventListener("DOMContentLoaded", function () {
  // Inicialize o Swiper
  var mySwiper = new Swiper(".swiper-container", {
    // Configuração específica para o efeito coverflow
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 50, // Ângulo de rotação dos slides
      stretch: 0, // Quanto os slides devem se esticar no eixo Z
      depth: 100, // Profundidade dos slides em z-index
      modifier: 1, // Multiplicador que afeta o "derramamento" dos slides
      slideShadows: true, // Ativar sombras nos slides
      scale: 1,
    },
    autoplay: {
      delay: 3000, // Tempo de intervalo entre os slides (3 segundos neste exemplo)
      disableOnInteraction: false, // Permite o autoplay continuar mesmo após interação do usuário
    },
    allowSlideNext: true, // Permite que o usuário possa fazer scroll com o mouse

  });
});


var firework;

function setup(){
  createCanvas (400, 300);
  stroke(255);
  strokeWeigh(4);
  firework = new Particle(200,150);
}

function draw(){
  background(51)
  firework.update();
  firework.show();
}

function Particle (x,y){
  this.pos = createVector (x,y);
  this.vel = createVector (0,0);
  this.acc = createVector(0,0);
  
  this.applyForce = function (force){
    this.acc.add(force);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult (0)
  }

  this.show = function (){
    point(this.pos.x, this.pos.y)
  }



}