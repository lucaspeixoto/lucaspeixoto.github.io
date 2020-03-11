$( document ).ready(function() {
 
  // Script to open and close sidebar
  function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
  }

  var random = function(array) {
     return array[Math.floor(Math.random() * array.length)]
  };
  
  var stress = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    var total = '';
    for (i=0;i<number;i++)
    	total = total + 'O';
    return total;
  };
  
  var type = function(type){
    return $('input[name=type]:checked').val()
  }

  var title = [
    ['Esqueleto','Zumbi','Mímico','Homúnculo','Limo','Vampiro','Carniçal','Troll','Fungo','Fantasma'], //pos 0 - monster
    ['Urso','Morcego','Lobo','Águia','Cachorro','Leão','Crocodilo','Macaco','Cobra'], //pos 1 - animal
    ['Pirata','Bandido','Guerreiro','Clérigo','Conjurador','Assassino','Elfo','Anão','Bárbaro'] //pos 2 - human
  ];

  const aspects = {
    good : ['Bom de briga','Ligeiro quando precisa','Olfato aguçado','Excelente caçador','Sabe se esconder','Bastante atlético','Pensamento rápido','Atento aos detalhes','Agilidade felina'],
    bad : ['Tem medo de fogo','Sempre com fome','Um pouco distraído','Bastante desmotivado','Covarde sozinho','Bem barulhento','Não pode com magia']
  }

  const skills = {
    skilled : ['Morder e arranhar','Bater e correr','Atacar freneticamente','Atacar em bando','Atacar sorrateiramente','Lutar sozinho','Emboscar','Provocar e assustar','Fugir do combate','Convocar aliados'],
    bad : ['Defender-se','Lutar sozinho','Furtividade','Enganar','Pensar rápido','Raciocinar','Atirar','Continuar lutando','Se locomover']
  }

  $('#btnGenerate').click(function(){
    $('.title').html(random(title[type()]));
    $('.aspects').html(random(aspects.good)+', '+random(aspects.bad));
    $('.good').html(random(skills.skilled)+', '+random(skills.skilled));
    $('.bad').html(random(skills.bad));
    $('.stress').html(stress(0,2));
  });

});