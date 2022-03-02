function aventuraTiny(type) {
  
    switch(type){

        case "verbo":
            return ['<strong>Atacar</strong>','<strong>Resgatar</strong>','<strong>Escoltar</strong>','<strong>Investigar</strong>','<strong>Ajudar</strong>','<strong>Transportar</strong>','<strong>Roubar</strong>','<strong>Lutar</strong> com','<strong>Chantagear</strong>','<strong>Esconder</strong>','<strong>Abrigar</strong>','<strong>Enganar</strong>','<strong>Negociar</strong> com','<strong>Defender</strong>','<strong>Recuperar</strong>','<strong>Superar</strong>','<strong>Invadir</strong>','<strong>Matar</strong>','<strong>Capturar</strong>','<strong>Libertar</strong>','<strong>Proteger</strong>','<strong>Curar</strong>','<strong>Trocar</strong> com','<strong>Assustar</strong>','<strong>Caçar</strong>','<strong>Encontrar</strong>','<strong>Defender</strong>','<strong>Evitar</strong>','<strong>Vingar</strong>','<strong>Servir</strong>','<strong>Pegar</strong>','<strong>Buscar</strong>','<strong>Explorar</strong> com','<strong>Sabotar</strong>','<strong>Sequestrar</strong>','<strong>Liderar</strong>'];
            break;

        case "sujeito":
            return ['um <strong>Humano</strong>','um <strong>Fey</strong>','um <strong>Anão</strong>','um <strong>Goblin</strong>','um <strong>Salimar</strong>','um <strong>Arvorídeo</strong>','um <strong>Karhu</strong>','um <strong>Lagartino</strong>','alguém da <strong>Realeza</strong>','um <strong>Sacerdote</strong>','um <strong>Mago</strong>','um <strong>Escriba</strong>','um <strong>Monstro</strong>','um <strong>Animal</strong>','um <strong>Pirata</strong>','um <strong>Bandido</strong>','um <strong>Item Mágico</strong>','um <strong>Inimigo</strong>','um <strong>Passageiro</strong>','um <strong>Enigma</strong>','uma <strong>Mercadoria</strong>','um <strong>Contrabando</strong>','um <strong>Artista</strong>','uma <strong>Caravana</strong>','um <strong>Mercador</strong>','um <strong>Ladrão</strong>','um <strong>Guerreiro</strong>','um <strong>Curandeiro</strong>','um <strong>Plebeu</strong>','um <strong>Pedinte</strong>','a <strong>Guarda da Cidade</strong>','um <strong>Viajante</strong>','um <strong>Taverneiro</strong>','um <strong>Fantasma</strong>','uma <strong>Testemunha</strong>','um <strong>Alquimista</strong>'];
            break;

        case "local":
            return ['no <strong>Topo da Montanha</strong>','nas <strong>Ruínas</strong>','no <strong>Oceano</strong>','no <strong>Deserto</strong>','na <strong>Ilha</strong>','no <strong>Cânion</strong>','no <strong>Desfiladeiro entre Montanhas</strong>','na <strong>Caverna de Gelo</strong>','no <strong>Templo</strong>','no <strong>Vulcão</strong>','na <strong>Floresta</strong>','no <strong>Redemoinho</strong>','na <strong>Cidade Submersa</strong>','na <strong>Cidade Subterrânea</strong>','na <strong>Cidade Proibida</strong>','na <strong>Fortaleza Voadora</strong>','no <strong>Navio Voador</strong>','na <strong>Fortaleza</strong>','na <strong>Cadeia da Cidade</strong>','no <strong>Mercado</strong>','na <strong>Torre</strong>','na <strong>Ponte</strong>','nos <strong>Esgotos</strong>','nas <strong>Docas</strong>','na <strong>Masmorra</strong>','no <strong>Cemitério</strong>','na <strong>Casa de Apostas</strong>','no <strong>Reino Feérico</strong>','na <strong>Terra dos Sonhos</strong>','em <strong>Outra Dimensão</strong>','no <strong>Território Inimigo</strong>','no <strong>Covil de Dragão</strong>','no <strong>Castelo</strong>','no <strong>Monastério</strong>','na <strong>Mina</strong>','no <strong>Labirinto</strong>'];
            break;

        case "obstaculo":
            return ['um <strong>Aliado</strong>','uma <strong>Traição</strong>','um <strong>Amor</strong>','uma <strong>Promessa Quebrada</strong>','uma <strong>Mentira</strong>','um <strong>Rival</strong>','uma <strong>Doença Física</strong>','um <strong>Mentor</strong>','uma <strong>Família</strong>','um <strong>Ataque</strong>','uma <strong>Armadilha</strong>','um <strong>Clima</strong>','um <strong>Agente Duplo</strong>','uma <strong>Doença Mental</strong>','umas <strong>Finanças</strong>','um <strong>Roubo</strong>','um <strong>Espião</strong>','uma <strong>Vingança</strong>','uma <strong>Pista Falsa</strong>','a <strong>Guarda da Cidade</strong>','um <strong>Transporte</strong>','um <strong>Refém</strong>','um <strong>Sequestro</strong>','um <strong>Assassinato</strong>','uma <strong>Ganância</strong>','uma <strong>Confiança</strong>','um <strong>Ódio</strong>','um <strong>Ciúmes</strong>','um <strong>Azar</strong>','um <strong>Orgulho</strong>','uma <strong>Preguiça</strong>','uma <strong>Luxúria</strong>','uma <strong>Gula</strong>','uma <strong>Negligência </strong>','um <strong>Esquecimento</strong>','uma <strong>Ignorância</strong>'];
            break;

        case "antagonista":
            return ['à <strong>Guarda da Cidade</strong>','ao <strong>Líder da Cidade</strong>','ao <strong>Espião</strong>','aos <strong>Políticos</strong>','ao <strong>Agiota</strong>','ao <strong>Escândalo</strong>','à <strong>Sociedade Secreta</strong>','à <strong>Guilda de Magos</strong>','à <strong>Guilda de Ladrões</strong>','aos <strong>Bandidos</strong>','aos <strong>Piratas</strong>','ao <strong>Exército</strong>','ao <strong>Monstro</strong>','à <strong>Flora</strong>','à <strong>Fauna</strong>','aos <strong>Mortos-Vivos</strong>','à <strong>Magia</strong>','à <strong>Doença</strong>','ao <strong>Mago</strong>','ao <strong>Necromante</strong>','aos <strong>Cultistas</strong>','aos <strong>Mercadores</strong>','ao <strong>Alquimista</strong>','ao <strong>Homicida</strong>','ao <strong>Gênio do Mal</strong>','ao <strong>Assassino</strong>','ao <strong>Tempo</strong>','ao <strong>Demônio</strong>','à <strong>Invasão</strong>','ao <strong>Dragão</strong>','ao <strong>Assaltante</strong>','ao <strong>Impostor</strong>','à <strong>Fada</strong>','a <strong>Maldição</strong>','ao <strong>Parasita</strong>','aos <strong>Aventureiros</strong>'];
            break;

    }

};

