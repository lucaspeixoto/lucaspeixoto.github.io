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

$( document ).ready(function() {

  setTimeout(function() {
      $("#btnGerarAventura").trigger('click');
  },10);

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