$( document ).ready(function() {

  setTimeout(function() {
      $("#btnGerarNPC").trigger('click');
      $("#btnGerarFate").trigger('click');
      $("#btnGerarWoa").trigger('click');
      $("#btnGerarUmdaar").trigger('click');
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

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

    activateStressBox();

  });

  $('#btnGerarFate').click(function(){

    var classe = classes($('#selectClass').val());
    var classeEspecifica = random(classe.aspects);
    var raca = races($('#selectRace').val());
    var racaEspecifica = random(raca.aspects);
    var pericias = characterSkills(classe[classeEspecifica].skills,raca[racaEspecifica].skills,skills('core'));
    var abordagens = characterApproaches(classe[classeEspecifica].approach,raca[racaEspecifica].approach,skills('fae'));
    var facanhasRaca = raca.stunts;
        facanhasRaca = facanhasRaca.concat(raca[racaEspecifica].stunts);
    var facanhas = [];
    var estresse = '';

    facanhas.push(random(facanhasRaca));
    facanhas.push(random(classe.stunts));
    facanhas.push(random(classe[classeEspecifica].stunts));

    var system = $('#radio-fcon').is(':checked') ? 'fcon' : 'fae';

    var tradicoes = characterTraditions(classe.tradition,facanhas[2],pericias,system);

    if(system == 'fcon'){

      attributes = '<div><strong>PERÍCIAS</strong>'+
      '<div class="textIndent"><strong>Ótimo (+4):</strong> '+pericias[0]+'</div>'+
      '<div class="textIndent"><strong>Bom (+3):</strong> '+pericias[1]+', '+pericias[2]+'</div>'+
      '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[3]+', '+pericias[4]+', '+pericias[5]+'</div>'+
      '<div class="textIndent"><strong>Regular (+1):</strong> '+pericias[6]+', '+pericias[7]+', '+pericias[8]+', '+pericias[9]+'</div></div>';

      estresse = '<p><strong>ESTRESSE</strong><br>'+
      '<strong>'+nbsp(4)+'Físico: </strong>'+characterStress('Vigor',pericias)+'<br>'+
      '<strong>'+nbsp(4)+'Mental: </strong>'+characterStress('Vontade',pericias)+'</p>';

    } else {

      attributes = '<div><strong>ABORDAGENS</strong>'+
      '<div><strong>'+nbsp(16)+'Ágil:</strong> '+abordagens['Ágil']+'</div>'+
      '<div><strong>'+nbsp(4)+'Cuidadoso:</strong> '+abordagens['Cuidadoso']+'</div>'+
      '<div><strong>'+nbsp(9)+'Esperto:</strong> '+abordagens['Esperto']+'</div>'+
      '<div><strong>'+nbsp(9)+'Estiloso:</strong> '+abordagens['Estiloso']+'</div>'+
      '<div><strong>'+nbsp(6)+'Poderoso:</strong> '+abordagens['Poderoso']+'</div>'+
      '<div><strong>'+nbsp(6)+'Sorrateiro:</strong> '+abordagens['Sorrateiro']+'</div></div>'

      estresse = '<p><strong>ESTRESSE</strong><br>'+
      nbsp(4)+'<i class="fa fa-square-o"></i> <i class="fa fa-square-o"></i><i class="fa fa-square-o"></i> '+
      '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i></p>';

    }

    if(tradicoes != '')
      tradicoes = '<div><strong>TRADIÇÕES MÁGICAS</strong><br>'+nbsp(4)+tradicoes+'</div><br>';

    $('.boxPersonagemFate').html(
      '<center><h4>'+random(raca[racaEspecifica].names)+'</h4></center>'+
      '<div><strong>ASPECTOS</strong>'+
      '<div class="textIndent"><strong>Conceito:</strong> '+classeEspecifica+'</div>'+
      '<div class="textIndent"><strong>Bioforma:</strong> '+racaEspecifica+' '+random(aspects('ancestry'))+'</div>'+
      '<div class="textIndent"><strong>Dificuldade:</strong> '+random(aspects('problem'))+'</div>'+
      '<div class="textIndent"><strong>Aventura:</strong> '+random(aspects('adventure'))+'</div>'+
      '<div class="textIndent"><strong>Ambição:</strong> '+random(aspects('ambition'))+'</div></div><br>'+
      attributes+'<br>'+
      tradicoes+
      '<div><strong>FAÇANHAS</strong>'+
      '<div class="textIndent">'+facanhas[0]+'</div>'+
      '<div class="textIndent">'+facanhas[1]+'</div>'+
      '<div class="textIndent">'+facanhas[2]+'</div></div>'+
      estresse+
      '<p><strong>CONSEQUÊNCIAS</strong><br>'+
      '<strong>'+nbsp(4)+'Suave (2): </strong><input type="text" class="inputText"><br>'+
      '<strong>'+nbsp(4)+'Moderada (4): </strong><input type="text" class="inputText"><br>'+
      '<strong>'+nbsp(4)+'Severa (6): </strong><input type="text" class="inputText"></p>'+
      '<p><strong>CONDIÇÕES</strong><br>'+
      nbsp(4)+'<i class="fa fa-square-o"></i> Atordoado'+nbsp(7)+'<i class="fa fa-square-o"></i> Amedrontado<br>'+
      nbsp(4)+'<i class="fa fa-square-o"></i> Derrubado'+nbsp(6)+'<i class="fa fa-square-o"></i> Confuso<br>'+
      nbsp(4)+'<i class="fa fa-square-o"></i> Fatigado'+nbsp(10)+'<i class="fa fa-square-o"></i> Fascinado'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

    activateStressBox();

  });

  $('#btnGerarWoa').click(function(){

    var worlds = ['umdaar','uranium'];

    worldAdventure = ($('#selectWorld').val() == '') ? random(worlds) : $('#selectWorld').val();

    if(worldAdventure == 'umdaar'){

      var bioforma = random(races('bioforma').bioforma);

      switch(bioforma){
        case "Homem-besta":
          bioforma = "Homem-"+random(races('bioforma').tipo);
          break;
        case "Quimera":
          bioforma = "Quimera ("+random(races('bioforma').tipo)+' e '+random(races('bioforma').tipo)+')';
          break;
        default:
          bioforma = random(races('bioforma').tipo)+' '+bioforma;
      }

      var umdaarName = random(races('bioforma').prefix)+random(races('bioforma').suffix)+', da tribo '+random(races('bioforma').prefix)+random(races('bioforma').bioform);
      var abordagens = randomApproaches(skills('fae'));

      $('.boxPersonagemFate').html(
        '<center><h4>'+umdaarName+'</h4></center>'+
        '<div><strong>ASPECTOS</strong>'+
        '<div class="textIndent"><strong>Conceito:</strong> '+bioforma+' '+random(aspects('concept'))+'</div>'+
        '<div class="textIndent"><strong>Dificuldade:</strong> '+random(aspects('problem'))+'</div>'+
        '<div class="textIndent"><strong>Motivação:</strong> '+random(aspects('ambition'))+'</div>'+
        '<div class="textIndent"><strong>Aventura:</strong> '+random(aspects('adventure'))+'</div></div><br>'+
        '<div><strong>ABORDAGENS</strong>'+
        '<div><strong>'+nbsp(16)+'Ágil:</strong> '+abordagens['Ágil']+'</div>'+
        '<div><strong>'+nbsp(4)+'Cuidadoso:</strong> '+abordagens['Cuidadoso']+'</div>'+
        '<div><strong>'+nbsp(9)+'Esperto:</strong> '+abordagens['Esperto']+'</div>'+
        '<div><strong>'+nbsp(9)+'Estiloso:</strong> '+abordagens['Estiloso']+'</div>'+
        '<div><strong>'+nbsp(6)+'Poderoso:</strong> '+abordagens['Poderoso']+'</div>'+
        '<div><strong>'+nbsp(6)+'Sorrateiro:</strong> '+abordagens['Sorrateiro']+'</div></div><br>'+
        '<div><strong>FAÇANHAS</strong>'+
        '<div class="textIndent">'+random(stunts('Umdaar '+abordagens[0]))+'</div>'+
        '<div class="textIndent">'+random(stunts(abordagens[1]))+'</div>'+
        '<div class="textIndent">'+random(stunts(abordagens[2]))+'</div></div>'+
        '<p><strong>ESTRESSE</strong><br>'+
        nbsp(4)+'<i class="fa fa-square-o"></i> <i class="fa fa-square-o"></i><i class="fa fa-square-o"></i> '+
        '<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i><i class="fa fa-square-o"></i></p>'+
        '<p><strong>CONSEQUÊNCIAS</strong><br>'+
        '<strong>'+nbsp(4)+'Suave (2): </strong><input type="text" class="inputText"><br>'+
        '<strong>'+nbsp(4)+'Moderada (4): </strong><input type="text" class="inputText"><br>'+
        '<strong>'+nbsp(4)+'Severa (6): </strong><input type="text" class="inputText"></p>'
      );

    };

    if(worldAdventure == 'uranium'){

      var bioforma = random(races('bioforma').bioforma);

      switch(bioforma){
        case "Homem-besta":
          bioforma = "Homem-"+random(races('bioforma').tipo);
          break;
        case "Quimera":
          bioforma = "Quimera ("+random(races('bioforma').tipo)+' e '+random(races('bioforma').tipo)+')';
          break;
        default:
          bioforma = random(races('bioforma').tipo)+' '+bioforma;
      }

      var umdaarName = random(races('bioforma').prefix)+random(races('bioforma').suffix)+', da tribo '+random(races('bioforma').prefix)+random(races('bioforma').bioform);
      var abordagensReais = randomApproaches(skills('fae'));
      var abordagensCulinarias = randomApproaches(skills('uranium'));

      $('.boxPersonagemFate').html(
        '<center><h4>'+umdaarName+'</h4></center>'+
        '<div><strong>ASPECTOS</strong>'+
        '<div class="textIndent"><strong>Conceito:</strong> '+bioforma+' '+random(aspects('concept'))+'</div>'+
        '<div class="textIndent"><strong>Dificuldade:</strong> '+random(aspects('problem'))+'</div>'+
        '<div class="textIndent"><strong>Cenoura:</strong> '+random(aspects('carrot'))+'</div>'+
        '<div class="textIndent"><strong>Persona:</strong> '+random(aspects('persona'))+'</div></div><br>'+
        '<div><strong>ABORDAGENS</strong>'+
        '<div><strong>'+nbsp(16)+'Ágil:</strong> '+abordagensReais['Ágil']+'</div>'+
        '<div><strong>'+nbsp(4)+'Cuidadoso:</strong> '+abordagensReais['Cuidadoso']+'</div>'+
        '<div><strong>'+nbsp(9)+'Esperto:</strong> '+abordagensReais['Esperto']+'</div>'+
        '<div><strong>'+nbsp(9)+'Estiloso:</strong> '+abordagensReais['Estiloso']+'</div>'+
        '<div><strong>'+nbsp(6)+'Poderoso:</strong> '+abordagensReais['Poderoso']+'</div>'+
        '<div><strong>'+nbsp(6)+'Sorrateiro:</strong> '+abordagensReais['Sorrateiro']+'</div></div><br>'+
        '<div><strong>ABORDAGENS CULINÁRIAS</strong>'+
        '<div><strong>'+nbsp(13)+'Ácido:</strong> '+abordagensCulinarias['Ácido']+'</div>'+
        '<div><strong>'+nbsp(9)+'Amargo:</strong> '+abordagensCulinarias['Amargo']+'</div>'+
        '<div><strong>'+nbsp(14)+'Doce:</strong> '+abordagensCulinarias['Doce']+'</div>'+
        '<div><strong>'+nbsp(17)+'Frio:</strong> '+abordagensCulinarias['Frio']+'</div>'+
        '<div><strong>'+nbsp(10)+'Picante:</strong> '+abordagensCulinarias['Picante']+'</div>'+
        '<div><strong>'+nbsp(9)+'Salgado:</strong> '+abordagensCulinarias['Salgado']+'</div></div><br>'+
        '<div><strong>FAÇANHAS</strong>'+
        '<div class="textIndent">'+random(stunts('Uranium'))+'</div>'+
        '<div class="textIndent">'+random(stunts(abordagensReais[0])).replace("Poderoso","Agressivo")+'</div>'+
        '<div class="textIndent">'+random(stunts(abordagensCulinarias[0]))+'</div></div>'+
        '<p><strong>CONDIÇÕES</strong><br>'+
        nbsp(4)+'<i class="fa fa-square-o"></i> Tenso'+nbsp(10)+'<i class="fa fa-square-o"></i> Esgotado'+nbsp(11)+'<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i> Queimado<br>'+
        nbsp(4)+'<i class="fa fa-square-o"></i> Abalado'+nbsp(6)+'<i class="fa fa-square-o"></i> Machucado'+nbsp(7)+'<i class="fa fa-square-o"></i><i class="fa fa-square-o"></i> Cortado<br>'
      );
    
    };

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

    activateStressBox();

  });

  $('#btnGerarUmdaar').click(function(){

    var bioforma = random(races('bioforma').bioforma);

    switch(bioforma){
      case "Homem-besta":
        bioforma = "Homem-"+random(races('bioforma').tipo);
        break;
      case "Quimera":
        bioforma = "Quimera ("+random(races('bioforma').tipo)+' e '+random(races('bioforma').tipo)+')';
        break;
      default:
        bioforma = random(races('bioforma').tipo)+' '+bioforma;
    }

    var aventura = ($('#selectAdventure').val() == '') ? random(umdaar('adventure')) : $('#selectAdventure').val();
    var landsoflight = '<strong>'+random(umdaar('landsoflight').prefix)+' '+random(umdaar('landsoflight').suffix)+'</strong>';
    var wildland = '<strong>'+random(umdaar('wildland').prefix)+' '+random(umdaar('wildland').suffix)+'</strong>';
    var master = '<strong>'+random(umdaar('master').prefix)+' '+random(umdaar('master').suffix)+'</strong>';
    var nome = '<strong>'+random(races('bioforma').prefix)+random(races('bioforma').suffix)+'</strong>';
    var destination = '<strong>'+random(umdaar('destination').prefix)+' '+random(umdaar('destination').suffix)+'</strong>';
    var victim = random(umdaar('victim'));
    var adventure_type = random(umdaar('aventura'));

    switch(aventura){
      case "resgatar":
        aventura = 'Ao passar uma tarde agradável em '+landsoflight+', uma mensagem chega até você: Você deve salvar '+victim.split('–')[0]+' indefeso. Para alcançá-lo, você deve primeiro viajar pelas '+wildland+'. Então, você deve entrar na terra do Mestre '+master+' '+nome+', um '+bioforma+', e se infiltrar no '+destination+'!';
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        break;

      case "descobrir":
        aventura = victim.split('–')[0]+' pede que você viaje pela '+wildland+', na esperança de que você possa descobrir '+adventure_type.split('–')[0];
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        aventura = aventura + '<br><br>' + adventure_type;
        break;

      case "impedir":
        aventura = victim.split('–')[0]+' pede que você viaje pela '+wildland+' até o '+destination+', onde o vil '+master+' '+nome+', um '+bioforma+' está realizando sua trama. Você deve impedir '+adventure_type.split('–')[0];
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        aventura = aventura + '<br><br>' + adventure_type;
        break;

      case "escapar":
        aventura = 'Você começa nas garras do malicioso '+master+' '+nome+', um '+bioforma+', você deve romper as forças dele e através da indomável '+wildland+', se quiser escapar '+adventure_type.split('–')[0];
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + adventure_type;
        break;

      case "defender":
        aventura = 'Você foi informado por um mensageiro de que, do outro lado de '+wildland+', está '+victim.split('–')[0]+' ou '+destination+', que você deve defender contra o ataque do '+master+' '+nome+', um '+bioforma+'.';
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        break;

      case "escoltar":
        aventura = 'Você tem que levar '+victim.split('–')[0]+' com segurança por '+wildland+', além do '+destination+', e fora do alcance do '+master+' '+nome+', um '+bioforma+'.';
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        break;

      case "matar":
        aventura = victim.split('–')[0]+' informa sobre uma ameaça tão vil que você pode ser forçado a viajar por '+wildland+' até o '+destination+' para que seus guerreiros matem '+adventure_type.split('–')[0];
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        aventura = aventura + '<br><br>' + adventure_type;
        break;

      case "conseguir":
        aventura = victim.split('–')[0]+' informa sobre o item essencial – para alcançá-lo, você deve vencer a '+wildland+' com o '+destination+'. Sejam rápidos, pois o ganancioso '+master+' '+nome+', um '+bioforma+' tentará impedi-lo de obter '+adventure_type.split('–')[0];
        aventura = aventura + '<br><br><i>Mais detalhes:</i><br><br>' + victim;
        aventura = aventura + '<br><br>' + adventure_type;
        break;
        
    }

    $('.boxPersonagemFate').html(aventura);

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

});