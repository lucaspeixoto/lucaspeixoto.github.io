function stunts(type) {
  
    switch(type){

        case "Animais":
            return ['<strong>Empatia selvagem:</strong> Você recebe +2 em Animais em ações de Superar para acalmar os ânimos de um animal que esteja hostil.'];
            break;

        case "Atletismo":
            return ['<strong>Corredor Audaz:</strong> Durante o conﬂito, você se move duas zonas sem precisar rolar os dados ao invés de apenas uma, desde que não haja aspectos de situação restringindo o seu movimento.','<strong>Parkour Hardcore:</strong> +2 quando quiser superar usando Atletismo em uma perseguição em telhados ou outro ambiente precário.','<strong>Reação Atordoante:</strong> Quando for bem-sucedido com estilo em uma defesa contra ataque de um oponente, você automaticamente contra -ataca com algum tipo de soco potente ou contundente. Você poderá colocar o aspecto Atordoado no seu oponente e ganhar uma invocação gratuita dele, ao invés de apenas um impulso.'];
            break;

        case "Atirar":
            return ['<strong>Tiro Específico:</strong> Durante um ataque usando Atirar, gaste um ponto de destino e declare uma condição específica que você deseja inﬂigir no alvo, como Tiro na Mão. Se bem-sucedido, você coloca isso como um aspecto de situação além do estresse causado pelo acerto.','<strong>Rápido No Gatilho:</strong> Você pode usar Atirar no lugar de Percepção para determinar sua ordem no turno de um conﬂito físico onde atirar rapidamente possa ser relevante.','<strong>Precisão Misteriosa:</strong> Uma vez por conﬂito, adicione uma invocação grátis de uma vantagem criada que represente o tempo gasto apontando ou alinhando o tiro (como Na Mira).'];
            break;

        case "Comunicação":
            return ['<strong>Boa Impressão:</strong> Você pode, duas vezes por sessão, elevar um impulso obtido com Comunicação a um aspecto de situação com uma invocação grátis.','<strong>Demagogo:</strong> +2 em Comunicação quando fizer um discurso inspirador em frente a uma multidão (se houverem PdNs importantes ou PJs na cena, é possível atingir a todos simultaneamente com uma rolagem ao invés de dividir as tensões).','<strong>Popular:</strong> Se estiver em uma região onde você seja popular e bem-visto, é possível usar Comunicação no lugar de Contatos. Você pode estabelecer sua popularidade gastando um ponto de destino para declarar os detalhes da história ou devido a uma explicação prévia.'];
            break;

        case "Condução":
            return ['<strong>Duro na Queda:</strong> +2 em Condução sempre que estiver perseguindo outro veículo.','<strong>Pé na Tábua:</strong> Você pode fazer seu veículo atingir uma velocidade maior do que é possível. Sempre que estiver em uma disputa onde a velocidade é o principal fator (como em uma perseguição ou corrida) e empatar com seu adversário em uma rolagem de Condução, é considerado sucesso.','<strong>Preparar Para o Impacto!:</strong> Você ignora duas tensões de dano ao colidir com outro veículo. Portanto, se a colisão e causar quatro tensões de dano, você recebe apenas duas.'];
            break;

        case "Conhecimentos":
            return ['<strong>Já Li Sobre Isso:</strong> Você já leu centenas – se não milhares – de livros sobre inúmeros assuntos. Você pode gastar um ponto de destino para usar Conhecimentos no lugar de qualquer outra perícia em uma rolagem, desde que consiga explicar seu conhecimento sobre a ação que quer realizar.</strong>','<strong>Escudo da Razão:</strong> Você pode usar Conhecimentos como defesa contra tentativas de Provocar, contanto que consiga justificar sua habilidade de superar o medo através de pensamento racional e razão.','<strong>Especialista:</strong> Escolha um campo de especialização, como alquimia, criminologia ou zoologia. Você recebe +2 nas rolagens de Conhecimentos que estejam relacionadas ao seu campo de especialização.'];
            break;

        case "Contatos":
            return ['<strong>Ouvido Atento:</strong> Sempre que alguém iniciar um conﬂito contra você em uma área onde haja uma rede de contatos sua, você usa a perícia Contatos no lugar de Percepção para determinar a iniciativa, pois foi avisado a tempo.','<strong>Língua Afiada:</strong> +2 quando usar ação criar vantagem para espalhar rumores sobre alguém.','<strong>Peso da Reputação:</strong> Você pode usar Contatos ao invés de Provocar para criar vantagens baseadas no medo gerado pela reputação sinistra associada a você e àqueles que o acompanham. Deve existir um aspecto apropriado que esteja ligado a essa façanha.'];
            break;

        case "Empatia":
            return ['<strong>Detector de Mentiras:</strong> +2 em todas rolagens de Empatia realizadas para discernir ou descobrir mentiras, independente se direcionadas a você ou a outra pessoa.','<strong>Faro para Problemas:</strong> Você pode usar Empatia ao invés de Percepção para determinar o seu turno em um conﬂito, contanto que tenha a chance de observar ou conversar com os envolvidos por alguns minutos antes.','<strong>Psicólogo:</strong> Uma vez por sessão você pode reduzir um nível de consequência de alguém (severa para moderada, moderada para suave, suave para nenhuma) se for bem-sucedido em uma rolagem de Empatia com uma dificuldade Razoável (+2) para uma consequência suave, Boa (+3) para uma consequência moderada ou Ótima (+4) para severa. Você precisa conversar com a pessoa que está tratando por ao menos meia hora para que ela possa receber os benefícios dessa façanha e também não é possível usá-la em si mesmo (normalmente, essa rolagem é usada apenas para iniciar o processo de melhora, ao invés de alterar o nível da consequência).'];
            break;

        case "Enganar":
            return ['<strong>Mentiras Sobre Mentiras:</strong> +2 para criar uma vantagem de Enganar sobre alguém que já tenha acreditado em uma de suas mentiras anteriormente nessa sessão.','<strong>Jogos Mentais:</strong> Você pode usar Enganar no lugar de Provocar para realizar ataques mentais, desde que consiga inventar uma mentira bem elaborada como parte do ataque.','<strong>Um Indivíduo, Muitas Faces:</strong> Ao conhecer alguém novo, você pode gastar um ponto de destino para declarar que já conhecia essa pessoa antes, mas sob determinado disfarce. Crie um aspecto de situação para representar sua história enganosa e você pode usar Enganar no lugar de Comunicação sempre que interagir com essa pessoa.'];
            break;

        case "Furtividade":
            return ['<strong>Mais Um Na Multidão:</strong> +2 em Furtividade para se camuﬂar em uma multidão. O significado de “multidão” depende do ambiente – uma estação de metrô exige mais pessoas do que um bar pequeno.','<strong>Invisibilidade Ninja:</strong> Uma vez por sessão, você pode desaparecer de vista ao custo de um ponto de destino, usando uma fonte de fumaça (pastilhas, bombas, etc.) ou outra técnica misteriosa. Isso coloca o impulso Desaparecido. Enquanto estiver assim, ninguém pode atacar ou criar vantagem sobre você até que sejam bem-sucedidos em uma ação de superar com Percepção para saber onde você está (basicamente significa que eles abrirão mão de uma ação na tentativa). Esse aspecto desaparece assim que invocado, ou se alguém for bem-sucedido na rolagem de superar.','<strong>Alvo Deslizante:</strong> Contanto que esteja na escuridão ou nas sombras, você pode usar Furtividade para se defender contra ataques de Atirar de adversários que estejam ao menos a uma zona de distância.'];
            break;

        case "Investigar":
            return ['<strong>Atenção aos Detalhes:</strong> Você pode usar Investigar em lugar de Empatia para se defender contra o uso da perícia Enganar. O que os outros aprendem através de reações e intuição, você aprendeu através da observação minuciosa de micro expressões.','<strong>Bisbilhoteiro:</strong> Em uma rolagem bem-sucedida de Investigar usando a ação de criar vantagem na tentativa de espionar uma conversa, você pode descobrir ou criar um aspecto adicional (porém sem receber uma invocação grátis).','<strong>O Poder Da Dedução:</strong> Uma vez por cena você pode gastar um ponto de destino (e alguns minutos de observação) para realizar uma rolagem especial de Investigar, representando suas habilidades de dedução. Para cada tensão que conseguir nessa rolagem você descobre ou cria um aspecto ou na cena, ou no alvo observado, mas pode invocar apenas um deles gratuitamente.'];
            break;

        case "Lutar":
            return ['<strong>Mão Pesada:</strong> Quando é bem-sucedido com estilo em um ataque usando Lutar e escolher reduzir o resultado para obter um impulso, você ganha um aspecto de situação com uma invocação grátis ao invés do impulso.','<strong>Arma Reserva:</strong> Sempre que alguém estiver prestes a adicionar o aspecto de situação Desarmado em você ou similar, gaste um ponto de destino para declarar que você possui uma segunda arma. Ao invés de ganhar o aspecto de situação, seu oponente ganha um impulso, representando o momento de distração durante a troca de arma.','<strong>Golpe Matador:</strong> Uma vez por cena, ao causar uma consequência em um oponente, você pode gastar um ponto de destino para aumentar a severidade dela (então suave se torna moderada, moderada se torna severa). Se seu oponente receberia uma consequência severa, ele recebe a consequência severa mais uma segunda consequência ou tem que sair da luta.'];
            break;

        case "Magia":
            return ['<strong>Impulso de Mana</strong>: Você pode gastar 1 PD para conjurar uma magia mesmo que não tenha mais condições/energia para tal.'];
            break;

        case "Ofícios":
            return ['<strong>Sempre Criando Coisas Úteis:</strong> Você não precisa gastar um ponto de destino para declarar que possui as ferramentas apropriadas para um trabalho em particular usando Ofícios, mesmo em situações extremas (como quando está numa prisão e longe do seu equipamento). Esse tipo de oposição deixa de existir.','<strong>Melhor Que Novo:</strong> Sempre que obtiver um sucesso com estilo numa ação de superar para consertar um dispositivo, você pode criar imediatamente um novo aspecto de situação (com uma invocação grátis) que reﬂita as melhorias realizadas, ao invés de apenas um impulso.','<strong>Precisão Cirúrgica:</strong> Quando usa Ofícios em um conﬂito envolvendo algum tipo de mecanismo, você pode filtrar alvos indesejados em ataques de zona inteira sem ter que dividir o dano (normalmente é necessário dividir sua rolagem entre os alvos).'];
            break;

        case "Ocultismo":
            return ['<strong>Conhecimentos Ocultos</strong>: Você recebe +2 em Ocultismo ao Criar Vantagem quando encontra algum ser que não seja do mesmo plano que você.'];
            break;

        case "Percepção":
            return ['<strong>Perigo Iminente:</strong> Você possui uma capacidade sobrenatural para detectar o perigo. Sua perícia Percepção funciona normalmente para condições como camuﬂagem total, escuridão ou outros empecilhos sensoriais em situações onde alguém ou algo tem a intenção de prejudicar você.','<strong>Leitura Corporal:</strong> Você pode usar Percepção no lugar de Empatia para aprender sobre os aspectos de alguém através da observação.','<strong>Reação Rápida:</strong> Você pode usar Percepção no lugar de Atirar para realizar tiros rápidos que não envolvam uma grande necessidade de precisão na pontaria. No entanto, por estar realizando uma ação instintiva, você não tem a capacidade de identificar seu alvo quando usar essa façanha. Então, por exemplo, você pode ser capaz de atirar em alguém que está se movendo por entre os arbustos com essa façanha, mas você não será capaz de dizer se é um amigo ou inimigo antes de puxar o gatilho. Escolha com cuidado!'];
            break;

        case "Provocar":
            return ['<strong>Armadura do Medo:</strong> Você pode usar Provocar para se defender de ataques realizados com a perícia Lutar, mas apenas até o momento que receber algum estresse no conﬂito. É possível deixar seu oponente hesitante em atacar, mas quando alguém os mostrar que você também é humano, a vantagem desaparece.','<strong>Incitar Violência:</strong> Ao criar uma vantagem sobre um oponente usando Provocar, você pode usar sua invocação grátis para se tornar o alvo da próxima ação relevante daquele personagem, tirando a atenção dele de outro alvo.','<strong>Tá Bom Então!:</strong> Você pode usar Provocar no lugar de Empatia para aprender sobre os aspectos de seu alvo, por provocar até que ele revele algum. O lvo pode se defender usando Vontade (se o Narrador achar que o aspecto em si é vulnerável à provocação, você recebe um bônus de +2).'];
            break;

        case "Recursos":
            return ['<strong>O Dinheiro Fala Mais Alto:</strong> Você pode usar Recursos no lugar de Comunicação em qualquer situação na qual dinheiro possa ajudar.','<strong>Investidor Experiente:</strong> Você recebe uma invocação gratuita adicional quando criar vantagens com Recursos, contanto representem o retorno de um investimento feito em outra sessão (ou seja, não é possível declarar que já tinha feito, mas se você fizer durante o jogo, você recebe retornos maiores).','<strong>Fundos de Investimento:</strong> Duas vezes por sessão, você pode receber um impulso que represente algum tipo de sorte inesperada ou entrada de dinheiro.'];
            break;

        case "Roubo":
            return ['<strong>Sempre Há Uma Saída:</strong> +2 para Roubo quando você tenta criar uma vantagem ao tentar escapar de algum lugar.','<strong>Especialista em Segurança:</strong> Não é preciso estar presente para oferecer oposição ativa a alguém que está tentando superar artifícios de segurança criados ou montados por você (normalmente, um personagem rola contra uma oposição passiva nessas situações).','<strong>Gíria da Ruas:</strong> Você pode usar Roubo no lugar de Contatos sempre que lidar especificamente com ladrões e marginais.'];
            break;

        case "Vigor":
            return ['<strong>Lutador:</strong> +2 nas rolagens da perícia Vigor feitas para criar vantagem sobre um inimigo por agarrá-lo ou uma ação similar.','<strong>Saco de Pancadas:</strong> Você pode usar Vigor para se defender contra ataques da perícia Lutar feitos com os punhos e pernas ou instrumentos de contusão, porém você sempre recebe uma tensão de estresse físico em caso de empate.','<strong>Resistente Como Aço:</strong> Uma vez por sessão, ao custo de um ponto de destino, você pode reduzir a severidade de uma consequência física moderada para uma consequência suave (se o campo da consequência suave estiver livre) ou apagar uma consequência suave.'];
            break;

        case "Vontade":
            return ['<strong>Determinado:</strong> Use Vontade no lugar de Vigor em qualquer rolagem de superar para feitos físicos.','<strong>Duro na Queda:</strong> Você pode escolher ignorar uma consequência suave ou moderada pela duração da cena. Ela não poderá ser forçada ou invocada por seus inimigos. Ao fim da cena ela voltará pior, no entanto; se era uma consequência suave, se torna moderada e se era moderada, se tornará severa.','<strong>Indomável:</strong> +2 para se defender contra ataques de Provocar ligados especificamente à intimidação ou medo.'];
            break;

        case "Amargo":
            return ['<strong>Frutas Amargas:</strong><strong> Sempre que for fazer petiscos ou bebidas, posso ganhar +2 em Amargo quando criar vantagem. Pode ser usado uma vez por cena ou cook-off.','<strong>Amargor Refinado:</strong> A elegância de um bom prato é acompanhado por uma boa salada, ganho +2 em Amargo, para criar Acompanhamentos de saladas verdes. Pode ser usado uma vez por cena ou cook-off.','<strong>Agridoce:</strong> Sempre que for adicionar um sabor Amargo a um prato Doce, recebo +2 para criar vantagem. Pode ser usado uma vez por cena ou cook-off.'];
            break;

        case "Frio":
            return ['<strong>Ceviche Savvy:</strong> Como sou o Mestre das comidas cruas e frias, ganho +2 em Frios para preparar carnes não cozidas. Pode ser usado uma vez por cena ou cook-off.','<strong>Joias do Oceano:</strong> Cresci em um oceano e me especializei em comidas de lá, posso ganhar +2 em Frios para criar um aspecto de empratamento de Frutos do Mar.Pode ser usado uma vez por cena ou cook-off.','<strong>Picolé Ambulante:</strong> Como sou adaptado e gosto muito do frio, ignoro obstáculos relacionados com congelamento e resfriamento.'];
            break;

        case "Salgado":
            return ['<strong>Caramelizar:</strong> Sei como caramelizar ingredientes, posso usar Salgado em vez de Doce quando crio molhos. Pode ser usado uma vez por cena ou cook-off.','<strong>CarboMaster:</strong> Como um especialista na culinária da maromba ganho +2 em Salgado para criar Acompanhamentos que envolvam frangos ou batatas. Pode ser usado uma vez por cena ou cook-off.','<strong>Churrasqueiro:</strong> Sempre que for preparar uma proteína animal na grelha, recebo +2 para Criar Vantagem ao usar Salgado. Pode ser usado uma vez por cena ou cook-off.'];
            break;

        case "Picante":
            return ['<strong>Nunca está tão quente:</strong> Quando estou criando vantagem de Picante em um molho curry, eu ganho outra invocação livre. Essa segunda invocação só pode ser usada em aspectos de prato com Valor 2 ou menos. Pode ser usado uma vez por cena ou cook-off.','<strong>Hot hot hot:</strong> Se o ingrediente secreto for Picante, recebo +2 em Picante para Criar Vantagem na finalização do prato. Pode ser usado uma vez por cena ou cook-off.','<strong>Sombrero Mexicano:</strong> Recebo +2 em Picante ao Criar Vantagem para criar um prato ao estilo mexicano, como chilli ou guacamole.'];
            break;

        case "Doce":
            return ['<strong>Arquiteta Pasteleira:</strong> Eu posso ganhar +2 em Doce quando estiver gerando o aspecto de empratamento para massas de pastel. Pode ser usado uma vez por cena ou cook-off.','<strong>No ponto:</strong> Por ser mestre com chocolates, recebo +2 para Criar Vantagem com Doces ao fazer sobremesas que contenham chocolates. Pode ser usado uma vez por cena ou cook-off.','<strong>Mestre Patisserie:</strong> Recebo +2 ao Criar Vantagem com Doce para criar bolos, muffins e semelhantes. Pode ser usado uma vez por cena ou cook-off.'];
            break;

        case "Ácido":
            return ['<strong>Mestre da Marinada:</strong> Como sou o mestre da marinada posso usar Ácido em vez de Salgado quando preparar um prato de carnes ou cogumelos. Pode ser usado uma vez por cena ou cook-off.','<strong>Limão nunca é demais:</strong> Posso acrescentar um molho de limão a qualquer prato, recebo +2 em Ácido ao Criar Vantagem para fazê-lo. Pode ser usado uma vez por cena ou cook-off.','<strong>Tomates, tomates!:</strong> Ninguém cria um molho de tomate no ponto igual o meu, recebo +2 em Ácido para Criar Vantagem ao cozinhar um molho de tomate. Pode ser usado uma vez por cena ou cook-off.'];
            break;

        case "Agressivo":
            return ['<strong>Olhe nos Meus Olhos:</strong> Sempre que sou bem sucedido em um teste de Agressivo para colocar um aspecto mental em um oponente, ganhou outra invocação livre. Pode ser usado uma vez por cena.','<strong>Cortador:</strong> Posso ganhar +2 em Agressivo para coletar ingredientes ou aspectos de preparação. Pode ser usado uma vez por cena ou cook-off.','<strong>Trapézio Ascendente:</strong> Posso ganhar +2 em Agressivo para gerar aspectos de preparação, que exijam força bruta. Pode ser usado uma vez por cena ou cook-off.'];
            break;    

        case "Ágil":
            return ['<strong>Bola de Demolição:</strong> Quando eu for bem sucedido em Criar Vantagem com Ágil, para derrubar alguém ou alguma coisa eu ganho outra invocação livre.','<strong>Duelista exímio:</strong> Como sou um dos maiores duelistas do mundo, consigo +2 quando agilmente ataco engajado em um duelo.','<strong>Agilidade felina:</strong> é capaz de se locomover facilmente dentro de uma floresta ou cidade, pulando sobre casas e telhados.','<strong>Dança das espadas:</strong> em um duelo, recebe +2 na abordagem Ágil ao realizar um ataque utilizando suas duas armas.','<strong>Hoje não!:</strong> Ao se defender de um ataque que atinge toda a zona, recebe um pulso de performance.'];
            break;

        case "Cuidadoso":
            return ['<strong>Escudo da Inocência:</strong> Como sou adorável, posso usar Cuidadoso em vez de Sorrateiro quando sabotar ou escapar de acusações. Pode ser usado uma vez por cena.','<strong>Analisador de Comportamento:</strong> Recebo um pulso de performance em Cuidadoso para Criar Vantagem relacionada a entender a intenção de outra pessoa. Pode ser usado uma vez por cena.','<strong>Contatos em todo lugar:</strong> uma vez por sessão, você pode gastar um ponto de destino para obter alguma informação relevante sobre alguém.','<strong>Comerciante:</strong> +2 ao Criar Vantagem com a abordagem Cuidadoso ao avaliar um objeto durante uma negociação.','<strong>Língua solta:</strong> +2 ao Criar Vantagem com a abordagem Cuidadoso quando está tentando tirar informações de alguém em uma conversa, sem que a pessoa perceba.','<strong>Resiliente:</strong> +2 ao Criar Vantagem com a abordagem Cuidadoso para resistir uma provocação ou evitar um conflito desnecessário.','<strong>Compenetrado:</strong> +2 em Superar com a abordagem Cuidadoso ao realizar uma ação que exige muita concentração.'];
            break;

        case "Esperto":
            return ['<strong>Maestro da Fofoca:</strong> Quando for bem sucedido com Esperto para Criar Vantagem relacionada a criar ou espalhar rumores, ganho outra invocação livre. Pode ser usado uma vez por cena.','<strong>Pirataria:</strong> Quando for bem sucedida em criar aspectos de sabotagens com Esperto, que envolvam armadilhas ou roubo, posso ganhar outra invocação livre. Pode ser usado uma vez por cena.','<strong>Puzzle master:</strong> Como amo desafios, consigo +2 em Esperto quando raciocino para superar um obstáculo quando estou diante de quebra-cabeça, enigma ou algo parecido.','<strong>Pensa rápido!:</strong> Uma vez por cena, ao ser pega cometendo algum crime, recebe um impulso que lhe ajude a se safar.','<strong>Estrategista:</strong> +2 ao Superar com a abordagem Esperto quando busca soluções para problemas que exigem resposta rápida.','<strong>Dom da verdade:</strong> +2 ao Criar Vantagem com a abordagem Esperto para identificar mentiras.'];
            break;

        case "Estiloso":
            return ['<strong>Amável e Paciente:</strong> Sou altamente compreensivo com pequenos momentos de raiva, ignoro qualquer obstáculo ou coação relacionados a Insultos ou Pressão verbal.','<strong>Língua Solta:</strong> +2 para Criar Vantagem usando a abordagem Estiloso ao contar alguma história para um desconhecido, seja verdadeira ou não.','<strong>Magia natural:</strong> +2 ao Criar Vantagem com a abordagem Estiloso quando realiza feitiços fora de uma cidade, em espaços naturais.','<strong>Voz melodiosa:</strong> +2 ao Superar utilizando a abordagem Estiloso ao tentar convencer alguém em uma discussão acalorada.','<strong>Voz da razão:</strong> +2 ao Criar Vantagem com a abordagem Estiloso quando defende algum aliado.','<strong>Orgulhoso:</strong> +2 em Superar, com qualquer abordagem, quando precisa provar o seu valor.'];
            break;

        case "Poderoso":
            return ['<strong>Fúria:</strong> uma vez por sessão, durante um conflito, pode se entregar a uma fúria insana, que lhe concede +2 em Poderoso. Nesse estado, ações além de Atacar recebem -2 de penalidade. O efeito dura até o fim da cena ou até quando o jogador desejar. Ao sair da fúria, o personagem recebe a consequência suave “Exausto”.','<strong>Fôlego extra:</strong> Uma vez por sessão, ao receber dano e não tiver mais caixas de estresse para serem marcadas, pode ignorar o dano se obtiver sucesso em um teste da abordagem Poderoso, contra uma oposição igual ao número de tensões recebidas.','<strong>Atrás de mim!:</strong> Por se preocupar com os seus aliados, uma vez por sessão, durante um conflito, você pode gerar para cada um deles um impulso para uma ação de defesa.','<strong>Pela justiça:</strong> +2 ao realizar ataques com a abordagem Poderoso quando está em conflito com seres genuinamente malignos.','<strong>Talismãs do poder:</strong> Pode utilizar a sua abordagem Poderoso para realizar qualquer efeito mágico com talismãs.'];
            break; 

        case "Sorrateiro":
            return ['<strong>Ignorado:</strong> Eu posso ganhar +2 em Sorrateiro para criar aspecto de sabotagem. Pode ser usado uma vez por cena.','<strong>Voz encantadora:</strong> Como possuo uma voz encantadora, consigo +2 quando Sorrateiramente obtenho vantagem enquanto converso com alguém.','<strong>Inescrupulosa:</strong> +2 ao Criar Vantagem com a abordagem Sorrateiro ao realizar feitiços contra um inimigo indefeso.','<strong>Mente serena:</strong> Recebe +2 em defesa contra ataques cuidadosos, espertos ou estilosos.','<strong>Ataque furtivo:</strong> +2 na abordagem Sorrateiro ao realizar um ataque contra um alvo distraído, que não está ciente de sua presença.'];
            break;

        case "Umdaar Ágil":
            return ['<strong>Soco Laser:</strong> Você bate mais rápido e faz mais estrago que um laser. Ganhe +2 para atacar de modo Ágil um oponente que ainda não tenha realizado ataques neste conflito. Além disso, você nunca estará Desarmado.','<strong>Teletransporte:</strong> Sempre que tiver sucesso ao se defender de ataques de longo alcance de modo Ágil ou Sorrateiro, é possível se mover uma zona imediatamente.','<strong>Visão de Raio-X:</strong> Uma vez por cena, quando tentar superar de modo Ágil um aspecto que está limitando sua visão ou sentidos, ganhe um Pulso de Performance.','<strong>Arco, Besta ou Laser:</strong> Uma vez por cena, quando atacar de modo Ágil e tiver um sucesso com estilo, você pode ignorar o impulso que seria gerado e atacar novamente contra o mesmo alvo ou contra outro personagem na mesma zona.','<strong>Correntes:</strong> Você está armado com um chicote, rede, corrente, boleadeira ou outra arma capaz de aprisionar seus alvos. Você pode criar vantagens de modo Ágil para envolver ou amarrar um personagem. Durante uma cena, na primeira vez em que um inimigo tenta se libertar de sua arma, a oposição aumentará em +2.','<strong>Asas:</strong> Você tem asas ou membranas que te permitem planar. +2 quando usar Ágil ou Estiloso para superar obstáculos físicos que possam ser sobrevoados.','<strong>Pernas Fortes:</strong> Suas pernas são fortes e aptas a correr e pular. Em desafios e Enrascadas, some +2 para superar obstáculos ou criar vantagens de modo Ágil.','<strong>Sentidos Extras:</strong> Ganhe +2 ao superar de modo Ágil aspectos de obstáculo que impedem você de encontrar pessoas ou itens escondidos nas proximidades.'];
            break;

        case "Umdaar Cuidadoso":
            return ['<strong>Ler Mentes:</strong> Você pode usar telepatia para ler as mentes dos oponentes usando Criar Vantagem e detalhes sobre suas reais intenções de modo Cuidadoso. Também, uma vez que tenha descoberto um aspecto do seu oponente desse jeito, ganhe +2 para criar ou descobrir aspectos mentais sobre ele com Esperto.','<strong>Pele Metálica:</strong> Você consegue cobrir sua pele com uma armadura de osso ou metal. Se você gastar uma rodada sem fazer nada além de se defender, ganhe +2 até o fim da cena sempre que se defender de ataques físicos de modo Cuidadoso.','<strong>Precognição:</strong> Você pode sentir o cheiro do problema. Uma vez por cena, ao se defender de modo Cuidadoso contra uma armadilha ou outra ameaça inanimada, você pode usar um Pulso de Performance no resultado.','<strong>Arma Viva:</strong> Sua arma se adapta e aprende. Quando você entra num conflito contra um oponente que já tenha enfrentado antes — como mais homens-arraia ou oponentes armados com espadas — ganhe um impulso imediatamente baseado em sua experiência anterior.','<strong>Espada ou Escudo:</strong> Você tem uma espada, um escudo ou ambos. Uma vez por cena, ao defender de modo Cuidadoso e ter um sucesso, ganhe um impulso.','<strong>Rifle ou Pistola:</strong> Você tem uma arma mortal de longo alcance — como uma carabina sônica, um canhão laser ou uma pistola de urânio — que pode cobrir uma área com seus disparos mortais. Uma vez por cena, é possível ganhar +2 ao Criar Vantagem de modo Cuidadoso, com fogo de supressão e tiros de aviso, ou até mesmo para colocar oponentes em posições complicadas.','<strong>Espinhos:</strong> Você tem espinhos, chifres ou rebarbas que representam um perigo a mais para quem tentar te tocar. +2 ao superar de modo Cuidadoso oponentes que estão tentando te manter no lugar.','<strong>Placas:</strong> Você tem placas, escamas ou um couro grosso. Sempre que você se defender de ataques físicos de modo Cuidadoso, receba 1 estresse a menos.'];
            break;

        case "Umdaar Esperto":
            return ['<strong>Confusão Mental:</strong> Usando energia psíquica, você pode atacar de modo Esperto a mente de um oponente, contanto que ele tenha uma mente para receber o ataque. Se você tiver um sucesso com estilo nesse ataque, pode descobrir um aspecto do alvo com uma invocação gratuita ao invés de ganhar um impulso. Além disso, você nunca ficará Desarmado.','<strong>Manipular Elementos:</strong> Você pode mover e manipular um tipo de elemento específico. Escolha uma categoria ampla de elemento, como ar, água, terra, metal, plantas ou fogo. Quando este elemento estiver presente numa cena, você pode atacar sem uma arma. Se a fonte desse elemento for abundante — como ar num campo aberto ou fogo numa tocha — você ganha +2 para criar vantagens com este elemento usando Esperto.','<strong>Artefato Menor:</strong> Uma vez por cena, ganhe +2 ao criar vantagens para prender um oponente física ou mentalmente usando Esperto.','<strong>Varinha:</strong> Você tem uma varinha mágica, um anel mágico, uma bola de cristal ou outro item mágico qualquer. Quando tentar superar obstáculos com Esperto, ganhe +2 se puder narrar como o item te ajuda na tentativa.','<strong>Cuspe:</strong> Você é capaz de surpreender o inimigo com sua habilidade de cuspir veneno, ácido ou uma mistura cegante. Você pode atacar oponentes de modo Esperto a até duas zonas de distância. Na primeira vez que usar este ataque em uma cena, some +2 ao ataque. Além disso, você nunca se torna Desarmado.','<strong>Tentáculos:</strong> Você possui tentáculos pegajosos ou uma cauda preênsil que podem surpreender seu inimigo. Some +2 quando usar Esperto para criar vantagens ligadas a desarmar ou roubar algo de um oponente.'];
            break;

        case "Umdaar Estiloso":
            return ['<strong>Fluorescência:</strong> Você pode emitir luz da sua pele, olhos ou mãos. Uma vez por cena, quando tentar superar um aspecto relacionado à escuridão de modo Estiloso, você pode usar um Pulso de Performance no resultado. Sempre que usar essa façanha, você ganha o aspecto situacional Brilhando sem invocações gratuitas e ele dura até o fim da cena.','<strong>Grito Sônico:</strong> Você pode emitir gritos sônicos barulhentos a ponto de causar dor intensa. Uma vez por sessão, você pode usar Estiloso para atacar com +2, atingindo todos os outros personagens na mesma zona — incluindo seus aliados!','<strong>Lança ou Javelina:</strong> Em conflitos físicos, você pode usar Estiloso ao invés de Ágil quando determinar sua iniciativa. Uma vez por sessão, você pode usar sua abordagem Estilosa para fazer isso com um bônus de +2.','<strong>Rapieira:</strong> Você usa uma rapieira, leque de guerra ou outra arma exótica das cortes com uma ou duas mãos. No início de qualquer conflito, como uma ação livre antes de qualquer personagem, você pode tentar criar uma vantagem de modo Estiloso que demonstre sua habilidade impressionante como lutador.','<strong>Crista ou Juba:</strong> Você tem algo em sua aparência, como uma crista, juba ou manchas, que o torna amedrontador. +2 quando criar vantagem de modo Estiloso para meter medo em alguém.','<strong>Grito de Guerra:</strong> Você emite rugidos, chiados ou outros sons ameaçadores. Some +2 a seus ataques mentais de modo Estiloso se eles forem baseados em causar medo no oponente.'];
            break;

        case "Umdaar Poderoso":
            return ['<strong>Explosão de Fogo:</strong> Você pode disparar ou exalar fogo. Sempre que tiver um sucesso com estilo num ataque Poderoso, poderá ignorar o impulso que ganharia para colocar o aspecto Em Chamas! no defensor ou num objeto próximo com uma invocação gratuita. Este efeito só funciona se o alvo for passível de pegar fogo. Além disso, você nunca estará Desarmado.','<strong>Raio Energético:</strong> Escolha um tipo de energia — como fogo, luz, eletricidade ou gravidade. Sempre que você tiver um sucesso com estilo num ataque Poderoso ou Estiloso, poderá ignorar o impulso que ganharia e mover o defensor por até duas zonas. Além disso, você nunca será Desarmado.','<strong>Superforça:</strong> Uma vez por cena, quando tentar superar um obstáculo tentando quebrá-lo de modo Poderoso, ganhe um Pulso de Performance. Sempre que usar esta façanha, coloque Escombros como um aspecto de situação sem invocações gratuitas.','<strong>Arma Mágica:</strong> Você tem uma arma mágica ou um artefato menor que causa dano. Uma vez por cena, quando atacar de modo Poderoso ou Estiloso, você pode chamar a arma pelo nome em voz alta e ganhar +2 na jogada.','<strong>Espada Bastarda ou Montante:</strong> Ganhe +3 na rolagem de seu primeiro ataque Poderoso num conflito.','<strong>Machado ou Martelo de Batalha:</strong> Uma vez por cena, quando atacar de modo Poderoso e tiver sucesso, você pode causar +2 de estresse ao inimigo.','<strong>Cabeça Dura:</strong> Seu crânio é grosso e permite que você aguente golpes poderosos ou dê cabeçadas em tudo o que vier pela frente. Sempre que uma armadilha ou um oponente tentar criar vantagens para te atrapalhar (como Feitiço atordoante ou Armadilha de redes), ganhe +2 para se defender contra elas de modo Poderoso ou Cuidadoso.','<strong>Garras:</strong> Suas garras são capazes de fazer um estrago sério. Sempre que você atacar de modo Poderoso e tiver um sucesso, cause 1 estresse adicional. Além disso, você nunca ficará Desarmado.','<strong>Mordida:</strong> +2 quando usar Poderoso para atacar alguém que está preso ou restrito, representado por aspectos como Preso ao chão.'];
            break;

        case "Umdaar Sorrateiro":
            return ['<strong>Mudar de Forma:</strong> Você pode usar ilusões ou mutação para alterar sua aparência. Você pode usar Criar Vantagem para ganhar um aspecto de disfarce sobre si próprio de modo Sorrateiro. Se um oponente tentar superar este aspecto para te descobrir, você pode resistir de modo Sorrateiro.','<strong>Vampirismo:</strong> Escolha algo para drenar e o modo como você o faz — sugar força vital através das palmas de sua mão ou sangue por meio de presas, por exemplo. Sempre que você atacar de modo Sorrateiro e tiver um sucesso com estilo, escolha um efeito: remova uma invocação gratuita de um aspecto naquele inimigo, incluindo aspectos de arma; ou melhore o impulso de seu sucesso com estilo transformando-o num aspecto com uma invocação grátis. Alguns alvos são imunes a essa façanha — você não pode drenar sangue de um robô.','<strong>Adaga:</strong> Você pode esfaquear ou arremessar adagas em seus inimigos. Uma vez por cena, imediatamente antes da rolagem de um ataque Sorrateiro, você pode criar um Ponto Fraco no defensor sem invocações gratuitas.','<strong>Arma Envenenada:</strong> Você usa uma arma envenenada. Pode ser uma adaga, flechas ou dardos. Uma vez por cena, quando estiver atacando alguém de modo Sorrateiro ou Ágil e causar pelo menos 2 tensões, você pode forçar o defensor a absorver 2 de estresse na forma de uma consequência leve. No entanto, alguns alvos como robôs e objetos inanimados são imunes a veneno.','<strong>Zarabatana:</strong> Você tem uma arma silenciosa como uma zarabatana ou um shuriken. Uma vez por cena, depois de atacar de modo Sorrateiro e ter sucesso, você pode criar um aspecto de Escondido para si mesmo sem invocações gratuitas. Você não pode ser atacado até que um oponente remova este aspecto, geralmente superando-o. Você perde o aspecto ao realizar grandes ações, como atacar novamente ou se mover de uma zona a outra.','<strong>Anfíbio:</strong> Você tem guelras ou pulmões enormes. Ganhe +2 para criar vantagens de modo Sorrateiro quando se esconder em água ou barro.','<strong>Camuflagem:</strong> +2 quando se defender de ataques à distância de modo Esperto ou Sorrateiro numa área onde se camuflar seja possível.','<strong>Cauda Mortífera:</strong> Sua cauda termina em algo cortante ou pesado. Uma vez por cena, se um inimigo em sua zona lhe causar estresse com um ataque físico, assim que acabar o turno dele, você pode realizar um contra ataque Sorrateiro imediato.'];
            break;

        case "Uranium":
            return ['<strong>Saqueador de Despensa:</strong> Posso ver perfeitamente na escuridão, ignoro qualquer obstáculo ou coação de aspecto.','<strong>Minha mãe era um liquidificador:</strong> Já tenho utensílios de cozinhas nos meus braços, por isso nunca preciso de facas e instrumentos de mãos.Iignoro qualquer obstáculo ou coação de aspecto que envolvam esses utensílios.','<strong>Garoto da Midia:</strong> Como as câmeras me amam, eu posso ganhar +2 em Estiloso quando estou me defendendo em um confessionário ou chamando atenção do público. Pode ser usado uma vez por cena ou cook-off.','<strong>Hálito flamejante:</strong> Como sou um réptil soprador de fogo, ignoro qualquer obstáculo ou coação de aspecto relacionado a assar comida.','<strong>Turbo Charge:</strong> Sempre que for bem sucedida usando Esperto, para criar um Aspecto de preparativo que esteja relacionado a uma peça de equipamento (como preparar o forno ou usar o Larder-atron), eu ganho outra invocação livre. Pode ser usado uma vez por cena ou cook-off.','<strong>Amante do Mar:</strong> Ignoro qualquer obstáculo ou coação de aspecto relacionado a ficar submersa ou molhada por água.','<strong>Aqui é Mutante!:</strong> Como sou um mutante, ignoro qualquer obstáculo ou coação de aspecto relacionado a radiação.','<strong>Aproveitamento Máximo:</strong> Em Umdaar Aprendi a tirar tudo que podia das criaturas que caçávamos, posso remover aspetos prejudiciais ou gerar um segundo aspecto, para ingredientes secretos relacionados a carne de predadores. Pode ser usado uma vez por cena ou cook-off.','<strong>Arconalta Experiente:</strong> Tirar objetos em locais difíceis é minha especialidade, ganho +2 em Cuidadoso para coletar ingredientes ou objetos isolados por armadilhas ou ambientes de alta periculosidade. Pode ser usado uma vez por cena ou cook-off.','<strong>Imparável:</strong> Sou uma máquina de movimentação, ignoro qualquer obstáculo ou coação de aspecto relacionado a ficar presa ou ser imobilizada.'];
            break;

    }

};

