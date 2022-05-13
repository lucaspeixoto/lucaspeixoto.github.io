$( document ).ready(function() {

  $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  function atributos() {
    return [4,3,2];
  };

  function periciasHiboriana() {
    return ['Artes','Atletismo','Combate à Distância','Combate Corporal','Condução','Conhecimento','Feitiçaria','Idiomas','Investigação','Manipulação','Ofícios','Sobrevivência','Subterfúgio'];
  };

  function feiticosHiboriana() {
    return ['Afastar Espírito/Entidade','Aprisionar Corpo','Aprisionar Espírito/Entidade','Aranha de Jade','Cajado em Serpente','Coma','Comandar Carniçais','Comandar Desmortos','Comandar Entidade','Compreender/Detectar Magia','Contrafeitiço','Corpo de Energia','Criar/Destruir Desmorto','Criar Runa Arcana','Curar Doença','Curar Ferimento','Debilitar Saúde','Debilitar Postura','Debilitar Vontade','Destroçar Barreiras','Doença','Dominar Animais/Pessoas','Enlouquecer','Escudo Arcano','Explosão de Energia','Ferir','Fortalecer Arma/Armadura','Ilusão','Invisibilidade','Invocar Animal','Invocar Elementos','Invocar Entidade','Ler a Mente','Línguas','Luz/Escuridão','Medo','Mensagem','Múltiplas Imagens','Passos nas Nuvens','Projeção Astral','Ressurreição','Sugar Espírito','Santidade','Sentidos Extraordinários','Som Fantasmagórico','Sonho/Pesadelo','Telecinésia','Transformação Animal','Ver a Verdade','Ver o Passado/Futuro']
  };

  function qualidades() {
    return ['Abastado','Agilidade da Pantera','Alma Iluminada','Ambidestria','Ameaçador','Amigo dos Animais','Aparência Inofensiva','Armadilheiro','Arqueria Montada','Aristocrata','Artefato','Atirador de Elite','Ataque em Arco','Ataque Selvagem','Boa Vida','Camaleão','Cão de Briga','Capitão de Navio','Chefe de Organização','Comandante de Tropas','Conjurador Prodígio','Cuidadoso','Curandeiro','Defensor','Desarme','Destemido','Dívida de Honra','Dom Sobrenatural','Espírito Guardião','Falsificador','Fé Verdadeira','Feiticeiro','Filho do Mar','Força Titânica','Genial','Golpista','Herbanário','Herdeiro do Trono','Homem de Armas','Honrado','Investida Montada','Irmandade Secreta','Lutador Veloz','Mãos Leves','Matador de Feiticeiros','Mensageiro da Morte','Mestre Artífice','Perito','Perseverante','Poliglota','Protetor','Rastros Invisíveis','Rede de Contatos','Reflexos de Combate','Sacerdote','Senhor da Guerra','Senhor de Terras','Sentidos Aguçados','Viajante','Vigoroso']
  };

  function fortificacao(tipo){
    switch(tipo){
      case 'melhoria':
        return ['Biblioteca','Casa de Cura','Coletor de Água','Criadouro','Dormitório','Estábulos','Estufa','Forja','Jardim','Laboratório','Paliçada','Passagem Secreta','Plantação','Posto de Observação','Templo Pequeno','Templo Grande'];
        break;
      case 'guarnicao':
        return [
          { nome: 'Serviçal', poder: 2 },
          { nome: 'Aldeão', poder: 2 },
          { nome: 'Guarda', poder: 3 },
          { nome: 'Guarda Treinado', poder: 4 },
          { nome: 'Infantaria Leve', poder: 3 },
          { nome: 'Infantaria Média', poder: 4 },
          { nome: 'Infantaria Pesada', poder: 5 },
          { nome: 'Arqueria', poder: 4 },
          { nome: 'Besteiro', poder: 4 },
          { nome: 'Cavalaria Leve', poder: 4 },
          { nome: 'Cavalaria Média', poder: 5 },
          { nome: 'Cavalaria Pesada', poder: 6 },
          { nome: 'Elefante', poder: 10 }];
          /*{ nome: 'Arma de Cerco Pequena', poder: 10 },
          { nome: 'Arma de Cerco Média', poder: 15 },
          { nome: 'Arma de Cerco Grande', poder: 20 }];*/
        break;
    }
  }

  function nomeHiboriano(regiao) {

    var nome = '';
    var sobrenome = '';

    switch(regiao){
      case "hiboriana":
        nome = random(['Adriano','Augusto','Beoto','Bruno','Cesar','Dante','Francesco','Galeso','Marcus','Marius','Martim','Octavio','Vicente','Ágata','Agnes','Alice','Aurora','Beatrice','Camilla','Chiara','Gaia','Ginevra','Greta','Helena','Isadora','Íris','Laís','Sara','Sofia','Vitoria']);
        sobrenome = random(['da Aquilônia','de Corinthia','de Koth','da Nemédia','de Ophir','de Argos','do Reino da Fronteira']);
        break;
      case "norte":
        nome = random(['Andor','Ari','Baggi','Brynjar','Elof','Folke','Hakon','Hallbjorn','Ivor','Loki','Rudolf','Thor','Torsten','Vidar','Annveig','Bergunn','Dagny','Freya','Frig','Idonea','Liv','Magnhild','Randi','Sif','Sigrun','Urd','Verdandi','Barra','Coll','Conall','Conan','Eadan','Earc','Finnean','Garbhan','Gormal','Macrath','Osgar','Rodachan','Solas','Aithne','Blaanid','Brianag','Caitlín','Fíne','Malamhin','Mordag','Muirin','Naomh','Saraid','Slaine']);
        sobrenome = random(['de Asgard','de Vanahein','da Ciméria','da Britúnia','da Hiperbórea']);
        break;    
      case "sul":
        nome = random(['Adisa','Ayo','Bomani','Danso','Jafari','Kambami','Kayin','Kwame','Leke','Nilo','Sekani','Zaki','Zola','Amara','Ayana','Bintu','Dalji','Dandara','Eno','Fayola','Kieza','Jendayi','Lueji','Monifa','Zuri']);
        sobrenome = random(['de Darfar','de Keshan','de Kush','dos Reinos Negros','de Punt','de Zimbabo','de Shem','da Estígia']);
        break;
      case "terras":
        nome = random(['Abu','Ashur','Bineil','Ennanum','Hanu','Ili-Ellat','Khalil','Khammo','Madsa','Malik','Meesha','Ram','Asiah','Damrina','Emmita','Huda','Khannah','Leja','Lilith','Nasibin','Ramina','Shimta','Yata']);
        sobrenome = random(['da Hirkania','do Iranistão','de Turan','de Khitai','de Vendhya','de Zamora','de Zíngara','das Ilhas Barachas','do Território Selvagem Picto']);
        break;
    }

    return nome+', '+sobrenome;
  }

  function pertencesHiborianos(type){

    switch(type){
      case 'arma':
        return ['Adaga (+1)','Alabarda (+2)','Arco Curto (+1)','Arco Médio (+2)','Arco Longo (+3)','Azagaia (+1)','Bastão (+1)','Besta Pequena (+1)','Besta Média (+2)','Besta Grande (+3)','Boleadeiras (+1)','Bumerangue (+1)','Chicote (+1)','Clava (+1)','Espada Curta (+1)','Espada Longa (+2)','Espada Larga (+3)','Faca (+1)','Foice Pequena (+1)','Funda (+1)','Katana (+2)','Lança (+2)','Maça Pequena (+1)','Maça Média (+2)','Maça Grande (+3)','Machadinha (+1)','Machado Médio (+2)','Machado Grande (+3)','Mangual (+2)','Martelo Pequeno (+1)','Martelo Médio (+2)','Martelo Grande (+3)','Punhal (+1)','Rede (enredar)','Tridente (+2)','Zarabatana (veneno)'];
        break;
      case 'armadura':
        return ['Manto (Res 0)','Gibão de Couro Rústico (Res 1)','Lorigo de Couro (Res 1)','Loriga de Couro e Aço (Res 1)','Camisão de Malha (Res 2)','Cota de Malha (Res 2)','Cota de Malha e Placas (Res 2)','Armadura de Placas (Res 3)','Armadura de Combate (Res 3)','Armadura de Batalha (Res 3)','Armadura Completa (Res 3)','Luva Fechada (Res 0)','Escudo Médio (Res 1)','Escudo Grande (Res 2)'];
        break;
      case 'equipamento':
        return ['Alforge para Animal','Algemas','Algibeira','Aljava','Ampulheta','Apito','Barraca','Baú','Cantil','Corda com Gancho','Equipamento de Pesca','Ferramentas','Instrumento Musical','Isqueiro','Kit de Arrombamento','Kit de Estudos','Kit de Medicina','Kit de Sobrevivência','Lanterna','Luneta','Mapa','Mochila','Munição','Óleo para Lanterna','Pá','Panelas','Pé-de-Cabra','Pedra de Amolar','Pergaminho','Picareta','Saco de Dormir','Sela e Arreios','Saco','Tocha','Tomo','Botas','Calça','Camisa','Capa','Chapéu','Luvas','Casaca','Vestido','Roupas de Frio','Roupas de Qualidade','Roupas Luxuosas','Roupas de Trabalho'];
        break;
      case 'animal':
        return ['Animal Pequeno','Animal Médio','Animal Grande','Animal de Companhia','Animal de Caça','Ave de Caça','Camelo','Cavalo Normal','Cavalo de Corrida','Cavalo de Carga','Cavalo de Guerra','Elefante'];
        break;
      case 'artefato':
        return ['Adaga Ritual','Amuleto de Proteção','Anel da Serpente de Set','Armadilha Astral','Bolas de Cristal','Cajado Mágico','Cinturão de Proteção','Coração de Ahriman','Cristal de Energia','Estrela de Khorala','Fruto de Derketo','Grimório','Lâmina Abençoada','Livro de Skelos','Lótus Amarela','Lótus Cinzenta','Lótus Dourada','Lótus Negra','Lótus Púrpura','Pífaro da Loucura','Pó da Verdade','Pó de Fogo','Receptáculo Divino','Runas Arcanas','Símbolo de Jhebbal Sag','Símbolo de Proteção'];
        break;
    }

  };

  function checkQualidade(vetor,qualidade){
    if(vetor[0] == qualidade) return true;
    if(vetor[1] == qualidade) return true;
    if(vetor[2] == qualidade) return true;
    return false;
  }

  function pericias() {
    return ['Artes','Atletismo','Combate à Distância','Combate Corporal','Condução','Conhecimento','Idiomas','Investigação','Manipulação','Sobrevivência','Subterfúgio','Tecnologia'];
  };

  function periciasCthulhu() {
    return ['Artes','Atletismo','Combate à Distância','Combate Corporal','Condução','Conhecimento','Idiomas','Investigação','Magia','Manipulação','Sobrevivência','Subterfúgio','Tecnologia'];
  };

  function feiticosCthulhu(){
    return ['Afastar Servos dos Antigos (pág. 28)','Alarme (pág. 28)','Aprisionar Corpo (pág. 28)','Aprisionar Espírito (pág. 29)','Aprisionar Entidade (pág. 29)','Coma (pág. 29)','Comandar Abissais (pág. 29)','Comandar Byakhee (pág. 29)','Comandar Carniçais (pág. 29)','Comandar Desmortos (pág. 29)','Comandar Entidade (pág. 29)','Contra Feitiço (pág. 29)','Criar Desmorto (pág. 29)','Criar Runa Arcana (pág. 29)','Curar Doença (pág. 30)','Curar Ferimento (pág. 30)','Debilitar Saúde (pág. 30)','Debilitar Postura (pág. 30)','Debilitar Vontade (pág. 30)','Doença (pág. 30)','Dominar Animais/Pessoas (pág. 30)','Enlouquecer (pág. 30)','Escudo Arcano (pág. 30)','Ferir (pág. 30)','Fogo Fátuo (pág. 30)','Fortalecer Arma/Armadura (pág. 31)','Invisibilidade (pág. 31)','Invocar Animal (pág. 31)','Invocar Coisa Rato (pág. 31)','Ler a Mente (pág. 31)','Luz Tênue (pág. 31)','Medo (pág. 31)','Portal (pág. 31)','Projeção Astral (pág. 31)','Ressurreição (pág. 32)','Sugar Espírito (pág. 32)']
  }

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
      case 'aleatorio':
        return ['Arma/Armadura (Tabela 14)','Arma/Armadura (Tabela 14)','Equipamento (Tabela 16)','Equipamento (Tabela 16)','Recurso (Tabela 17)','Recurso (Tabela 17)','Veículo (Tabela 18)','Veículo (Tabela 18)','Artefato Poderoso (Tabela 19)'];
        break;
      case 'equipamento':
        return ['Roupas','Roupas de Frio','Mochila','Coldre','Corda','Isqueiro','Algemas','Lanterna','Sinaleiro','Walkie Talkie','Rádio Comunicador','Binóculo','Mira Telescópica','Megafone','Óculos Infravermelhos','Kit de Primeiros Socorros','Kit de Estudo','Kit de Sobrevivência','Kit de Arrombamento','Kit de Eletrônica','Ferramentas Mecânicas'];
        break;
      case 'arma-armadura':
        return ['Faca','Punhal','Soqueira','Armadura Tática','Facão','Machado','Martelo','Colete','Pistola','Revólver','Colete Pesado','Espingarda','Escopeta','Roupas Pesadas','Metralhadora','Fuzil','Granada','Explosivo'];
        break;
      case 'recurso':
        return ['1D10 Combustível','1D10 Peças','1D10 Munições','1D10 Comidas','1D10 Remédios','5+1D10 Peças ','5+1D10 Munições','5+1D10 Comidas','5+1D10 Remédios'];
        break;
      case 'veiculo':
        return ['Moto','Carro pequeno','Carro grande','Ônibus','Helicóptero'];
        break;
      case 'artefato':
        return ['Necronomicon','Escultura de Argila','Adaga Ritual','Grimório','Manto Amarelo','Coroa de Carcosa','Amuleto de Proteção','Escrituras Sagradas','Veneno de Homem Serpente','Teia dos Sonhos','Balas Abençoadas','Lâmina Abençoada','Cristal de Energia','Página do Necronomicon','Pó de Ibn-Gazi','Cajado de Ossos','Amuleto de Yig','Teia dos Sonhos','Chave Prateada','Bíblia do Rei James'];
        break;
    }

  };

  function melhorias(tipo){
    switch(tipo){
      case 'espaco':
        return ['Passagem Secreta (Espaço -1)','Horta (Espaço -2)','Garagem (Espaço -1)','Dormitório (Espaço -2)','Criadouro (Espaço -2)','Coletor de Água (Espaço -1)','Ambulatório (Espaço -1)','Barricada (Espaço -1)','Biblioteca (Espaço -1)','Câmara Ritualística (Espaço -1)'];
        break;
      case 'tecnologia':
        return ['Sistema de Armas (Tecnologia -2)','Rádio Comunicador (Tecnologia -1)','Posto de Observação (Tecnologia -1, Pré-Requisito: Eletricidade)','Oficina (Espaço -1, Tecnologia -1)','Eletricidade (Tecnologia -2)','Defesas de Perímetro (Tecnologia -1)','Cerca Eletrificada (Tecnologia -1, Pré-Requisito: Eletricidade)'];
        break;
    }
  }

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

  $('#btnGerarSobrevivente').click(function(){

    var valAtributos = exclusiveRandom(atributos(),3);
    var valPericias = exclusiveRandom(periciasCthulhu(),3);
    var valFeiticos = '';
    var feiticosSobrevivente = '';

    if((valPericias[0] == 'Magia') || (valPericias[1] == 'Magia') || (valPericias[2] == 'Magia')){

      feiticosSobrevivente = '<div><strong>FEITIÇOS</strong>'+valFeiticos+'</div>';

      if(valAtributos[2] == 2){
        valFeiticos = exclusiveRandom(feiticosCthulhu(),2);

        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[0]+'</div>';
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[1]+'</div>';

      } else if (valAtributos[2] == 3){
        valFeiticos = exclusiveRandom(feiticosCthulhu(),3);

        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[0]+'</div>';
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[1]+'</div>';
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[2]+'</div>';

      } else if (valAtributos[2] == 4){
        valFeiticos = exclusiveRandom(feiticosCthulhu(),4);
        
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[0]+'</div>';
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[1]+'</div>';
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[2]+'</div>';
        feiticosSobrevivente = feiticosSobrevivente + '<div class="textIndent">'+valFeiticos[3]+'</div>';
      }

      feiticosSobrevivente = feiticosSobrevivente + '</div>';
    }

    $('.boxPersonagemFate').html(
      '<center><h4>'+random(nomeSobrevivente(random(['fem','masc'])))+' '+random(nomeSobrevivente('sobrenome'))+'</h4></center>'+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Corpo:</strong> '+valAtributos[0]+'</div>'+
      '<div class="textIndent"><strong>Espírito:</strong> '+valAtributos[1]+'</div>'+
      '<div class="textIndent"><strong>Mente:</strong> '+valAtributos[2]+'</div>'+
      '<br><div class="textIndent"><strong>Saúde:</strong> '+Number(valAtributos[0]+5)+'</div>'+
      '<div class="textIndent"><strong>Postura:</strong> '+Number(valAtributos[1]+5)+'</div>'+
      '<div class="textIndent"><strong>Vontade:</strong> '+Number(valAtributos[2]+5)+'</div></div><br>'+
      '<div><strong>PERÍCIAS</strong>'+
      '<div class="textIndent">'+valPericias[0]+', '+valPericias[1]+' e '+valPericias[2]+'</div><br>'+
      '<div><strong>PERTENCES</strong>'+
      '<div class="textIndent">'+random(pertences(random(['corporal','distancia'])))+'</div>'+
      '<div class="textIndent">'+random(pertences('armadura'))+'</div>'+
      '<div class="textIndent">'+random(pertences('equipamento'))+'</div>'+
      '<div class="textIndent">'+random(pertences(random(['arma-armadura','arma-armadura','equipamento','equipamento','recurso','recurso','veiculo','veiculo','artefato'])))+'</div>'+
      '<div class="textIndent">'+random(pertences(random(['arma-armadura','arma-armadura','equipamento','equipamento','recurso','recurso','veiculo','veiculo','artefato'])))+'</div>'+
      '<div class="textIndent">'+randomNumber(5,15)+' comidas</div>'+
      '<div class="textIndent">'+randomNumber(1,10)+' remédios</div>'+
      '<div class="textIndent">'+randomNumber(1,10)+' munições</div>'+
      '</div><br>'+
      feiticosSobrevivente
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #70d670'});

  });

  $('#btnGerarRefugio').click(function(){

    var valTipo = random(['Residência','Câmara','Galpão','Morada','Fazenda']);
    var valLocalizacao = '';
    var valMelhorias = '';

    if(valTipo == 'Residência'){
      valLocalizacao = 'Escombros';
      valDefesa = '50';
      valEspaco = '5';
      valTecnologia = '5';
      valEspacos = exclusiveRandom(melhorias('espaco'),2);
      valTecnologias = exclusiveRandom(melhorias('tecnologia'),2);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[1]+'</div>';
    }

    if(valTipo == 'Câmara'){
      valLocalizacao = 'Subterrâneo';
      valDefesa = '70';
      valEspaco = '3';
      valTecnologia = '5';
      valEspacos = exclusiveRandom(melhorias('espaco'),1);
      valTecnologias = exclusiveRandom(melhorias('tecnologia'),2);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[1]+'</div>';
    }

    if(valTipo == 'Galpão'){
      valLocalizacao = 'Ruínas';
      valDefesa = '30';
      valEspaco = '7';
      valTecnologia = '5';
      valEspacos = exclusiveRandom(melhorias('espaco'),3);
      valTecnologias = exclusiveRandom(melhorias('tecnologia'),2);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[2]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[1]+'</div>';
    }

    if(valTipo == 'Morada'){
      valLocalizacao = 'Litoral';
      valDefesa = '50';
      valEspaco = '5';
      valTecnologia = '5';
      valEspacos = exclusiveRandom(melhorias('espaco'),2);
      valTecnologias = exclusiveRandom(melhorias('tecnologia'),2);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[1]+'</div>';
    }

    if(valTipo == 'Fazenda'){
      valLocalizacao = 'Ermo';
      valDefesa = '30';
      valEspaco = '9';
      valTecnologia = '3';
      valEspacos = exclusiveRandom(melhorias('espaco'),4);
      valTecnologias = exclusiveRandom(melhorias('tecnologia'),1);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[2]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valEspacos[3]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valTecnologias[0]+'</div>';
    }

    $('.boxPersonagemFate').html(
      '<center><h4>Refúgio</h4></center>'+
      '<div class="textIndent"><strong>Tipo:</strong> '+valTipo+'</div>'+
      '<div class="textIndent"><strong>Localização:</strong> '+valLocalizacao+'</div><br>'+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Defesa:</strong> '+valDefesa+'</div>'+
      '<div class="textIndent"><strong>Espaço:</strong> '+valEspaco+'</div>'+
      '<div class="textIndent"><strong>Tecnologia:</strong> '+valTecnologia+'</div></div><br>'+
      '<div><strong>MELHORIAS</strong>'+
      valMelhorias+
      '</div>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #70d670'});

  });

