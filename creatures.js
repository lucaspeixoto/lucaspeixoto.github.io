function creatures(type) {
  
    switch(type){

        case "nature":
            return ['Demônio da Agonia','Demônio da Catástrofe','Demônio da Conspiração','Demônio da Profanação','Demônio da Carnificina','Demônio da Fortuna','Joia Monstruosa','Baú Monstruoso','Espada Monstruosa','Orbe Monstruosa','Cristal Monstruoso','Ovo Monstruoso','Leão','Tigre','Puma','Chimpanzé','Babuíno','Rato','Toupeira','Castor','Cão','Lobo','Raposa','Urso','Panda','Urso Polar','Elefante','Rinoceronte','Ameba','Verme','Vísceras','Órgãos','Tentáculos','Limo','Gosma','Sólido geométrico','Armadura viva','Homúnculo','Boneco','Estátua viva','Autômato mecânico','Morcego','Águia','Falcão','Coruja','Abutre','Corvo','Urubu','Ave Canora','Colibri','Garça','Cegonha','Enxame','Emaranhado','Espantalho','Pterodátilo','Golem de Barro','Golem de Carne','Golem de Ferro','Golem de Pedra','Golem de Cinzas','Golem de Cristal','Troll','Ogro','Ciclope','Yeti','Basilisco','Gárgula','Sapo','Rã','Cobra','Serpente','Lagarto','Iguana','Tartaruga','Cágado','Crocodilo','Jacaré','Salamandra','Tritão','Bode Infernal','Porco Infernal','Cavalo Infernal','Cão Infernal','Touro Infernal','Gorila Infernal','Gigante do Fogo','Gigante do Gelo','Gigante de Pedra','Gigante das Nuvens','Gigante da Colina','Gigante da Tempestade','Polvo','Lula','Água-viva','Caravela','Enguia','Arraia','Tubarão','Piranha','Peixe Abissal','Baleia','Homem Cinza','Serpente marinha','Abelha','Mosca','Libélula','Insetoide','Vermiforme','Hidra','Besouro','Lacraia','Verme','Gelatinoso','Amorfo','Verme Gigante','Aranha','Escorpião','Besta Mutante','Titã','Lesma','Minhoca','Rochoso','Sintético','Dinossauro','Grilo','Louva-Deus','Ser de Energia','Kraken','Caranguejo','Lagosta','Abissal do caos','Vapor do espaço','Fungo hexápode','Colosso sangrento','Praga escamosa','Plasma de tentáculos','Dragão Azul','Dragão Branco','Dragão Negro','Dragão Verde','Dragão Vermelho','Dragão das Sombras','Musgo','Cogumelo','Cipós','Raízes','Flor','Fruto','Arbusto','Árvore','Samurai','Soldado de elite Robô','Gênio','Guerreiro','Assassino alado Robô','Anjo','Guardião','Robô Insetoide','Sereia','Tritão','Cavaleiro','Besta Metálica','Esfinge','Estrategista','Emaranhado de cabos','Súcubo','Íncubo','General','Nuvem de nanorrobôs','Divindade','Cultista','Incinerador','Elemental de Fogo','Monge','Triturador','Elemental de Água','Sacerdote','Metralhadora','Elemental de Terra','Paladino','Esmagador','Elemental de Ar','Ancião','Desintegrador','Elemental de Sombra','Profeta','Repulsor','Elemental de Energia','Feiticeiro','Quadrúpede blindado','Vampiro','Mago','Caminhão de combate','Zumbi','Carniçal','Bruxo','Aeronave','Espaçonave','Esqueleto','Caveira','Ilusionista','Mechagolem','Lich','Banshee','Oráculo','Drone','Espectro','Fantasma','Psiônico','Tanque de Guerra','Múmia','Lobisomem','Computador','Olho','Homem-urso','Explosivo','Pirâmide','Cubo','Homem-rato','Laser','Névoa','Homem-tigre','Projetor','Cérebro','Homem-javali','Transmissor','Anéis de energia','Homem-lagarto','Campo de força','Brilhos e cores','Assassino','Holograma','Grifo','Espião','Vírus','Harpia','Gladiador','Realidade virtual','Minotauro','Centauro','Pirata','Nuvem de dados','Unicórnio','Cientista','Inteligência artificial','Cocatriz','Caçador','Ondas eletromagnéticas','Mantícora','Elfo','Androide','Fada','Anão','Ciborgue','Dríade','Gnomo','Híbrido','Fauno','Orc','Biossimulacro','Sátiro','Goblinoide','Neo-humano','Pixie','Halfling','Clone sintético','Brownie'];
            break;

        case "origin":
            return ['da Floresta','da Montanha','do Deserto','do Mar','do Pântano','das Colinas','da Neve','do Lago','da Selva','das Pradarias','do Campo','da Caverna','do Submundo','do Vale','do Abismo','do Além','das Profundezas','da Noite','do Crepúsculo','da Lua',' da Tempestade','da Neblina','do Espaço','da Prisão','do Templo','da Torre','do Cemitério','das Ruínas','da Estrada','da Morte','do Destino','do Vazio','da Fronteira','do Futuro','das Cinzas'];
            break;

        case "function":
            return ['agitador','atormentador','batedor','caçador','calculista','comandante','condutor','conjurador','construtor','controlador','corruptor','criador','defensor','destruidor','devorador','domador','dominador','enganador','escavador','explorador','guia','imitador','invasor','investigador','justiceiro','manipulador','matador','navegador','negociador','observador','opressor','perseguidor','perturbador','protetor','rastreador','vigia'];
            break;

        case "reputation":
            return ['abissal','amaldiçoado','ambicioso','ancestral','andarilho','assombrado','bárbaro','brutal','chantagista','cruel','desertor','destemido','erudito','exilado','fanático','fiel','forasteiro','fugitivo','implacável','impostor','influente','malicioso','mercenário','meticuloso','profeta','psicótico','repulsivo','sábio','sagrado','sedutor','sombrio','sorrateiro','trapaceiro','vidente','vingativo','violento'];
            break;

        case "mutation":
            return ['a vapor','alado','albino','alienígena','aquático','artificial','cibernético','cintilante','corrompido','das sombras','de aço','de cristal','de energia','de fogo','de guerra','de luz','de pedra','demoníaco','dourado','elétrico','encouraçado','escarlate','espectral','gelatinoso','gigante','ilusório','imaterial','licantropo','mágico','mecânico','minúsculo','morto-vivo','púrpura','pútrido','rastejante','translúcido'];
            break;

        case "action":
            return ['destruir','manipular','matar','capturar','caçar','violar','vigiar','vingar','corromper','conquistar','defender','eliminar','expulsar','fortalecer','enfraquecer','perseguir','negociar','enganar'];
            break;

        case "target":
            return ['o mestre','a comunidade','a prole','o objeto','o local','a organização','a relação','o recurso','a tecnologia','a informação','o segredo','a entidade','o orgulho','a honra','o equilíbrio','o poder','a dívida','o desejo'];
            break;

        case "matter":
            return ['fogo','água','luz','trevas','sangue','madeira','eletricidade','música','calor','magnetismo','radiação','gás','ouro','prata','ferro frio','diamante','rocha','cristal','veneno','vidro','alho','sal','ácido','óleo','símbolo místico','cera de abelha','cinzas','sinos','espelho','água benta','arma mágica','arma lendária','arma roubada','arma abençoada','arma enferrujada','arma com nome próprio'];
            break;

        case "condition":
            return ['Precisa ser decapitado','Precisa ser exorcisado','Um sacrifício deve ser feito','Uma oferenda deve ser feita','Tem que ser subornado','Tem que ser bajulado','Precisa fazer um pacto','O seu nome verdadeiro','Um item precisa ser destruído','Olhar nos olhos o enfraquece','É preciso vencer um desafio','É preciso responder enigmas','Ver uma beleza verdadeira','Sentir um coração puro','Presenciar nobreza','Presenciar generosidade','Ver um sorriso','Presenciar castidade','Ponto fraco na cabeça','Ponto fraco no coração','Ponto fraco nos olhos','Ponto fraco na palma da mão','Ponto fraco em um ferimento antigo','Ponto fraco em uma joia incrustada','A luz da lua','O som de corvos','Passar por caminhos tortos','Passar por água corrente','Durante um solstício','Ficar embaixo d`água','Ser tratado com arrogância','Ser tratado com honra','Ser tratado com vício','Ser tratado com insanidade','Ser tratado com curiosidade','Ser tratado com ambição'];
            break;

        case "ability":
            return ['acrobacia','alto intelecto','ambidestria','anfíbio','aparência inofensiva','audição aguçada','conhecimento arcano','conhecimento oculto','corpo flexível','desmaterialização','esquiva aprimorada','faro','força anormal','furtividade aprimorada','hipnose','imunidade a venenos','invisibilidade','longevidade','magnetismo','memória infalível','metamorfose','prontidão','reflexos','regeneração','resistência à fadiga','resistência à magia','resistência ao fogo','resistência ao frio','telecinésia','telepatia','teleporte','velocidade','visão aguçada','visão de raio x','visão noturna','vôo'];
            break;

        case "feature":
            return ['antenas','armadura','asas','blindagem','campo de força','camuflagem','cauda','chifres','cicatrizes','corpo divisível','elmo','escamas','espinhos','exoesqueleto','fedor','ferrão','garras','implantes','lâminas','limo','luz própria','membros telescópicos','olhos flamejantes','pelagem','penas','placas','presas','sem pêlos','tentáculos','tromba','várias armas','várias bocas','vários membros','vários olhos','ventosas','voz poderosa'];
            break;

        case "quality":
            return ['anulador','aprisionante','arcano','aterrorizante','brilhante','cegante','colérico','colossal','congelante','demoníaco','desorientador','devastador','enfraquecedor','enlouquecedor','ensurdecedor','extraplanar','flamejante','flutuante','grotesco','hipnótico','ilusório','incontrolável','invisível','místico','oculto','paralisante','penetrante','pestilento','repugnante','repulsor','sombrio','telepático','tóxico','venenoso','violento','voraz'];
            break;

        case "title":
            return ['amargo','assombroso','brutal','caótico','colérico','corruptor','cruel','decadente','destemido','devastador','estranho','estrategista','faminto','fanático','impiedoso','implacável','impostor','louco','místico','mórbido','noturno','odioso','pesadelo','profano','psicótico','repugnante','sanguinário','sarcástico','sedento','selvagem','solitário','terrível','tirano','trapaceiro','vil','voraz'];
            break;

        case "prefix":
            return ['Zur','Miz','Bror','Oz','Gig','Appol','Xol','Brar','Xar','Tir','Sug','Zorth','Can','Dar','Haz','Vag','Win','Krak','Saz','Trog','Zel','Brog','Mol','Gust','Boz','Kul','Garg','Theg','Jec','Yeq','Shusa','Raac','Suqi','Myk','Dorg','Nith'];
            break;

        case "fix":
            return ['nol','rika','glal','than','glo','thak','ra','nor','rin','men','threk','gan','zeni','thal','goma','tren','zan','gok','zaa','gyua','chas','guk','qax','seg','nua','zu','she','qig','qhu','nos','gys','vun','akku','ad','vin','eld'];
            break;

        case "suffix":
            return ['dar','nenn','lion','rath','mag','on','nas','din','mon','xas','nol','rad','mar','trad','mak','munc','nuk','zan','lis','nis','ugga','ceth','gou','jez','kaus','zesh','suqq','zuz','nou','zox','taya','bha','horn','iosk','zark','konn'];
            break;

    }

};