Façanhas de proteção
Aparência Inofensiva: Por conta de sua aparência inocente, o personagem precisa passar em um teste contra o Instintivo da criatura para ter coragem de atacá-la.
Aparentemente Morto: Ao marcar a caixa de resistência Machucado, a criatura cai como morta — uma avaliação superficial confirmaria esse fato. Em um momento oportuno, a criatura salta em um ataque Ágil +5 contra o personagem mais próximo.
Aura Terrível: A criatura emite [odor, calor, energia, mágica]. Personagens na mesma zona que a criatura sofrem 1 de dano por rodada.
Autodestruição: ooo Se a criatura marcar sua caixa de resistência Machucado,
ela ativa a sua autodestruição. Marque uma das caixas acima. A cada rodada completa,
marque outra caixa. Se todas as marcas forem marcadas, a criatura causa uma explosão
Violenta +5 contra todos na mesma zona, e +2 em todos em uma zona adjacente, se não
houver obstáculos.
Barreira: Ataques à distância atingem primeiro a [barreira, campo de força] da
criatura. Essa barreira tem 4 caixas de resistência e +2 para defesas. Ao marcar todas as
caixas de resistência, a barreira é desativada.
209
Casca Grossa: Qualquer dano causado à criatura menor ou igual a 2 é absorvido por
[carapaça, escudo, exoesqueleto, campo de força] e não atinge a criatura.
Deflexão: Pagando um ponto de destino, a criatura pode defletir todo o dano que
sofreria de um único ataque para qualquer outro alvo a sua escolha.
Desafiar a Morte: Se um dano fosse marcar a caixa de resistência Cedendo da
criatura, ela pode gastar um ponto de destino para negar todo o dano recebido nesse
ataque ao invés disso
Desarmar: Se for bem-sucedida na defesa a um ataque armado corpo a corpo, a
criatura pode gastar duas tensões para deixar o alvo Desarmado.
Escorregadio: Sempre que um personagem tentar agarrar a criatura, ela recebe uma
invocação grátis de seu aspecto Escorregadio para se defender.
Esquiva Frustrante: Sempre que for bem-sucedida em esquivar um ataque corpo-a-
corpo, a criatura causa 1 de dano mental no atacante desconcertado.
Fuga Estratégica: A qualquer momento, a criatura pode tentar fugir rolando +X
contra +Y, sendo X o número de suas caixas de resistência já marcadas, e Y o número de
personagens de jogador na cena.
Mestre da Camuflagem: Com um teste Instintivo bem-sucedido contra +2, a criatura
se mescla com a paisagem. Descobrir sua posição requer um teste bem-sucedido contra o
dobro de +X, sendo X o número de tensões que a criatura conseguiu em seu teste.
Mestre da Estratégia: Antes do conflito começar, a criatura pode fazer um teste
Instintivo contra +X, sendo X o número de personagens em cena. Em um sucesso, ela
ganha o aspecto Previ seus movimentos, com Y invocações grátis, sendo Y o número de
tensões conseguidas no teste.
Meu Corpo é uma Arma: Se estiver sendo atacada por um personagem desarmado,
e se o Violento da criatura for maior que o [Vigor, Poderoso] do atacante, este recebe
uma quantidade de dano igual a diferença Violento-[Vigor, Poderoso], independente do
resultado do ataque e da [abordagem, perícia] utilizada.
Mímica: Se um personagem utilizar uma façanha contra uma criatura, ela pode
replicar aquele efeito em seu turno como um sucesso automático, gastando um
ponto de destino.
Morra por Mim: Se um capanga da criatura estiver na mesma zona que ela, ela pode
escolher redirecionar o dano para um de seus capangas, escondendo-se atrás dele.
Movimentos Imprevisíveis: Um ataque à distância contra o Ágil da criatura precisa
de no mínimo 3 tensões para conseguir acertá-la.
Múltiplas Cópias: A criatura é capaz de criar cópias de si mesma em forma de
[ilusões, hologramas]. Qualquer tentativa de acertar a criatura tem 1⁄3 de chance de acertar
uma cópia falsa, que se desfaz ao ataque e surge em outro lugar. Se um personagem
acertar a criatura real, as cópias desaparecem.
Pedaços Mortais: Se um dos [membros, componentes, armas, dispositivos] da
criatura for [arrancado, decepado], ele passa a agir como uma criatura independente,
que ataca com +3 e tem 4 caixas de resistência.
210
Pegue de Volta: Uma vez por cena, ao receber um ataque [mágico, de armas de fogo,
laser], a criatura pode escolher não rolar os dados e tomar todo o dano. Em seu turno, ela
pode expelir esse dano recebido em forma de um ataque +X, onde X é a quantidade desse
dano. Após o contra-ataque, apague todas caixas de resistência marcadas por aquele dano.
Presença Aterradora: Se o Horrível da criatura for maior que [Vontade, Esperto]
do atacante, a criatura pode fazer o atacante rolar os dados duas vezes e ficar com o
pior resultado.
Recuperando o Fôlego: ooo A cada turno em que a criatura não sofrer dano,
marque uma caixa. Ao marcar as 3 caixas, ela recupera caixas de resistência.
Reforços: oooo A cada rodada completa e a cada linha de resistência
completamente marcada da criatura, marque uma das caixas. Ao marcar as 4 caixas,
reforços chegam para auxiliar a criatura. Podem ser 2, 3 ou 4 capangas (decida
aleatoriamente, e pague um ponto de destino se quiser o dobro de capangas) com 3
caixas de resistência, o aspecto Defenderemos o mestre até morte e apenas um ponto de
destino extra compartilhado.
Resistência: A criatura possui resistência a [elemento, tipo de arma, tipo de ataque].
Todo dano causado por essa fonte é reduzido pela metade (arredondado para baixo).
Resistência do Medo: Em uma ameaça Horrível bem-sucedida contra um alvo,
a criatura ganha X caixas de resistência extra, sendo X igual ao número de tensões
conseguida no teste. Essas caixas de resistência só podem ser usadas para marcar dano
sofrido pelo personagem afetado pela ameaça.
Talismã: Nenhum dano é causado contra a criatura até que seu [talismã, núcleo de
energia, grimório, computador central] seja destruído. Esse dispositivo tem 5 caixas de
resistência e pode estar ou não no mesmo lugar que a criatura.
Façanhas de ataque
Ataque Localizado: A criatura pode optar por se impor uma penalidade de
-2 em um ataque Horrível para acertar um ponto específico do alvo. Se for bem
sucedida, ela causa 3 tensões extras e ganha o aspecto Achei seu ponto fraco! com
uma invocação grátis.
Ataque Rotatório: A criatura pode fazer um ataque Violento contra todos os
oponentes na mesma zona, dividindo o dano da maneira que desejar.
Arma Extra: Pagando um ponto de destino, a criatura pode declarar que tem
uma arma reserva escondida. Ao revelar a arma, os personagens recebem 1 de dano
mental por conta da surpresa desagradável.
Arremesso Qualquer Coisa: A criatura é capaz de usar objetos e elementos do
cenário até metade do seu peso para realizar ataques Violentos à distância.
Avanço Medonho: Sempre que ataca com Horrível se aproximando da vítima
vindo de uma zona adjacente, seu avanço causa 1 de dano mental no alvo, antes
mesmo das rolagens de dados.
211
Bem Onde Eu Queria: Ao sofrer dano corpo-a-corpo em um combate, a
criatura pode escolher sofrer 2 de dano adicional para se colocar na posição exata
para um contra golpe. O próximo ataque da criatura contra o personagem causador
do dano recebe +2 de bônus.
Conjurar Relâmpago: Ao custo de um ponto de destino, a criatura pode conjurar
um relâmpago que acerta o centro de uma zona a até duas de distância, se estiver em
campo aberto. Um personagem aleatório daquela zona que esteja carregando armas
ou objetos metálicos grandes e visíveis recebe um ataque Violento +5. Se nenhum
personagem usar metal, o ataque é Violento +2 contra todos na zona.
Conheço Seus Truques: Se a criatura evitou com sucesso o ataque de um
personagem no turno anterior, ela pode rolar os dados duas vezes e ficar com o
melhor resultado ao realizar um ataque Instintivo contra o mesmo alvo (apenas no
turno seguinte).
Cuspe Ácido: A criatura pode cuspir um jato de ácido em um ataque Horrível.
O alvo atingido sofre dano e recebe o aspecto Pele queimando oooo. Em cada
rodada subsequente, marque uma caixa. Cada caixa marcada garante +1 adicional à
criatura quando ela forçar esse aspecto contra a vítima.
Deglutir: A Criatura pode fazer um ataque Violento para morder um alvo a até
uma zona de distância. Se conseguir 4 ou mais tensões no ataque, ela pode abrir
mão do dano causado para engolir a vítima inteira. Ele agora está Sendo digerido +2
ooՕՕՕ — isso significa que escapar da barriga da criatura requer dois sucessos
contra +2. A cada falha, marque um círculo. Se os três círculos forem marcados, o
personagem foi digerido. A cada sucesso, marque uma caixa. Se ele marcar as duas
caixas, ele escapa e sofre dano igual ao número de caixas e círculos marcados, somados.
Disparos para Todo Lado: Ao disparar [armas, magias, flechas, raios] com
Violento, a criatura pode optar por não mirar em um alvo específico e criar Chuva
de Tiros +3 — agir fora de cobertura nessa rodada requer um sucesso contra +3 para
desviar dos tiros. Uma falha causa 2 de dano.
Empurrão Agressivo: Em um teste Violento bem-sucedido, a criatura consegue
deixar um alvo na mesma zona Jogado ao chão. Se um outro personagem na mesma
zona tiver Vigor/Poderoso menor que o Violento da criatura, ele também pode ser
derrubado com o mesmo teste (ele tem direito a um teste para se defender).
Estratégia de Btalha: Antes de começar o conflito, a criatura pode estudar o
ambiente com um teste Instintivo contra +2. Se bem-sucedida, ela pode usar as
tensões conseguidas 1 para 1 para declarar aspectos da cena a qualquer momento
durante o combate, ou para ganhar invocações grátis desses aspectos.
Fúria: Ao marcar a caixa de resistência Machucado, a criatura ganha duas
invocações grátis desse aspecto, que podem ser usadas para bônus em ataques Violentos.
Golpe Carregado: ooo Ao receber dano, a criatura pode marcar uma dessas
caixas para reduzir o dano em 1. Quando as 3 caixas estiverem marcadas, ela dispara
[um raio de energia, uma investida, um golpe fulminante] com Violento e um
bônus adicional de +3. Apague essas 3 caixas e marque 3 caixas de resistência da
criatura após o golpe.
212
Golpe Desorientador: Ao acertar um ataque Violento, a criatura pode gastar
um ponto de destino para que a vítima seja incapaz de usar sua [abordagem, perícia]
[Poderoso, Ágil, Lutar, Atirar] por três rodadas.
Inimigo Marcado: A criatura pode apontar para um personagem e fazer um
teste Horrível. Em um sucesso, ela recebe +2 em ataques contra aquele personagem
por X rodadas, sendo X o número de tensões conseguidas no teste.
Insanidade: A criatura possui o aspecto/abordagem Insano ooooo. Ela pode
optar por atacar com essa abordagem, somando aos dados o valor de caixas marcadas
(começando com +0, portanto). A cada sucesso, marque uma caixa (ou duas, se
conseguir 3 ou mais tensões). Ela não pode usar essa abordagem para se defender. Ao
marcar todas as cinco caixas, a criatura passa a fazer dois ataques por turno, mas todas
as suas outras abordagens são reduzidas para +1 (se já forem menores).
Lamento da Desolação: Com um teste Horrível bem-sucedido, a criatura chora
um lamento agonizante. Ela pode gastar 1 tensão para causar 1 ponto de dano, 2
tensões para impor o aspecto Desolado em um alvo, ou 4 tensões para que um alvo
desmaie (ele acorda depois de duas rodadas ou cinco minutos).
Melhor Contra os Mais Fortes: A criatura recebe +2 para atacar personagens
que tenham Poderoso/Lutar maior do que +2.
Morte no Escuro: Se estiver um ambiente completamente escuro, a Criatura
recebe +2 em seu Horrível e pode usá-lo para causar medo (e dano mental) com
sussurros, gemidos e risadas macabras.
Não Aceito Erros: Se falhar em um ataque, a criatura pode gastar um ponto de
destino para rolar novamente os dados, agora com um bônus extra de +2.
Não Me Cerque: A criatura recebe +1 em seus ataques Violentos para cada
personagem além do primeiro que esteja engajado em combate com ela.
Projéteis Errantes: Se falhar em um ataque à distância com [bolas de fogo,
bumerangue, boleadeiras], há 1⁄3 de chance do ataque acertar um outro alvo na
mesma zona (o novo alvo pode se defender normalmente contra a mesma rolagem).
Reflexos Rápidos: Ao custo de um ponto de destino, a criatura pode furar a
ordem de ação e fazer um ataque Ágil fora de turno com um bônus de +2.
Sede de Sangue: Se um personagem tiver um aspecto, condição ou consequência
que reflita dano físico sofrido pela criatura, ela recebe duas invocações grátis
adicionais desse aspecto.
Sofremos Juntos: Ao acertar o alvo com seu [raio necrótico, laser, lança maldita]
em um ataque Horrível, a criatura pode marcar suas próprias caixas de resistência
para causar dano adicional à vítima, na proporção de 1 para 1.
Teleguiado: A criatura ignora aspectos relativos a cobertura ao realizar ataques
Instintivos com [sua arma teleguiada, seus projéteis mágicos, shurikens].
Velocidade Alucinante: A criatura pode realizar um ataque Ágil e dividir as
tensões conseguidas entre dano físico a um alvo e o número de zonas que ela é capaz
de percorrer (antes ou depois do golpe).
213
Façanhas sociais
Ameaçador: Personagens com Vontade/Cuidadoso menor do que +3
simplesmente não são capazes de [atacá-lo, ofendê-lo, responder seus argumentos].
Argumentos Pavorosos: Se for bem-sucedida em uma tentativa de amedrontar por
palavras ameaçadoras com Horrível, a criatura pode fazer um segundo teste Instintivo
para completar sua ameaça oferecendo termos de rendição ou uma barganha custosa.
Todos os sucessos dos dois testes contam como dano mental ao alvo.
Barganhador Nato: Negociar contra a criatura requer evitar suas Ofertas
irrecusáveis +3 ooՕՕՕ — para conseguir o que se quer, os personagens precisam
resistir 2 vezes às suas ofertas (teste contra +3). Se falharem 3 vezes, não conseguem
o que queriam e podem acabar saindo de lá com algo que não desejavam.
Conheço a Dor que Carregas: A criatura descobre imediatamente o aspecto
de dificuldade do personagem com o menor valor de Vontade/Cuidadoso do grupo
logo ao encontrá-lo, e ganha uma invocação grátis dele.
Conheço Seu Passado: Se um personagem falhar em uma tentativa de persuasão,
blefe ou intimidação contra a criatura, ela responde com algum insulto, ofensa ou
revelação embaraçosa sobre o personagem, que causa imediatamente 2 de dano mental.
Detector de Mentiras: Qualquer tentativa de mentir contra a criatura é
considerada uma falha automática.
Enfurecedor: A criatura sabe como deixar os personagens com raiva. Em um
sucesso ao provocar um personagem com Instintivo, a criatura impõe o aspecto
Enfurecido no alvo, com uma invocação grátis.
Jargão da Sedução: A criatura fala com tanta propriedade sobre [determinado
assunto] que é difícil de não concordar com ela. Em um teste Instintivo bem-
sucedido, todos que ouviram a explicação da criatura acreditam que ela deve estar
falando a verdade.
Leitura de Intenções: Apenas com uma troca de olhar, a criatura pode ler as
intenções verdadeiras de um personagem com um teste Instintivo bem-sucedido. A
cada duas tensões conseguidas, a criatura descobre um dos aspectos do alvo.
Minha Reputação Me Precede: Se os personagens já ouviram falar da criatura, ela
recebe +2 para intimidar ou provocar os personagens durante seu primeiro encontro.
Parede de Gelo: Todo dano mental causado à criatura por meio de provocação
e intimidação é reduzido em 2 (mínimo 0).
Pavio Curto: ooo Marque uma caixa para cada provocação, mentira ou tentativa
de intimidação ou persuasão de um personagem contra a criatura. Ao marcar a terceira
caixa, a criatura interrompe a frase do personagem com um ataque Violento +5.
Uns Contra os Outros: A criatura pode fazer um ataque verbal contra dois alvos
ao mesmo tempo com Horrível (contra o melhor valor de Vontade/Esperto entre
os dois), jogando um contra o outro em argumentos envenenados. Em um sucesso,
214
ambos os personagens ganham o aspecto Não sei se confio em [nome do outro
personagem]. A criatura tem uma invocação grátis contra cada um deles.
Zombaria: Se a criatura for bem-sucedida em um teste Instintivo para zombar do
personagem, os aliados do personagem que ouviram a sátira devem ser bem-sucedidos
em um teste de Vontade/Cuidadoso contra +3 ou então cairão na risada. Para cada
personagem que rir de seu colega, a criatura recupera uma caixa de resistência.
Façanhas ambientais
Ao Meu Redor: Quando a criatura aparece na cena, junto dela aparecem 3
Aparatos de Destruição [mágicos, mecânicos, virtuais] em 3 zonas adjacentes a ela.
Cada um deles ataca um personagem em sua zona por turno com Violento +2. Eles
têm 4 caixas de resistência cada e defendem com Violento.
Brilho Ofuscante: Uma vez por cena, a criatura pode emitir um brilho de
grande intensidade, que emana de todo seu corpo. Quem não conseguir cobrir os
olhos em tempo (Ágil/Atletismo contra +5) está Cego por 3 rodadas. A criatura
pode pagar um ponto de destino para repetir esse efeito uma única vez.
Como a Palma de Minha Mão: Quando está em seu ambiente nativo, a criatura
ganha duas invocações grátis extras quando realiza um teste Instintivo para se esconder.
Controle do Clima: Com um sacrifício de energia vital, a criatura pode conjurar
[Tempestade, Nevasca, Escuridão, Luz do sol, Ventania]. Ela tem X invocações
grátis desse aspecto, sendo X o número de caixas de resistência que escolher marcar.
Demolição: A criatura pode optar por fazer um ataque Violento contra o
cenário. Se bem-sucedida, ela pode usar as tensões conseguidas 1 para 1 para criar
aspectos como Barreira de entulhos ou Esse pilar é minha espada, ou para ganhar
invocações grátis desses aspectos.
Obstáculos na Cena: Em um teste Violento bem-sucedido, a criatura consegue
arrancar partes do ambiente para impor obstáculos (+2 para se proteger) ou conseguir
uma posição vantajosa (+2 para atacar com Ágil). Ela pode usar esse bônus X vezes,
sendo X o número de tensões conseguidas no teste.
Ouvidos em Todo Lugar: O próprio ambiente é o sensor da criatura. Qualquer
personagem com Sorrateiro/Furtividade menor que +2 é percebido pela criatura,
mesmo a até 3 zonas de distância.
Pequenos Elementais: Pagando um ponto de destino, a criatura é capaz de
invocar pequenos [elementais, jatos de fogo, gêiseres] que sobem de [rachaduras
no chão, crateras, dispositivos] em quaisquer duas zonas adjacentes a ela. Quando
surgem, há 1⁄3 de chance de atingirem um personagem aleatório naquela zona com
um ataque Violento +4.
Realidade Alternativa: Ao custo de um ponto de destino, a criatura é capaz de
criar uma pequena área envolvendo a si e aos personagens em que as leis da física
funcionam de maneira diferente. Decida aleatoriamente:
215
•
 Todos podem flutuar
