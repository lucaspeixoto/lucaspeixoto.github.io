$( document ).ready(function() {

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

  $('#btnGerarNPC').click(function(){

    var npcSkills = exclusiveRandom(pericias(),4);
    var npcPoderes = exclusiveRandom(poderes(),2);
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
      '<p>'+npcPoderes[0]+
      '<br>'+npcPoderes[1]+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  setTimeout(function() {
      $("#btnGerarNPC").trigger('click');
  },10);

});