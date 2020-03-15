$( document ).ready(function() {

  setTimeout(function() {
      $("#btnGerarNPC").trigger('click');
      $("#btnGerarFate").trigger('click');
  },10);

  $('#btnGerarNPC').click(function(){

    var npcSkills = exclusiveRandom(skills('skilled'),5);

    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<center><h4>'+random(aspects('concept'))+'</h4>'+
      '<p><b><i>'+random(aspects('good'))+', '+random(aspects('problem'))+'</i></b></p></center>'+
      '<p><strong>Perito (+2) em:</strong> '+npcSkills[0]+', '+npcSkills[1]+', '+npcSkills[2]+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+npcSkills[3]+', '+npcSkills[4]+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    var npcSkills = exclusiveRandom(skills('skilled'),5);

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<center><h4>'+random(aspects('concept'))+'</h4>'+
      '<p><b><i>'+random(aspects('good'))+', '+random(aspects('problem'))+'</i></b></p></center>'+
      '<p><strong>Perito (+2) em:</strong> '+npcSkills[0]+', '+npcSkills[1]+', '+npcSkills[2]+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+npcSkills[3]+', '+npcSkills[4]+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '5px', 'margin': '10px', 'max-width': '500px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarFate').click(function(){

    var classe = classes();
    var classeEspecifica = random(classe.aspects);
    var raca = races();
    var racaEspecifica = random(raca.aspects);
    var pericias = exclusiveRandom(skills('core'),10);
    var facanhasRaca = raca.stunts;
    facanhasRaca = facanhasRaca.concat(raca[racaEspecifica].stunts);

    $('.boxPersonagemFate').html(
      '<p><strong>ASPECTOS</strong><br>'+
      '<i>&#9;Conceito:</i> '+classeEspecifica+' '+random(aspects('ancestry'))+'<br>'+
      '<i>&#9;Raça:</i> '+racaEspecifica+'<br>'+
      '<i>&#9;Problema:</i> '+random(aspects('problem'))+'</p>'+
      '<p><strong>PERÍCIAS</strong><br>'+
      '<strong>&#9;Ótimo (+4):</strong> '+pericias[0]+'<br>'+
      '<strong>&#9;Bom (+3):</strong> '+pericias[1]+', '+pericias[2]+'<br>'+
      '<strong>&#9;Razoável (+2):</strong> '+pericias[3]+', '+pericias[4]+', '+pericias[5]+'<br>'+
      '<strong>&#9;Regular (+1):</strong> '+pericias[6]+', '+pericias[7]+', '+pericias[8]+', '+pericias[9]+'</p>'+
      '<p><strong>FAÇANHAS</strong><br>'+
      '&#9;'+random(facanhasRaca)+'<br>'+
      '&#9;'+random(classe.stunts)+'<br>'+
      '&#9;'+random(classe[classeEspecifica].stunts)+'</p>'+
      '<p><strong>ESTRESSE</strong><br>'+
      '<strong>&#9;Físico: </strong>'+stress(2,3)+'<br>'+
      '<strong>&#9;Mental: </strong>'+stress(2,3)+'</p>'+
      '<p><strong>CONSEQUÊNCIAS</strong><br>'+
      '<strong>&#9;Suave: </strong><br>'+
      '<strong>&#9;Moderada: </strong><br>'+
      '<strong>&#9;Severa: </strong></p>'
    );   

     $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '5px', 'margin': '10px', 'max-width': '500px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

});