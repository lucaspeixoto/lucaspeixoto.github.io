$( document ).ready(function() {

  $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  function atributos() {
    return [4,3,2];
  };

  function pericias() {
    return ['Artes','Atletismo','Combate à Distância','Combate Corporal','Condução','Conhecimento','Idiomas','Investigação','Manipulação','Sobrevivência','Subterfúgio','Tecnologia'];
  };

  var pactos = ['Aurora Dourada','Brujeria','Feri','Onmyodo','Rosacruz','Zangbeto'];
  var linhagens = ['Arbac-Apuhc','Hamtammr','Loup-Garou','Luison','Óboroten','Volkodlak'];
  var castas = ['Adze','Gaki','Ghul','Lilitu','Vyrolakos','Baital'];

  function donsDasTrevas(dom){
    
    switch(dom){
      case 'Desejo Mortal':
        return ['Libido da Súcubos (pág. 32)','Fúria Cega (pág. 32)','Atração Magnética (pág. 32)'];
        break;
      case 'Dominar Feras':
        return ['Domínio Animal (pág. 33)','Acalmar Fúria (pág. 33)','Sentidos da Fera (pág. 33)'];
        break;
      case 'Escuridão da Alma':
        return ['Sentidos da Escuridão (pág. 33)','Fusão Sombria (pág. 34)','Manipular Sombras (pág. 34)'];
        break;
      case 'Forma Monstruosa':
        return ['Garras Afiadas (pág. 34)','Assumir a Besta (pág. 34)','Monstruosidade (pág. 34)'];
        break;
      case 'Mestre da Mortalha':
        return ['Falar com Mortos (pág. 35)','Animar Corpos (pág. 35)','Assumir Invólucro (pág. 35)'];
        break;
      case 'Moldar a Carne':
        return ['Distorcer Carne (pág. 35)','Manipular Corpos (pág. 35)','Amálgama (pág. 36)'];
        break;
      case 'Nublar a Mente':
        return ['Apagar Memórias (pág. 36)','Dominar a Mente (pág. 36)','Leitura Mental (pág. 36)'];
        break;
      case 'Peste de Insetos':
        return ['Controlar Insetos (pág. 37)','Forma de Enxame (pág. 37)','Doença Mortal (pág. 37)'];
        break;
      case 'Potência Demoníaca':
        return ['Força das Trevas (pág. 37)','Velocidade Mortal (pág. 37)','Resistir a Injúrias (pág. 37)'];
        break;
      case 'Tormento Mental':
        return ['Agulhas Mentais (pág. 77)','Ilusões Sinistras (pág. 77)','Roubar Memórias (pág. 77)'];
        break;
    }

  };

  function mimetismos(caminho){
    
    switch(caminho){
      case 'Básico':
        return ['Faro Perfeito (pág. 36)','Forma Animalesca (pág. 36)','Garras e Presas (pág. 37)','Resistir a Injúrias (pág. 37)'];
        break;
      case 'Lince':
        return ['Agilidade do Predador (pág. 37)','Comandar Feras (pág. 37)','Sentir o Ambiente (pág. 37)'];
        break;
      case 'Lobo':
        return ['Foco Predador (pág. 38)','Olhar Intimidador (pág. 38)','Sentidos Aguçados (pág. 38)'];
        break;
      case 'Guepardo':
        return ['Atração Animal (pág. 38)','Salto Ampliado (pág. 38)','Velocidade do Guepardo (pág. 39)'];
        break;
      case 'Pantera':
        return ['Aderência Física (pág. 39)','Inocular Veneno (pág. 39)','Mimetismo Natural (pág. 39)'];
        break;
      case 'Urso':
        return ['Força Animalesca (pág. 40)','Odor Nauseante (pág. 40)','Urro Aterrador (pág. 40)'];
        break;
      case 'Javali':
        return ['Presença Poderosa (pág. 40)','Regeneração Ampliada (pág. 40)','Sentir o Perigo (pág. 40)'];
        break;
    }

  };

  function trilhas(pacto){
    
    switch(pacto){
      case 'Aurora Dourada':
        return ['Abjuração','Adivinhação','Conjuração','Aurora Dourada'];
        break;
      case 'Brujeria':
        return ['Abjuração','Evocação','Transmutação','Brujeria'];
        break;
      case 'Feri':
        return ['Encantamento','Evocação','Necromancia','Feri'];
        break;
      case 'Onmyodo':
        return ['Abjuração','Adivinhação','Ilusão','Onmyodo'];
        break;
      case 'Rosacruz':
        return ['Adivinhação','Conjuração','Encantamento','Rosacruz'];
        break;
      case 'Zangbeto':
        return ['Evocação','Necromancia','Transmutação','Zangbeto'];
        break;
    }

  };

  function feiticos(trilha) {

    switch(trilha){
      case 'Abjuração':
        return ['Afastar Espírito/Entidade (pág. 34)','Aprisionar Corpo (pág. 34)','Aprisionar Espírito/Entidade (pág. 34)','Contrafeitiço (pág. 35)','Escudo Arcano (pág. 35)'];
        break;
      case 'Adivinhação':
        return ['Compreender/Detectar a Magia (pág. 35)','Línguas de Babel (pág. 35)','Ver a Verdade (pág. 35)','Ver o Passado/Futuro (pág. 35)','Projeção Astral (pág. 35)'];
        break;
      case 'Conjuração':
        return ['Criar Runa Arcana (pág. 36)','Invocar Animal (pág. 36)','Invocar Elementos (pág. 36)','Invocar Entidade (pág. 36)','Portal (pág. 36)'];
        break;
      case 'Encantamento':
        return ['Coma (pág. 36)','Debilitar Vontade (pág. 36)','Dominar Animais/Pessoas (pág. 37)','Enlouquecer (pág. 37)','Ler a Mente (pág. 37)'];
        break;
      case 'Evocação':
        return ['Curar Doença (pág. 37)','Curar Ferimento (pág. 37)','Ferir (pág. 37)','Luz/Escuridão (pág. 37)','Telecinésia (pág. 37)'];
        break;
      case 'Ilusão':
        return ['Ilusão (pág. 38)','Invisibilidade (pág. 38)','Múltiplas Imagens (pág. 38)','Som Fantasmagórico (pág. 38)','Sonho/Pesadelo (pág. 38)'];
        break;
      case 'Necromancia':
        return ['Debilitar Saúde (pág. 38)','Doença (pág. 38)','Criar/Destruir Desmorto (pág. 38)','Medo (pág. 39)','Ressurreição (pág. 39)'];
        break;
      case 'Transmutação':
        return ['Consertar (pág. 39)','Debilitar Postura (pág. 39)','Fortalecer Arma/Armadura (pág. 39)','Mensagem (pág. 39)','Sentidos Extraordinários (pág. 39)'];
        break;
      case 'Rosacruz':
        return ['Bonança (pág. 40)','Terceiro Olho (pág. 41)'];
        break;
      case 'Brujeria':
        return ['Corpo de Energia (pág. 40)','Explosão de Energia (pág. 40)'];
        break;
      case 'Zangbeto':
        return ['Garras das Trevas (pág. 40)','Manipular Sombras (pág. 40)'];
        break;
      case 'Aurora Dourada':
        return ['Invocar Familiar (pág. 40)','Perceber o Infinito (pág. 40)'];
        break;
      case 'Onmyodo':
        return ['Invocar Shinigami (pág. 40)','Sugar Espírito (pág. 40)'];
        break;
      case 'Feri':
        return ['Música do Coração (pág. 40)','Santidade (pág. 40)'];
        break;
    }

  };

  function pertences(type){

    switch(type){
      case 'corporal':
        return ['Adaga (+1)','Faca (+1)','Punhal (+1)','Soqueira (+1)','Facão (+2)','Espada (+2)','Martelo (+2)','Machado (+3)','Espada Larga (+3)'];
        break;
      case 'distancia':
        return ['Arco e Flecha (+1)','Desert Eagle (+1)','Revólver 38 (+1)','Glock 9mm (+1)','Espingarda (+2)','Escopeta (+2)','Carabina (+2)','Metralhadora (+3)','Fuzil (+3)'];
        break;
      case 'armadura':
        return ['Roupas pesadas (RD 1)','Roupas pesadas (RD 1)','Roupas pesadas (RD 1)','Colete Leve (RD 1)','Colete Leve (RD 1)','Colete Pesado (RD 2)','Colete Pesado (RD 2)','Armadura de Couro (RD 2)','Armadura Tática (RD 3)'];
        break;
    }

  };

  $('#btnGerarBruxo').click(function(){

    var valAtributos = exclusiveRandom(atributos(),3);
    var valPericias = exclusiveRandom(pericias(),2);
    var valPacto = random(pactos);
    var valTrilhas = exclusiveRandom(trilhas(valPacto),valAtributos[2]);
    var valFeiticos = '';

    valFeiticos = valFeiticos + '<div class="textIndent">' + random(feiticos(valTrilhas[0])) + '</div>';
    valFeiticos = valFeiticos + '<div class="textIndent">' + random(feiticos(valTrilhas[1])) + '</div>';

    if (valAtributos[2] == 3){
      valFeiticos = valFeiticos + '<div class="textIndent">' + random(feiticos(valTrilhas[2])) + '</div>';      
    } else if (valAtributos[2] == 4){
      valFeiticos = valFeiticos + '<div class="textIndent">' + random(feiticos(valTrilhas[2])) + '</div>';      
      valFeiticos = valFeiticos + '<div class="textIndent">' + random(feiticos(valTrilhas[3])) + '</div>';      
    }

    $('.boxPersonagemFate').html(
      '<center><h4>Bruxo do Pacto '+valPacto+'</h4></center>'+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Corpo:</strong> '+valAtributos[0]+'</div>'+
      '<div class="textIndent"><strong>Espírito:</strong> '+valAtributos[1]+'</div>'+
      '<div class="textIndent"><strong>Mente:</strong> '+valAtributos[2]+'</div>'+
      '<br><div class="textIndent"><strong>Saúde:</strong> '+Number(valAtributos[0]+5)+'</div>'+
      '<div class="textIndent"><strong>Postura:</strong> '+Number(valAtributos[1]+5)+'</div>'+
      '<div class="textIndent"><strong>Vontade:</strong> '+Number(valAtributos[2]+5)+'</div></div><br>'+
      '<div><strong>PERÍCIAS</strong>'+
      '<div class="textIndent">'+valPericias[0]+', '+valPericias[1]+' e Magia</div><br>'+
      '<div><strong>PERTENCES</strong>'+
      '<div class="textIndent">'+random(pertences(random(['corporal','distancia'])))+'</div>'+
      '<div class="textIndent">'+random(pertences('armadura'))+'</div></div><br>'+
      '<div><strong>FEITIÇOS</strong>'+valFeiticos+'</div>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #d992ef'});

  });

  $('#btnGerarLicantropo').click(function(){

    var valAtributos = exclusiveRandom(atributos(),3);
    var valPericias = exclusiveRandom(pericias(),2);
    var valLinhagem = random(linhagens);
    var valCaminhos = mimetismos('Básico');

    if(valLinhagem == 'Arbac-Apuhc'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[2] = Number(valAtributos[2]+1);
      valCaminhos = valCaminhos.concat(mimetismos('Lince'));
    }

    if(valLinhagem == 'Hamtammr'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[1] = Number(valAtributos[1]+1);
      valCaminhos = valCaminhos.concat(mimetismos('Lobo'));
    }

    if(valLinhagem == 'Loup-Garou'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[1] = Number(valAtributos[1]+1);
      valCaminhos = valCaminhos.concat(mimetismos('Guepardo'));
    }

    if(valLinhagem == 'Luison'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[2] = Number(valAtributos[2]+1);
      valCaminhos = valCaminhos.concat(mimetismos('Pantera'));
    }

    if(valLinhagem == 'Óboroten'){
      valAtributos[0] = Number(valAtributos[0]+2);
      valCaminhos = valCaminhos.concat(mimetismos('Urso'));
    }

    if(valLinhagem == 'Volkodlak'){
      valAtributos[0] = Number(valAtributos[0]+2);
      valCaminhos = valCaminhos.concat(mimetismos('Javali'));
    }

    var valMimetismos = exclusiveRandom(valCaminhos,3);

    $('.boxPersonagemFate').html(
      '<center><h4>Licantropo da Linhagem '+valLinhagem+'</h4></center>'+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Corpo:</strong> '+valAtributos[0]+'</div>'+
      '<div class="textIndent"><strong>Espírito:</strong> '+valAtributos[1]+'</div>'+
      '<div class="textIndent"><strong>Mente:</strong> '+valAtributos[2]+'</div>'+
      '<br><div class="textIndent"><strong>Saúde:</strong> '+Number(valAtributos[0]+5)+'</div>'+
      '<div class="textIndent"><strong>Postura:</strong> '+Number(valAtributos[1]+5)+'</div>'+
      '<div class="textIndent"><strong>Vontade:</strong> '+Number(valAtributos[2]+5)+'</div></div><br>'+
      '<div><strong>PERÍCIAS</strong>'+
      '<div class="textIndent">'+valPericias[0]+' e '+valPericias[1]+'</div><br>'+
      '<div><strong>PERTENCES</strong>'+
      '<div class="textIndent">'+random(pertences(random(['corporal','distancia'])))+'</div>'+
      '<div class="textIndent">'+random(pertences('armadura'))+'</div></div><br>'+
      '<div><strong>MIMETISMOS</strong>'+
      '<div class="textIndent">'+valMimetismos[0]+'</div>'+
      '<div class="textIndent">'+valMimetismos[1]+'</div>'+
      '<div class="textIndent">'+valMimetismos[2]+'</div></div>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #efe092'});

  });

  $('#btnGerarVampiro').click(function(){

    var valAtributos = exclusiveRandom(atributos(),3);
    var valPericias = exclusiveRandom(pericias(),2);
    var valCasta = random(castas);

    if(valCasta == 'Adze'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[1] = Number(valAtributos[1]+1);
      valDons = ['Escuridão da Alma','Nublar a Mente','Peste de Insetos'];
    }

    if(valCasta == 'Gaki'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[2] = Number(valAtributos[2]+1);
      valDons = ['Escuridão da Alma','Mestre da Mortalha','Potência Demoníaca'];
    }

    if(valCasta == 'Ghul'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[2] = Number(valAtributos[2]+1);
      valDons = ['Escuridão da Alma','Dominar Feras','Moldar a Carne'];
    }

    if(valCasta == 'Lilitu'){
      valAtributos[1] = Number(valAtributos[1]+1);
      valAtributos[2] = Number(valAtributos[2]+1);
      valDons = ['Desejo Mortal','Nublar a Mente','Potência Demoníaca'];
    }

    if(valCasta == 'Vyrolakos'){
      valAtributos[0] = Number(valAtributos[0]+1);
      valAtributos[1] = Number(valAtributos[1]+1);
      valDons = ['Dominar Feras','Forma Monstruosa','Potência Demoníaca'];
    }

    if(valCasta == 'Baital'){
      valAtributos[1] = Number(valAtributos[1]+1);
      valAtributos[2] = Number(valAtributos[2]+1);
      valDons = ['Escuridão da Alma','Potência Demoníaca','Tormento Mental'];
    }

    $('.boxPersonagemFate').html(
      '<center><h4>Vampiro da Casta '+valCasta+'</h4></center>'+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Corpo:</strong> '+valAtributos[0]+'</div>'+
      '<div class="textIndent"><strong>Espírito:</strong> '+valAtributos[1]+'</div>'+
      '<div class="textIndent"><strong>Mente:</strong> '+valAtributos[2]+'</div>'+
      '<br><div class="textIndent"><strong>Saúde:</strong> '+Number(valAtributos[0]+5)+'</div>'+
      '<div class="textIndent"><strong>Postura:</strong> '+Number(valAtributos[1]+5)+'</div>'+
      '<div class="textIndent"><strong>Vontade:</strong> '+Number(valAtributos[2]+5)+'</div></div><br>'+
      '<div><strong>PERÍCIAS</strong>'+
      '<div class="textIndent">'+valPericias[0]+' e '+valPericias[1]+'</div><br>'+
      '<div><strong>PERTENCES</strong>'+
      '<div class="textIndent">'+random(pertences(random(['corporal','distancia'])))+'</div>'+
      '<div class="textIndent">'+random(pertences('armadura'))+'</div></div><br>'+
      '<div><strong>DONS DAS TREVAS</strong>'+
      '<div class="textIndent">'+random(donsDasTrevas(valDons[0]))+'</div>'+
      '<div class="textIndent">'+random(donsDasTrevas(valDons[1]))+'</div>'+
      '<div class="textIndent">'+random(donsDasTrevas(valDons[2]))+'</div></div>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #ef9292'});

  });

});