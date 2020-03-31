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

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '5px', 'margin': '10px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarFate').click(function(){

    var classe = classes($('#selectClass').val());
    var classeEspecifica = random(classe.aspects);
    var raca = races($('#selectRace').val());
    var racaEspecifica = random(raca.aspects);
    var pericias = characterSkills(classe[classeEspecifica].skills,raca[racaEspecifica].skills,skills('core'));
    var abordagens = characterApproaches(classe[classeEspecifica].approach,raca[racaEspecifica].approach,skills('fae'));
    var tradicoes = classe.tradition;
    var facanhasRaca = raca.stunts;
        facanhasRaca = facanhasRaca.concat(raca[racaEspecifica].stunts);
    var estresse = '';

    if($('#radio-fcon').is(':checked')){

      pericias = '<p><strong>PERÍCIAS</strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Ótimo (+4):</strong> '+pericias[0]+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Bom (+3):</strong> '+pericias[1]+', '+pericias[2]+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Razoável (+2):</strong> '+pericias[3]+', '+pericias[4]+', '+pericias[5]+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Regular (+1):</strong> '+pericias[6]+', '+pericias[7]+', '+pericias[8]+', '+pericias[9]+'</p>';

      estresse = '<p><strong>ESTRESSE</strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Físico: </strong>'+characterStress('Vigor',pericias)+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Mental: </strong>'+characterStress('Vontade',pericias)+'</p>';

    } else {

      pericias = '<p><strong>ABORDAGENS</strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ágil:</strong> '+abordagens['Ágil']+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;&nbsp;Cuidadoso:</strong> '+abordagens['Cuidadoso']+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esperto:</strong> '+abordagens['Esperto']+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estiloso:</strong> '+abordagens['Estiloso']+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poderoso:</strong> '+abordagens['Poderoso']+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sorrateiro:</strong> '+abordagens['Sorrateiro']+'</p>'

      estresse = '<p><strong>ESTRESSE</strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> <i class="fa fa-square-o"></i><i class="fa fa-square-o"></i> '+
      '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i></p>';

    }

    if(tradicoes != '')
      tradicoes = '<p><strong>TRADIÇÕES</strong><br>&nbsp;&nbsp;&nbsp;'+tradicoes+'</p>';

    $('.boxPersonagemFate').html(
      '<center><h4>'+random(raca[racaEspecifica].names)+'</h4></center>'+
      '<p><strong>ASPECTOS</strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Conceito:</strong> '+classeEspecifica+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Biotipo:</strong> '+racaEspecifica+' '+random(aspects('ancestry'))+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Dificuldade:</strong> '+random(aspects('problem'))+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Aventura:</strong> '+random(aspects('adventure'))+'<br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Ambição:</strong> '+random(aspects('ambition'))+'</p>'+
      pericias+
      tradicoes+
      '<p><strong>FAÇANHAS</strong><br>'+
      '&nbsp;&nbsp;&nbsp;'+random(facanhasRaca)+'<br>'+
      '&nbsp;&nbsp;&nbsp;'+random(classe.stunts)+'<br>'+
      '&nbsp;&nbsp;&nbsp;'+random(classe[classeEspecifica].stunts)+'</p>'+
      estresse+
      '<p><strong>CONSEQUÊNCIAS</strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Suave: </strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Moderada: </strong><br>'+
      '<strong>&nbsp;&nbsp;&nbsp;Severa: </strong></p>'+
      '<p><strong>CONDIÇÕES</strong><br>'+
      '&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> Atordoado&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> Derrubado&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> Fatigado&nbsp;&nbsp;&nbsp;&nbsp;<br>'+
      '&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> Amedrontado&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> Confuso&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-square-o"></i> Fascinado&nbsp;&nbsp;&nbsp;&nbsp;<p>'
    );   

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '5px', 'margin': '10px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

});