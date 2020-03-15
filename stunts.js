function stunts(type) {
  
    switch(type){

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
            return ['<strong>Já Li Sobre Isso: Você já leu centenas – se não milhares – de livros sobre inúmeros assuntos. Você pode gastar um ponto de destino para usar Conhecimentos no lugar de qualquer outra perícia em uma rolagem, desde que consiga explicar seu conhecimento sobre a ação que quer realizar.</strong>','<strong>Escudo da Razão:</strong> Você pode usar Conhecimentos como defesa contra tentativas de Provocar, contanto que consiga justificar sua habilidade de superar o medo através de pensamento racional e razão.','<strong>Especialista:</strong> Escolha um campo de especialização, como alquimia, criminologia ou zoologia. Você recebe +2 nas rolagens de Conhecimentos que estejam relacionadas ao seu campo de especialização.'];
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

        case "Ofícios":
            return ['<strong>Sempre Criando Coisas Úteis:</strong> Você não precisa gastar um ponto de destino para declarar que possui as ferramentas apropriadas para um trabalho em particular usando Ofícios, mesmo em situações extremas (como quando está numa prisão e longe do seu equipamento). Esse tipo de oposição deixa de existir.','<strong>Melhor Que Novo:</strong> Sempre que obtiver um sucesso com estilo numa ação de superar para consertar um dispositivo, você pode criar imediatamente um novo aspecto de situação (com uma invocação grátis) que reﬂita as melhorias realizadas, ao invés de apenas um impulso.','<strong>Precisão Cirúrgica:</strong> Quando usa Ofícios em um conﬂito envolvendo algum tipo de mecanismo, você pode filtrar alvos indesejados em ataques de zona inteira sem ter que dividir o dano (normalmente é necessário dividir sua rolagem entre os alvos).'];
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
    }

};



