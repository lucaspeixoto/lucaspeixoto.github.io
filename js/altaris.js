$( document ).ready(function() {

  function buscar(){
    return [
      'Não encontrou nada. Perca 1 Conquista.',
      'Encontrou objeto sem valor:',
      'Encontrou objeto sem valor:',
      'Encontrou um objeto comum, mas útil:',
      'Encontrou um equipamento de qualquer raridade:',
      'Encontrou um Tesouro:'
    ];
  }

  function tesouro(){
    return [
      'Poção aleatória.',
      'Objeto valioso ou muitas moedas (1 Riqueza).',
      'Objeto valioso ou muitas moedas (1 Riqueza).',
      'Ornamento mágico aleatório.',
      'Vestimenta mágica aleatória.',
      'Arma mágica aleatória.',
    ]; 
  }

  function pocao(){
    return ['Poção do Caos ','Poção de Levitação','Poção de Energia ','Poção de Metamorfose','Poção de Energia ','Poção de Invisibilidade','Poção de Energia ','Poção de Foco','Poção de Vida ','Poção de Aura Elemental','Poção de Vida ','Poção Universal'];
  }

  function ornamento(){

    tipo = random(['Estatueta','Cálice','Busto','Lâmpada','Orbe','Ovo','Varinha','Quadro','Espelho','Caneca','Cubo','Mão Empalhada'])
    efeito = random(['Vórtex ','Fedor','Prisão ','Falante','Agarrador ','Visão Mágica','Iluminador ','Aura Elemental','Animal ','Restaurador','Portal ','Desejo']);

    return tipo+', com o efeito '+efeito;
  }

  function magiaArmadura(){

    negativo = random(['Agarrador','Palavra','Limite','Falante','Ambiente','Exaustivo','Dolorido','Emocional','Enfurecedor','Procurado','Espécie','Precioso','Mórbido','Inimigo','Chamativo','Fedor','Moribundo','Marcas'])
    positivo = random(['Acrescente +2 PV máximo','Acrescente +2 PV máximo','Iluminador','Acrescente +2 PE máximo','Acrescente +2 PE máximo','Invisibilidade','Reduz 2 de dano de eletricidade','Reduz 2 de dano de eletricidade','Focado','Reduz 2 de dano de frio','Reduz 2 de dano de frio','Metamorfose','Reduz 2 de dano de fogo','Reduz 2 de dano de fogo','Visão Mágica','Acrescente +2 PV e +2 PE máx.','Acrescente +2 PV e +2 PE máx.','Aura Elemental']);

    return ' (Efeito negativo: '+negativo+' - Efeito positivo: '+positivo+')';
  }

  function magiaArma(){

    negativo = random(['Agarrador','Palavra','Limite','Falante','Ambiente','Exaustivo','Dolorido','Emocional','Enfurecedor','Procurado','Espécie','Precioso','Mórbido','Inimigo','Chamativo','Fedor','Moribundo','Marcas'])
    positivo = random(['Causa +2 de dano','Causa +2 de dano','Iluminador','Causa +3 de crítico','Causa +3 de crítico','Retornável','Causa +3 dano de eletricidade','Causa +3 dano de eletricidade','Dançante','Causa +3 dano de frio','Causa +3 dano de frio','Vampírica','Causa +3 dano de fogo','Causa +3 dano de fogo','Matadora','Causa +5 de dano','Causa +5 de dano','Vorpal']);

    return ' (Efeito negativo: '+negativo+' - Efeito positivo: '+positivo+')';
  }
  
  function objetoSemValor(){
    return ['Botões soltos','Parafusos enferrujados','Pedras quebradas','Pedaços de vidro','Cacos de cerâmica','Galhos de árvores mortas','Raízes entrelaçadas','Folhas murchas','Conchas vazias e rachadas','Páginas arrancadas de um livro','Fragmentos de couro','Pequenos ossos de animais','Punhados de poeira','Lascas de madeira','Fios de cabelo de animais','Dentes de alho secos','Pedras de seixos sem brilho','Cabelos soltos','Fios de palha','Pregos enferrujados','Galhos secos','Folhas de papel em branco','Pétalas secas de flores','Fragmentos de metal enferrujado','Restos de comida deteriorada','Pano rasgado','Peles de frutas velhas','Cinzas de fogueira apagada','Galhos de arbustos secos','Cones de pinheiro vazios','Sementes comuns','Pelotas de excremento seco','Penas danificadas','Pedrinhas comuns','Pedaços de folha de lata','Retalhos de tecido desbotado','Rolhas usadas','Lã suja','Roupas rasgadas e gastas','Casca de árvore solta','Teias de aranha sem aranhas','Fragmentos de carvão','Pequenas quantidades de serragem','Folhas de outono murchas','Restos de velas queimadas','Corda desgastada','Grama cortada','Areia comum','Pedras pequenas e comuns','Tufos de pelos de roedores','Cabelos humanos cortados','Conchas de moluscos vazias','Fragmentos de conchas quebradas','Restos de ossos de animais','Pequenas lascas de pedra','Gravetos apodrecidos','Tintas ressecadas','Escovas de pintura gastas','Pedras de rio sem brilho','Restos de velhos pergaminhos','Penas de ave comuns','Argolas enferrujadas','Pedaços de barro seco','Vidro moído em pequenos fragmentos','Fragrâncias desbotadas','Rolos de tecido inutilizados','Restos de velhas velas de cera','Galhos de arbustos sem vida','Penas de ganso danificadas','Fios de linho desgastados','Folhas de metal amassadas','Restos de garras de animais','Carvão apagado','Pedra calcária comum','Folhas de papel sujo','Pelotas de argila seca','Cones de pinheiro vazios e quebrados','Cacos de cerâmica sem forma','Galhos de árvores quebrados','Restos de comida mofada','Tecido desfiado','Peles de frutas apodrecidas','Cinzas de fogueira extinta','Galhos de arbustos quebrados','Cones de pinheiro despedaçados','Sementes inúteis','Lã suja e enredada','Roupas desgastadas e rasgadas','Casca de árvore sem utilidade','Teias de aranha antigas e desgastadas','Fragmentos de carvão sem valor','Pequenas quantidades de serragem inútil','Folhas de outono secas sem brilho','Restos de velas queimadas inutilizáveis','Corda frágil','Grama cortada e sem vida','Areia comum e sem valor','Pedras pequenas e sem brilho','Tufos de pelos de roedores inúteis','Cabelos humanos cortados'];
  }

  function objetoUtil(){
    return ['Cantil de couro','Tochas','Isqueiro de pedra','Saco de dormir de lã','Mochila de lona','Barras de pão','Saco de sal','Mapa local desgastado','Comida seca (carne defumada, frutas secas)','Pederneira e aço','Pá de madeira','Luvas de couro','Linha e agulha','Bolsa de moedas de cobre','Óleo de lâmpada','Martelo de ferreiro','Pregos de ferro','Estacas de tenda de madeira','Roupas de viagem simples','Giz de ardósia','Saco de carvão vegetal','Sabão caseiro','Kit de primeiros socorros básico','Corda grossa','Saco de giz de cera','Pergaminho e pena','Canivete de osso','Espelho de mão com moldura de madeira','Panela de ferro','Kit de higiene pessoal (escova de dente de javali, sabonete de ervas)','Vela de cera de abelha','Mecha de vela de linho','Saco de especiarias','Fio de seda e tinta','Lápis de carvão','Folhas de papel pergaminho','Pequeno caldeirão de ferro fundido','Selo de cera','Bússola rudimentar','Bandagens de algodão','Máscara de couro','Mapa estelar desenhado à mão','Frasco de vidro vazio','Sacola de ervas secas','Rolos de tecido simples','Corda de sisal','Pinça de cozinha','Rolha de garrafa de cerâmica','Saquinho com seixos','Flauta de osso','Teias de aranha natural','Aranhas em frascos de vidro','Garrafas de vidro vazias','Tubos de vidro vazios','Garrafas de cerâmica decoradas','Roupas desgastadas','Travesseiros de palha','Lenços de pano','Escovas de cabelo de javali','Chaveiro de madeira','Medalhões de madeira com símbolos antigos','Tambores de madeira e pele','Livro antigo','Colheres de madeira entalhadas','Frascos de tinta','Pequenas estátuas de cerâmica','Fivelas de cinto de bronze'];
  }

  function equipamento(tipo){
    if (tipo == '')
      tipo = random(['arma','armadura','outro']);

    switch(tipo){
      case "arma":
        return ['Punhal','Sabre Élfico','Katar','Khopesh','Manding','Facão Uruk','Cimitarra','Espada de Cavaleiro','Takouba','Picareta','Martelo Anão','Macuahuitl','Espada Ulfberht','Maça Inca','Mangual','Machado Epsilon','Machado Pêndulo','Machado Berserker','Alabarda Inca','Rede','Tridente de Espinhos','Arco Longo Inglês ','Atlatl','Boleadeira','Arco Mongol','Faca','Adaga','Sabre','Rapieira','Clava','Machado','Maça','Lança Curta','Martelo de Guerra','Espada Longa','Cajado','Montante','Machado Pesado','Lança Longa','Gadanha','Alabarda','Funda','Arco Simples','Arco de Guerra','Arco de Caça','Besta de Mão','Besta Pesada'];
        break;
      case "armadura":
        return ['Cota de Folhas Anciãs','Cota de Talas ','Cota de Malha ','Cota de Ferro ','Armadura de Casco','Armadura Completa','Túnica Árabe ','Cocar ','Turbante do Rei','Elmo Mongol ','Elmo-Lamparina','Escudo Redondo','Broquel','Túnica Confortável ','Roupa Comum ','Armadura de Couro','Cota de Malha ','Peitoral ','Elmo ','Escudo'];
        break;
      case "outro":
        return ['Chifre-Caneco','Astrolábio','Aljava','Kit Acampamento','Kit Escalada ','Instrumento Musical'];
        break;
      case "armaduraMagia":
        return ['Cota de Folhas Anciãs','Cota de Talas','Cota de Malha','Cota de Ferro','Armadura de Casco','Armadura Completa','Túnica Árabe','Cocar','Turbante do Rei','Elmo Mongol','Elmo-Lamparina','Escudo Redondo','Broquel','Túnica Confortável','Roupa Comum','Armadura de Couro','Cota de Malha','Peitoral','Elmo','Escudo','Anel','Botas','Luvas','Máscara','Manto','Coroa','Brincos','Colar','Bracelete'];
        break;
    }
  }

  function jornada(path){

    switch(path){
      case 'planicie':
        var lugar = random(['Flores coloridas','Pasto rasteiro','Arbustos distantes','Árvore solitária','Grama alta','Gramado verdejante']);
        var curiosidade = random(['Rastro de animal','Pássaros voando em círculos','Placa de madeira quebrada','Carcaça de animal','Acampamento abandonado','Buraco grande e estranho']);
        var obstaculo = random(['Chuva constante','Rio largo no caminho','Caminho com espinhos','Nuvem de insetos','[Lobos] estão devorando uma caça','[Assaltantes] estão acampados ali']);
        var complicacao = random(['Chuva aperta e dificulta a visão','Raio (dano 1) cai sobre um personagem!','O chão se abre nos pés do grupo','[Assaltantes] surgem!','[Insetos Gigantes] aparecem do chão!','[Dragonetes] se aproximam!']);
        var tempero1 = exclusiveRandom(['Vazio / Flor','Barulho / Chuva','Terra / Trilha','Eco / Grama','Vento / Frio','Calor / Luz'],2);
        var tempero2 = exclusiveRandom(['Verdejante','Distante','Comprido','Cansado','ao fundo','Tranquilo'],2);
      break;
      case 'floresta':
        var lugar = random(['Árvores altas','Folhas por todo o chão','Floresta densa e escura','Galhos caídos','Árvores variadas','Várias árvores iguais']);
        var curiosidade = random(['Rastro de animal','Barulho do alto das árvores','Trilha no chão','Carcaça de animal','Acampamento abandonado','Árvore oca com algo dentro']);
        var obstaculo = random(['Barranco alto à frente','Rio largo no caminho','Árvore imensa caída à frente','Caminho com espinhos','[Ursos] no caminho','[Trolls] no caminho']);
        var complicacao = random(['Uma grande árvore cai sobre o grupo','Perfume de flores soníferas','[Ursos] atacam o grupo!','[Lobos] atacam o grupo!','[Goblins] atacam o grupo!','[Trolls] atacam o grupo!']);
        var tempero1 = exclusiveRandom(['Folhas / Flecha','Escuro / Tronco','Limo / Pássaros','Trilha / Broto','Confusão / Casca','Raiz / Marcas'],2);
        var tempero2 = exclusiveRandom(['Úmido','Seco','Vívido','Alto','Perdido','Antigo'],2);
        break;
      case 'montanha':
        var lugar = random(['Pedras gigantes dos lados','Caminho entre as pedras','Pedras rachadas','Muitas pedras pequenas','Plantas crescentes entre as pedras','Pedra grande com forma estranha']);
        var curiosidade = random(['Ninhos de pássaros','Pássaros voando em círculos','Inscrição nas pedras','Carcaça de animal','Acampamento abandonado','Caverna ao lado']);
        var obstaculo = random(['Subida íngreme, é preciso escalar','Chão instável','Desfiladeiro à frente','Parede lateral instável','[Abutres] no caminho','[Kaprotauros] distraídos']);
        var complicacao = random(['Um personagem escorrega e pode cair!','Desmoronamento!','Uma pedra cai e bloqueia o caminho','[Abutres] atacam o grupo!','[Kaprotauros] atacam o grupo!','[Dragonetes] se aproximam!']);
        var tempero1 = exclusiveRandom(['Aves / Nuvens','Calor / Dente','Fumaça / Caverna','Pedras / Penas','Machado / Ferro','Árvore / Escudo'],2);
        var tempero2 = exclusiveRandom(['Duro','Cinza','Quente','Distante','Afiado','Vertiginoso'],2);
        break;
      case 'pantano':
        var lugar = random(['Árvores secas','Mato alto sobre as águas','Cheiro fétido das águas','O chão é só lama','Árvores estranhas','Peixes nadando na lama']);
        var curiosidade = random(['Rastro de animal','Pássaros voando em círculos','Casa de madeira em ruínas','Carcaça de animal','Acampamento abandonado','Planta colorida e misteriosa']);
        var obstaculo = random(['Lama impede o grupo de se mover','Grande lago à frente','Neblina densa impede de enxergar','Nuvem de mosquitos','[Jacaré] no caminho','[Boitatá] no caminho']);
        var complicacao = random(['Sanguessugas em seus pés','Chuva pesada começa a cair','Lama nos seus pés começa a puxar para baixo','[Abutres] atacam o grupo!','[Insetos Gigantes] aparecem!','[Trolls] atacam o grupo!']);
        var tempero1 = exclusiveRandom(['Lama / Espada', 'Chuva / Musgo', 'Gases / Placa', 'Frio / Sanguessuga', 'Neblina / Galhos', 'Árvore / Casebre'],2);
        var tempero2 = exclusiveRandom(['Abandonado','Sujo','Flamejante','Apodrecido','Fedorento','Perdido'],2);
        break;
      case 'deserto':
        var lugar = random(['Duna alta','Dunas baixas','Chão mais firme','Areia muito macia','Alguns cactos e plantas rasteiras','Região mais plana']);
        var curiosidade = random(['Parece ter água ali (ou não?)','Uma planta colorida','Alguns animais pequenos','Aves sobrevoam o local','Esqueleto de um aventureiro','Ruínas antigas']);
        var obstaculo = random(['Areia cobre a visão','Pés ficam presos na areia','Andando em círculos','Vento muito forte','Miragens confundem o grupo','Parede de dunas muito altas à frente']);
        var complicacao = random(['Uma ilusão faz alguém ficar assustado','Areia movediça','Areia movediça','[Abutres] atacam o grupo!','[Verme Gigante] surge na frente do grupo!','[Dragonetes] se aproximam!']);
        var tempero1 = exclusiveRandom(['Areia / Templo','Sol / Ruínas','Vento / Deuses','Lua / Animal','Miragem / Ossos','Oásis / Povo'],2);
        var tempero2 = exclusiveRandom(['Antigo','Escaldante','Misterioso','Gigante','Inacreditável','Resistente'],2);
        break;
      case 'artico':
        var lugar = random(['Tundra congelada sem fim','Geleiras imponentes','Planalto nevado e deserto','Aldeia esquecida pelo tempo','Lago congelado','Cavernas de gelo misteriosas']);
        var curiosidade = random(['Pegadas misteriosas na neve','Vestígios de uma antiga civilização','Estranhas luzes no horizonte','Ruínas de um navio encalhado','Esqueletos de criaturas gigantes','Pedaço de uma relíquia congelada']);
        var obstaculo = random(['Tempestade de neve furiosa','Abismo traiçoeiro à frente','Ponte de gelo instável','Vento cortante e gélido','Gruta de gelo bloqueada','[Yetis] vigiando o caminho']);
        var complicacao = random(['Frio intenso debilitante','Aparecimento de uma avalanche','[Espectros de Gelo] assombram!','Gelo rachando sob seus pés','[Yetis] curiosos cercam o grupo','Visão embaçada devido à nevasca']);
        var tempero1 = exclusiveRandom(['Ventos / Cortantes','Pegadas / Congelado','Luz / Lua prateada','Distante / Uivo','Estalos / Rachadura','Silêncio / Sepulto'],2);
        var tempero2 = exclusiveRandom(['Implacável','Desolado','Gélido','Enigmático','Eterno','Glacial'],2);
        break;
      case 'oceano':
        var lugar = random(['Mar profundo', 'Oceano calmo', 'Recifes de coral','Navio pirata naufragado', 'Ilha misteriosa', 'Caverna subaquática']);
        var curiosidade = random(['Vestígios de um naufrágio', 'Criaturas marinhas exóticas', 'Antiga cidade submersa','Mapa do tesouro enigmático', 'Sereias cantando', 'Naufrágio lendário']);
        var obstaculo = random(['Tempestade furiosa', 'Tubarões famintos', 'Redemoinho perigoso','Navio pirata hostil', 'Rede de pescadores', 'Recife traiçoeiro']);
        var complicacao = random(['Maré subindo rapidamente', 'Submersão de equipamento', 'Maldição do mar','Ataque de [Kraken]', 'Confronto com [piratas]', 'Perdidos na neblina']);
        var tempero1 = exclusiveRandom(['Ondas / Chuva', 'Baú / Coral', 'Jangada / Cavernas','Baleias / Tubarões', 'Cardumes / Conchas', 'Mergulhadores / Ilhas'],2);
        var tempero2 = exclusiveRandom(['Profundo', 'Infinito', 'Colorido','Misterioso', 'Ameaçador', 'Calmo'],2);
        break;
      case 'praia':
        var lugar = random(['Praia de areia branca', 'Lago sereno', 'Falésias altas','Pier abandonado', 'Delta de rio', 'Enseada escondida']);
        var curiosidade = random(['Conchas coloridas na areia', 'Ninho de pássaros', 'Barco naufragado','Antiga cabana de pescador', 'Fogueira acesa', 'Pescadores locais']);
        var obstaculo = random(['Maré alta repentina', 'Correntes fortes', 'Rochas enormes','Rede de pescadores', 'Pescadores hostis', 'Furacão se aproximando']);
        var complicacao = random(['Naufrágio próximo', 'Ataque de [dragonetes do mar]', 'Perdidos na névoa','Animal marinho misterioso', 'Confronto com [piratas]', 'Corrente perigosa']);
        var tempero1 = exclusiveRandom(['Sol / Brisa', 'Gaivotas / Ondas', 'Conchas / Barcos','Coqueiros / Quiosque', 'Crianças / Castelos de areia', 'Pescadores  / Rede de pesca'],2);
        var tempero2 = exclusiveRandom(['Tranquila', 'Idílica', 'Serena','Pitoresca', 'Isolada', 'Animada'],2);
        break;
      case 'caverna':
        var lugar = random(['Caverna profunda', 'Abismo subterrâneo', 'Túneis sinuosos','Câmara de cristais', 'Caverna de lava', 'Covas habitadas']);
        var curiosidade = random(['Estalactites reluzentes', 'Fungos bioluminescentes', 'Pinturas rupestres enigmáticas','Restos de antigas civilizações', 'Tesouros enterrados', 'Sussurros nas sombras']);
        var obstaculo = random(['Abismos sem fundo', 'Túneis bloqueados', 'Gás venenoso', 'Inundações súbitas','Sons de mineração', 'Criaturas subterrâneas hostis']);
        var complicacao = random(['Escurecimento repentino', 'Alucinações causadas por esporos', 'Colapso de túnel','[Serpentes] subterrâneas', 'Colônias de [morcegos]', '[Espíritos] inquietos']);
        var tempero1 = exclusiveRandom([ 'Passos / Frio', 'Gotejamento / Silêncio','Murmúrios / Cristais', 'Lago / Umidade',
        'Correntes / Minerais ', 'Estalos / Fendas'],2);
        var tempero2 = exclusiveRandom(['Sombria', 'Misteriosa', 'Hostil', 'Opulenta', 'Desolada', 'Perigosa'],2);
        break;
      case 'ruina':
        var lugar = random(['Cidade abandonada', 'Templo em ruínas', 'Fortaleza desmoronada','Palácio em decadência', 'Cemitério antigo', 'Casebres destruídos']);
        var curiosidade = random(['Esculturas antigas', 'Manuscritos enigmáticos', 'Sons sussurrantes','Ecos de vozes passadas', 'Tesouros ocultos', 'Máscaras quebradas']);
        var obstaculo = random(['Escombros bloqueando passagens', 'Armadilhas antigas', '[Guardiões] espectrais', 'Escadarias em colapso', 'Desmoronamento iminente', 'Caminhos instáveis']);
        var complicacao = random(['Ataque de [mortos-vivos]', 'Maldições antigas', 'Confronto com [saqueadores]', 
        '[Aparições vingativas]', 'Quebra de equipamento', 'Labirinto sem saída']);
        var tempero1 = exclusiveRandom(['Silêncio / Poeira', 'Frescor / Mistério', 'Eco / Escuridão', 'Estátuas / História', 'Luz / Vida', 'Sombras / Ventos'],2);
        var tempero2 = exclusiveRandom(['Abandonado', 'Misterioso', 'Decadente', 'Esquecido', 'Assombrado', 'Antigo'],2);
        break;
        /*case '':
        var lugar = random([]);
        var curiosidade = random([]);
        var obstaculo = random([]);
        var complicacao = random([]);
        var tempero1 = exclusiveRandom([],2);
        var tempero2 = exclusiveRandom([],2);
        break;*/
    }

    return '<b>Lugar</b>: '+lugar+'<br><b>Curiosidade</b>: '+curiosidade+'<br><b>Obstáculo</b>: '+obstaculo+'<br><b>Complicação</b>: '+complicacao+'<br><b>Tempero 1</b>: '+tempero1[0]+' - '+tempero2[0]+'<br><b>Tempero 2</b>: '+tempero1[1]+' - '+tempero2[1];

  }

  $('#btnGerarBusca').click(function(){

    var item = '';
    var busca = random(buscar());

    switch(busca){
      case 'Não encontrou nada. Perca 1 Conquista.':
        item = '';
        break;
      case 'Encontrou objeto sem valor:':
        item = random(objetoSemValor());
        break;
      case 'Encontrou um objeto comum, mas útil:':
        item = random(objetoUtil());
        break;
      case 'Encontrou um equipamento de qualquer raridade:':
        item = random(equipamento(''));
        break;
      case 'Encontrou um Tesouro:':
        item = random(tesouro());

        switch(item){
          case 'Poção aleatória.':
            item = '<i>Poção aleatória</i><br>' + random(pocao());
            break;
          case 'Objeto valioso ou muitas moedas (1 Riqueza).':
            item = 'Objeto valioso ou muitas moedas (1 Riqueza).';
            break;
          case 'Ornamento mágico aleatório.':
            item = '<i>Ornamento mágico aleatório</i><br>'+ornamento();
            break;
          case 'Vestimenta mágica aleatória.':
            item = '<i>Vestimenta mágica aleatória</i><br>'+random(equipamento('armaduraMagia')) + magiaArmadura();
            break;
          case 'Arma mágica aleatória.':
            item = '<i>Arma mágica aleatória</i><br>'+random(equipamento('arma')) + magiaArma();
            break;
        }

        break;
    }

    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<p><b>'+busca+'</b>'+
      '<br>'+item+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarJornada').click(function(){

    var path = jornada($('#selectPath').val());
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      path+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  setTimeout(function() {
      $("#btnGerarBusca").trigger('click');
  },10);

});

