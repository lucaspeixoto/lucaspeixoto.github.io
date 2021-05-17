$( document ).ready(function() {

  function supers_arquetipo(){
    return ['Artista Marcial','Blindado','Combatente do Crime','Construto','Controlador de Energia','Engenhoqueiro','Guerreiro','Mestre de Armas','Metamorfo','Mímico','Místico','Original','Psíquico','Titânico','Velocista'];
  }

  function supers_tipo(){
    return ['Alteração','Controle','Defensivo','Mental','Movimento','Ofensivo','Sensorial'];
  }

  function cyberpunk(){
    return ['Agente','Atravessador','Contrabandista','Falsificador','Transportador','Negociador de Tecnologia','Detetive','Caçador de Segredos','Desenvolvedor de Drogas','Caça-Talentos','Diplomata de Sindicato','Traficante','Hacker','Ladrão','Procurador','Eletricista','Mecânico','Chantagista','Agiota','Encriptador','Vendedor de Nanotecnologias','Mediador','Informante da Bolsa','Arsenal Ambulante','Contador Fantasma','Líder de Gangue','Rastreador','Advogado Trapaceiro','Vendedor de Veículos','Corretor','Facilitador de Contratos','Manipulador Digital','Encrenqueiro','Dono de Boate','Negociador de Implantes','Membro de Gangue','Corporativista','Capanga','Mercenário','Solo','Soldado','Cientista','Policial','Caçador de Recompensas','Concumbina','Prostituta','Doutor','Médico','Celebridade','Inteligência Artificial','Artista','Repórter','Nômade','Sintético','Motorista','Clone','Programador','Designer','Sem-teto','Revolucionário','Psiquiatra','Ciborgue','Fanático','Drogado'];
  }

  function scifi(){
    return ['Ativista','Agente','Andróide','Negociador de Armas','Assassino','Advogado','Mineiro de Asteróide','Biomédico','Guarda-Costas','Segurança','Caçador de Recompensas','Celebridade','Cozinheiro','Treinador de Combate','Artista','Corporativista','Líder do Crime','Cyber Soldado','Cyber Médico','Cyber Ninja','Cyber Escravo','Ciborgue','Hacker','Detetive','Diplomata','Médico','Doppelganger','Viciado','Eco Terrorista','Empata','Capanga','Explorador','Atravessador','Apostador','Membro de Gangue','Fantasma','Mecânico','Matador','Caçador','Híbrido','Ídolo','Informante','Miliciano','Cientista Maluco','Mestre do Crime','Mentor','Piloto de Mecha','Repórter','Médico','Mercenário','Mercador','Mutante','Nobre','Piloto','Policial','Político','Investigador Privado','Psiônico','Rebelde','Líder Religioso','Asceta Religioso','Ladrão','Ladino','Andróide Invasor','Sabotador','Acadêmico','Cientista','Escoltador','Assassino Serial','Simulacro','Escravagista','Sniper','Pirata Espacial','Banqueiro','Agiota','Cirurgião','Sintético','Técnico','Tecnomancer','Tecnófilo','Tecnofóbico','Telepata','Terrorista','Agente Temporal','Traidor','Agente Secreto','Policial Disfarçado','Vigilante','Xenobiologista','Biólogo'];
  }

  function conceito(){
    return ['Acólito','Acrobata','Advogado','Apostador','Apresentador','Artesão','Artista','Batedor','Caçador','Gladiador','Charlatão','Criminoso','Detetive','Discípulo','Emissário','Espião','Eremita','Estudioso','Funileiro','Forasteiro','Herói do Povo','Guarda','Herbalista','Lavrador','Médico','Marinheiro','Mercador','Mineiro','Pirata','Nômade','Nobre','Operário','Cavaleiro','Órfão','Sábio','Soldado','Prisioneiro','Taverneiro','Vidente','Arqueiro','Servo distraído','Reporter','Estrangeiro','Detetive amador','Arqueólogo amador','Guerreira amazona','Anarquista','Fuzileiro Arcano','Cientista amador','Colecionador de arte','Artista','Valentão','Menino mau','Garota má','Bardo','Crente','Motociclista','Bárbaro barulhento','Aristocrata entediado','Piloto','Corretor','Espadachim','Campeão','Bárbaro civilizado','Geek','Vigarista','Teórico da Conspiração','Vaqueiro','Servo perigoso','Elfo negro','Duelista ousado','Oficial','Nômade do Deserto','Sacerdote Devoto','Nômade','Explorador','Mentor Excêntrico','Emo','Campeão Eterno','Ex-soldado','Ex-Fuzileiro Espacial','Fada','Femme Fatale','Fã de cinema','Aviador','Amigo de todas as pessoas','Dr. Bugigangas','Colecionador','Jogador','Gangster','Ladrão de cavalheiros','Transgênero','Detetive de polícia grisalho','Sargento áspero','Guerreiro Rabugento','Detetive sobrenatural','Aquele que é predito nas profecias','Herdeiro do trono','Assassino Honorável','Feiticeiro Esquentadinho','Arruaceiro','Assistente independente','Mulher independente','Caipira inocente','Inquisidor','Místico Inescrutável','Mecânico Sabichão','Assistente','Palhaço','Senhor da Selva','Criança','Cavaleiro','Cavaleiro de preto','Senhora','Ladrão Agradável','Solitário','Senhor','Amor perdido','Cientista maluco','Mágico','Mago','Homem misterioso','Artista marcial','Policial','Mecânico','Mercenário','Mafioso','Músico','Cigana misteriosa','Estranho Misterioso','Nerd','Hacker de rede','Novo recruta','Nobre Bastardo','Nobre Selvagem','Romancista','Oficial Novato','Vendedor','Parapsicologista','Repórter Gonzo','Policial','Garota Popular','Estudante formal','Detetive particular','Filho prodígio','Profeta','Psiquiatra','Psicanalista','Quarterback','Herói Redimido','Jovem Justa','Colega de quarto','Virgem Sacrificial','Vendedor Ambulante','Estudioso','Canalha','Sedutora','Advogado astuto','Estranho Silencioso','Soldado','Feiticeiro','Amantes desafortunados','Capitão da nave estelar','Advogado Sincero','Samurai Urbano','Paladino','Orc estúpido','Espião','Chefe de Polícia Temperamental','Texano','Viajante em uma terra estranha','Verdadeira beleza','Companheiro confiável','Piloto de Dois Punhos','Gênio não convencional','Vilão Urbano','Veterano','Profeta do deserto','Velho Sábio','Mago','Jovem Herói'];
  }
  
  function pericias(){
    return ['Acrobacia','Animais','Arte','Combate','Conhecimento','Coragem','Crime','Lábia','Percepção','Potência','Tecnologia','Veículos'];
  }
  
  function poderes(){
    return ['Arma Especial +1','Proteção Especial +1','Bola de Fogo','Campo de Força','Cura','Disparo de Energia','Imortalidade','Invisibilidade','Invocar Criatura','Metamorfose','Paralisar','Telecinesia','Telepatia','Teletransporte','Voar'];
  }

  var pontos = 40;

  function nomeSobrevivente(sexo){
    switch(sexo){
      case "masc":
        return ['Liam','Noah','William','James','Oliver','Benjamin','Elijah','Lucas','Mason','Logan','Alexander','Ethan','Jacob','Michael','Daniel','Henry','Jackson','Sebastian','Aiden','Matthew','Samuel','David','Joseph','Carter','Owen','Wyatt','John','Jack','Luke','Jayden','Dylan','Grayson','Levi','Isaac','Gabriel','Julian','Mateo','Anthony','Jaxon','Lincoln','Joshua','Christopher','Andrew','Theodore','Caleb','Ryan','Asher','Nathan','Thomas','Leo'];
        break;
      case "fem":
        return ['Emma','Olivia','Ava','Isabella','Sophia','Charlotte','Mia','Amelia','Harper','Evelyn','Abigail','Emily','Elizabeth','Mila','Ella','Avery','Sofia','Camila','Aria','Scarlett','Victoria','Madison','Luna','Grace','Chloe','Penelope','Layla','Riley','Zoey','Nora','Lily','Eleanor','Hannah','Lillian','Addison','Aubrey','Ellie','Stella','Natalie','Zoe','Leah','Hazel','Violet','Aurora','Savannah','Audrey','Brooklyn','Bella','Claire','Skylar'];
        break;
      case "sobrenome":
        return ['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson','Moore','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark','Rodriguez','Lewis','Lee','Walker','Hall','Allen','Young','Hernandez','King','Wright','Lopez','Hill','Scott','Green','Adams','Baker','Gonzalez','Nelson','Carter','Mitchell','Perez','Roberts','Turner','Phillips','Campbell','Parker','Evans','Edwards','Collins'];
        break;
    }
  }

  $('#btnGerarScifi').click(function(){

    var npcSkills = exclusiveRandom(pericias(),12);
    var npcPoderes = poderes();
    npcPoderes.push(npcSkills[4]+' +1');
    npcPoderes.push(npcSkills[5]+' +1');
    npcPoderes.push(npcSkills[6]+' +1');
    npcPoderes.push(npcSkills[7]+' +1');
    npcPoderes.push(npcSkills[8]+' +1');
    npcPoderes.push(npcSkills[9]+' +1');
    npcPoderes.push(npcSkills[10]+' +1');
    npcPoderes.push(npcSkills[11]+' +1');
    npcPowers = exclusiveRandom(npcPoderes,2);
    var pv = randomNumber(1,40);
    var pe = 40-pv;
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<u><h5>'+random(nomeSobrevivente(random(['fem','masc'])))+' '+random(nomeSobrevivente('sobrenome'))+'</h5></u>'+
      '<p><b>'+random(scifi())+'</b>'+
      '<br>'+pv+' PV; '+pe+' PE</p>'+
      '<p>'+npcSkills[0]+' +4'+
      '<br>'+npcSkills[1]+' +3'+
      '<br>'+npcSkills[2]+' +2'+
      '<br>'+npcSkills[3]+' +1</p>'+
      '<p>'+npcPowers[0]+
      '<br>'+npcPowers[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarCyberpunk').click(function(){

    var npcSkills = exclusiveRandom(pericias(),12);
    var npcPoderes = poderes();
    npcPoderes.push(npcSkills[4]+' +1');
    npcPoderes.push(npcSkills[5]+' +1');
    npcPoderes.push(npcSkills[6]+' +1');
    npcPoderes.push(npcSkills[7]+' +1');
    npcPoderes.push(npcSkills[8]+' +1');
    npcPoderes.push(npcSkills[9]+' +1');
    npcPoderes.push(npcSkills[10]+' +1');
    npcPoderes.push(npcSkills[11]+' +1');
    npcPowers = exclusiveRandom(npcPoderes,2);
    var pv = randomNumber(1,40);
    var pe = 40-pv;
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<u><h5>'+random(nomeSobrevivente(random(['fem','masc'])))+' '+random(nomeSobrevivente('sobrenome'))+'</h5></u>'+
      '<p><b>'+random(cyberpunk())+'</b>'+
      '<br>'+pv+' PV; '+pe+' PE</p>'+
      '<p>'+npcSkills[0]+' +4'+
      '<br>'+npcSkills[1]+' +3'+
      '<br>'+npcSkills[2]+' +2'+
      '<br>'+npcSkills[3]+' +1</p>'+
      '<p>'+npcPowers[0]+
      '<br>'+npcPowers[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarSupers').click(function(){

    var npcSkills = exclusiveRandom(pericias(),12);
    var npcPoderes = poderes();
    npcPoderes.push(npcSkills[4]+' +1');
    npcPoderes.push(npcSkills[5]+' +1');
    npcPoderes.push(npcSkills[6]+' +1');
    npcPoderes.push(npcSkills[7]+' +1');
    npcPoderes.push(npcSkills[8]+' +1');
    npcPoderes.push(npcSkills[9]+' +1');
    npcPoderes.push(npcSkills[10]+' +1');
    npcPoderes.push(npcSkills[11]+' +1');
    npcPowers = exclusiveRandom(npcPoderes,2);
    var pv = randomNumber(1,40);
    var pe = 40-pv;
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<u><h5>'+random(nomeSobrevivente(random(['fem','masc'])))+' '+random(nomeSobrevivente('sobrenome'))+'</h5></u>'+
      '<p><b>'+random(supers_arquetipo())+' ('+random(supers_tipo())+')</b>'+
      '<br>'+pv+' PV; '+pe+' PE</p>'+
      '<p>'+npcSkills[0]+' +4'+
      '<br>'+npcSkills[1]+' +3'+
      '<br>'+npcSkills[2]+' +2'+
      '<br>'+npcSkills[3]+' +1</p>'+
      '<p>'+npcPowers[0]+
      '<br>'+npcPowers[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

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

    var umdaarName = random(races('bioforma').prefix)+random(races('bioforma').suffix);

    var npcSkills = exclusiveRandom(pericias(),12);
    var npcPoderes = poderes();
    npcPoderes.push(npcSkills[4]+' +1');
    npcPoderes.push(npcSkills[5]+' +1');
    npcPoderes.push(npcSkills[6]+' +1');
    npcPoderes.push(npcSkills[7]+' +1');
    npcPoderes.push(npcSkills[8]+' +1');
    npcPoderes.push(npcSkills[9]+' +1');
    npcPoderes.push(npcSkills[10]+' +1');
    npcPoderes.push(npcSkills[11]+' +1');
    npcPowers = exclusiveRandom(npcPoderes,2);
    var pv = randomNumber(1,40);
    var pe = 40-pv;
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<u><h5>'+umdaarName+'</h5></u>'+
      '<p><b>'+bioforma+' '+random(aspects('ancestry'))+'</b>'+
      '<br>'+pv+' PV; '+pe+' PE</p>'+
      '<p>'+npcSkills[0]+' +4'+
      '<br>'+npcSkills[1]+' +3'+
      '<br>'+npcSkills[2]+' +2'+
      '<br>'+npcSkills[3]+' +1</p>'+
      '<p>'+npcPowers[0]+
      '<br>'+npcPowers[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarMedieval').click(function(){

    var classe = classes();
    var classeEspecifica = random(classe.aspects);
    var raca = races();
    var racaEspecifica = random(raca.aspects);
    
    var npcSkills = exclusiveRandom(pericias(),12);
    var npcPoderes = poderes();
    npcPoderes.push(npcSkills[4]+' +1');
    npcPoderes.push(npcSkills[5]+' +1');
    npcPoderes.push(npcSkills[6]+' +1');
    npcPoderes.push(npcSkills[7]+' +1');
    npcPoderes.push(npcSkills[8]+' +1');
    npcPoderes.push(npcSkills[9]+' +1');
    npcPoderes.push(npcSkills[10]+' +1');
    npcPoderes.push(npcSkills[11]+' +1');
    npcPowers = exclusiveRandom(npcPoderes,2);
    var pv = randomNumber(1,40);
    var pe = 40-pv;
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<u><h5>'+random(raca[racaEspecifica].names)+'</h5></u>'+
      '<p><b>'+racaEspecifica+' '+classeEspecifica+'</b>'+
      '<br>'+pv+' PV; '+pe+' PE</p>'+
      '<p>'+npcSkills[0]+' +4'+
      '<br>'+npcSkills[1]+' +3'+
      '<br>'+npcSkills[2]+' +2'+
      '<br>'+npcSkills[3]+' +1</p>'+
      '<p>'+npcPowers[0]+
      '<br>'+npcPowers[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarNPC').click(function(){

    var npcSkills = exclusiveRandom(pericias(),12);
    var npcPoderes = poderes();
    npcPoderes.push(npcSkills[4]+' +1');
    npcPoderes.push(npcSkills[5]+' +1');
    npcPoderes.push(npcSkills[6]+' +1');
    npcPoderes.push(npcSkills[7]+' +1');
    npcPoderes.push(npcSkills[8]+' +1');
    npcPoderes.push(npcSkills[9]+' +1');
    npcPoderes.push(npcSkills[10]+' +1');
    npcPoderes.push(npcSkills[11]+' +1');
    npcPowers = exclusiveRandom(npcPoderes,2);
    var pv = randomNumber(1,40);
    var pe = 40-pv;
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<u><h5>'+random(nomeSobrevivente(random(['fem','masc'])))+' '+random(nomeSobrevivente('sobrenome'))+'</h5></u>'+
      '<p><b>'+random(conceito())+'</b>'+
      '<br>'+pv+' PV; '+pe+' PE</p>'+
      '<p>'+npcSkills[0]+' +4'+
      '<br>'+npcSkills[1]+' +3'+
      '<br>'+npcSkills[2]+' +2'+
      '<br>'+npcSkills[3]+' +1</p>'+
      '<p>'+npcPowers[0]+
      '<br>'+npcPowers[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  setTimeout(function() {
      $("#btnGerarNPC").trigger('click');
  },10);

});