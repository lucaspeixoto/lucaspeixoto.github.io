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
      '<p><b><i>'+random(aspects('good'))+'; '+random(aspects('problem'))+'</i></b></p></center>'+
      '<p><strong>Perito (+2) em:</strong> '+npcSkills[0]+', '+npcSkills[1]+', '+npcSkills[2]+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+npcSkills[3]+', '+npcSkills[4]+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    var npcSkills = exclusiveRandom(skills('skilled'),5);

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<center><h4>'+random(aspects('concept'))+'</h4>'+
      '<p><b><i>'+random(aspects('good'))+'; '+random(aspects('problem'))+'</i></b></p></center>'+
      '<p><strong>Perito (+2) em:</strong> '+npcSkills[0]+', '+npcSkills[1]+', '+npcSkills[2]+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+npcSkills[3]+', '+npcSkills[4]+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px 10px 10px 0px;', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

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

      pericias = '<div><strong>PERÍCIAS</strong>'+
      '<div class="textIndent"><strong>Ótimo (+4):</strong> '+pericias[0]+'</div>'+
      '<div class="textIndent"><strong>Bom (+3):</strong> '+pericias[1]+', '+pericias[2]+'</div>'+
      '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[3]+', '+pericias[4]+', '+pericias[5]+'</div>'+
      '<div class="textIndent"><strong>Regular (+1):</strong> '+pericias[6]+', '+pericias[7]+', '+pericias[8]+', '+pericias[9]+'</div></div>';

      estresse = '<p><strong>ESTRESSE</strong><br>'+
      '<strong>'+nbsp(3)+'Físico: </strong>'+characterStress('Vigor',pericias)+'<br>'+
      '<strong>'+nbsp(3)+'Mental: </strong>'+characterStress('Vontade',pericias)+'</p>';

    } else {

      pericias = '<div><strong>ABORDAGENS</strong>'+
      '<div><strong>'+nbsp(16)+'Ágil:</strong> '+abordagens['Ágil']+'</div>'+
      '<div><strong>'+nbsp(4)+'Cuidadoso:</strong> '+abordagens['Cuidadoso']+'</div>'+
      '<div><strong>'+nbsp(9)+'Esperto:</strong> '+abordagens['Esperto']+'</div>'+
      '<div><strong>'+nbsp(9)+'Estiloso:</strong> '+abordagens['Estiloso']+'</div>'+
      '<div><strong>'+nbsp(6)+'Poderoso:</strong> '+abordagens['Poderoso']+'</div>'+
      '<div><strong>'+nbsp(6)+'Sorrateiro:</strong> '+abordagens['Sorrateiro']+'</div></div>'

      estresse = '<p><strong>ESTRESSE</strong><br>'+
      nbsp(3)+'<i class="fa fa-square-o"></i> <i class="fa fa-square-o"></i><i class="fa fa-square-o"></i> '+
      '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i></p>';

    }

    if(tradicoes != '')
      tradicoes = '<div><strong>TRADIÇÕES</strong><br>'+nbsp(3)+tradicoes+'</div><br>';

    $('.boxPersonagemFate').html(
      '<center><h4>'+random(raca[racaEspecifica].names)+'</h4></center>'+
      '<div><strong>ASPECTOS</strong>'+
      '<div class="textIndent"><strong>Conceito:</strong> '+classeEspecifica+'</div>'+
      '<div class="textIndent"><strong>Biotipo:</strong> '+racaEspecifica+' '+random(aspects('ancestry'))+'</div>'+
      '<div class="textIndent"><strong>Dificuldade:</strong> '+random(aspects('problem'))+'</div>'+
      '<div class="textIndent"><strong>Aventura:</strong> '+random(aspects('adventure'))+'</div>'+
      '<div class="textIndent"><strong>Ambição:</strong> '+random(aspects('ambition'))+'</div></div><br>'+
      pericias+'<br>'+
      tradicoes+
      '<div><strong>FAÇANHAS</strong>'+
      '<div class="textIndent">'+random(facanhasRaca)+'</div>'+
      '<div class="textIndent">'+random(classe.stunts)+'</div>'+
      '<div class="textIndent">'+random(classe[classeEspecifica].stunts)+'</div></div>'+
      estresse+
      '<p><strong>CONSEQUÊNCIAS</strong><br>'+
      '<strong>'+nbsp(3)+'Suave (2): </strong><br>'+
      '<strong>'+nbsp(3)+'Moderada (4): </strong><br>'+
      '<strong>'+nbsp(3)+'Severa (6): </strong></p>'+
      '<p><strong>CONDIÇÕES</strong><br>'+
      nbsp(3)+'<i class="fa fa-square-o"></i> Atordoado'+nbsp(10)+'<i class="fa fa-square-o"></i> Derrubado'+nbsp(4)+'<i class="fa fa-square-o"></i> Fatigado<br>'+
      nbsp(3)+'<i class="fa fa-square-o"></i> Amedrontado'+nbsp(4)+'<i class="fa fa-square-o"></i> Confuso'+nbsp(8)+'<i class="fa fa-square-o"></i> Fascinado<p>'
    );   

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px 10px 10px 0px;', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

});