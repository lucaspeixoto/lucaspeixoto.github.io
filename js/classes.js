/*
        case "":
            return {
                
                aspects: [],
                stunts: [],
                tradition: [],
                '': {
                    skills: [],
                    approach: [],
                    stunts: []
                },
                '': {
                    skills: [],
                    approach: [],
                    stunts: []
                },
                '': {
                    skills: [],
                    approach: [],
                    stunts: []
                }
            }
            break;
*/

function classes(type='') {

    if (type == '') 
        type = random(['thief','druid','monk','mage','paladin','ranger','barbarian','bard','warlock','cleric','sorcerer','fighter']);
  
    switch(type) {

        case "fighter":
            return {
                
                aspects: ['Guerreiro Campeão', 'Guerreiro Cavaleiro Arcano', 'Guerreiro Mestre de Batalha'],
                stunts: ['<strong>Retomar o fôlego:</strong> você possui estamina extra durante um conflito. Uma vez por cena, no seu turno, você pode limpar até 3 caixas de estresse físico.','<strong>Surto de ação:</strong> o guerreiro ganha uma nova barra de estresse chamada Determinação em Combate, ela possui 3 caixas de valor 1 e pode ser utilizada somente para Esforços Extras em testes que envolvam Atletismo, Lutar, Vigor ou Vontade.','<strong>Ataques múltiplos:</strong> o guerreiro é capaz de realizar um ataque contra todos os inimigos de uma mesma zona, se usar Atirar, ou todos os inimigos adjacentes, se usar Lutar. Se optar por fazê-lo, deve realizar uma rolagem somente, com -2. As defesas são feitas individualmente por cada alvo.','<strong>Indomável:</strong> o guerreiro recebe +2 em rolagens para evitar receber qualquer condição.','<strong>Estilos de luta:</strong> o guerreiro recebe efeitos diversos de acordo com a arma empunhada. Arco: +2 em Ataques com Atirar. Armas de duas mãos: em um sucesso com estilo você causa 1 de dano a mais. Duas armas: em um sucesso com estilo você pode reduzir o dano em 1 para realizar um outro ataque contra o mesmo alvo.','<strong>Foco em defesa:</strong> o guerreiro recebe efeitos diversos de acordo com o foco, somente um foco pode ser utilizado ao longo de uma cena. Escudo: ao obter sucesso com estilo em um jogada de Defesa, você concede +2 de defesa para um aliado adjacente, até o seu próximo turno. Armadura: você tem Armadura:1. Duelismo: ao empunhar uma arma em uma mão e nada na outra, você recebe +2 para se Defender com Lutar.'],
                tradition: [''],
                'Guerreiro Campeão': {
                    skills: ['Atletismo','Lutar','Vigor','Vontade','Percepção'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Crítico aprimorado:</strong> uma rolagem de Atacar com Lutar ou Atirar se torna sucesso com estilo com somente duas tensões de diferença, ao invés de três.','<strong>Atletismo extraordinário:</strong> você recebe +1 em qualquer rolagem de Atletismo, Vigor ou Vontade.','<strong>Sobrevivente:</strong> o guerreiro campeão limpa uma caixa de estresse, físico ou mental, a cada turno.',]
                },
                'Guerreiro Cavaleiro Arcano': {
                    skills: ['Lutar','Ocultismo','Vigor','Provocar','Vontade'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Vínculo com arma:</strong> você cria um vínculo mágico com a sua arma. Você não pode ser desarmado e, a qualquer momento em que a arma esteja distante de você, um comando mágico mental teletransporta a arma para a sua mão.','<strong>Golpe místico:</strong> uma vez por sessão, a arma que você empunhar é considerada Arma:2 e para todos os efeitos pode ser considerada uma arma mágica. O efeito dura uma cena.','<strong>Investida arcana:</strong> no seu turno, você é capaz de se teletransportar para qualquer local da sua zona ou de uma zona adjacente, isso não conta como a sua ação.']
                },
                'Guerreiro Mestre de Batalha': {
                    skills: ['Lutar','Provocar','Vigor','Vontade','Percepção'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conheça seu inimigo:</strong> ao custo de 1 PD você pode descobrir um aspecto de um inimigo livremente, considere a rolagem como um sucesso com estilo.','<strong>Inspirar aliados:</strong> uma vez por sessão você pode dar um grito de guerra para inspirar os seus aliados. Durante uma cena, eles recebem +1 em testes de Defesa contra Lutar e Atirar.','<strong>Golpe do comandante:</strong> ao obter sucesso com estilo em um Ataque com Lutar, você pode reduzir o dano em 1 para conceder um ataque extra a qualquer aliado, instantâneamente. O ataque deve ser feito contra o mesmo inimigo.']
                }
            }
            break;

        case "sorcerer":
            return {
                
                aspects: ['Feiticeiro de Linhagem Dracônica', 'Feiticeiro da Magia Selvagem', 'Feiticeiro dos Planos'],
                stunts: ['<strong>Magia aumentada:</strong> quando o feiticeiro conjura uma magia que exige rolagem de Defesa do seu alvo, este receberá -2 em sua rolagem. O efeito se aplica somente uma vez por criatura, por cena.','<strong>Magia cuidadosa:</strong> quando o feiticeiro conjura uma magia que atinge toda uma zona, ele pode gastar 1 PD para que alvos escolhidos por ele não sejam atingidos, como aliados, por exemplo.','<strong>Magia distante:</strong> quando o feiticeiro conjura uma magia cujo alvo precisa ser tocado, ele pode escolher como alvo qualquer criatura de sua zona ou adjacentes.','<strong>Magia duplicada:</strong> quando o feiticeiro conjura uma magia que tenha somente uma única criatura como alvo, ele pode gastar 1 PD para atingir uma criatura extra.','<strong>Magia potencializada:</strong> quando o feiticeiro conjura uma magia, ele pode gastar 1 PD e escolher não rolar os dados, ao invés disso ele considera a rolagem como Boa (+3).','<strong>Magia sutil:</strong> ao conjurar uma magia, você pode gastar 1 PD e realizá-la sem fazer qualquer gesto ou proferir palavras mágicas. É impossível perceber que você conjurou a magia.'],
                tradition: ['Arcana'],
                'Feiticeiro de Linhagem Dracônica': {
                    skills: ['Enganar','Magia','Provocar','Vontade','Vigor'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Ancestral dracônico:</strong> você é capaz de ler, escrever e falar o dracônico. Além disso, recebe +2 em teste de Comunicação e Empatia quando estiver interagindo com dragões.','<strong>Afinidade elemental:</strong> ao conjurar uma magia do mesmo elemento de seu ancestral dracônico, você recebe +2 nas rolagens. Caso seja alvo de uma magia do mesmo tipo, você recebe +2 para se Defender.','<strong>Resiliência dracônica:</strong> você recebe Armadura:2 contra danos do tipo do seu dragão ancestral, conforme o tipo de dragão. Além disso, você recebe uma caixa de estresse físico e mental a mais.']
                },
                'Feiticeiro da Magia Selvagem': {
                    skills: ['Animais','Magia','Vontade','Atletismo','Percepção'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Primal:</strong> o feiticeiro da magia selvagem é capaz de lançar magias da tradição primal e recebe +1 nela.','<strong>Surto de magia:</strong> ao obter sucesso com estilo com Magia, você pode gastar 1 PD para que ocorra um efeito extraordinário. Escolha a seguir: a magia atinge uma zona extra, a magia atinge um alvo extra, a magia irá durar toda a cena ou magia irá causar/prevenir o dobro de tensões.','<strong>Dobrar a sorte:</strong> uma vez por cena, você pode aplicar uma penalidade de -2 nas rolagens de um inimigo que você possa ver, ativar este efeito não conta como uma ação e ele dura até o seu próximo turno.']
                },
                'Feiticeiro dos Planos': {
                    skills: ['Magia','Ocultismo','Vontade','Provocar','Comunicação'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Viajante dos planos:</strong> o feiticeiro dos planos é capaz de lançar magias da tradição ocultista e recebe +1 nela.','<strong>Piscar:</strong> o feiticeiro dos planos é capaz de acessar por uma fração de segundo um outro plano qualquer. Ele recebe +2 para se Defender com Atletismo contra ataques físicos ou mágicos.','<strong>Convocar criatura extraplanar:</strong> ao custo de 1 PD o feiticeiro dos planos é capaz de conjurar uma criatura de outro plano, à sua escolha. A criatura permanece no plano somente por uma cena. A sua reação ao feiticeiro irá depender do plano em que ela habita. De maneira geral, planos superiores trazem criaturas aliadas, planos elementais trazem criaturas neutras e planos inferiores trazem criaturas hostis. Para qualquer outro caso decida a atitude da criatura com a narradora.']
                }
            }
            break;

        case "cleric":
            return {
                
                aspects: ['Clérigo do Conhecimento', 'Clérigo da Enganação', 'Clérigo da Guerra', 'Clérigo da Luz', 'Clérigo da Natureza', 'Clérigo da Tempestade', 'Clérigo da Vida'],
                stunts: ['<strong>Truques mágicos:</strong> o clérigo sabe realizar três truques mágicos simples à sua escolha. Ele conjura esses truques livremente, sem limitações de vezes e sem falhar. Alguns exemplos de truques são: mãos mágicas, luz, prestidigitação, pequenas ilusões etc.','<strong>Expulsar mortos-vivos:</strong> uma vez por cena o clérigo invoca os seus poderes divinos para expulsar os mortos-vivos que estejam em sua zona. Cada um deles fará um teste de Vontade contra uma dificuldade Ótima (+4), em caso de empate o morto-vivo recebe a Condição Fascinado, em caso de falha ele recebe a Condição Amedrontado e sua única ação possível será se afastar do clérigo para uma zona adjacente.','<strong>Intervenção divina:</strong> uma vez por sessão o clérigo pode pedir que a sua divindade aja em seu favor. Faça uma rolagem, em caso de resultado positivo você obteve sucesso e um aspecto é criado em seu favor. Em caso de empate ou falha nada acontece. É possível gastar 1 PD para somar +2 ao resultado.'],
                tradition: ['Divina'],
                'Clérigo do Conhecimento': {
                    skills: ['Acadêmico','Magia','Ocultismo','Vontade','Vigor'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conhecimento das eras:</strong> uma vez por sessão você recebe +2 em rolagens da perícia que escolher. O efeito dura uma cena.','<strong>Ler pensamentos:</strong> você pode ler os pensamentos de uma criatura em sua zona. Faça um teste resistido de Vontade. Em caso de sucesso você pode ler os pensamentos da criatura, em caso de empate você lê somente pensamentos superficiais. Em caso de falha você não lê a mente da criatura e ela percebe a sua intenção.','<strong>Visões do passado:</strong> uma vez por sessão você pode obter conhecimentos sobre um objeto ou um local. Você consegue informações sobre o passado recente do objeto ou local, que teve contato com o objeto ou esteve no local, emoções que estiveram presentes e outras informações que a narrador julgar pertinente. É possível gastar 1 PD para obter as mesmas informações de uma pessoa que tocou o objeto ou esteve no local.']
                },
                'Clérigo da Enganação': {
                    skills: ['Enganar','Magia','Vontade','Furtividade','Roubo'],
                    approach: ['Sorrateiro'],
                    stunts: ['<strong>Benção do trapaceiro:</strong> você recebe +2 para Criar Vantagem com Furtividade. Caso queira, você pode passar esse bônus para um aliado pelo tempo que desejar.','<strong>Déjà vu:</strong> uma vez por sessão você pode criar uma ilusão de si mesmo na zona em que está. Você pode controlar os movimentos da ilusão e até mesmo conjurar magias por ela. O efeito dura uma cena, até que você a desfaça ou a ilusão sofra um ataque físico.','<strong>Manto das sombras:</strong> uma vez por cena você pode se tornar invisível. O efeito dura até o seu próximo turno.']
                },
                'Clérigo da Guerra': {
                    skills: ['Lutar','Magia','Vigor','Vontade','Atletismo'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Sacerdote da guerra:</strong> ao custo de 1 PD, ao realizar uma ação de Atacar com Lutar, você pode atacar o mesmo alvo novamente, com um bônus de +2 na rolagem.','<strong>Ataque dirigido:</strong> uma vez por sessão você invoca os poderes de sua divindade e recebe +2 para Atacar com Lutar, o efeito dura uma cena.','<strong>Avatar da batalha:</strong> uma vez por sessão você recebe a proteção de sua divindade e recebe Armadura:2 contra estresse físico, o efeito dura uma cena.']
                },
                'Clérigo da Luz': {
                    skills: ['Percepção','Magia','Vontade','Ocultismo','Empatia'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Radiação do amanhecer:</strong> uma vez por cena o clérigo da luz pode criar uma explosão de luz em uma zona. A escuridão mágica do local é dissipada e inimigos que possam ver a explosão recebem a condição Fascinado por uma rodada.','<strong>Labareda protetora:</strong> uma vez por cena o clérigo da luz pode invocar uma barreira de luz que ficará estacionada em um local à sua escolha, possui o tamanho necessário para dividir a zona ao meio. A barreira de luz não é física e não causa dano, porém a visibilidade através de um dos lados é obstruída completamente com uma forte emanação de luz. Do lado do clérigo é possível enxergar normalmente através da barreira.','<strong>Coroa de luz:</strong> o clérigo da luz emana uma luz forte constantemente. Ele pode ativar e desativar o efeito quando desejar. A luz preenche toda a sua zona e concede +2 em rolagens de Magia que envolvam fogo ou luz.']
                },
                'Clérigo da Natureza': {
                    skills: ['Animais','Empatia','Magia','Atletismo','Vontade'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Enfeitiçar animais e plantas:</strong> uma vez por cena o clérigo da natureza invoca os seus poderes divinos para fascinar plantas vivas e animais que estejam em sua zona. Cada um deles fará um teste de Vontade contra uma dificuldade Ótima (+4), em caso de empate ou falha a criatura recebe a Condição Fascinado.','<strong>Amortecer elementos:</strong> o clérigo da natureza possui Armadura:2 contra ataques elementais. Quando quiser, ele pode tocar uma criatura voluntária e passar o efeito para ela, pela duração que desejar.','<strong>Senhor da natureza:</strong> o clérigo da natureza pode convocar um animal de sua região que irão lhe ajudar durante uma cena, da melhor maneira que puder. O tipo de animal que aparece depende do habitat em que o clérigo estiver. O animal tem uma ficha como em FAE e tem ações e turnos próprios.']
                },
                'Clérigo da Tempestade': {
                    skills: ['Lutar','Magia','Vontade','Ocultismo','Provocar'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Ira da tormenta:</strong> ao obter sucesso com estilo em uma rolagem de defesa contra Lutar, o clérigo da tempestade pode retornar o ataque ao seu inimigo na forma de um choque elétrico. O dano causado é igual ao nível da perícia Magia do clérigo.','<strong>Golpe de relâmpago:</strong> uma vez por sessão o clérigo da tempestade pode fazer com o que o seu ataque cause danos elétricos. Durante uma cena ele recebe Arma:2.','<strong>Filho da tempestade:</strong> o clérigo da tempestade pode voar, desde que não esteja no subterrâneo ou em um local fechado.']
                },
                'Clérigo da Vida': {
                    skills: ['Magia','Vigor','Vontade','Comunicação','Empatia'],
                    approach: ['Cuidadoso'],
                    stunts: ['<strong>Discípulo da vida:</strong> todas as magias conjuradas pelo clérigo da vida que tenham o efeito de limpar caixas de estresse, remover condições ou curar consequências recebem +2 na rolagem.','<strong>Preservar a vida:</strong> o clérigo invoca o poder de sua divindade para curar os seus aliados. Uma vez por cena ele pode limpar até 6 caixas de estresse, distribuídos da forma que desejar entre todos os aliados que estiverem em sua zona.','<strong>Curandeiro abençoado:</strong> ao realizar qualquer Magia que tenha como efeito curar alguma criatura ou remover uma condição ou consequência dela, o mesmo efeito se aplica à você.']
                }
            }
            break;

        case "warlock":
            return {
                
                aspects: ['Bruxo da Arquifada', 'Bruxo Corruptor', 'Bruxo do Grande Antigo'],
                stunts: ['<strong>Rajada mística:</strong> o bruxo é capaz de realizar ataques com Atirar em alvos da mesma zona. Ele dispara um prójetil mágico em seu alvo. Em um sucesso com estilo ele pode reduzir as tensões em 1 para atingir um alvo extra, uma nova rolagem deve ser feita para o alvo.','<strong>Pacto da corrente:</strong> o bruxo adquire um familiar, uma criatura mística que irá obedecê-lo e também combater ao lado dele. O bruxo também pode conjurar magias simples através do familiar, a critério da narradora. O familiar tem uma ficha como em FAE e tem ações e turnos próprios. Entre as opções de familiar estão o diabrete, pseudodragão, quasit e sprite.','<strong>Pacto da lâmina:</strong> de forma livre, o bruxo é capaz de materializar em suas mãos uma arma corpo-a-corpo no formato que desejar. Esta arma é considerada mágica para todos os efeitos. A arma desaparece se estiver a uma zona ou mais de distância do bruxo. Quando quiser, o bruxo pode fazer com que a arma de desmaterialize.','<strong>Pacto do tomo:</strong> o bruxo possui um grimório amaldiçoado que lhe garante poderes extras de conjuração. Uma vez por sessão o bruxo pode lançar uma magia da tradição arcana, uma da tradição divina e uma da tradição primal.','<strong>Poder profano:</strong> ao conjurar uma magia, uma vez por cena, o bruxo pode marcar quantas caixas de estresse quiser para adicionar à sua rolagem o valor igual a de caixas marcadas.','<strong>Invocações místicas:</strong> o bruxo é capaz de acessar conhecimentos antigos e ocultos, alterando a realidade ao seu redor para obter vantagem para si próprio. Escolha duas invocações místicas quaisquer, você pode utilizar cada uma delas uma vez por sessão. A cada fim de sessão você pode alterar qualquer uma delas ou ambas por outras invocações.'],
                tradition: ['Ocultista'],
                'Bruxo da Arquifada': {
                    skills: ['Enganar','Magia','Provocar','Vontade','Ocultismo'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Presença feérica:</strong> o seu patrono lhe concede uma habilidade de sedução e terror. Uma vez por sessão, o bruxo da arquifada recebe +2 em Criar Vantagem com Provocar para marcar a Condição Fascinado ou Amedrontado em todos os inimigos de sua zona, é feito um teste de Defender com Vontade para impedir o efeito.','<strong>Névoa de fuga:</strong> o primeiro dano que você recebe durante um conflito pode ser ignorado e você desaparece como névoa momentâneamente. Você fica com o aspecto invisível até o seu próximo turno e pode reaparecer em qualquer lugar dentro de sua zona. Este efeito pode ser utilizado uma vez por cena.','<strong>Defesa sedutora:</strong> quando uma magia é conjurada contra você com o intuito de enfeitiçá-lo, seja marcando alguma condição mental ou impondo um aspecto, você pode reverter o efeito para o conjurador. Um teste resistido de Magia deve ser feito. Além disso, você recebe +2 em rolagens de Defesa para impedir ter qualquer condição mental marcada.']
                },
                'Bruxo Corruptor': {
                    skills: ['Atirar','Ocultismo','Vigor','Vontade','Magia'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Benção do obscuro:</strong> ao realizar uma ação de Atacar ou Atirar e obter sucesso com estilo, o bruxo do obscuro pode limpar uma de suas caixas de estresse.','<strong>Sorte obscura:</strong> após qualquer rolagem de dados, uma vez por sessão, o bruxo corruptor pode adicionar +1d6 ao resultado.','<strong>Resistência demoníaca:</strong> no início de toda cena o bruxo corruptor deve escolher entre danos físicos e mentais, ele recebe Armadura:1 durante esta cena com o tipo de dano escolhido.']
                },
                'Bruxo do Grande Antigo': {
                    skills: ['Magia','Ocultismo','Vontade','Acadêmico','Provocar'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Despertar a mente:</strong> você pode se comunicar telepaticamente com qualquer criatura inteligente que esteja em sua zona, vocês não precisam partilhar de um idioma em comum para tal e conseguem se entender mesmo que de maneira simplória.','<strong>Proteção entrópica:</strong> ao defender com sucesso o ataque de um inimigo, você receberá +2 para atacá-lo com Lutar em seu próximo turno.','<strong>Escudo de pensamentos:</strong> os seus pensamentos não podem ser lidos em nenhuma hipótese, a não ser que você permita. Além disso, você recebe +2 em rolagens de Defesa para impedir ter qualquer condição mental marcada.']
                }
            }
            break;

        case "bard":
            return {
                
                aspects: ['Bardo do Colégio do Conhecimento', 'Bardo do Colégio da Bravura', 'Bardo do Colégio das Artes'],
                stunts: ['<strong>Conhecimento do bardo:</strong> você recebe +2 em testes de Superar e Criar Vantagem com Acadêmico e Ocultismo, além disso, pode se lembrar de qualquer informação sobre qualquer assunto.','<strong>Truques mágicos:</strong> o bardo sabe realizar dois truques mágicos simples à sua escolha. Ele conjura esses truques livremente, sem limitações de vezes e sem falhar. Alguns exemplos de truques são: mãos mágicas, luz, prestidigitação, pequenas ilusões etc.','<strong>Inspiração de bardo:</strong> ao custo de 1 PD, o bardo pode tocar o seu instrumento para inspirar os seus aliados e a si mesmo. Até o final da cena, no momento em que desejar, o bardo e seus aliados poderão realizar qualquer rolagem com dois dados extras, escolhendo os melhores resultados. É possível jogar os dois dados depois da rolagem normal com quatro. A inspiração é gasta depois de usada.','<strong>Canção do descanso:</strong> o bardo usa sua música para auxiliar na recuperação de seus aliados. Enquanto o bardo estiver tocando, o teste para se recuperar de consequências é considerado um nível mais fácil. Medíocre (+0) para suave, Razoável (+2) para moderada e Ótima (+4) para severa.','<strong>Canção de proteção:</strong> a música do bardo ajuda aliados a resistirem efeitos mentais. Enquanto o bardo estiver tocando, ele e seus aliados recebem +2 em rolagens de Defesa para evitar receber condições mentais (amedrontado, confuso e fascinado).','<strong>Segredos mágicos:</strong> uma vez por sessão, o bardo é capaz de conjurar uma única magia de qualquer tradição mágica, mesmo que não tenha pontos na tradição. Ele utiliza o valor de sua perícia Magia para tal, é possível somar o valor da subperícia da tradição escolhida, se houver.'],
                tradition: ['Ocultista'],
                'Bardo do Colégio do Conhecimento': {
                    skills: ['Acadêmico','Magia','Ocultismo','Empatia','Comunicação'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Arcanista:</strong> O bardo do colégio do conhecimento é capaz de lançar magias da tradição arcana e recebe +1 nela.','<strong>Palavras de interrupção:</strong> uma vez por cena, o bardo do colégio do conhecimento pode utilizar sua música para distrair e confundir os seus inimigos. Ele escolhe um inimigo que possa ouvi-lo e toca sua canção para ele. No momento em que o bardo desejar, uma rolagem deste inimigo deverá ser feita com dois dados extras, escolhendos os piores resultados. É possível jogar os dois dados depois da rolagem normal com quatro.','<strong>Aptidão:</strong> o bardo escolhe 4 perícias quaisquer. Ele recebe +1 em testes de Superar e Criar Vantagem com as perícias escolhidas.']
                },
                'Bardo do Colégio da Bravura': {
                    skills: ['Lutar','Provocar','Roubo','Atletismo','Magia'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Encantar armas:</strong> as armas equipadas pelo bardo do colégio da bravura são consideradas mágicas para todos os efeitos. Uma vez por sessão ele pode aprimorar suas armas, que recebem Arma:1 durante toda uma cena.','<strong>Magia de batalha:</strong> ao custo de 1 PD, ao conjurar magia durante um conflito, você pode realizar um ataque com Lutar (Ágil) no mesmo turno.','<strong>Inspiração em combate:</strong> uma vez por sessão, durante um conflito, enquanto o bardo estiver tocando a sua música os seus aliados recebem +1 para Atacar e Defender com Lutar.']
                },
                'Bardo do Colégio das Artes': {
                    skills: ['Acadêmico','Comunicação','Enganar','Empatia','Magia'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Magia melodiosa:</strong> o bardo do colégio das artes é capaz de realizar suas magias disfarçadamente enquanto faz uma performance. Antes de conjurar uma magia, ele pode fazer um teste de Enganar contra a Percepção de seus observadores. Em caso de empate ou sucesso, ele oculta a conjuração. Em caso de falha ele deixa clara as suas intenções e gera um impulso para os inimigos.','<strong>Dança hipnotizante:</strong> o bardo do colégio das artes pode fazer uma dança que hipnotiza a todos que possam vê-lo dentro da zona. Uma vez por sessão, o bardo recebe +2 em Criar Vantagem com Provocar para marcar a Condição Fascinado em todos os inimigos de sua zona, é feito um teste de Defender com Vontade para impedir o efeito.','<strong>Canção persistente:</strong> com esta façanha, qualquer efeito da música do bardo que só funcione enquanto ele estiver tocando mantém o seu efeito até o fim da cena, mesmo que o bardo realize outras ações.']
                }
            }
            break;

        case "barbarian":
            return {
                
                aspects: ['Bárbaro do Caminho da Frenesi','Bárbaro do Caminho Totêmico','Bárbaro do Caminho do Instinto'],
                stunts: ['<strong>Fúria:</strong> ao custo de 1 PD, durante um conflito, o Bárbaro pode se entregar a uma fúria insana, que lhe concede +2 em ações de Atacar. Nesse estado, ações além de Atacar recebem -2 de penalidade. Além disso, o bárbaro recebe +1 de Armadura contra ataques físicos. O efeito dura até o fim da cena ou até quando o jogador desejar. Ao sair da fúria, o personagem recebe o aspecto “Exausto”.','<strong>Armadura natural:</strong> enquanto o Bárbaro não estiver usando nenhuma armadura ele possui Armadura:1.','<strong>Ataque descuidado:</strong> você pode atacar sem se preocupar com a sua defesa. Quando quiser, você pode optar por receber +2 em ações de Ataque com Lutar (Poderoso). Até o seu próximo turno as suas jogadas de Defesa recebem -2 de penalidade.','<strong>Sentido de perigo:</strong> você consegue perceber melhor os perigos que te cercam. Recebe +2 em Percepção (Esperto) para notar que existe algo incomum na cena, como armadilhas ou efeitos mágicos.','<strong>Carga brutal:</strong> você é capaz de se deslocar por uma zona extra durante um conflito, para isso deve realizar um ataque em carga contra um oponente. Se o fizer, você recebe +2 em sua jogada de Ataque com Lutar (Poderoso).','<strong>Fôlego bruto:</strong> uma vez por cena, durante um conflito, você pode retomar o fôlego da batalha. Limpe até três caixas de estresse.'],
                tradition: [''],
                'Bárbaro do Caminho da Frenesi': {
                    skills: ['Lutar','Provocar','Vigor','Vontade','Atletismo'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Frenesi:</strong> ao entrar em Fúria, você pode optar por entrar em Frenesi. A cada turno você pode realizar um único ataque extra, contudo deve marcar uma caixa de estresse para tal. Além disso, você ignora Condições enquanto estiver em Frenesi.','<strong>Presença intimidante:</strong> uma vez por cena, com uma rolagem de Criar Vantagem com Provocar (Estiloso) você pode colocar a Condição Amedrontado em todos que estão mesma zona que você (exceto aliados). Um teste de Defesa com Vontade (Esperto) pode ser feito para evitar a condição.','<strong>Retaliação:</strong> ao receber um ataque com Lutar que lhe cause uma consequência, você não concede uma invocação gratuita desta consequência e, além disso, poderá realizar um ataque com Lutar (Poderoso) neste mesmo inimigo.']
                },
                'Bárbaro do Caminho Totêmico': {
                    skills: ['Atletismo','Furtividade','Vigor','Lutar','Percepção'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Totem da águia:</strong> você possui uma visão aguçada e pode ver até 2 km de distância sem nenhuma dificuldade. Dentro da sua zona você consegue discernir todos os pequenos detalhes. Além disso, durante a Fúria você pode se deslocar por zonas verticais, realizando grande saltos.','<strong>Totem do lobo:</strong> você adquire os instintos de caça de um lobo. Recebe +1 em ações de Investigar quando está rastreando alguém e +1 em ações de Furtividade quando está em terreno selvagem. Além disso, durante a Fúria, em um sucesso com estilo com Lutar (Poderoso) você pode reduzir as tensões em 1 para colocar a Condição Derrubado no seu alvo, em uma criatura até um tamanho maior que você na escala.','<strong>Totem do urso:</strong> você adquire a força de um urso. Recebe +2 ao Criar Vantagem em ações que exijam demonstração de grande força ou resistência física. Além disso, durante a Fúria, qualquer inimigo em sua zona que não tenha você como alvo terá uma penalidade de -1 em seus ataques.']
                },
                'Bárbaro do Caminho do Instinto': {
                    skills: ['Animais','Percepção','Vontade','Lutar','Vigor'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Elo com animais:</strong> o bárbaro do caminho do instinto recebe +2 em qualquer ação da perícia Animais (Estiloso) e consegue perceber claramente o ânimo de um animal, na forma de um adjetivo (calmo, raivoso, assustado etc).','<strong>Instinto Selvagem:</strong> o bárbaro do caminho do instinto nunca é pego de surpresa em um início de conflito. Sempre que quiser você poderá agir antes de todo mundo no início de um conflito, porém deve entrar em Fúria antes de sua ação. Se optar por fazê-lo, recebe +2 para Atacar com Lutar (Poderoso) nesta rodada.','<strong>Comunhão ancestral:</strong> você se conecta às forças da natureza e retira dela uma grande força interior. Se estiver em ambientes naturais, como florestas, cavernas ou planícies, você recebe Arma:1. Além disso, as armas equipadas pelo bárbaro são consideradas mágicas para todos os efeitos.',]
                }
            }
            break;

        case "thief":
            return {

                aspects: ['Ladino Assassino','Ladino Gatuno','Ladino Trapaceiro Arcano'],
                stunts: ['<strong>Ataque furtivo:</strong> O ladino recebe +2 ao realizar um ataque contra um alvo distraído, que não está ciente de sua presença.','<strong>Evasão:</strong> Ao se defender de um ataque que atinge toda a zona, a rolagem do ladino recebe um pulso de performance: uma falha vira um empate, um empate vira sucesso e um sucesso vira sucesso com estilo.','<strong>Gíria de ladrão:</strong> O ladino é capaz de passar mensagens secretas durante uma conversa comum, desde que a outra pessoa também seja fluente na gíria de ladrão.','<strong>Ação ardilosa:</strong> O ladino recebe uma invocação livre extra ao obter sucesso em Criar Vantagem durante um conflito.','<strong>Talento confiável:</strong> Uma vez por cena o ladino recebe um pulso de performance em um rolamento de Superar em Furtividade.','<strong>Sentido cego:</strong> O ladino é capaz de determinar a posição exata de um criatura se estiver apto a ouvi-la, mesmo que ela esteja escondida ou invisível.'],
                tradition: [''],
                'Ladino Assassino': {
                    skills: ['Atirar','Furtividade','Roubo','Atletismo','Enganar'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Disfarce:</strong> O ladino assassino pode ficar durante toda uma cena preparando um disfarce para se infiltrar em algum local ou organização. As pessoas não notarão o disfarce pelo visual, somente pelas atitudes ou até que o ladino se revele.','<strong>Golpe letal:</strong> Ao obter sucesso com estilo em um Ataque furtivo, você pode escolher marcar uma consequência no alvo, ao invés de caixas de estresse.','<strong>Cobra venenosa:</strong> O ladino assassino é capaz de manipular todo tipo de veneno. Ele pode Criar Vantagem ao aplicar veneno em sua arma, que passa a ser considerada Arma:2 somente no próximo ataque realizado com a mesma.']
                },
                'Ladino Gatuno': {
                    skills: ['Furtividade','Roubo','Enganar','Atletismo','Percepção'],
                    approach: ['Sorrateiro'],
                    stunts: ['<strong>Reflexos de ladrão:</strong> Uma vez por cena, ao ser pego cometendo algum crime, o ladino gatuno recebe um impulso que lhe ajude a se safar.','<strong>Língua solta:</strong> O ladino gatuno recebe +2 para Criar Vantagem usando Enganar (Cuidadoso) ao contar alguma história para um desconhecido, seja verdadeira ou não.','<strong>Andarilho dos telhados:</strong> O ladino gatuno é capaz de se locomover facilmente dentro de uma cidade, pulando sobre casas e telhados.']
                },
                'Ladino Trapaceiro Arcano': {
                    skills: ['Magia','Furtividade','Percepção','Roubo','Enganar'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conjuração:</strong> O ladino trapaceiro arcano é capaz de lançar magias da tradição arcana e recebe +1 nela.','<strong>Mão mágicas malabaristas:</strong> O ladino trapaceiro arcano é capaz de conjurar a magia “mãos mágicas” gratuitamente. A mão espectral pode manipular um objeto, abrir uma porta ou recipiente destrancado e deve permanecer na mesma zona do ladino. A mão não pode atacar, ativar itens mágicos ou carregar mais que 5 quilos.','<strong>Emboscada mágica:</strong> O ladino trapaceiro arcano ganha um impulso ao realizar uma magia contra um alvo que não esteja ciente de sua presença. ']
                }
            }
            break;

        case "druid":
            return {

                aspects: ['Druida da Tempestade','Druida Primal','Druida da Folha'],
                stunts: ['<strong>Companheiro animal:</strong> O druida possui um companheiro animal, que irá obedecê-lo e também combater ao lado dele. O companheiro animal tem uma ficha como em FAE e tem ações e turnos próprios.','<strong>Sempre em alerta:</strong> O druida consegue perceber o seu redor com muito mais precisão, recebe +2 em Percepção (Sorrateiro) em testes de Defender para não ser pego de surpresa.','<strong>Corpo fechado:</strong> O druida se torna imune a venenos e doenças, e não sente mais frio ou calor extremos.','<strong>Resoluto:</strong> O druida se torna mais resistente a danos mentais, recebe Armadura:1 em conflitos mentais.','<strong>Natureza atemporal:</strong> O druida não envelhece mais, nem precisa mais dormir ou se alimentar.','<strong>Caminho natural:</strong> O druida se desloca normalmente em uma floresta fechada, tanto por terra quanto por cima das árvores, ignorando aspectos naturais que impossibilitem movimentos.'],
                tradition: ['Primal'],
                'Druida da Tempestade': {
                    skills: ['Magia','Vontade','Provocar','Ocultismo','Percepção'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Conhecimento arcano:</strong> O druida da tempestade é capaz de lançar magias da tradição arcana e recebe +1 nela.','<strong>Forma elemental:</strong> O druida da tempestade pode se transformar em um elemental de seu tamanho. Ele adquire as características físicas da criatura escolhida, passando a ter uma ficha como em FAE, bem como as suas armas, armadura e façanhas, se houver. O efeito dura uma cena e requer 1 PD para ser ativado.','<strong>Convocar os ventos:</strong> O druida faz com que os ventos o carreguem pelo ar, ele pode voar durante uma cena.']
                },
                'Druida Primal': {
                    skills: ['Animais','Lutar','Atletismo','Vigor','Magia'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Forma selvagem:</strong> O druida primal é capaz de se transformar em animais, o tamanho pode variar até dois na escala, ou três ao custo de 1 PD extra (como em Secret of the Cats). Ele adquire as características físicas da criatura escolhida, com uma ficha de capangas como em FAE, bem como as suas armas, armadura e façanhas, se houver. O efeito dura uma cena e requer 1 PD para ser ativado.','<strong>Traços selvagens:</strong> O druida recebe algum traço específico de animais, como guelras, garras, sentidos aguçados ou pequenos aspectos semelhantes. No caso de garras ou presas, seus ataques são considerados como Arma: 1. O efeito dura uma cena e requer 1 PD para ser ativado.','<strong>Transformação da cura:</strong> Ao mudar de forma o druida limpa todas as suas caixas de estresse.']
                },
                'Druida da Folha': {
                    skills: ['Empatia','Comunicação','Animais','Magia','Ocultismo'],
                    approach: ['Cuidadoso'],
                    stunts: ['<strong>Adorador da natureza:</strong> O druida da folha é capaz de lançar magias da tradição divina e recebe +1 nela.','<strong>Empatia selvagem:</strong> O druida pode se comunicar com plantas e animais de maneira muito rudimentar.','<strong>Convocação da natureza:</strong> O druida convoca animais da redondeza para auxiliá-lo durante uma cena. Os animais irão obedecê-lo e também combater ao lado dele, tem uma ficha como em FAE e ações e turnos próprios.']
                }

            }
            break;

        case "monk":
            return {

                aspects: ['Monge do Caminho da Mão Aberta','Monge do Caminho da Sombra','Monge do Caminho do Punho Bêbado','Monge do Caminho dos Quatro Elementos'],
                stunts: ['<strong>Chi:</strong> O monge ganha uma nova barra de estresse chamada Chi, ela possui 3 caixas de valor 1 e pode ser utilizada somente para Esforços Extras em testes que envolvam Atletismo, Lutar, Vigor ou Vontade ou para utilizar suas façanhas que exigem Chi.','<strong>Defesa sem armadura:</strong> Enquanto não estiver portando nenhuma armadura ou nenhum escudo, o monge tem Armadura: 1.','<strong>Defletir Projéteis:</strong> Quando o monge tiver um Sucesso com Estilo ao Defender com Atletismo (Ágil) um Ataque feito com Atirar, ele pode redirecionar as tensões de dano para um adversário na mesma zona. O adversário ainda pode se defender.','<strong>Mens sana in corpore sano:</strong> O monge tem +2 para se Defender contra Criar Vantagem que imponha Aspectos que afetem sua mente ou seu corpo (Ex.: amedrontado, confuso, doente, envenenado, etc).','<strong>Movimentação de combate:</strong> Se não houver impeditivos para movimentação, o monge pode se mover até duas zonas de distância num único turno. Se houver algum obstáculo a ser superado, ele pode mover até uma zona e testar Superar com Atletismo (Ágil), se tiver sucesso, ele ainda pode fazer uma ação.','<strong>Saraivada de golpes:</strong> O monge pode com uma única ação de Ataque de Lutar (Ágil) atingir dois adversários diferentes na mesma zona. Cada um se defende separadamente.'],
                tradition: [''],
                'Monge do Caminho da Mão Aberta': {
                    skills: ['Atletismo','Lutar','Vigor','Percepção','Vontade'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Integridade Corporal:</strong> Uma vez por sessão, o monge da mão aberta pode instantaneamente limpar 3 das suas caixas de estresse físico','<strong>Palma vibrante (exige Chi):</strong> Quando causar dano com um Ataque desarmado, o monge da mão aberta pode marcar uma caixa de estresse de Chi para que o adversário absorva as tensões de dano diretamente nas consequências.','<strong>Técnica da mão aberta:</strong> Ao efetuar um Ataque com Sucesso com Estilo o monge da mão aberta pode impor o aspecto “Derrubado” em um dos alvos e recebe uma invocação gratuita. É preciso passar um teste de Superar com Atletismo (Ágil) com dificuldade Boa (+3) para tirar o aspecto.']
                },
                'Monge do Caminho da Sombra': {
                    skills: ['Enganar','Furtividade','Ocultismo','Atletismo','Lutar'],
                    approach: ['Sorrateiro'],
                    stunts: ['<strong>Artes sombrias:</strong> O monge da sombra pode tecer sobre si gratuitamente um manto de escuridão e silêncio que impõe um aspecto sobre ele relacionado a ocultação, não fazer ruídos e percepção no escuro.','<strong>Golpe oportunista (exige Chi):</strong> Quando um adversário na mesma zona do monge das sombras é atingido por um Ataque, o monge pode riscar uma caixa de estresse de Chi e efetuar um Ataque simples contra ele (não pode ser usado com Saraivada de Golpes), mesmo que já tenha agido esse turno.','<strong>Passo das sombras:</strong> O monge da sombra pode transitar entre áreas em penumbra ou em sombra que estejam em zonas diferentes como se elas estivessem adjacentes uma à outra. Ao realizar um Ataque desarmado contra um adversário que não o tenha visto após essa movimentação, ele recebe +2 no Ataque com Lutar (Sorrateiro).']
                },
                'Monge do Caminho do Punho Bêbado': {
                    skills: ['Lutar','Provocar','Vigor','Vontade','Atletismo'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Deus protege os ébrios:</strong> O monge do punho bêbado recebe +2 para Defender com Lutar (Poderoso) quando estiver com o aspecto ‘Ébrio’.','<strong>Redirecionar ataques:</strong> Quando o monge do punho bêbado tiver um Sucesso com Estilo ao Defender com Lutar estando ‘Ébrio’, ele pode redirecionar o ataque para um outro adversário na mesma zona. O adversário alvo pode se defender.','<strong>Risada Bêbada:</strong> O monge do punho bêbado sempre ganha uma invocação livre extra ao Criar Vantagem com Provocar.']
                },
                'Monge do Caminho dos Quatro Elementos': {
                    skills: ['Magia','Acadêmico','Vontade','Lutar','Vigor'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Comunhão com espírito elemental:</strong> O monge dos quatro elementos pode entrar em comunhão com um espírito elemental de um elemento que ele domina. A comunhão dura uma cena, o monge ganha duas caixas de estresse físico ou mental extras e fica invulnerável a danos baseados nesse elemento.','<strong>Domínio elemental:</strong> O monge dos quatro elementos recebe +2 para lançar Magias relacionadas a um determinado elemento à sua escolha. Ao escolher um elemento, ele não poderá lançar magias do elemento oposto (fogo x água; terra x ar). É possível adquirir essa façanha uma segunda vez.','<strong>Magia marcial:</strong> O monge dos quatro elementos é capaz de lançar magias da tradição primal e recebe +1 nela.']
                }
            }
            break;

        case "mage":
            return {
                
                aspects: ['Mago Dobrador de Magia','Mago Elementalista','Mago Universalista'],
                stunts: ['<strong>Truques mágicos:</strong> O mago sabe realizar três truques mágicos simples à sua escolha. Ele conjura esses truques livremente, sem limitações de vezes e sem falhar. Alguns exemplos de truques são: mãos mágicas, luz, prestidigitação, pequenas ilusões etc.','<strong>Preparação arcana:</strong> Uma vez por sessão o mago pode ignorar os custos de uma magia, ou seja, não precisa gastar PD, nem Criar Vantagem ou coisa semelhante. Ele ainda precisa fazer uma rolagem da perícia Magia para conjurar o feitiço.','<strong>Sentido mágico:</strong> O mago sempre está com o efeito de detectar magia ativo. Ele sente a presença de magia dentro de sua zona, bem como a qual tradição ela pertence.','<strong>Grimório:</strong> O mago registra em seu grimório diversos conhecimentos arcanos ocultos. Sempre que estiver de posse do seu grimório e puder consultá-lo, ao conjurar uma magia com Criar Vantagem ele pode gastar 1 PD e receber um pulso de perfomance.','<strong>Familiar:</strong> O mago possui um familiar, uma criatura mística que irá obedecê-lo e também combater ao lado dele. O mago também pode conjurar magias simples através do familiar, a critério da narradora. O familiar tem uma ficha como em FAE e tem ações e turnos próprios.','<strong>Escrever pergaminhos:</strong> O mago pode preparar uma magia com antecedência em seus pergaminhos. Três pergaminhos escritos equivalem a uma caixa de estresse da barra de equipamentos do personagem. Ao utilizar um pergaminho, o mago recebe +2 na rolagem de Criar Vantagem com Magia. Somente um pergaminho pode ser usado por magia. O pergaminho é consumido no processo.'],
                tradition: ['Arcana'],
                'Mago Dobrador de Magia': {
                    skills: ['Acadêmico','Magia','Vontade','Ocultismo','Comunicação'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Experimentação metamágica:</strong> O mago dobrador de magia sabe lançar feitiços de uma maneira diferente do comum. Ao custo de 1 PD uma magia conjurada com sucesso possui seus efeitos aumentados. Escolha uma das opções, que mais se adeque ao efeito mágico realizado: a magia atinge uma zona extra, a magia atinge um alvo extra, a magia irá durar toda a cena ou magia irá causar/prevenir o dobro de tensões.','<strong>Ira do arquimago:</strong> O mago dobrador de magia possui um poder mágico extraordinário, porém perigoso. Ao superar, criar vantagem ou defender com magia, mesmo após o rolamento dos dados, ele pode optar por obter sucesso com estilo, porém, ele sofre uma consequência moderada no processo. Esta façanha não pode ser utilizada caso a consequência moderada já esteja preenchida. Uma invocação gratuita da consequência é gerada para os inimigos.','<strong>Penetração de magia:</strong> O mago dobrador de magia é capaz de superar barreiras mágicas inatas ou criadas magicamente, como as possuídas por dragões adultos ou magos poderosos. Ele recebe +2 em rolagens de Magia para Superar tais barreiras mágicas.']
                },
                'Mago Elementalista': {
                    skills: ['Magia','Provocar','Vontade','Percepção','Ocultismo'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Conhecimentos selvagens:</strong> O mago elementalista é capaz de lançar magias da tradição primal e recebe +1 nela.','<strong>Energia avassaladora:</strong> O mago elementalista recorre aos poderes primais para lançar suas magias. Ele recebe +2 ao Atacar com Magia desde que esta seja de natureza elemental e o elemento correspondente esteja presente na cena (ex.: uma chama, água corrente, lufada de vento, rochas etc).','<strong>Refletir elementos:</strong> O mago elementalista é capaz de refletir uma magia elemental. Para tanto, ele deve fazer uma rolagem resistida de Magia contra o inimigo conjurador. Se falhar ou empatar, a magia tem o seu efeito normal e o inimigo recebe um impulso. Se for bem sucedido, a magia retornará para o inimigo conjurador e terá o seu efeito contra ele. Em ambos os casos, o mago elementalista perde a sua próxima ação.']
                },
                'Mago Universalista': {
                    skills: ['Acadêmico','Magia','Ocultismo','Vontade','Empatia'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conhecimentos obscuros:</strong> O mago universalista é capaz de lançar magias da tradição ocultista e recebe +1 nela.','<strong>Contramágica:</strong> O mago universalista pode tentar anular uma magia no ato em que é conjurada. Ao invés de agir normalmente no seu turno, ele pode realizar um teste resistido de Magia contra o inimigo que está conjurando uma magia. Em caso de sucesso ou sucesso com estilo, a magia é cancelada. Em caso de empate ou falha a magia é realizada e o inimigo recebe um impulso. Em ambos os casos, o mago universalista perde a sua próxima ação.','<strong>Ocultar magia:</strong> O mago universalista é capaz de realizar suas magias de modo imperceptível. Antes de conjurar uma magia, ele pode fazer um teste de Furtividade contra a Percepção de seus observadores. Em caso de empate ou sucesso, ele oculta a conjuração. Em caso de falha ele deixa clara as suas intenções e gera um impulso para os inimigos.']
                }
            }
            break;

        case "paladin":
            return {
                
                aspects: ['Paladino da Devoção','Paladino da Vingança','Paladino dos Anciões'],
                stunts: ['<strong>Sentido divino:</strong> Uma vez por cena, o paladino pode sentir a presença de qualquer celestial, corruptor ou morto-vivo a até duas zonas de onde ele está. Ele sabe o tipo de criatura e sua localização, mas não a identidade. O paladino também pode sentir a presença de um lugar sagrado.','<strong>Impor as mãos:</strong> O paladino pode, uma vez por sessão, impor as mãos sobre um companheiro e limpar todas as suas Caixas de Estresse.','<strong>Destruição divina:</strong> Uma vez por sessão, o paladino pode imbuir seu corpo com a força da ira divina durante uma cena. Nessa cena, o paladino tem Arma: 1.','<strong>Aura de proteção:</strong> Sempre que o paladino ou um aliado na mesma zona fizer um teste para se Defender contra um Ataque que imponha condições ou que afetem toda a zona eles recebem +1.','<strong>Aura de coragem:</strong> Uma vez por sessão o paladino e seus aliados numa mesma zona se tornam imunes, durante uma cena, a sofrerem a condição Amedrontado.','<strong>Toque purificador:</strong> O Paladino marca uma caixa de estresse e pode encerrar quaisquer efeitos mágicos sobre si ou um aliado que ele possa tocar.'],
                tradition: ['Divina'],
                'Paladino da Devoção': {
                    skills: ['Lutar','Magia','Vontade','Vigor','Comunicação'],
                    approach: ['Estiloso'],
                    stunts: ['<strong>Expulsar o profano:</strong> O paladino da devoção pode Criar Vantagem com Magia contra todos os mortos-vivos ou corruptores presentes em uma zona. Cada um se defende individualmente e todos que falharem recebem o aspecto Compelidos. Eles fugirão como for possível da presença do paladino.','<strong>Aura de devoção:</strong> Uma vez por sessão o paladino da devoção e seus aliados numa mesma zona se tornam imunes, durante uma cena, a sofrerem a condição Fascinado.','<strong>Halo sagrado:</strong> Uma vez por sessão, o paladino da devoção pode lançar um Ataque com Magia, fazendo brilhar a luz dos deuses, contra todos os adversários numa mesma zona. Cada um se defende individualmente.']
                },
                'Paladino da Vingança': {
                    skills: ['Lutar','Provocar','Vigor','Magia','Vontade'],
                    approach: ['Poderoso'],
                    stunts: ['<strong>Voto de inimizade:</strong> Uma vez por sessão, o paladino da vingança pode escolher um adversário em um conflito físico e fazer um voto de inimizade contra ele. Ele recebe +2 para Atacar com Lutar esse adversário, até o fim do conflito ou até o adversário conceder.','<strong>Vingador implacável:</strong> Quanto o paladino da vingança tem um Sucesso com Estilo em um Ataque com Lutar ele pode optar por reduzir em 1 as tensões causadas e aplicar a condição Derrubado no alvo.','<strong>Voz infernal:</strong> O paladino da vingança recebe +2 para Superar com Provocar sempre que intimidar um PdN menor para conseguir algo que o ajude em sua vingança.']
                },
                'Paladino dos Anciões': {
                    skills: ['Magia','Ocultismo','Percepção','Vigor','Lugar'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Fúria dos anciões:</strong> Uma vez por sessão o paladino dos anciões pode realizar um ataque com Magia contra um inimigo, o ataque tem a aparência de uma coluna solar. Todos os aliados do paladino recebem um impulso contra aquele inimigo.','<strong>Aura de vigilância:</strong> Ao custo de 1 PD, o paladino dos anciões e seus aliados numa mesma zona recebem Armadura: 1 contra danos mágicos durante uma cena.','<strong>Sentinela imortal:</strong> Uma vez por sessão, o paladino dos anciões pode ignorar as tensões sofridas de um ataque direcionado unicamente a ele.']
                }
            }
            break;

        case "ranger":
            return {
                
                aspects: ['Patrulheiro Armadilheiro','Patrulheiro Caçador','Patrulheiro Primal'],
                stunts: ['<strong>Inimigo favorito:</strong> O patrulheiro recebe +2 ao Criar Vantagem com Acadêmico sobre um tipo de inimigo favorito, à sua escolha: aberrações, bestas, celestiais, constructos, corruptores, dragões, elementais, fadas, gigantes, limos, monstruosidades, mortos-vivos, plantas ou duas bioformas humanoides quaisquer.','<strong>Explorador natural:</strong> O patrulheiro recebe +2 ao Criar Vantagem com Acadêmico quando está em um terreno que lhe é particularmente favorável, à sua escolha: ártico, costa, deserto, floresta, montanha, pântano, planície ou subterrâneo.','<strong>Prontidão primitiva:</strong> O patrulheiro pode gastar 1 PD para sentir a presença de criaturas fantásticas que estão próximas a ele, em um raio de quilômetros de distância. Os tipos de criaturas percebidas são: aberrações, celestiais, corruptores, dragões, elementais, fadas e mortos-vivos. Essa façanha não revela a localização ou quantidade de criaturas.','<strong>Companheiro de patrulha:</strong> O patrulheiro possui um companheiro animal, que irá obedecê-lo e também combater ao lado dele. O companheiro animal tem uma ficha como em FAE e tem ações e turnos próprios.','<strong>Caminho da floresta:</strong> O patrulheiro se desloca normalmente em uma floresta fechada, tanto por terra quanto por cima das árvores, ignorando aspectos naturais que impossibilitem movimentos.','<strong>Camuflagem:</strong> O patrulheiro recebe +2 ao Criar Vantagem com Furtividade para se ocultar em ambientes naturais.'],
                tradition: [],
                'Patrulheiro Armadilheiro': {
                    skills: ['Atletismo','Ofícios','Percepção','Atirar','Vigor'],
                    approach: ['Sorrateiro'],
                    stunts: ['<strong>Armadilhas improvisadas:</strong> Durante um conflito, o patrulheiro armadilheiro é capaz de montar uma única armadilha em apenas uma rodada, desde que possua todos os materiais necessários consigo.','<strong>Mestre da arapuca:</strong> O patrulheiro armadilheiro recebe +2 em Defender com Atletismo para evitar ser atingido por uma armadilha já ativada.','<strong>Armadilhas poderosas:</strong> As armadilhas criadas pelo patrulheiro armadilheiro podem receber os efeitos de dois tipos diferentes de armadilha, ao invés de somente um. É considerada a dificuldade mais alta entre as duas.']
                },
                'Patrulheiro Caçador': {
                    skills: ['Atirar','Investigar','Furtividade','Atletismo','Percepção'],
                    approach: ['Ágil'],
                    stunts: ['<strong>Presa do caçador:</strong> O patrulheiro caçador possui Arma:1 quando está lutando contra criaturas maiores que ele na escala de tamanho ou quando está em desvantagem numérica durante um conflito.','<strong>Rastrear:</strong> O patrulheiro caçador recebe +2 ao Criar Vantagem com Investigar para descobrir rastros de uma criatura que ele esteja caçando.','<strong>Despistar:</strong> O patrulheiro caçador recebe +2 ao Defender com Enganar para disfarçar suas intenções de caça ou despistar o uso de Investigar contra ele.']
                },
                'Patrulheiro Primal': {
                    skills: ['Animais','Magia','Vontade','Atirar','Vigor'],
                    approach: ['Esperto'],
                    stunts: ['<strong>Conhecimento primordial:</strong> O patrulheiro primal é capaz de lançar magias da tradição primal e recebe +1 nela.','<strong>Sentidos aguçados:</strong> Ao custo de 1 PD, o patrulheiro primal é capaz de identificar precisamente a localização de criaturas invisíveis ou ocultas que estejam em sua zona.','<strong>Instinto selvagem:</strong> O patrulheiro primal possui um vínculo empático muito forte com animais, recebe +2 em Animais ao Criar Vantagem para alterar o ânimo de um animal, tanto para acalmá-lo quanto para enfurecê-lo.']
                }
            }
            break;                        

    }

};