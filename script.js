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

    //var classe = classes();
    //var raca = races();

    var skills = exclusiveRandom(skills('core'),10);

    $('.boxPersonagemFate').html(
    //  '<p><i>Conceito:</i> '+random(classe.aspects())+' '+random(aspects('ancestry'))+'</p>'+
    //  '<p><i>Raça:</i> '+random(raca.aspects())+'</p>'+
      '<p><i>Problema:</i> '+random(aspects('problem'))+'</p><br>'+
      '<p><strong>Ótimo (+4):</strong> '+skills[0]+'</p>'+
      '<p><strong>Bom (+3):</strong> '+skills[1]+', '+skills[2]+'</p>'+
      '<p><strong>Razoável (+2):</strong> '+skills[3]+', '+skills[4]+', '+skills[5]+'</p>'+
      '<p><strong>Regular (+1):</strong> '+skills[6]+', '+skills[7]+', '+skills[8]+', '+skills[9]+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'
    );   

     $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '5px', 'margin': '10px', 'max-width': '500px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

});