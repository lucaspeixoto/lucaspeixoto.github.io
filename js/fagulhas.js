$( document ).ready(function() {

    function fagulhas_ideias() {
        return {
            substantivo: ['Ar','Fogo','Espaço','Destino','Passagem','Declínio','Som','Força','Origem','Inércia','Proteção','Labirinto','Luz','Tempo','Ilusão','Ruptura','Escassez','Exposição','Paz','Terra','Fartura','Matéria','Natureza','Movimento','Água','Perda','Caminho','Espírito','Silêncio','Progresso','Caos','Trevas','Vínculo','Barreira','Fraqueza','Descoberta'],
            adjetivo: ['Belo','Letal','Natural','Rústico','Glorioso','Abandonado','Frio','Severo','Intenso','Furioso','Grotesco','Adulterado','Novo','Escuro','Místico','Exótico','Solitário','Abundante','Raro','Oculto','Ardente','Artificial','Delicado','Requintado','Fraco','Antigo','Confuso','Instável','Grandioso','Passageiro','Vazio','Perdido','Sombrio','Ilusório','Poderoso','Misterioso'],
            verbo: ['Realizar','Negligenciar','Lutar','Triunfar','Violar','Opor','Comunicar','Perseguir','Aumentar','Diminuir','Abandonar','Retornar','Brigar','Informar','Conceder','Adiar','Celebrar','Viajar','Prejudicar','Exagerar','Perturbar','Matar','Oprimir','Espionar','Mudar','Punir','Vingar','Controlar','Atrair','Confiar','Ajudar','Recusar','Aceitar','Enganar','Arruinar','Transportar'],
            personalidade: ['Anarquista','Vanguardista','Inventivo','Progressista','Independente','Estratégico','Dramático','Motivado','Perspicaz','Confiável','Diplomático','Organizado','Irreverente','Prepotente','Competitivo','Realista','Decidido','Influenciador','Estiloso','Ambicioso','Arrogante','Astuto','Discreto','Detalhista','Pensativo','Afetivo','Seguro','Previsível','Observador','Articulado','Provocador','Mentor','Introvertido','Enérgico','Manipulador','Minucioso']
        }
    }

    function fagulhas(type) {

        switch(type){

            case "face":
                return ['Ator/Apresentador','Barman/Garçom','Mendigo/Vadio','Turista/Estrangeiro','Caipira/Cidadão','Cozinheiro/Padeiro','Químico/Alquimista','Criança/Jovem','Consultor/Guia','Contratante/Matador','Cultista/Fanático','Médico/Herbalista','Motorista/Fretador','Velho/Senhor','Engenheiro/Arquiteto','Fazendeiro/Roceiro','Gangster/Bandido','Caçador/Mateiro','Investigador/Agente','Zelador/Faxineiro','Trabalhador/Peão','Advogado/Juiz','Gerente/Patrão','Mecânico/Artesão','Músico/Artista','Policial/Guarda','Padre/Pastor','Repórter/Jornaleiro','Cientista/Acadêmico','Socialite/Nobre','Soldado/Mercenário','Espião/Proscrito','Professor/Tutor','Ladrão/Criminoso','Vigia/Segurança','Mercador/Vendedor'];
                break;

            case "local":
                return ['Local abandonado','Aeroporto/Cais','Banco/Seguradora','Ponte/Encruzilhada','Igreja/Templo','Depósito/Armazém','Fábrica/Moinho','Estúdio/Cenário','Corpo de Bombeiros','Garagem/Oficina','Cemitério','Guilda/Corporação','Loja Armas/Arsenal','Hospital/UBS','Hotel/Estalagem','Casa/Vila','Fronteira','Mercado/Loja','Mansão/Palácio','Instalação Militar','Museu/Biblioteca','Balada/Bar','Escritório/Edifício','Parque/Jardim','Farmácia/Herbalista','Delegacia de Polícia','Prisão/Guarita','Área de recreação','Restaurante/Taverna','Escola/Universidade','Esgoto/Metrô','Favela/Ruínas','Forja/Ateliê','Teatro/Cinema','Prefeitura/Centro','Zoológico/Estábulo'];
                break;

            case "reviravolta":
                return ['Você deve trabalhar junto com alguém que te odeia ou que você odeia','As vítimas são na verdade os vilões, e os vilões são as vítimas','Você encontra pessoas que podem te ajudar, mas não sem antes você ajudá-las primeiro','O vilão é alguém que você conhece e respeita, já foram até muito próximos','Você deve obter sucesso sem o uso de violência, ou sem ser percebido','Você deve obter sucesso sem utilizar nenhum equipamento, poder ou recursos que normalmente usa','O vilão é alguém que já causou problemas diversas vezes','Um outro grupo de aventureiros já tentou executar essa missão e falhou, você encontra os corpos deles com pistas do que pode ter acontecido','Pessoas inocentes precisam ser protegidas enquanto você tenta obter sucesso','A aventura começa repentinamente, sem tempo para preparação','Você precisa se passar por outra pessoa, ou então fingir que mudou completamente de grupo ou crenças','Você não consegue sucesso completo, alguém vai morrer ou o vilão vai fugir','Você precisa fazer um sacrifício pessoal ou outras pessoas irão sofrer','Você não é requisitado para resolver o problema de fato, apenas prestar um auxílio paralelo','Você é um escolhido de uma antiga profecia, por isso precisa resolver os problemas todos','Há um outro grupo de aventureiros tentando resolver o mesmo problema que você, mas por outros motivos','Você descobre que não tem aquilo que precisava (um item, pessoa etc) para obter sucesso na aventura','O problema se torna muito pior e tudo precisa ser resolvido o mais rápido possível'];
                break;

        }

    }

    function fagulhas_problema(escala,tempo) {

        if(tempo == 'Legado'){

            switch(escala){
                case "Pessoal":
                    return ['Você foi acusado de um crime que não cometeu. Você já limpou o seu nome e resolveu a situação, mas mesmo assim as pessoas deixaram de confiar em você','Uma pessoa muito importante para você foi assassinada e nunca descobriram muita coisa sobre o assunto, você busca por pistas até hoje','Todos os seus amigos se viraram contra você, você se encontra sozinho no mundo','A sua cidade natal foi tomada por inimigos, você não possui mais um lar, é estrangeiro por onde passa','Você foi o responsável por uma tragédia muito grande e ainda sofre com isso, pessoas apontam o dedo para você','Você renega todo o seu passado e deu um jeito de apagar a sua memória, você não tem lembranças de sua infância ou adolescência'];
                    break;
                case "Relacional":
                    return ['Alguém importante para você desapareceu misteriosamente e nunca mais deu notícias','O seu grupo ocupou na força um espaço que era de um inimigo, mas parece que vocês estão do lado errado','Um artefato poderoso e valioso para você e seu grupo está sob a posse de uma facção inimiga','Um conhecimento há muito perdido é essencial para que o seu grupo obtenha novamente o status do passado','O seu grupo possui uma dívida antiga que não consegue liquidar','Uma pessoa próxima a você foi presa injustamente, você busca por justiça até hoje'];
                    break;
                case "Local":
                    return ['Ruínas antigas foram exploradas há tempos e uma maldição foi liberada que persiste até hoje','O regente local está no poder indevidamente pois ele possui algo secreto que o favorece','A falta de comunicação tem sido o principal desencadeador de problemas entre os diversos grupos da cidade','Inimigos perigosos tomaram completamente o controle de uma parte da cidade','Você parou nesta cidade por engano e acabou ficando por uma razão ou outra, mas pessoas desconfiam de suas verdadeiras intenções','A liderança de seu grupo sempre foi assunto de disputa e controvérsia entre os membros'];
                    break;
                case "Regional":
                    return ['Muito próximo do seu lar há ruínas de um antiga civilização, e coisa estranhas tem acontecido por lá, não vai demorar até chegar onde você está','Um portal que invariavelmente expele demônios só pode ser fechado quando alguns itens especiais forem recolhidos','Os inimigos tomaram uma base militar estratégica e controlam o poderio bélico e extrativo de toda a região','O seu povo nunca se adaptou aos costumes da região e isso sempre é motivo de conflitos','Um grupo político toma conta da região e a alta criminalidade não é controlada propositadamente','Um grupo que veio de fora angariou aliados e a cultura da região está aos poucos tomando outros contornos'];
                    break;
                case "Federal":
                    return ['Um antigo conflito bélico entre o seu povo e o vizinho faz com que todos vivam em risco','Há anos o filho do líder de sua nação é mantido como refém em uma nação vizinha, forçando uma trégua frágil e amarga','Um plano mirabolante que iria trazer progresso para o seu povo falhou, vocês estão na miséria','Invasores tem aos poucos tomado cada vez mais o território de sua nação, de maneira sutil e deliberada','Você habita um local no qual água e alimentos são difíceis de serem obtidos, por razões naturais, mágicas ou políticas','A sua nação elegeu uma pessoa irresponsável, autoritária e despreparada, deixando o povo na miséria'];
                    break;
                case "Planetária":
                    return ['Em algum lugar foi aberto uma fenda por onde saem todos os tipos de criaturas sórdidas, tornando a região inabitável e intransponível','Há tempos um recurso natural extremamente raro tem sido alvo de disputa de diversas nações ','A destruição da natureza secou os rios, deixou a terra árida e os alimentos escassos','Uma criatura intergaláctica/extraplanar chegou ao seu planeta apenas para observar e aprender os costumes','Ruínas de uma antiga civilização deixaram mensagens sobre o seu fim, que parece estar ocorrendo novamente ao redor do planeta','Um vírus se espalhou rapidamente pelo planeta e dizimou todas as civilizações'];
                    break;
            }

        }

        if(tempo == 'Atual'){

            switch(escala){
                case "Pessoal":
                    return ['Você fica sem o seu local de descanso, o seu lar. Ele foi destruído, invadido ou coisa do tipo','Você foi contratado apenas para observar, ouvir e aprender os movimentos de um alvo','Você acorda sem se lembrar do que aconteceu nos últimos dias, mas com certeza deve ter se metido em alguma confusão','Você é transportado para um local desconhecido, precisa descobrir onde está, porque está aí e como fugir','Você vai participar de uma competição, torneio ou coisa do tipo, e deve vencê-la','Você está preso, sem os seus equipamentos, e deve encontrar um meio de fugir'];
                    break;
                case "Relacional":
                    return ['Os inimigos roubaram algo importante para você e o seu grupo, você possui algumas pistas sobre o paradeiro deles','Você e seu grupo estão relaxando quando são atacados por inimigos, sem nenhum motivo. Você deve se defender e descobrir as razões por trás do ataque','O vilão tem algo para te chantagear, forçando-o a fazer o que você não quer, ameaçando sua família e amigos','Inimigos estão causando diversos problemas na sua comunidade, você deve descobrir quem são, onde estão e enfrentá-los','O seu grupo perdeu uma importante competição, o que causou miséria aos seus e a glória dos seus inimigos','Você não tem notícias recentes de alguém muito próximo a você, algo ruim deve ter acontecido'];
                    break;
                case "Local":
                    return ['Você precisa invadir um local inimigo para resgatar um objeto ou pessoa muito importante','Um inimigo vive nas redondezas, ele precisa ser eliminado antes que cause problemas','Ocorreu um crime atroz e você precisa solucionar o caso, estilo Sherlock Holmes','Você é contratado para encontrar uma pessoa desaparecida','Algo muito ruim e inexplicável está acontecendo, você precisa descobrir a fonte do problema e resolvê-lo','Seu grupo recebe ameaças de um grupo inimigo, com juras de vingança'];
                    break;
                case "Regional":
                    return ['Você descobre a localização de uma base inimiga secreta. Você pode avisar aliados ou tentar acabar com eles agora mesmo','Você precisa proteger um local de extrema importância, em breve os inimigos virão atacá-lo','Alguém precisa de um artefato raro para realizar uma tarefa importantíssima, você deve descobrir o que é, onde está, e buscá-lo','Você sai para uma caçada, deve capturar ou matar uma criatura, além de enfrentar os perigos da região onde ela está','Você precisa encontrar uma fonte de recursos básicos na região, como água e alimentos','Um grupo, vindo de fora, deseja ficar nesta região, é preciso negociar com eles e descobrir suas intenções'];
                    break;
                case "Federal":
                    return ['Um item muito poderoso está perdido em um local distante, você deve obtê-lo','Você precisa fazer a escolta de um objeto de valor ou pessoa importante, enquanto os inimigos estão no seu encalço','Você deve atravessar uma região extremamente perigosa e sair de lá ileso','Você está em um meio de transporte grande (trem, navio, avião etc) que é capturado, você deve agir para salvar a todos','Uma antiga criatura mítica adormece sob a terra, o seu despertar significa o fim da nação','A escolha do líder da nação está próxima, mas o principal candidato aliado foi sequestrado'];
                    break;
                case "Planetária":
                    return ['Você está muito distante de seu lar, sozinho, sem água, comida ou abrigo. Sobreviva','Você é colocado no comando de uma grande organização internacional e precisa fazer as coisas darem certo','Você é um emissário diplomático, precisa aprender os modos e costumes de um povo estrangeiro','Você é enviado para uma região completamente desconhecida, deve explorá-la e descobrir o que de fascinante (e aterrorizante) existe por lá','Um líder imponente e inatingível está causando todo tipo de problemas para a sua nação, você deve descobrir um meio de acabar com ele','Você faz um breve contato com uma criatura alienígena/extraplanar, que lhe deixou uma importante mensagem'];
                    break;
            }

        }

        if(tempo == 'Futuro'){

            switch(escala){
                case "Pessoal":
                    return ['Você está prestes a ficar sem todos os seus pertences a não ser que você faça algo','Por algum motivo (natural, social ou político) você vai perder o seu lar a não ser que você tome algumas providências','Você é o futuro herdeiro de algo que você não deseja, que irá lhe trazer somente problemas','Num futuro próximo você deve ir para um local distante e para isso deve aprender a língua do povo de lá, mas não sabe por onde começar','Você foi responsabilizado por um item raro e estranho e não sabe que tipos de problemas isso pode lhe trazer','Você precisa treinar as suas habilidade para vencer um desafio programado contra os inimigos, como uma competição'];
                    break;
                case "Relacional":
                    return ['Inimigos roubaram um poderoso item valioso para o seu grupo, que nas mãos erradas pode causar muita destruição','Você e seu grupo foram vitoriosos em um conflito com um grupo inimigo, porém eles juraram vingança','Alguém próximo não está recebendo a sua devida atenção, isso pode ser trágico','O seu grupo está sem liderança e isso está levando-o à dissolução','Uma pessoa muito importante para você recebe uma carta misteriosa dizendo que ela foi jurada de morte, você precisa investigar o caso','Você fez uma promessa super importante para uma pessoa próxima, mas se esqueceu completamente do que era'];
                    break;
                case "Local":
                    return ['Os inimigos querem ocupar um determinado local para obter vantagens táticas/políticas, e você deve impedir que isso aconteça','Você recebe pistas que indicam que os inimigos estão se organizando para um plano, seria bom investigar e prevenir o que quer que fosse','Inimigos estão para tomar o poder da cidade em uma votação futura, por bem ou por mal','Estão construindo um item poderoso e inteligente, com intenções malignas ','A fonte de um recurso básico de sua cidade está se acabando, é preciso investigar o porquê e se existe alguma solução alternativa','Pessoas estão fugindo da cidade devido a um perigo desconhecido e mortal'];
                    break;
                case "Regional":
                    return ['Em determinado local há algo muito importante e valioso, você deve obtê-lo e impedir que grupos rivais cheguem antes','A região de onde vem os suprimentos básicos de sua cidade foi tomado por inimigos, sitiaram o local, nada entra ou sai','Um grupo inimigo está reunindo peças para uma máquina infernal, que trará dor e morte se for concluída','A expansão do seu território deve ser feita, não sem antes convencer a todos os vizinhos de que vocês são amigáveis e os inimigos são ruins','Inimigos estão ocupando uma região próxima e reunindo forças por razões desconhecidas','Um livro secreto, ou um código, é necessário para quebrar uma maldição da região'];
                    break;
                case "Federal":
                    return ['Um péssimo candidato a líder de sua nação conquistou a confiança do povo, mas ele trará somente desgraças','Uma antiga relação amistosa entre o seu povo e o vizinho foi rompida','Há escassez de recursos pois o seu povo está sofrendo sanções de um vizinho muito poderoso, vocês estão à beira de um colapso','Um povo nativo desta nação, que estava aqui há séculos, reivindica suas terras e exige que os invasores sejam expulsos','Você foi indicado para ocupar um importante cargo militar, mas desconfia dos verdadeiros motivos para tal indicação','Acordos políticos e econômicos se revelam desvantajosos para a sua nação'];
                    break;
                case "Planetária":
                    return ['Você recebe um pedido de socorro de uma pessoa/organização em apuros, que não sobreviverá sem a sua ajuda','Uma criatura intergaláctica/extraplanar chegou ao seu planeta trazendo mensagens apocalípticas e profecias de destruição','Um cataclisma ambiental está prestes a ocorrer, com a destruição total da natureza','Uma seita está se formando ao redor de algo místico e antigo, trazendo problemas à todos que não concordam com eles','Um vírus mortal está se espalhando ao redor do planeta','Diversas nações estão em conflito e uma nova guerra mundial pode ocorrer'];
                    break;
            }

        }
    }

    $('#btnGerarProblema').click(function(){

        var escala = $('#selectEscala').val();
        if(escala == '') escala = random(["Pessoal","Relacional","Local","Regional","Federal","Planetária"]);

        var tempo = $('#selectTipo').val();
        if(tempo == '') tempo = random(["Legado","Atual","Futuro"]);

        $('.boxOpis').prepend(
          '<strong>Escala:</strong> '+escala+'<br>'+
          '<strong>Tipo:</strong> '+tempo+'<br>'+
          '<strong>Problema:</strong> '+random(fagulhas_problema(escala,tempo))+'<br><br>'
        );

    });

    $('#btnGerarFace').click(function(){

        $('.boxOpis').prepend(
          '<strong>Face: </strong> '+random(fagulhas('face'))+'<br><br>'
        );

    });

    $('#btnGerarLocal').click(function(){

        $('.boxOpis').prepend(
          '<strong>Local: </strong> '+random(fagulhas('local'))+'<br><br>'
        );

    });

    $('#btnGerarReviravolta').click(function(){

        $('.boxOpis').prepend(
          '<strong>Reviravolta: </strong> '+random(fagulhas('reviravolta'))+'<br><br>'
        );

    });

    $('#btnGerarIdeias').click(function(){

        $('.boxOpis').prepend(
          '<strong>Ideias: </strong>'+random(fagulhas_ideias().verbo)+' - '+random(fagulhas_ideias().substantivo)+' - '+random(fagulhas_ideias().adjetivo)+'<br>'+
          '<strong>Personalidade: </strong>'+random(fagulhas_ideias().personalidade)+'</i><br><br>'
        );

    });

    $('.boxOpis').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

