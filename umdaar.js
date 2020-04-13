function umdaar(type) {
  
    switch(type){

        case "destination":
            return {
                prefix: ['A Cidade','O Templo','O Labirinto','A Catedral','A Fortaleza','A Forja','A Prisão','A Cripta','A Biblioteca','O Castelo','A Fábrica','O Poço','A Torre','A Masmorra','O Coliseu'],
                suffix: ['da Deusa Caída','da Praga','da Sabedoria Amaldiçoada','do Desespero','da Vida Eterna','dos Astronavegantes','da Loucura','das Sombras','da Mutação','do Deus Inominado','dos Gritos','do Tormento','de Ouro','do Júbilo Proibido','da Guerra Eterna']
            }
            break;

        case "landsoflight":
            return {
                prefix: ['Recife','Abadia','Clareira','Bastião','Torre','Pináculo','Vila','Necrópole','Ilha','Vale','Castelo','Catedral','Fortaleza','Planalto','Acrópole'],
                suffix: ['Quantum','Celeste','Fantasmal','Ardente','Silvestre','Cristal','Cintilante','Sagrado','Oculto','Flutuante','Prateado','Dourado','Vivo','Glacial','Lunar']
            }
            break;

        case "midways":
            return ['<strong>A Encruzilhada</strong> - Onde dois caminhos se cruzam. Um lugar de desvios, se perdendo e ladrões de estrada.','<strong>A Fortificação</strong> - Uma barricada feita pelo homem, um bloqueio na estrada ou forte apropriado. Você deve lidar com os defensores ou superá-los fisicamente.','<strong>O Terreno Elevado</strong> - Diante de você há um terreno elevado, conceda a alguém uma vantagem tática. Opções: Dunas, Montes Fúnebres.','<strong>As Ruínas</strong> -  Uma área atulhada, repleta de esconderijos, artefatos esquecidos e perigos adormecidos.','<strong>O Solo Fértil</strong> - Um lugar cheio de vida em uma terra hostil e um lugar irônico para ser ameaçado. Exemplos:  oásis, fonte, bosque de cogumelos, fontes termais.','<strong>O Abrigo</strong> - Um pequeno abrigo se apresenta, resistindo sob o peso dos elementos. Talvez um ocupante resiliente ainda more lá. Exemplos: um acampamento, carroça coberta, barraco, casebre.','<strong>A Passagem</strong> - Antes de você encontrar um caminho ou ponte natural que deve ser percorrido para prosseguir. Exemplos: sobre um desfiladeiro ou rio, através de um recife, uma passagem de montanha.','<strong>O Nevoeiro</strong> - Uma área onde os sentidos são entorpecidos e grupos podem facilmente se separar. Exemplos: um pântano escuro, uma floresta em brumas, uma tempestade de areia, um campo de lava com fumaça.','<strong>O Obstáculo</strong> - Uma característica do terreno que não pode ser simplesmente contornada - exige um esforço ativo para superar. Exemplos: nadando em um lago, escalando um paredão de penhasco, subindo em árvores enormes.'];
            break;

        case "wildland":
            return {
                prefix: ['As Ruínas','As Florestas ','As Cavernas','A Tundra ','As Montanhas','Os Pântanos ','O Oásis','As Selvas','As Areias','Os Penhascos','O Passo','As Planícies','As Ilhas','Os Planaltos','O Mar'],
                suffix: ['da Meia Noite','de Osso','Subterrâneos','do Céu','Submersos','do Fragmento','do Atoleiro','Psíquicas','de Gelo','da Estrela','de Cristal','de Fogo','de Sangue','Venenosos','do Tempo']
            }
            break;

        case "master":
            return {
                prefix: ['Rainha/Rei','Senhor(a)','Instigador(a)','Anunciador(a)','Tomador(a)','Tirano(a)','Arrasador(a)','Esfolador(a)','Triturador(a)','Acumulador(a)','Destruidor(a)','Arruinador(a)','Esmagador(a)','Deformador(a)','Fanático'],
                suffix: ['Mascarado','da Esperança','de Ouro','de Escravos','do Conhecimento','do Pavor','de Mundos','da Mente','da Guerra','de Ossos','da Caveira','de Sangue','da Vida','da Luz','Divino(a)']
            }
            break;

        case "victim_title":
            return ['Princesa/Príncipe','Sacerdotisa/Sacerdote','Magi','Hierofante','Emira/Emir','Rana/Raja','Faraó','Cihuatlahtoani/Tlatoani','Khatan/ Khanzada'];
            break;

        case "victim":
            return ['<strong>O príncipe / princesa</strong> - O jovem nobre vem da Terra da Luz de onde você partiu.','<strong>O Sacerdote / Sacerdotisa</strong> - O refém vem de uma religião forte adorada nas Terras da Luz.','<strong>Um camponês inocente</strong> - A vítima é um camponês simples que outros abandonaram.','<strong>O Filho do seu Pior Inimigo!</strong> - A vítima é filha de um Mestre vil. Um rival seqüestrou o rebento ou a criança espera desertar e precisa de ajuda para escapar das garras do pai?','<strong>Um Arqueonauta Companheiro</strong> -  Um arqueonauta e um irmão de armas foi capturado, e cabe a você salvá-lo. Pode ser um velho amigo de guerra ou um rival.','<strong>O Sacrifício!</strong> - Não é um simples sequestro - o jovem inocente refém é alvo de um ritual de sacrifício macabro.','<strong>O Curandeiro!</strong> - O monarca está doente, e o único que pode curá-lo apodrece na prisão do Mestre. Você deve resgatar o antigo fabricante de remédios.','<strong>Seu Homem Infiltrado</strong> - Você tem um aliado que se infiltrou nas fileiras inimigas. Eles podem até ajudá-lo, desde que você não estrague a cobertura deles.','<strong>Um Grupo Relutante</strong> - Por lavagem cerebral, drogas ou teimosia, o refém NÃO QUER ser salvo. Você precisa convencê-los a sair ou arrastá-lo à força!'];
            break;

        case "adventure":
            return ['resgatar','descobrir','impedir','escapar','defender','matar','conseguir'];
            break;

        case "descobrir":
            return ['<strong>Uma Nova Religião</strong> - Missionários de uma Terra estrangeira pediram para você visitar o templo e o Sumo Sacerdote. Role para o Covil do Mal, que também funciona como o templo sagrado - e veja o que é a religião, e se o Sumo Sacerdote é um aliado para conquistar ou um novo Mestre para subjugar.','<strong>Uma Nova Raça</strong> - Uma tribo desconhecida mora nas Terras Selvagens próximas, atacando qualquer um que se aventurar por ela. Em vez de interpretar uma raça inteira de uma só vez, adicione um Animal, Adaptação, Poder ou Arma adicional a cada nova cena. Role um Covil do Mal para sua base.','<strong>Um Tesouro Escondido</strong> - Nas Terras Selvagens, você encontra pistas de um Covil do Mal, que possui um Artefato antigo. Quando você chegar lá, role para ver o que é o tesouro.','<strong>Um Mundo Oculto</strong> - Debaixo de uma Terra de Luz, uma fenda se abriu, revelando um mundo oculto sob seus pés. Procure a Terra Selvagem subterrânea abaixo e o Covil do Mal contida. Ou considere um portal aberto para um universo totalmente diferente.','<strong>Uma Tribo Perdida</strong> - Uma tribo local nas Terras Selvagens poderia afetar o equilíbrio de poder na região. Trate-a como o resultado “Perdido nas Brumas” acima, mas adicione um Mestre rival que também está tentando recrutar os locais através de astúcia e força.','<strong>Uma Base Escondida</strong> - Um Mestre estabeleceu um novo acampamento base, escondido em algum lugar da Terra Selvagem. Role para vários Covis do Mal - apenas uma contém o Mestre, mas todas elas têm suas parcela de perigo!','<strong>Um Objetivo Oculto</strong> - Na Terra Selvagem existe uma estrutura de Covil do Mal, exceto que toda a estrutura é uma máquina de Demiúrgica abandonada. Qual é a função? O Mestre rival reivindicará a estrutura primeiro?','<strong>Uma Ameaça Oculta</strong> - Um novo mestre está ameaçando o reino e está enviando agentes para assassinar o monarca. Pare os assassinos, siga-os até o Covil do Mal e descubra a identidade de seu mestre. - Ótimo para uma história em duas partes.','<strong>Uma Aberração</strong> - Um fator desconhecido está forçando distorções e mutações nos habitantes da Terra Selvagem. Isso é uma bênção ou uma maldição, e como os Mestres rivais a aproveitarão? - Role  um Poder ou Adaptação para cada grupo que encontrar e um Covil do Mal.'];
            break;

        case "impedir":
            return ['<strong>Uma Aliança do Mal!</strong> - Vários mestres, que normalmente são rivais ferozes, se reúnem para planejar uma aliança. Sabote-os furtivamente antes que eles possam se aliar contra vocês!','<strong>Uma Máquina do Dia do Juízo Final</strong> - Um vilão Encontrou um dispositivo diabólico desde a idade do Demiurgo e está quase terminando de repará-la. - Como alternativa, poderia ser uma invenção original. ','<strong>Ritual de um Culto do Mal</strong> - um culto, possivelmente escondido no reino de um aliado, além da perigosa Terra Selvagem. Chegue ao reino, desça do templo e pare de lançar um feitiço perigoso.','<strong>Uma Trama Traiçoeira</strong> - Você aprende sobre uma trama nefasta - e o principal suspeito é um membro muito confiável da família real. Esta não é uma questão a ser resolvida na força - você precisa encontrar evidências sólidas incriminando os nobres ou pegá-lo em flagrante. Para esta aventura, a cena final climática será na Terra da Luz.','<strong>Uma Praga de Guerra</strong> - Uma ameaça invisível está intencionalmente se espalhando a praga por um povoado local. Viaje pela perigosa Terra Selvagem, alcance a Terra da Luz vizinha, encontre a ameaça e termine-a antes que ela possa se espalhar.','<strong>Uma Assembléia de Poder</strong> - O mestre está tentando reconstruir uma perigosa arma do Demiurgo, que foi dividida em várias partes. Eles já têm uma peça e vão fugir de vocês até o Covil do Mal com a segunda. Esta é uma ótima história de várias partes, com espaço para mais 1-2 partes.','<strong>Um Traidor Entre Vocês!</strong> - Um traidor roubou um código vital de seus aliados. Encontre o culpado e siga-o onde quer que vá - o código deve ser interceptado! Mas ele é o único traidor?','<strong>Uma Invasão</strong> - Enquanto uma equipe de infiltradores veteranos está invadindo a fortaleza do Mestre para interromper seus planos de invasão, sua equipe deve agir como isca. Podem vocês atrair as forças dele, distraí-las por tempo suficiente e sobreviver?','<strong>O Lançamento</strong> - O Mestre está preparando uma antiga arma do Demiurgo para o lançamento - se a Lança Estelar decolar isso significará a destruição da capital!'];
            break;

        case "escapar":
            return ['<strong>A Prisão Inevitável!</strong> - Você está preso no Covil do Mal, a prisão mais temida do planeta. Poderá você escapar de onde incontáveis ​​outros falharam?','<strong>Do Paraíso!</strong> - Você começa dentro do Covil do Mal, que possui um belo reino secreto que o recebe de braços abertos. No entanto, eles não querem que o segredo seja divulgado. Eles alegam que você não é um prisioneiro, apenas um hóspede - que nunca pode sair!','<strong>Com os Outros</strong> - você não está sozinho na prisão - meia dúzia de outras pessoas estão presas com você. Você os salva ou os deixa apodrecer? Todas são vítimas inocentes ou há um traidor  escondido entre elas?','<strong>A Culpa!</strong> - Você deve escapar do Covil do Mal e através da Terra Selvagem, o tempo todo jogando a culpa um no outro de serem capturados - em primeiro lugar, eles aparecem como Aspectos.','<strong>A Caçada</strong> - Você não se libertou - o mestre o libertou para a Terra Selvagem, para que ele e seus subordinados possam caçar você! Atravesse o posto avançado, o Covil do Mal e entre em território amigo, e estará seguro!','<strong>Dos Ermos</strong> - A vida selvagem local está com fome e procura seu sangue. Começando o Covil do Mal, você deve passar pelas feras selvagens que ficam entre você e abrigo!','<strong>A Arena!</strong> - Seus personagens são forçados a lutar em uma arena selvagem contra bestas, gladiadores e outros escravos. No começo, você pode lutar em equipe - mas se for bom demais, isso pode mudar. - Você pode pular o Wildland se essa aventura demorar muito.','<strong>O Veículo</strong> - Os heróis estão a bordo de uma embarcação - um galeão, um aeronau, um veleiro etc. - que acaba de ser sequestrado. Você tem que planejar sua fuga com cuidado, pois você está cercado pela morte por todos os lados!','<strong>Com a Pilhagem!</strong> - Você é mantido nas entranhas do Covil do Mal, cercado por riquezas incontáveis. Você vai escapar vivo, ou suas tentações vão atrasá-lo?'];
            break;

        case "defender":
            return ['<strong>O Nobre Distante</strong> - Você soube de uma tentativa de assassinato prestes a matar um nobre aliado que está em um ritual em um templo sagrado. Para chegar a tempo, você deve atravessar a perigosa Terra Selvagem e rápido!','<strong>A Cidadela</strong> - Um Mestre sitiou uma cidade ou povoado amigável. Para ajudar, você deve se infiltrar no assentamento através da Terra Selvagem e depois prepará-lo para o ataque. Desta vez, você não está evitando as armadilhas da morte, você as está construindo!','<strong>A Passaggem</strong> - Uma força de invasão de duas frentes está se dirigindo para a cidadela, e você precisa ganhar tempo para os defensores! Você deve fazer seus planos e depois dividir o grupo - um defendendo um passe estreito na Terra Selvagem, o outro defendendo o Covil do Mal contra um ataque simultâneo. Se você puder atrasá-los o suficiente, poderá se reunir e recuar em segurança.','<strong>O acampamento</strong> - Suas viagens o levaram ao Covil do Mal abandonado, sem opção de acampar lá durante a noite. Você deve rapidamente reunir recursos e fortalecer o local, antes que os animais da noite comecem a caçar. Sobreviva até o amanhecer, se puder!'];
            break;

        case "escoltar":
            return ['<strong>Seu Guia</strong> - Você tem um guia para a Terra Selvagem que não é muito útil em uma Luta, mas o conhecimento deles é essencial se você quiser alcançar o Covil do Mal.','<strong>O Embaixador</strong> - Um Mestre pediu que um enviado de um nobre, ou o próprio nobre, o encontre para discutir um tratado. Mesmo que você possa levá-los ao Covil do Mal com segurança, a reunião é genuína ou é uma armadilha?','<strong>O Peregrino</strong> - Uma sacerdotisa zelosa ou padre partiu para o Lair do Mal para um ritual religioso, e pediu para você levá-los até lá com segurança. A jornada não será fácil, mas, se você hesitar, eles continuarão teimosamente, até a própria morte.','<strong>Uma Vítima Ingrata</strong> - Você deve escoltar com segurança um indivíduo ou grupo beligerante. Eles até suspeitam que você pode ser a causa do problema em primeiro lugar! Eles desconfiam de todas as suas tentativas de ajudar.','<strong>O Delator</strong> - Você foi encarregado de manter um desertor em segurança - mas o Mestre para o qual trabalhavam colocou uma recompensa enorme em suas cabeças! Guie o delator pela Terra Selvagem e por um Covil do Mal habitado para a segurança enquanto bandidos rivais tentam fechar a boca do delator para sempre!'];
            break;

        case "matar":
            return ['<strong>Um Novo Senhor da Guerra</strong> - Crie um novo mestre, que se destaque em usar a força física para conseguir o que quer - Poderoso, Ágil - Você pode torná-lo membro de uma raça existente ou criar uma nova. ','<strong>Um Monstro</strong>  - Uma fera fantástica está arrasando aldeias e matando qualquer um que atrapalhe. Role duas vezes na Tabela de Monstros e escolha o que soa mais assustador!','<strong>Seu Antigo Pior Inimigo</strong>  - O vilão é um Mestre estabelecido, ou o nêmese de um dos membros do grupo. - É claro que velhos inimigos são famosos por enganar a morte.','<strong>Um Mestre Bruxo</strong>  - Um velho hermético bruxo ou bruxa está roubando camponeses pobres há séculos - mas não mais! O local do Covil do Mal tem sido a base do Bruxo há séculos e está cheio de armadilhas inteligentes! Mestre é hábil em Esperto e/ou Cuidadoso.','<strong>Um Demônio!</strong>  - Uma figura secreta convocou e amarrou um monstro de outro plano e está usando-o para aterrorizar a terra! Desmascare o invocador, ou enfrente a tarefa muito mais difícil de matar o próprio demônio!','<strong>Um Mal Antigo</strong>  - Há muito tempo, o Demiurgo capturou um mal antigo - agora é grátis! Pior ainda, não pode morrer, apenas ficar preso. Gere uma Terra Selvagem - esse é o lugar do mal. Você deve atraí-lo de volta ao Covil do Mal, ou a um site igualmente poderoso, se quiser detê-lo.','<strong>Uma Dupla Ameaça</strong>  - Crie um novo Mestre ou Besta - veja o Monstro acima, mas o bruto não é tão irracional afinal de contas - ele é habilidoso no intelecto e na força. O monstro pode falar eloquentemente, o senhor da guerra pode citar filosofia.','<strong>Um Inimigo Incerto</strong>  - Quem matar o Mestre ganhará poder sobre seu domínio - o que significa que você tem muitos rivais tentando matá-lo(a) primeiro!','<strong>O Chefão do Crime!</strong>  Seu alvo é um furtivo Senhor Bandido - Sorrateiro ou Ágil altos - em vez de ter Terra Selvagem e Covil do Mal baseados em locais remotos, construa-os em locais urbanos, como Feiras, Favelas e Palácios.'];
            break;

        case "conseguir":
            return ['<strong>O Pergaminho Perdido</strong> - Você foi solicitado a pegar um manuscrito importante - apenas para encontrar o guardião do pergaminho morto e o pergaminho ausente. O que era, uma arma, um mapa do tesouro,  um feitiço antigo? Descubra rápido antes que o assassino fuja.','<strong>Os Planos Secretos</strong> - isso pode ser de duas maneiras diferentes: alguém roubou os planos de defesa para sua cidade local, ou você está tentando roubar os planos de defesa do seu arqui-inimigo. De qualquer maneira, as cidades cairão devido a algumas linhas em um pergaminho. Não confies em ninguém.','<strong>Suas Memórias</strong> - você está tentando recuperar suas memórias! Você acordou sem lembrar quem você é. Descubra a causa e recupere-a. Nota: esse pode ser um objeto literal, como um globo de neve mantendo suas memórias.','<strong>O Objetivo</strong> - Rolar para um Artefato - mas você e o Mestre não são os únicos que o procuram,  outras forças também o caçam e o atrapalharão a cada passo.','<strong>O Artefato Perdido</strong> - As pessoas escobriram um artefato poderoso do Demiurgo que é capaz de mudar o equilíbrio de poder na região. Role para  obter um a um artefato aleatório.','<strong>O Ser Disperso</strong> - Um poderoso deus, demônio ou espírito de energia foi dividido em vários seres menores, que se espalharam por aí. Colete todos eles para que eles possam se reunir - ou antes que possam se recompor em algo pior!','<strong>A Chantagem</strong> - O mestre inimigo está convencendo você a - isto é, chantagem, ameaçando um ente querido - para encontrar um Artefato na Terra  Selvagem e trazê-lo para o Covil do Mal.  Dar o artefato ao Mestre tornará as coisas melhores ou piores?','<strong>Vantagem</strong> - O Covil do Mal possui um objeto desconhecido, que o Mestre defende zelosamente. Se você puder roubá-lo do Mestre, poderá obter grande influência - mas o que ele poderia estar escondendo e você se atreve a usá-lo?','<strong>Uma Saída</strong> - Comece a aventura no Covil do Mal, perto do Artefato desejado. Se você conseguir, ainda terá que escapar pela perigosa Terra Selvagem, com o Mestre em seu encalço!'];
            break;
    }


};