function herancaTiny() {

    return [{
        tipo: 'Humano',
        pv: 6,
        traco: ''
    },{
        tipo: 'Fey',
        pv: 6,
        traco: 'Especialização em Arco'
    },{
        tipo: 'Anão',
        pv: 8,
        traco: 'Visão no Escuro'
    },{
        tipo: 'Goblin',
        pv: 4,
        traco: 'Agilidade Goblin'
    },{
        tipo: 'Salimar',
        pv: 5,
        traco: 'cura'
    },{
        tipo: 'Arvorídeo',
        pv: 9,
        traco: 'Coração Ancestral'
    },{
        tipo: 'Karhu',
        pv: 7,
        traco: 'Garras Poderosas'
    },{
        tipo: 'Lagartino',
        pv: 6,
        traco: 'Sangue Frio'
    }]

};

function tracosTiny() {
    return ['Acadêmico','Acrobata','Alquimista','Artista Marcial','Atirador','Brigão de Bar','Carismático','Contramestre','Curandeiro','Defensor','Duro de Matar','Durão','Especializado em Armadura','Estudante de Magia','Explorador de Masmorras','Familiar','Ferreiro','Forte','Furioso','Furtivo','Guerreiro da Escuridão','Memória Eidética','Mestre Bêbado','Mestre de Armadilhas','Mãos Leves','Oportunista','Orador das Feras','Perceptivo','Perspicaz','Portador do Escudo','Pugilista','Pés Ligeiros','Rastreador','Resoluto','Sobrevivente','Sortudo','Tiro Rápido','Tocado pela Magia','Transpassar','Vigilante']
}

function especializacaoArma(type){
    switch(type){
        case 'Corpo a Corpo Leve':
            return ['Adaga','Espada Curta','Machado de Mão','Rapieira','Maça','Cajado','Tacape'];
            break;
        case 'Corpo a Corpo Pesada':
            return ['Espada Grande','Machado de Guerra','Lança','Armas de Haste','Mangual de Duas Mãos','Martelo de Guerra'];
            break;
        case 'À Distância':
            return ['Funda','Besta','Arco','Dardos','Shuriken'];
            break;
    }
}