•
 É possível caminhar em paredes
•
 Chove [pedras, gelo, lesmas]
•
 Tudo é visto como [espelhado, distorcido, translúcido]
•
 Tudo se move em câmera lenta
•
 Tudo que é sólido se desmancha no ar
Ritual/Experimento: No início da cena, a criatura está realizando um [Ritual,
Experimento] + 3 ooooՕՕՕ — os personagens precisam de 4 sucessos contra
+3 antes de 3 falhas para interrompê-lo. Se não conseguirem, a criatura consegue
[invocar um Demônio, concluir sua Arma Apocalíptica], que tem 6 caixas de
resistência e ataca e defende com +4.
Terraformar: Pagando um ponto de destino, a criatura toca o chão para
transformar a zona onde está em Terreno [Pantanoso, Escaldante, Ácido,
Alagado], com duas invocações grátis. Superar esse terreno requer um teste bem-
sucedido contra +[2,3,4].
Terreno Pegajoso: A criatura secreta uma substância pegajosa que se espalha no
chão ao seu redor. O personagem que entrar na mesma zona que ela está preso na
Secreção pegajosa +3 oo — escapar dela requer dois sucessos contra +3.
Façanhas de alteração
A dor me impulsiona: Ao custo de um ponto de destino, a criatura pode trocar
os aspectos de suas linhas de resistência Abalado, Machucado e Cedendo por
Animado, Revigorado e Triunfando. Ela tem uma invocação grátis para cada um
deles assim que marcar as suas respectivas caixas. Ao usar duas delas, as linhas de
resistência retornam para os seus aspectos originais.
Abraço sombrio: Se a criatura conseguir agarrar um personagem em um teste
Horrível bem-sucedido, o alvo ganha a abordagem Horrível +2. A partir de agora,
o personagem pode optar por usar essa abordagem no lugar de qualquer outra
abordagem/perícia. Se o fizer e falhar, ele pode optar por ter um sucesso de 2 tensões
ao invés disso, e aumentar sua abordagem Horrível em +1 permanentemente. Se o
valor de Horrível se tornar a maior perícia/abordagem do personagem, ele sucumbe
à sombra e se torna um PdN.
Aprimorar arma: oooo Marque uma caixa a cada rodada que a criatura
conseguir evitar um ataque com Ágil e gastar seu turno aprimorando sua arma
com um teste Instintivo bem-sucedido (as duas condições são necessárias para
marcar a caixa). Ao marcar as 3 caixas, a arma da criatura passa a causar +2 tensões
em ataques bem-sucedidos.
216
Bipartição: Ao custo de dois pontos de destino, a criatura se divide em duas
iguais, ambas com as mesmas estatísticas e caixas de resistência (inclusive as que já
tiverem sido marcadas).
Canalizador de energia: Sempre que um personagem gastar um ponto de
destino, a criatura pode fazer um teste Horrível contra +2. Se conseguir pelo menos
3 tensões, a criatura recebe aquele ponto de destino. Isso não afeta o efeito original
do ponto de destino para o personagem.
Desmaterializar: ooo Marque uma caixa para que a criatura ignore obstáculos
ao se mover, ficando temporariamente imaterial.
Extensão antinatural: A criatura é capaz de estender seus membros e fazer um
ataque Ágil em outra zona adjacente como se estivesse lado a lado com o alvo.
Imunidade aprendida: Ao receber um ataque armado (corpo-a-corpo ou à
distância), a criatura pode optar por não rolar a defesa e receber todo o dano. Se o
fizer, ela estuda a dor sofrida e ganha Imunidade a [tipo de material que causou
dano]. A criatura não sofre dano por fontes similares por X turnos, sendo X a
quantidade sofrida de dano no ataque original, perdendo a imunidade após isso.
Mímico: Se a criatura estiver engajada em combate corpo-a-corpo contra um
personagem, ela pode gastar um ponto de destino para assumir uma forma física
idêntica a do personagem. Ele se torna uma Cópia fiel +2 ooo — distinguir a
cópia do original requer três sucessos contra +2.
Minha verdadeira forma: Ao marcar a caixa de Resistência Cedendo, a
criatura passa por uma [transformação/mutação] e revela sua verdadeira forma
final. A nova criatura tem [no mínimo] a mesma quantidade de caixas de
resistência que a sua forma inicial (todas não marcadas), e ganha +1 em Horrível
e +1 em outra abordagem a sua escolha. Além disso, escolha duas novas façanhas
para a criatura desta lista.
Mutação: Pagando um ponto de destino, a criatura passa por uma mutação.
Alterne quaisquer valores de suas abordagens para refletir sua nova forma.
O peso da dúvida: A criatura impõe uma dificuldade extra de +2 para qualquer
personagem que tentar uma ação que não tenha tentado antes nesta cena.
Sentimentos alterados: Em um teste Instintivo bem-sucedido, a criatura é capaz
de perceber um sentimento de um personagem em relação a outro personagem (de
jogador ou não) e invertê-lo (amor vira ódio, respeito vira escárnio etc.). Sustentar o
efeito custa 1 caixa de resistência por rodada (ou por cinco minutos).
Teleporte: Ao receber um ataque, a criatura pode pagar um ponto de destino
para desaparecer antes de sofrer o dano e reaparecer em outro lugar. Receba +2 para
contra-atacar o atacante surpreendido nesse turno.
Toque de corrupção: Se a criatura conseguir tocar a mão espalmada contra a
testa de um personagem, este ganha uma nova trilha: Corrupção ýoooo. A
partir de agora, toda vez que o personagem [mentir, usar magia, manipular, agir
217
com agressividade], marque uma caixa de Corrupção. Se marcar todas as caixas, ele
tem um acesso de [loucura, violência, egoísmo] e apaga todas as caixas. A trilha se
mantém e pode ser marcada novamente. Aumente a gravidade da reação a cada vez
que todas as cinco caixas forem marcadas.
Transparência: oooo Sempre que a criatura sofrer dano físico, marque
o dano normalmente e uma das caixas de Transparência. Cada caixa marcada
aumenta a dificuldade em acertar a criatura em +1, conforme seu corpo vai ficando
cada vez mais transparente.
Violência horripilante: Ao custo de um ponto de destino, a criatura pode combinar
seus valores das abordagens Violento e Horrível em uma única abordagem Violência
horripilante, por até duas rodadas. Ela não pode se defender usando essa abordagem.
