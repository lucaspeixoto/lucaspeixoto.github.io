$( document ).ready(function() {

    function habitante() {
        return random(['Piratas','Zumbis','Robôs','Fantasmas','Vampiros','Licantropos','Magos','Fadas','Animais falantes','Alienígenas','Super-heróis','Monstros','Dinossauros','Ninjas','Espiões','Cientistas','Dragões','Ladrões','Cowboys','Cavaleiros','Soldados','Mafiosos','Samurais','Vikings','Investigadores','Exploradores','Mutantes','Mechas','Lutadores','Anjos','Demônios','Bruxos','Caçadores','Cultistas','Sobreviventes','Pilotos']);
    };

    function ambiente() {
        return random(['No espaço ou em outro planeta','Em um passado fictício','Em um futuro distópico','Na natureza selvagem','Em um presente alternativo','Em ambientes inóspitos ou inconcebíveis']);
    };

    function reacao() {
        parte_um = random(['Abortar','Agarrar','Ajudar','Atordoar','Avançar','Bloquear','Cobrir','Colidir','Combater','Concentrar','Consolidar','Coordenar','Defletir','Derrubar','Desafiar','Destruir','Embrenhar','Enganar','Escalar','Esquivar','Forçar','Impactar','Intensificar','Investir','Mirar','Opor','Penetrar','Perder','Perseverar','Proteger','Recuar','Romper','Separar','Sondar','Suportar','Surpreender']);
        parte_dois = random(['Abertura','Alcance','Aliado','Ambiente','Arma','Barreira','Chance','Controle','Coragem','Dano','Defesa','Determinação','Entendimento','Equilíbrio','Estratégia','Ferida','Ferocidade','Foco','Força','Fraqueza','Impulso','Instinto','Manobra','Medo','Objeto','Orgulho','Poder','Posição','Postura','Precisão','Recurso','Sentidos','Sutileza','Técnica','Vantagem','Velocidade']);
        return parte_um+' / '+parte_dois;
    };

    function decisao() {
        parte_um = random(['Sim','Não']);
        parte_dois = random([' fraco',' forte','','','','']);
        return parte_um+parte_dois;
    };

    function inspiracao() {
        parte_um = random(['Fogo','Passagem','Proteção','Fartura','Tempo','Som','Água','Barreira','Exposição','Escassez','Espaço','Silêncio','Terra','Perda','Movimento','Natureza','Caminho','Vínculo','Trevas','Fraqueza','Declínio','Espírito','Caos','Destino','Ar','Descoberta','Inércia','Ilusão','Labirinto','Ruptura','Luz','Força','Progresso','Matéria','Paz','Origem']);
        parte_dois = random(['Abandonado','Adulterado','Antigo','Belo','Frio','Escuro','Delicado','Furioso','Vazio','Exótico','Grotesco','Abundante','Instável','Severo','Artificial','Grandioso','Letal','Solitário','Perdido','Sombrio','Poderoso','Misterioso','Natural','Raro','Intenso','Fraco','Novo','Místico','Ardente','Confuso','Ilusório','Requintado','Mensageiro','Oculto','Rústico','Glorioso']);
        return parte_um+' / '+parte_dois;
    };

    function arquetipo() {
        parte_um = random(['Violência','Sobrevivência','Influência','Proficiência','Ciência','Essência']);
        parte_dois = random(['Natureza','Tecnologia','Indivíduo','Sociedade','Submundo','Arcano']);
        return parte_um+' + '+parte_dois;
    };


    function subarquetipo(arquetip) {

        var parte_um = '';
        var parte_dois = '';

        switch(arquetip){
            case "Violência + Natureza":
                parte_um = random(['Líder','Atroz','Protetor','Obstinado','Experiente','Orgulhoso']);
                parte_dois = random(['Dividido entre dois mundos','Respeitado pelos animais','Marcado por feras','Força de um urso','Tocado pelo trovão','Criado entre lobos']);
                break;
            case "Violência + Tecnologia":
                parte_um = random(['Indomável','Veloz','Atento','Imponente','Vigilante','Intenso']);
                parte_dois = random(['Nunca erra o alvo','Vinculado com sua arma','Herdeiro de uma arma letal','Dispositivos experimentais','Maneja qualquer arma','Nunca recusa um duelo']);
                break;
            case "Violência + Indivíduo":
                parte_um = random(['Resistente','Ponderado','Inabalável','Taciturno','Inspirador','Renegado']);
                parte_dois = random(['Não usa armas letais','Tradição proibida','Treinado por um mestre esquecido','Valoriza a doutrina','Mil lutas vencidas','Antecipa movimentos']);
                break;
            case "Violência + Sociedade":
                parte_um = random(['Comandante','Eficiente','Veterano','Jovem','Observador','Ameaçador']);
                parte_dois = random(['Estrito código de honra','Especialista em estratégias','Capaz de sacrificar sua vida','Marcado pela guerra','Postura inspiradora','Defensor de seu juramento']);
                break;
            case "Violência + Submundo":
                parte_um = random(['Fugitivo','Letal','Furtivo','Traiçoeiro','Ligeiro','Vigoroso']);
                parte_dois = random(['Temido entre os temidos','Luta sujo','Usa as sombras','Conhece o poder da fúria','Sempre tem uma arma escondida','Capaz de matar com um só golpe']);
                break;
            case "Violência + Arcano":
                parte_um = random(['Enérgico','Perseverante','Fervoroso','Casto','Robusto','Escolhido']);
                parte_dois = random(['Visitado pela morte','Canalizador da destruição','Detentor do toque funesto','Caminho do sangue','Ungido pela dor','Possui arma mística']);
                break;
            case "Sobrevivência + Natureza":
                parte_um = random(['Impetuoso','Talentoso','Calejado','Errante','Ancestral','Desbravador']);
                parte_dois = random(['Sempre sabe o caminho','Atravessou fogo e gelo','Conduzido pelas estrelas','Ouve o vento','Admirável companheiro animal','Escolhido pela natureza']);
                break;
            case "Sobrevivência + Tecnologia":
                parte_um = random(['Imaginativo','Curioso','Minucioso','Valente','Explorador','Versátil']);
                parte_dois = random(['Improvisa qualquer ferramenta','Movido por engrenagens','Invenções instáveis','Desmonta qualquer coisa','Melhorado por implantes','Famoso por suas explosões']);
                break;
            case "Sobrevivência + Indivíduo":
                parte_um = random(['Rebelde','Austero','Pensativo','Confiante','Cordial','Desapegado']);
                parte_dois = random(['Abandonou um legado','Precioso diário','Conhece as estradas','Sempre sabe o que dizer','Rejeitado pelo seu grupo','Escolheu o silêncio']);
                break;
            case "Sobrevivência + Sociedade":
                parte_um = random(['Articulado','Esclarecido','Cortês','Comunicativo','Idealista','Adaptável']);
                parte_dois = random(['Ouve segredos','Acessa os bastidores','Sabe manter a calma','Sabe fazer um pouco de tudo','Membro de um grupo insurgente','Já viu de tudo']);
                break;
            case "Sobrevivência + Submundo":
                parte_um = random(['Audacioso','Elegante','Instruído','Desembaraçado','Zombeteiro','Falante']);
                parte_dois = random(['Se infiltra em qualquer lugar','Sabe esconder suas intenções','Conhece caminhos clandestinos','Sabe tirar vantagem','Reputação de intocável','Ri diante do perigo']);
                break;
            case "Sobrevivência + Arcano":
                parte_um = random(['Fiel','Impassível','Excêntrico','Fervoroso','Inquisitivo','Zeloso']);
                parte_dois = random(['Atormentado por almas','Visitado por entidades','Vendeu sua alma','Devorador de conhecimento oculto','Navega por conspirações','Membro de uma sociedade secreta']);
                break;
            case "Influência + Natureza":
                parte_um = random(['Gracioso','Arrojado','Prestativo','Humilde','Otimista','Calmo']);
                parte_dois = random(['Lê as ervas','Seguido por aves','Respeitado sob as águas','Conhecedor de unguentos','Alma felina','Sussurra entre serpentes']);
                break;
            case "Influência + Tecnologia":
                parte_um = random(['Audaz','Sincero','Extrovertido','Tenaz','Cético','Veloz']);
                parte_dois = random(['Conversa com as máquinas','Pilota qualquer coisa','Decifrador de códigos','Invasor de redes','Sabota qualquer máquina','Sintonizado com os circuitos']);
                break;
            case "Influência + Indivíduo":
                parte_um = random(['Convincente','Encantador','Intrigante','Ávido','Tolerante','Prudente']);
                parte_dois = random(['Nunca se cansa','Sempre tem uma resposta','Lê emoções','Inspira confiança','Controla a dor','Difícil de impressionar']);
                break;
            case "Influência + Sociedade":
                parte_um = random(['Honorável','Prestigiado','Dissimulado','Cerimonioso','Requintado','Carismático']);
                parte_dois = random(['Família tradicional','Acesso às cortes','Sempre ouvido','Navega as leis','Detentor de recursos','Guarda segredos']);
                break;
            case "Influência + Submundo":
                parte_um = random(['Sinistro','Desconfiado','Implacável','Ardiloso','Coerente','Assertivo']);
                parte_dois = random(['Sabe mexer os pauzinhos','Rodeado de capangas','Amigos e rivais poderosos','Se alimenta de poder','Não mostra misericórdia','Idolatrado por seus seguidores']);
                break;
            case "Influência + Arcano":
                parte_um = random(['Iluminado','Expressivo','Conectado','Visionário','Recluso','Sensitivo']);
                parte_dois = random(['Escolhido pelos deuses','Conversa com espíritos','Visita o além','Molda o sobrenatural','Rastreia a magia','Canaliza dons imateriais']);
                break;
            case "Proficiência + Natureza":
                parte_um = random(['Leal','Meticuloso','Espirituoso','Altruísta','Independente','Sensível']);
                parte_dois = random(['Temido pelas bestas','Molda a madeira','Lê as correntezas','Versado em rugidos','Nunca perde um rastro','Prevê o clima']);
                break;
            case "Proficiência + Tecnologia":
                parte_um = random(['Determinado','Criativo','Amistoso','Preciso','Introvertido','Corpulento']);
                parte_dois = random(['Sempre tem a ferramenta certa','Conserta qualquer coisa','Ouve o metal','Artefatos inexplicáveis','Customiza qualquer equipamento','Armadura inteligente']);
                break;
            case "Proficiência + Indivíduo":
                parte_um = random(['Competitivo','Fascinante','Admirado','Entusiasmado','Focado','Saudável']);
                parte_dois = random(['Passado de vitórias','Impressiona por onde passa','Sabe motivar','Aprende rápido','Enxerga fraquezas','Proezas atléticas']);
                break;
            case "Proficiência + Sociedade":
                parte_um = random(['Confiável','Generoso','Jovial','Pragmático','Precavido','Próspero']);
                parte_dois = random(['Mãos talentosas','Conhecedor de artefatos','Rede de contatos','Sabe conversar','Valorizado por seu talento','Membro de uma guilda']);
                break;
            case "Proficiência + Submundo":
                parte_um = random(['Soturno','Reservado','Persuasivo','Sagaz','Analítico','Sarcástico']);
                parte_dois = random(['Mãos ligeiras','Sempre conhece uma pessoa','Sabe escapar da lei','Não se comove','Conhece as portas dos fundos','Sabe o que o outro mais quer']);
                break;
            case "Proficiência + Arcano":
                parte_um = random(['Consagrado','Profético','Devoto','Astuto','Compreensivo','Discreto']);
                parte_dois = random(['Decifra presságios','Inundado pela fé','A serviço de entidades do além','Portador de mensagens','Comove as massas','Elaborador de feitiços']);
                break;
            case "Ciência + Natureza":
                parte_um = random(['Afável','Sensato','Brilhante','Intrigante','Questionador','Calado']);
                parte_dois = random(['Decifra plantas','Compreende a luz','Interpreta o solo','Perito em insetos','Laboratório portátil','Cabeça entre as estrelas']);
                break;
            case "Ciência + Tecnologia":
                parte_um = random(['Ousado','Metódico','Prolífico','Racional','Criterioso','Disciplinado']);
                parte_dois = random(['Máquinas inovadoras','Decifra qualquer equipamento','Constrói qualquer dispositivo','Sofisticados cálculos mentais','Conhece todos os materiais','Singular poder de abstração']);
                break;
            case "Ciência + Indivíduo":
                parte_um = random(['Cauteloso','Empático','Franco','Desenvolto','Humanitário','Investigativo']);
                parte_dois = random(['Mestre em anatomia','Faz as perguntas certas','Sabe aplacar as dores','Questiona significados','Perito em comportamento','Conhece substâncias']);
                break;
            case "Ciência + Sociedade":
                parte_um = random(['Perspicaz','Erudito','Íntegro','Eloquente','Imparcial','Sereno']);
                parte_dois = random(['Sabe ler a situação','Navega entre culturas','Reconhece valores','Se mescla com facilidade','Antecipa resultados','Sabe se explicar']);
                break;
            case "Ciência + Submundo":
                parte_um = random(['Incompreendido','Sistemático','Prodigioso','Inovador','Irreverente','Ardiloso']);
                parte_dois = random(['Cria aberrações','Versado em substâncias proibidas','Máquinas de dor','Genética experimental','Próteses exóticas','Arsenal sinistro']);
                break;
            case "Ciência + Arcano":
                parte_um = random(['Severo','Sombrio','Exaltado','Resoluto','Frenético','Indiferente']);
                parte_dois = random(['Decifrador de panteões','Acadêmico dos nove círculos','Detentor dos tomos proibidos','Fabricante de elixires','Saberes do éter','Mestre em criptídeos']);
                break;
            case "Essência + Natureza":
                parte_um = random(['Sábio','Sonhador','Solitário','Deslumbrante','Indecifrável','Rústico']);
                parte_dois = random(['Formas bestiais','Tocado pelo fogo','Livro de poções','Herança feérica','Canalizador da tormenta','Simbiose com a natureza']);
                break;
            case "Essência + Tecnologia":
                parte_um = random(['Sofisticado','Próspero','Atlético','Esmerado','Radiante','Sutil']);
                parte_dois = random(['Encantador de engrenagens','Runas de ferro','Dobrador de metal','Escola de criptografia arcana','Conjurador de plasma','Conduz eletricidade']);
                break;
            case "Essência + Indivíduo":
                parte_um = random(['Misterioso','Contemplativo','Destemido','Espantoso','Espontâneo','Paciente']);
                parte_dois = random(['Lê mentes','Transforma a matéria','Projeta sua consciência','Manipula objetos','Toca auras','Materializa e dissipa substâncias']);
                break;
            case "Essência + Sociedade":
                parte_um = random(['Extravagante','Charmoso','Virtuoso','Sorridente','Autêntico','Caótico']);
                parte_dois = random(['Entretém multidões','Enxerga o porvir','Cria ilusões','Fascina pela beleza','Palavras pungentes','Interpreta os sinais']);
                break;
            case "Essência + Submundo":
                parte_um = random(['Perigoso','Ardente','Furioso','Cativante','Tenebroso','Ludibriador']);
                parte_dois = random(['Maneja os mortos','Pacto diabólico','Manipulador de ossos','Mestre do ocultismo','Comunga com os antigos','Não está exatamente vivo']);
                break;
            case "Essência + Arcano":
                parte_um = random(['Diligente','Enigmático','Estrondoso','Intuitivo','Desperto','Assombroso']);
                parte_dois = random(['Conjura seres','Manipula percepções','Altera as leis da matéria','Transforma corpos','Canaliza energias','Induz coincidências']);
                break;
        }

        return parte_um + ' / ' + parte_dois;

    };

    function missao() {
        parte_um = random(['Atacar','Batalhar','Capturar','Competir','Conquistar','Contatar','Corromper','Criar','Decifrar','Defender','Descobrir','Destruir','Eliminar','Encontrar','Enfrentar','Entregar','Espionar','Evitar','Explorar','Expulsar','Fortalecer','Fugir','Invadir','Investigar','Matar','Negociar','Perseguir','Proteger','Recuperar','Resgatar','Resistir','Revelar','Roubar','Salvar','Sobreviver','Superar']);
        parte_dois = random(['Aliado','Ambiente','Criatura','Evento','Fenômeno','Grupo','Ideia','Informação','Inimigo','Inocente','Local','Objeto','Organização','Pessoa importante','Poder','Recurso','Relacionamento','Tecnologia']);
        return parte_um+' / '+parte_dois;
    };

    function missaoPessoal() {
        parte_um = random(['Encontrar (explorar, descobrir)','Destruir (derrotar, derrubar)','Proteger (defender, salvar)','Conquistar (cativar, dominar)','Superar (sobreviver, escapar)','Capturar (recuperar, aprisionar)']);
        parte_dois = random(['Entidade (pessoa, organização, criatura)','Conhecimento (informação, segredo, ideia)','Valor (reputação, poder, riqueza)','Local (caminho, comunidade, lugar)','Recurso (artefato, ingrediente, elemento)','Evento (fenômeno, incidente, lenda)']);
        return parte_um+' / '+parte_dois;
    };

    function desafio() {
        return random(
            ['Obstáculo (barreira, empecilho, tarefa) <br><i>O que você precisa superar para continuar em seu caminho?</i>',
            'Conflito (briga, batalha, desavença) <br><i>Quem está te opondo e por que eles querem te derrotar?</i>',
            'Ameaça (armadilha, desastre, perigo) <br><i>O que está prestes a acontecer aqui e como você pode escapar?</i>',
            'Disputa (perseguição, debate, competição) <br><i>O que você precisa fazer antes que a outra parte faça?</i>',
            'Enigma (investigação, quebra-cabeças, mistérios) <br><i>O que precisa ser desvendado aqui?</i>',
            'Interação (negociação, interrogatório, persuasão) <br><i>O que você quer da pessoa com quem está interagindo?</i>']
        );
    };

    function complicacao() {
        return [
            'Alguém sofre e recebe um dado escuro durante uma Ação',
            'Alguém sofre e recebe um dado escuro durante duas Ações',
            'Alguém sofre e recebe um dado escuro durante três Ações',
            'Alguém sofre e recebe um dado escuro durante quatro Ações',
            'Alguém sofre e recebe um dado escuro durante cinco Ações',
            'Alguém sofre e recebe um dado escuro durante seis Ações',
            'Um novo Desafio aparece',
            'Um novo Desafio aparece',
            'Um novo Desafio aparece',
            'Um novo Desafio aparece',
            'Um novo Desafio aparece',
            'Um novo Desafio aparece',
            'Alguém perde um Recurso',
            'Alguém perde Tempo',
            'Alguém perde o Foco',
            'Alguém perde uma Oportunidade',
            'Alguém perde o Ímpeto',
            'Alguém perde a Posição',
            'Alguém precisa fazer uma escolha difícil sobre um Aliado',
            'Alguém precisa fazer uma escolha difícil sobre um Objetivo',
            'Alguém precisa fazer uma escolha difícil sobre um Desejo',
            'Alguém precisa fazer uma escolha difícil sobre um Inocente',
            'Alguém precisa fazer uma escolha difícil sobre um Ambiente',
            'Alguém precisa fazer uma escolha difícil sobre um Recurso',
            'A situação sai de controle, aumente um Desafio existente em 1 caixa',
            'A situação sai de controle, aumente um Desafio existente em 1 caixa',
            'A situação sai de controle, aumente um Desafio existente em 2 caixas',
            'A situação sai de controle, aumente um Desafio existente em 2 caixas',
            'A situação sai de controle, aumente um Desafio existente em 3 caixas',
            'A situação sai de controle, aumente um Desafio existente em 3 caixas',
            'Uma verdade desagradável é revelada sobre uma Mentira',
            'Uma verdade desagradável é revelada sobre uma Armadilha',
            'Uma verdade desagradável é revelada sobre um Poder inimigo ',
            'Uma verdade desagradável é revelada sobre uma Incoerência',
            'Uma verdade desagradável é revelada sobre um Desaparecimento',
            'Uma verdade desagradável é revelada sobre um Segredo'
        ];
    };

    function intensidade(){
        min = Math.ceil(3);
        max = Math.floor(5);
        return Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }


    function rolarDados(){
        min = Math.ceil(1);
        max = Math.floor(6);
        return Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    $('#btnUndo').click(function(){
        $('.boxRonin .boxNPC:first-child').remove();
    });

    $('#btnRolarMuitosDados').click(function(){

        var dadosBrancos = '';
        var dadosPretos = '';

        for(i=0;i<$('#whiteDice').val();i++)
            dadosBrancos = dadosBrancos + '<img src="./img/w'+rolarDados()+'.jpg" width="50px">&nbsp';

        for(i=0;i<$('#blackDice').val();i++)
            dadosPretos = dadosPretos + '<img src="./img/b'+rolarDados()+'.jpg" width="50px">&nbsp';

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<p><center>'+
          dadosBrancos+
          dadosPretos+
          '</center></p>'+
        '</div>');

    });

    $('#btnRolarDados').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<p><center><img src="./img/w'+rolarDados()+'.jpg">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./img/b'+rolarDados()+'.jpg"></center></p>'+
        '</div>');

    });


    $('#btnGerarReacao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Reação: </strong>'+reacao()+
        '</div>');

    });


    $('#btnGerarInspiracao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Inspiração: </strong>'+inspiracao()+
        '</div>');

    });


    $('#btnGerarDecisao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Decisão: </strong>'+decisao()+
        '</div>');

    });

    $('#btnGerarComplicacao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Complicação: </strong>'+random(complicacao())+
        '</div>');

    });

    $('#btnGerarHabitante').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Habitante: </strong>'+habitante()+' / '+habitante()+' / '+habitante()+
        '</div>');

    });

    $('#btnGerarAmbiente').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Ambiente: </strong>'+ambiente()+
        '</div>');

    });

    $('#btnGerarDesafio').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Desafio: </strong>'+desafio()+
        '</div>');

    });

    $('#btnGerarArquetipo').click(function(){

        var arquetip = arquetipo();
        var marca = subarquetipo(arquetip);

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Arquétipo: </strong>'+arquetip+'<br><strong>Marca:</strong> '+marca+
        '</div>');

    });

    $('#btnGerarMissao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Missão de Aventura: </strong>'+missao()+
        '</div>');

    });

    $('#btnGerarMissaoPessoal').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Missão Pessoal: </strong>'+missaoPessoal()+
        '</div>');

    });

    $('.boxRonin').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

