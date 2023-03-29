$( document ).ready(function() {

  $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '650px', 'box-shadow': '5px 5px 10px lightgrey'});

  function atributos(nivel) {

    switch(nivel){
      case "1":
      case "2":
        return random([[3,2,1],[4,1,1],[2,2,2]]);
        break;
      case "3":
        return random([[4,2,1],[5,1,1],[3,2,2]]);
        break;
      case "4":
        return random([[4,3,1],[4,2,2],[5,2,1],[3,3,2]]);
        break;
      case "5":
        return random([[4,3,2],[5,2,2],[3,3,3]]);
        break;
      case "6":
      case "7":
        return random([[5,3,2],[6,2,2],[4,3,3]]);
        break;
      case "8":
        return random([[5,4,2],[5,3,3],[6,3,2],[4,4,3]]);
        break;
    }
    
  };

  function nivelHabilidade(nivel) {

    switch(nivel){
      case "1":
        return ' (NV 1)';
        break;
      case "2":
      case "3":
      case "4":
      case "5":
        return ' (NV 2)';
        break;
      case "6":
      case "7":
      case "8":
        return ' (NV 3)';
        break;
    }
    
  };

  function nomeHiboriano(regiao) {

    var nome = '';

    switch(regiao){
      case "hiboriana":
        nome = random(['Adriano','Augusto','Beoto','Bruno','Cesar','Dante','Francesco','Galeso','Marcus','Marius','Martim','Octavio','Vicente','Ágata','Agnes','Alice','Aurora','Beatrice','Camilla','Chiara','Gaia','Ginevra','Greta','Helena','Isadora','Íris','Laís','Sara','Sofia','Vitoria']);
        break;
      case "norte":
        nome = random(['Andor','Ari','Baggi','Brynjar','Elof','Folke','Hakon','Hallbjorn','Ivor','Loki','Rudolf','Thor','Torsten','Vidar','Annveig','Bergunn','Dagny','Freya','Frig','Idonea','Liv','Magnhild','Randi','Sif','Sigrun','Urd','Verdandi','Barra','Coll','Conall','Conan','Eadan','Earc','Finnean','Garbhan','Gormal','Macrath','Osgar','Rodachan','Solas','Aithne','Blaanid','Brianag','Caitlín','Fíne','Malamhin','Mordag','Muirin','Naomh','Saraid','Slaine']);
        break;    
      case "sul":
        nome = random(['Adisa','Ayo','Bomani','Danso','Jafari','Kambami','Kayin','Kwame','Leke','Nilo','Sekani','Zaki','Zola','Amara','Ayana','Bintu','Dalji','Dandara','Eno','Fayola','Kieza','Jendayi','Lueji','Monifa','Zuri']);
        break;
      case "terras":
        nome = random(['Abu','Ashur','Bineil','Ennanum','Hanu','Ili-Ellat','Khalil','Khammo','Madsa','Malik','Meesha','Ram','Asiah','Damrina','Emmita','Huda','Khannah','Leja','Lilith','Nasibin','Ramina','Shimta','Yata']);
        break;
    }

    return nome;
  }

  function habilidades() {
    return ['Alquimista','Ambidestro','Artista Marcial','Ataque Tático','Bastião','Canções','Carga','Companheiro Animal','Concentração','Contra-ataque','Curandeiro','Empurrão','Encantos','Encorajar','Especialista em Arma','Fascinar','Fé Verdadeira','Ferreiro','Fúria','Golpe Furtivo','Intimidador','Ladinagem','Lutador Sagaz','Lutar com Escudo','Magias','Orações','Protetor','Rajada Mística','Rituais','Romper o Mal','Teleporte','Tiro Certeiro','Veloz','Vigoroso'];
  };

  function regiao() {
    return ['Ducado de Artoriu','Ducado de Strada','Porto Belo','Cidadela de Benor','Capital do Reinado','Capital do Reinado'];
  };

  function objetivo() {
    return ['Fugir das forças de Nokron/Encontrar uma saída.','Resgatar um importante Personagem.','Encontrar um importante Item.','Sabotar os planos de Nokron e seus aliados.','Buscar informações importantes.','Encontrar e enfrentar um terrível Monstro.'];
  };

  function portas(){
    return ['Corredor principal','Corredor secundário e ligação','Corredor principal e ligação','Corredor secundário','Ligação']
  }

  function cenario() {

    tiposCenario = ['Floresta','Vulcão','Masmorra','Caverna'];
    tempCenario = random(['Dois','Floresta','Vulcão','Masmorra','Caverna','Masmorra'])

    if(tempCenario == 'Dois'){
      tempCenario = exclusiveRandom(tiposCenario,2);
      tempCenario = tempCenario[0]+' e '+tempCenario[1];
    }

    return tempCenario;
  };

  function tipoEvento() {
    return ['Personagem (vermelho)','Personagem (azul)','Armadilha (vermelho)','Armadilha (amarelo)','Armadilha (laranja)','Armadilha (azul)','Tesouro (vermelho)','Tesouro (amarelo)','Tesouro (laranja)','Tesouro (azul)','Alavanca (vermelho)','Alavanca (azul)'];
  };

  function evento(tipo,nivel) {
    
    var dano = Math.ceil(nivel/2);
    var moedas = Number(nivel*25);
    var equipamento = random(['Equipamento','Equipamento','Equipamento','Equipamento','Equipamento','Relíquia']);
    var pocao = random(['Poção de Cura','Água Benta','Antídoto','Poção de Proteção','Tônico da Força','Pena de Fênix']);
    
    switch(tipo){
      case "Personagem (vermelho)":
      case "Personagem (azul)":
          return ['Um Monstro escondido','Um comerciante','Um traidor','Um nobre dono de terras','Um Herói do passado','Um informante importante'];
        break;
      case "Armadilha (vermelho)":
      case "Armadilha (laranja)":
      case "Armadilha (amarelo)":
      case "Armadilha (azul)":
        return ['Dano '+dano,'Perde a rodada','Dano '+Number(dano-1)+' e Amaldiçoado','Preso (teste para libertar)','Dano '+Number(dano-1)+' e Envenenado','Dano '+dano];
        break;
      case "Tesouro (vermelho)":
      case "Tesouro (laranja)":
      case "Tesouro (amarelo)":
      case "Tesouro (azul)":
        return [moedas+' Moedas','Joias ('+Number(moedas*2)+')',Number(moedas*2)+' Moedas',equipamento,'Joias ('+moedas+')',pocao];
        break;
      case "Alavanca (vermelho)":
      case "Alavanca (azul)":
        return ['Desbloqueia a saída','Sabota a estrutura','Desbloqueia a sala final','Abre um portal','Abre um cofre (Tesouro)','Enfraquece um Monstro'];
        break;        
      case "Sala Secreta":
        return ['Passagem para uma Sala','Joias ('+Number(moedas*2)+')','Moedas ('+Number(moedas*2)+')',equipamento,'Atalho no mapa',pocao];
        break;          
    }
  };

  function eventoEspecial(tipo) {

    switch(tipo){
      case "Fugir das forças de Nokron/Encontrar uma saída.":
        return ['Uma porta deverá ser aberta com o uso de uma chave (Alavanca)','O mapa inteiro deverá ser atravessado até um ponto específico','Um Capitão deve ser vencido para liberar a saída do lugar'];
        break;
      case "Resgatar um importante Personagem.":
        return ['Uma chave deve ser descoberta para libertar o Personagem (Alavanca)','O Personagem importante é, na verdade, um traidor/Monstro','Um Capitão deve ser vencido para liberar o Personagem'];
        break;
      case "Encontrar um importante Item.":
        return ['Um Capitão está com o item e deve ser vencido para entrega-lo','Um cofre deverá ser aberto com o uso de uma chave (Alavanca)','O item está dividido em várias partes (Alavanca)'];
        break;
      case "Sabotar os planos de Nokron e seus aliados.":
        return ['2 eventos de Alavanca devem ser acionados para sabotar os planos','Um Capitão deve ser vencido, enfraquecendo as forças de Nokron','Um item deve ser tomado das forças de Nokron (Tesouro)'];
        break;
      case "Buscar informações importantes.":
        return ['Um Personagem deve ser libertado (Personagem)','Um diário/livro deve ser encontrado (Tesouro)','Um mobiliário deve ser investigado após a luta contra um Capitão'];
        break;
      case "Encontrar e enfrentar um terrível Monstro.":
        return ['Dois Capitães devem ser vencidos','Um Capitão deve ser vencido','Um Comandante enfraquecido deve ser vencido (ele fugirá)'];
        break;
    }
    
  };

  function grupoMonstros(nivel){
    
    var menor = ['Goblin Arqueiro','Esqueleto','Goblin Zumbi','Zumbi','Goblin','Orc','Orc Zumbi','Kalag'];
    var maior = ['Fantasma','Orc Campeão','Cavaleiro das Sombras','Troll','Necromante'];

    var menores = exclusiveRandom(menor,3);
    var maiores = exclusiveRandom(maior,2);

    switch(nivel){
      case '1':
      case '2':
        return random([menores[0] + ' e ' + menores[1], maiores[0]]);
        break;
      case '3':
      case '4':
        return random([menores[0] + ', ' + menores[1] + ' e ' + menores[2], maiores[0] + ' e ' + menores[0]]);
        break;
      case '5':
      case '6':
      case '7':
        return random([maiores[0] + ', ' + menores[0] + ' e ' + menores[1], maiores[0] + ' e ' + maiores[1]]);
        break;
      case '8':
        return random([menores[0] + ' Elite, ' + menores[1] + ' Elite e ' + menores[2] + ' Elite', maiores[0] + ' Elite e ' + menores[0] + ' Elite']);
        break;
    }

  }


  function grupoMonstrosErrante(nivel){
    
    var menor = ['Goblin Arqueiro','Esqueleto','Goblin Zumbi','Zumbi','Goblin','Orc','Orc Zumbi','Kalag'];
    var maior = ['Fantasma','Orc Campeão','Cavaleiro das Sombras','Troll','Necromante'];

    switch(nivel){
      case '1':
      case '2':
        return random(menor);
        break;
      case '3':
      case '4':
        return random(maior);
        break;
      case '5':
      case '6':
      case '7':
        return random(maior);
        break;
      case '8':
        return random(maior) + ' Elite';
        break;
    }

  }

  function mobilias(salas){
    
    var varMobilias = [' Armário',' Estante de Livros',' Estante de Livros',' Mesa de Estudos',' Rack de Armas',' Mesa',' Mesa',' Mesa de Ritual',' Rack de Tortura',' Trono',' Tumba'];

    switch(salas){
      case 9:
        return exclusiveRandom(varMobilias,3);
        break;
      case 10:
        return exclusiveRandom(varMobilias,4);
        break;
      case 11:
        return exclusiveRandom(varMobilias,5);
        break;
      case 12:
        return exclusiveRandom(varMobilias,6);
        break;
      case 13:
        return exclusiveRandom(varMobilias,7);
        break;
      case 14:
        return exclusiveRandom(varMobilias,8);
        break;
    }

  }

  function cores(){
    return ['vermelho','laranja','amarelo','azul'];
  }

  $('#btnGerarMissao').click(function(){

    var nivel = $('#selectNivel').val();

    var valRegiao = random(regiao());
    var valObjetivo = random(objetivo());
    var valCenario = cenario();

    var tipoEventos = exclusiveRandom(tipoEvento(),5);

    var valEvento1 = random(evento(tipoEventos[0],nivel));
    var valEvento2 = random(evento(tipoEventos[1],nivel));
    var valEvento3 = random(evento(tipoEventos[2],nivel));
    var valEvento4 = random(evento(tipoEventos[3],nivel));
    var valEvento5 = random(evento(tipoEventos[4],nivel));

    var numEventos = random([3,4,5]);
    var numPortais = 0;

    var eventos = '';

    eventos = eventos + '<div class="textIndent"><strong>'+tipoEventos[0]+':</strong> '+valEvento1+'</div>';
    eventos = eventos + '<div class="textIndent"><strong>'+tipoEventos[1]+':</strong> '+valEvento2+'</div>';
    eventos = eventos + '<div class="textIndent"><strong>'+tipoEventos[2]+':</strong> '+valEvento3+'</div>';

    if(numEventos == 3){
      numPortais = 3;
    }

    if(numEventos == 4){
      numPortais = 2;
      eventos = eventos + '<div class="textIndent"><strong>'+tipoEventos[3]+':</strong> '+valEvento4+'</div>';
    }

    if(numEventos == 5){
      numPortais = 1;
      eventos = eventos + '<div class="textIndent"><strong>'+tipoEventos[3]+':</strong> '+valEvento4+'</div>';
      eventos = eventos + '<div class="textIndent"><strong>'+tipoEventos[4]+':</strong> '+valEvento5+'</div>';
    }

    var valEventoEspecial = random(eventoEspecial(valObjetivo));
    var valSalaSecreta = random(evento('Sala Secreta',nivel));
    var numSalas = random([9,10,11,12,13,14]);

    $('.boxPersonagemFate').html(
      '<center><h4>Missão</h4></center>'+
      '<div class="textIndent"><strong>Região:</strong> '+valRegiao+'</div>'+
      '<div class="textIndent"><strong>Objetivo:</strong> '+valObjetivo+'</div><br>'+
      '<div><strong>TABULEIRO</strong>'+
      '<div class="textIndent"><strong>Cenário:</strong> '+valCenario+'</div>'+
      '<div class="textIndent"><strong>Salas:</strong> '+numSalas+'</div>'+
      '<div class="textIndent"><strong>Portas:</strong> '+random(portas())+'</div>'+
      '<div class="textIndent"><strong>Mobílias:</strong> '+mobilias(numSalas)+'</div><br>'+
      '<div><strong>EVENTOS</strong>'+
      '<div class="textIndent"><strong>Portais de Nokron:</strong> '+numPortais+'</div>'+
      '<div class="textIndent"><strong>Evento Especial:</strong> '+valEventoEspecial+'</div>'+
      '<div class="textIndent"><strong>Sala Secreta:</strong> '+valSalaSecreta+'</div><br>'+
        eventos+'<br>'+
      '<div><strong>MONSTROS</strong>'+
      '<div class="textIndent"><strong>1.</strong> '+grupoMonstros(nivel)+'</div>'+
      '<div class="textIndent"><strong>2.</strong> '+grupoMonstros(nivel)+'</div>'+
      '<div class="textIndent"><strong>3.</strong> '+grupoMonstros(nivel)+'</div>'+
      '<div class="textIndent"><strong>4.</strong> '+grupoMonstros(nivel)+'</div>'+
      '<div class="textIndent"><strong>5.</strong> '+grupoMonstros(nivel)+'</div>'+
      '<div class="textIndent"><strong>6.</strong> '+grupoMonstros(nivel)+'</div><br>'+
      '<div class="textIndent"><strong>Errante: </strong> '+grupoMonstrosErrante(nivel)+'</div>'+
      '</div>'
    );
    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '650px', 'box-shadow': '5px 5px 10px darkred'});

  });


  $('#btnGerarPersonagem').click(function(){

    var nivel = $('#selectNivel').val();

    var valAtributos = exclusiveRandom(atributos(nivel),3);
    var valRegiao = random(regiao());
    var valHabilidades = exclusiveRandom(habilidades(),2);
    var valDefesa = Math.max([Number(valAtributos[0])],[Number(valAtributos[1])],[Number(valAtributos[2])]);
    var checkLvl = nivelHabilidade(nivel);

    $('.boxPersonagemFate').html(
      '<center><h4>'+nomeHiboriano(random(['hiboriana','norte','sul','terras']))+'</h4>'+
      '<p><i>de '+valRegiao+'</i></p></center>'+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Força:</strong> '+valAtributos[0]+'</div>'+
      '<div class="textIndent"><strong>Destreza:</strong> '+valAtributos[1]+'</div>'+
      '<div class="textIndent"><strong>Intelecto:</strong> '+valAtributos[2]+'</div><br>'+
      '<div class="textIndent"><strong>Defesa:</strong> '+valDefesa+'</div>'+
      '<div class="textIndent"><strong>Saúde:</strong> '+Number(valAtributos[0]+5)+'</div>'+
      '<div class="textIndent"><strong>Passos:</strong> '+Number(valAtributos[1]+5)+'</div><br>'+
      '<div><strong>HABILIDADES</strong>'+
      '<div class="textIndent">'+valHabilidades[0]+checkLvl+'</div>'+
      '<div class="textIndent">'+valHabilidades[1]+checkLvl+'</div>'+
      '</div>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '650px', 'box-shadow': '5px 5px 10px darkred'});

  });

});