function checkTraco(vetor,traco){
    if(vetor[0] == traco) return true;
    if(vetor[1] == traco) return true;
    if(vetor[2] == traco) return true;
    if(vetor[3] == traco) return true;
    return false;
}

function ramofamilia(){
    return ['Acólito','Acrobata','Advogado','Apostador','Apresentador','Artesão','Artista','Batedor','Caçador','Gladiador','Charlatão','Criminoso','Detetive','Discípulo','Emissário','Espião','Eremita','Estudioso','Funileiro','Forasteiro','Herói do Povo','Guarda','Herbalista','Lavrador','Médico','Marinheiro','Mercador','Mineiro','Pirata','Nômade','Nobre','Operário','Cavaleiro','Órfão','Sábio','Soldado','Prisioneiro','Taverneiro','Vidente']
}

function crencaTiny(){
    return ['Estabelecer meu próprio feudo','Encontrar o santo graal','Ter minhas aventuras contadas nas canções','Descobrir o segredo arcano de Fausten','Chegar às terras livres','Comandar meu próprio exército','Libertar o povo da opressão','Acabar com a escravidão','Conquistar grandes tesouros','Dar exemplo aos meus amigos','Derrotar meu arqui-inimigo','Ser o maior aventureiro de todos','Ser lembrado para todo o sempre','Realizar grandes feitos','Ser o mais famoso de todos','Possuir muitos itens mágicos','Ser conhecido por todo o mundo','Comandar reinos','Obter muitas riquezas','Tudo o que eu quero são itens mágicos','Trazer paz ao mundo','Trazer guerra ao mundo','Tirar a dor do mundo','Que ninguém mais sofra','Obter todos os conhecimentos secretos','Livrar todos os animais','Proteger a natureza ao meu redor','Ajudar as pessoas no que puder','Proteger os fracos e oprimidos','Ser mundialmente famoso','Ser cada vez melhor no que faço','Buscar a paz interior']
}

$( document ).ready(function() {

  setTimeout(function() {
      $("#btnGerarPersonagem").trigger('click');
  },10);

  $('#btnGerarPersonagem').click(function(){

    var heranca = random(herancaTiny());
    var tracos = exclusiveRandom(tracosTiny(),3);
    var armaEspec = '';
    var grupoArmas = random(['Corpo a Corpo Leve','Corpo a Corpo Pesada','À Distância']);
    var armaEspec = random(especializacaoArma(grupoArmas));
    var ramoFamilia = random(ramofamilia());
    var crenca = random(crencaTiny());

    if (heranca.tipo == 'Humano')
        tracos = exclusiveRandom(tracosTiny(),4);
    else if (heranca.tipo == 'Salimar')
        heranca.traco = random(['Cura Pirotérmica','Cura Criotérmica']);
    else if (heranca.tipo == 'Karhu')
        armaEspec = armaEspec +', Garras';
    else if (heranca.tipo == 'Fey')
        armaEspec = armaEspec +', Arco';
    
    tracos.push(heranca.traco)

    if(checkTraco(tracos,'Durão'))
        heranca.pv += 2;

    $('.boxAventura').html(
        '<u><h5>'+random(nomePersonagem(heranca.tipo))+'</h5></u>'+
        '<strong>Herança</strong>: '+heranca.tipo+
        '<br><strong>Ramo da Família</strong>: '+ramoFamilia+
        '<br><strong>Crença</strong>: '+crenca+
        '<br><br><strong>Pontos de Vida</strong>: '+heranca.pv+
        '<br><strong>Grupo de Armas</strong>: '+grupoArmas+
        '<br><strong>Arma Especializada</strong>: '+armaEspec+
        '<br><br><strong>Traços</strong>'+
        '<div class="textIndent">'+tracos[0]+'</div>'+
        '<div class="textIndent">'+tracos[1]+'</div>'+
        '<div class="textIndent">'+tracos[2]+'</div>'+
        '<div class="textIndent">'+tracos[3]+'</div>'
    );

    $('.boxAventura').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });


  $('#btnGerarAventura').click(function(){

    var verbo = random(aventuraTiny('verbo'));
    var sujeito = random(aventuraTiny('sujeito'));
    var local = random(aventuraTiny('local'));
    var obstaculo = random(aventuraTiny('obstaculo'));
    var antagonista = random(aventuraTiny('antagonista'));

    aventura = 'Os aventureiros devem '+verbo+' '+sujeito+' '+local+', enquanto lidam com '+obstaculo+' e se opõem '+antagonista+'.<br><br>';

    $('.boxAventura').prepend(aventura);

    $('.boxAventura').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

});