$('#btnGerarTropa').click(function(){

    var valPoder = 0;

    if($('#tropa_personagem').val()>0) valPoder = valPoder + $('#tropa_personagem').val()*9;
    if($('#tropa_aldeao').val()>0) valPoder = valPoder + $('#tropa_aldeao').val()*2;
    if($('#tropa_guarda').val()>0) valPoder = valPoder + $('#tropa_guarda').val()*3;
    if($('#tropa_treinado').val()>0) valPoder = valPoder + $('#tropa_treinado').val()*4;
    if($('#tropa_infant_leve').val()>0) valPoder = valPoder + $('#tropa_infant_leve').val()*3;
    if($('#tropa_infant_med').val()>0) valPoder = valPoder + $('#tropa_infant_med').val()*4;
    if($('#tropa_infant_pes').val()>0) valPoder = valPoder + $('#tropa_infant_pes').val()*5;
    if($('#tropa_arqueria').val()>0) valPoder = valPoder + $('#tropa_arqueria').val()*4;
    if($('#tropa_besteiro').val()>0) valPoder = valPoder + $('#tropa_besteiro').val()*4;
    if($('#tropa_cav_leve').val()>0) valPoder = valPoder + $('#tropa_cav_leve').val()*4;
    if($('#tropa_cav_med').val()>0) valPoder = valPoder + $('#tropa_cav_med').val()*5;
    if($('#tropa_cav_pes').val()>0) valPoder = valPoder + $('#tropa_cav_pes').val()*6;
    if($('#tropa_elefante').val()>0) valPoder = valPoder + $('#tropa_elefante').val()*10;
    if($('#tropa_cerco_leve').val()>0) valPoder = valPoder + $('#tropa_cerco_leve').val()*10;
    if($('#tropa_cerco_med').val()>0) valPoder = valPoder + $('#tropa_cerco_med').val()*15;
    if($('#tropa_cerco_pes').val()>0) valPoder = valPoder + $('#tropa_cerco_pes').val()*20;

    if((document.getElementById('check_bonus').checked) && (document.getElementById('check_palicada').checked)){
      valPoder = valPoder + (Number($('#select_fortificacao').val())*1.5);
    } else if (document.getElementById('check_bonus').checked) {
      valPoder = valPoder + Number($('#select_fortificacao').val());
    }
      
    if(document.getElementById('check_terreno').checked) valPoder = valPoder*1.5;
    if(document.getElementById('check_moral').checked) valPoder = valPoder*1.5;
    
    valPoder = Math.floor(valPoder);

    $('.boxPersonagemFate').html(
      '<center><h4>Poder da Tropa</h4></center>'+
      '<div class="textIndent"><strong>Poder:</strong> '+valPoder+'</div><br>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #8b181b'});

  });

  $('#btnGerarFortificacao').click(function(){

    var valTipo = random(['Cabana','Casa','Mansão','Torre','Fortim','Fortaleza']);
    var valMelhorias = '';
    var valTropas = '';
    var valGuarnicoes = '';
    var valPoder = 0;
    var valQtdd = [];

    if(valTipo == 'Cabana'){
      valQualidades = exclusiveRandom(fortificacao('melhoria'),1);
      valGuarnicoes = exclusiveRandom(fortificacao('guarnicao'),1);
      
      valQtdd[0] = randomNumber(1,5);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[0]+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[0]+' '+valGuarnicoes[0].nome+'</div>';
      
      valPoder = valQtdd[0]*valGuarnicoes[0].poder;

      if(valQtdd[0]>1){
        valPoder = valPoder + 10;
        if(checkQualidade(valQualidades,'Paliçada'))
          valPoder = valPoder + 5;
      }

    }

    if(valTipo == 'Casa'){
      valQualidades = exclusiveRandom(fortificacao('melhoria'),2);
      valGuarnicoes = exclusiveRandom(fortificacao('guarnicao'),2);

      valQtdd[0] = randomNumber(1,5);
      valQtdd[1] = randomNumber(1,5);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[1]+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[0]+' '+valGuarnicoes[0].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[1]+' '+valGuarnicoes[1].nome+'</div>';

      valPoder = valPoder + valQtdd[0]*valGuarnicoes[0].poder;
      valPoder = valPoder + valQtdd[1]*valGuarnicoes[1].poder;

      if((valQtdd[0]+valQtdd[1])>4){
        valPoder = valPoder + 20;
        if(checkQualidade(valQualidades,'Paliçada'))
          valPoder = valPoder + 10;
      }
    }

    if(valTipo == 'Mansão'){
      valQualidades = exclusiveRandom(fortificacao('melhoria'),3);
      valGuarnicoes = exclusiveRandom(fortificacao('guarnicao'),3);

      valQtdd[0] = randomNumber(1,8);
      valQtdd[1] = randomNumber(1,8);
      valQtdd[2] = randomNumber(1,8);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[2]+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[0]+' '+valGuarnicoes[0].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[1]+' '+valGuarnicoes[1].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[2]+' '+valGuarnicoes[2].nome+'</div>';

      valPoder = valPoder + valQtdd[0]*valGuarnicoes[0].poder;
      valPoder = valPoder + valQtdd[1]*valGuarnicoes[1].poder;
      valPoder = valPoder + valQtdd[2]*valGuarnicoes[2].poder;

      if((valQtdd[0]+valQtdd[1]+valQtdd[2])>9){
        valPoder = valPoder + 50;
        if(checkQualidade(valQualidades,'Paliçada'))
          valPoder = valPoder + 25;
      }
    }

    if(valTipo == 'Torre'){
      valQualidades = exclusiveRandom(fortificacao('melhoria'),4);
      valGuarnicoes = exclusiveRandom(fortificacao('guarnicao'),4);

      valQtdd[0] = randomNumber(1,10);
      valQtdd[1] = randomNumber(1,10);
      valQtdd[2] = randomNumber(1,10);
      valQtdd[3] = randomNumber(1,10);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[2]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[3]+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[0]+' '+valGuarnicoes[0].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[1]+' '+valGuarnicoes[1].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[2]+' '+valGuarnicoes[2].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[3]+' '+valGuarnicoes[3].nome+'</div>';

      valPoder = valPoder + valQtdd[0]*valGuarnicoes[0].poder;
      valPoder = valPoder + valQtdd[1]*valGuarnicoes[1].poder;
      valPoder = valPoder + valQtdd[2]*valGuarnicoes[2].poder;
      valPoder = valPoder + valQtdd[3]*valGuarnicoes[3].poder;

      if((valQtdd[0]+valQtdd[1]+valQtdd[2]+valQtdd[3])>19){
        valPoder = valPoder + 100;
        if(checkQualidade(valQualidades,'Paliçada'))
          valPoder = valPoder + 50;
      }
    }

    if(valTipo == 'Fortim'){
      valQualidades = exclusiveRandom(fortificacao('melhoria'),5);
      valGuarnicoes = exclusiveRandom(fortificacao('guarnicao'),5);

      valQtdd[0] = randomNumber(1,12);
      valQtdd[1] = randomNumber(1,12);
      valQtdd[2] = randomNumber(1,12);
      valQtdd[3] = randomNumber(1,12);
      valQtdd[4] = randomNumber(1,12);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[2]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[3]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[4]+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[0]+' '+valGuarnicoes[0].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[1]+' '+valGuarnicoes[1].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[2]+' '+valGuarnicoes[2].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[3]+' '+valGuarnicoes[3].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[4]+' '+valGuarnicoes[4].nome+'</div>';

      valPoder = valPoder + valQtdd[0]*valGuarnicoes[0].poder;
      valPoder = valPoder + valQtdd[1]*valGuarnicoes[1].poder;
      valPoder = valPoder + valQtdd[2]*valGuarnicoes[2].poder;
      valPoder = valPoder + valQtdd[3]*valGuarnicoes[3].poder;
      valPoder = valPoder + valQtdd[4]*valGuarnicoes[4].poder;

      if((valQtdd[0]+valQtdd[1]+valQtdd[2]+valQtdd[3]+valQtdd[4])>29){
        valPoder = valPoder + 200;
        if(checkQualidade(valQualidades,'Paliçada'))
          valPoder = valPoder + 100;
      }
    }

    if(valTipo == 'Fortaleza'){
      valQualidades = exclusiveRandom(fortificacao('melhoria'),6);
      valGuarnicoes = exclusiveRandom(fortificacao('guarnicao'),6);

      valQtdd[0] = randomNumber(1,20);
      valQtdd[1] = randomNumber(1,20);
      valQtdd[2] = randomNumber(1,20);
      valQtdd[3] = randomNumber(1,20);
      valQtdd[4] = randomNumber(1,20);
      valQtdd[5] = randomNumber(1,20);

      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[0]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[1]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[2]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[3]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[4]+'</div>';
      valMelhorias = valMelhorias + '<div class="textIndent">'+valQualidades[5]+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[0]+' '+valGuarnicoes[0].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[1]+' '+valGuarnicoes[1].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[2]+' '+valGuarnicoes[2].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[3]+' '+valGuarnicoes[3].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[4]+' '+valGuarnicoes[4].nome+'</div>';
      valTropas = valTropas + '<div class="textIndent">'+valQtdd[5]+' '+valGuarnicoes[5].nome+'</div>';

      valPoder = valPoder + valQtdd[0]*valGuarnicoes[0].poder;
      valPoder = valPoder + valQtdd[1]*valGuarnicoes[1].poder;
      valPoder = valPoder + valQtdd[2]*valGuarnicoes[2].poder;
      valPoder = valPoder + valQtdd[3]*valGuarnicoes[3].poder;
      valPoder = valPoder + valQtdd[4]*valGuarnicoes[4].poder;
      valPoder = valPoder + valQtdd[5]*valGuarnicoes[5].poder;

      if((valQtdd[0]+valQtdd[1]+valQtdd[2]+valQtdd[3]+valQtdd[4]+valQtdd[5])>49){
        valPoder = valPoder + 500;
        if(checkQualidade(valQualidades,'Paliçada'))
          valPoder = valPoder + 250;
      }
    }

    $('.boxPersonagemFate').html(
      '<center><h4>Fortificação</h4></center>'+
      '<div class="textIndent"><strong>Tipo:</strong> '+valTipo+'</div>'+
      '<div class="textIndent"><strong>Líder:</strong> '+nomeHiboriano(random(['hiboriana','norte','sul','terras']))+'</div>'+
      '<div class="textIndent"><strong>Poder:</strong> '+valPoder+'</div><br>'+
      '<div><strong>MELHORIAS</strong>'+
      valMelhorias+
      '</div><br>'+
      '<div><strong>GUARNIÇÕES</strong>'+
      valTropas+
      '</div>'
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #8b181b'});

  });

  $('#btnGerarAEH').click(function(){

    var valAtributos = exclusiveRandom(atributos(),3);
    var valFeiticos = '';
    var feiticosHiboriano = '';
    var valQualidades = exclusiveRandom(qualidades(),3);
    var valPericias = '';
    var textoPericias = '';
    var moedas = randomNumber(1,10)*5;
    var equipamentos = exclusiveRandom(pertencesHiborianos('equipamento'),3);
    var extra = '';
    var bonusPostura = 0;
    var bonusVontade = 0;
    var bonusSaude = 0;
    var textoFeiticeiro = '';

    if(checkQualidade(valQualidades,'Perito')){
      valPericias = exclusiveRandom(periciasHiboriana(),4);
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[0]+'</div>';
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[1]+'</div>';
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[2]+'</div>';
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[3]+'</div><br>';
    } else {
      valPericias = exclusiveRandom(periciasHiboriana(),3);
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[0]+'</div>';
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[1]+'</div>';
      textoPericias = textoPericias + '<div class="textIndent">'+valPericias[2]+'</div><br>';
    }

    if(checkQualidade(valPericias,'Feitiçaria') || checkQualidade(valQualidades,'Dom Sobrenatural') || checkQualidade(valQualidades,'Feiticeiro')){

      valFeiticos = exclusiveRandom(feiticosHiboriana(),9);

      feiticosHiboriano = '<div><strong>FEITIÇOS</strong></div>';

      if(checkQualidade(valQualidades,'Dom Sobrenatural'))
        feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[0]+' - Dom Sobrenatural</div>';

      if(checkQualidade(valPericias,'Feitiçaria') || checkQualidade(valQualidades,'Feiticeiro')){

        textoFeiticeiro = '<center><p><i>Tradição Arcana: '+random(['Anel Negro da Estígia','Círculo Sombrio de Yimsha','Filhos de Dagon e Derketo','Sacerdotes do Crânio Amarelo de Khitai','Sacerdotes do Culto Imortal da Hiperbórea'])+'</i></p></center>';

        feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[1]+'</div>';
        feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[2]+'</div>';

        if (valAtributos[2] >= 3)
          feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[3]+'</div>';

        if (valAtributos[2] >= 4)
          feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[4]+'</div>';

      }

      if(checkQualidade(valPericias,'Feitiçaria') && checkQualidade(valQualidades,'Feiticeiro')){

        feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[5]+'</div>';
        feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[6]+'</div>';

        if (valAtributos[2] >= 3)
          feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[7]+'</div>';

        if (valAtributos[2] >= 4)
          feiticosHiboriano = feiticosHiboriano + '<div class="textIndent">'+valFeiticos[8]+'</div>';

      }

      feiticosHiboriano = feiticosHiboriano + '</div>';

    }

    if(checkQualidade(valQualidades,'Abastado')){
      moedas = moedas*10;
    }

    if(checkQualidade(valQualidades,'Amigo dos Animais')){
      extra = extra + '<div class="textIndent">'+random(pertencesHiborianos('animal'))+'</div>';
    }

    if(checkQualidade(valQualidades,'Artefato')){
      extra = extra + '<div class="textIndent">'+random(pertencesHiborianos('artefato'))+' (artefato)</div>';
    }

    if(checkQualidade(valQualidades,'Capitão de Navio')){
      extra = extra + '<div class="textIndent">Embarcação Média</div>';
    }
    
    if(checkQualidade(valQualidades,'Aristocrata')){
      bonusPostura = bonusPostura+4;
    }

    if(checkQualidade(valQualidades,'Perseverante')){
      bonusVontade = bonusVontade+4;
    }

    if(checkQualidade(valQualidades,'Vigoroso')){
      bonusSaude = bonusSaude+4;
    }
 
    $('.boxPersonagemFate').html(
      '<center><h4>'+nomeHiboriano(random(['hiboriana','norte','sul','terras']))+'</h4></center>'+
      textoFeiticeiro+
      '<div><strong>ATRIBUTOS</strong>'+
      '<div class="textIndent"><strong>Corpo:</strong> '+valAtributos[0]+nbsp(12)+'<strong>Saúde:</strong> '+Number(valAtributos[0]+5+bonusSaude)+'</div>'+
      '<div class="textIndent"><strong>Espírito:</strong> '+valAtributos[1]+nbsp(10)+'<strong>Postura:</strong> '+Number(valAtributos[1]+5+bonusPostura)+'</div>'+
      '<div class="textIndent"><strong>Mente:</strong> '+valAtributos[2]+nbsp(12)+'<strong>Vontade:</strong> '+Number(valAtributos[2]+5+bonusVontade)+'</div><br>'+
      '<div><strong>PERÍCIAS</strong>'+
      textoPericias+
      '<div><strong>QUALIDADES</strong>'+
      '<div class="textIndent">'+valQualidades[0]+'</div>'+
      '<div class="textIndent">'+valQualidades[1]+'</div>'+
      '<div class="textIndent">'+valQualidades[2]+'</div><br>'+
      '<div><strong>PERTENCES</strong>'+
      '<div class="textIndent">Bolsa com '+moedas+' moedas</div>'+
      '<div class="textIndent">'+random(pertencesHiborianos('arma'))+'</div>'+
      '<div class="textIndent">'+random(pertencesHiborianos('arma'))+'</div>'+
      '<div class="textIndent">'+random(pertencesHiborianos('armadura'))+'</div>'+
      '<div class="textIndent">'+equipamentos[0]+'</div>'+
      '<div class="textIndent">'+equipamentos[1]+'</div>'+
      '<div class="textIndent">'+equipamentos[2]+'</div>'+
      extra+
      '</div><br>'+
      feiticosHiboriano
    );

    $('.boxPersonagemFate').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px #8b181b'});

  });


});