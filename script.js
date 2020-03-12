$( document ).ready(function() {
 
  function type(type){
    return $('input[name=type]:checked').val()
  }

  var title = [
    ['Esqueleto','Zumbi','Mímico','Homúnculo','Limo','Vampiro','Carniçal','Troll','Fungo','Fantasma'], //pos 0 - monster
    ['Urso','Morcego','Lobo','Águia','Cachorro','Leão','Crocodilo','Macaco','Cobra'], //pos 1 - animal
    ['Pirata','Bandido','Guerreiro','Clérigo','Conjurador','Assassino','Elfo','Anão','Bárbaro'] //pos 2 - human
  ];

  const skills = {
    skilled : ['Morder e arranhar','Bater e correr','Atacar freneticamente','Atacar em bando','Atacar sorrateiramente','Lutar sozinho','Emboscar','Provocar e assustar','Fugir do combate','Convocar aliados'],
    bad : ['Defender-se','Lutar sozinho','Furtividade','Enganar','Pensar rápido','Raciocinar','Atirar','Continuar lutando','Se locomover']
  }

  $('#btnGenerate').click(function(){
    $('.title').html(random(title[type()]));
    $('.aspects').html(aspects('good')+', '+aspects('bad'));
    $('.good').html(random(skills.skilled)+', '+random(skills.skilled));
    $('.bad').html(random(skills.bad));
    $('.stress').html(stress(0,2));
  });

});