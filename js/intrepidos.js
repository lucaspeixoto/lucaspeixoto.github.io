$( document ).ready(function() {

    function habitante() {
        return random(['Piratas','Zumbis','Robôs','Fantasmas','Vampiros','Licantropos','Magos','Fadas','Animais falantes','Alienígenas','Super-heróis','Monstros','Dinossauros','Ninjas','Espiões','Cientistas','Dragões','Ladrões','Cowboys','Cavaleiros','Soldados','Mafiosos','Samurais','Vikings','Investigadores','Exploradores','Mutantes','Mechas','Lutadores','Anjos','Demônios','Bruxos','Caçadores','Cultistas','Sobreviventes','Pilotos']);
    };

    function reacao() {
        parte_um = random(['Abortar','Agarrar','Ajudar','Atordoar','Avançar','Bloquear','Cobrir','Colidir','Combater','Concentrar','Consolidar','Coordenar','Defletir','Derrubar','Desafiar','Destruir','Embrenhar','Enganar','Escalar','Esquivar','Forçar','Impactar','Intensificar','Investir','Mirar','Opor','Penetrar','Perder','Perseverar','Proteger','Recuar','Romper','Separar','Sondar','Suportar','Surpreender']);
        parte_dois = random(['Abertura','Alcance','Aliado','Ambiente','Arma','Barreira','Chance','Controle','Coragem','Dano','Defesa','Determinação','Entendimento','Equilíbrio','Estratégia','Ferida','Ferocidade','Foco','Força','Fraqueza','Impulso','Instinto','Manobra','Medo','Objeto','Orgulho','Poder','Posição','Postura','Precisão','Recurso','Sentidos','Sutileza','Técnica','Vantagem','Velocidade']);
        return parte_um+' / '+parte_dois;
    };

    function decisao() {
        parte_um = random(['Sim','Não']);
        parte_dois = random([', mas...',', e...','','','','']);
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
        return parte_um+' / '+parte_dois;
    };

    function missao() {
        parte_um = random(['Atacar','Batalhar','Capturar','Competir','Conquistar','Contatar','Corromper','Criar','Decifrar','Defender','Descobrir','Destruir','Eliminar','Encontrar','Enfrentar','Entregar','Espionar','Evitar','Explorar','Expulsar','Fortalecer','Fugir','Invadir','Investigar','Matar','Negociar','Perseguir','Proteger','Recuperar','Resgatar','Resistir','Revelar','Roubar','Salvar','Sobreviver','Superar']);
        parte_dois = random(['Aliado','Ambiente','Criatura','Evento','Fenômeno','Grupo','Ideia','Informação','Inimigo','Inocente','Local','Objeto','Organização','Pessoa importante','Poder','Recurso','Relacionamento','Tecnologia']);
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

    $('#btnGerarDesafio').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Desafio: </strong>'+desafio()+'<br>Intensidade '+intensidade()+
        '</div>');

    });

    $('#btnGerarArquetipo').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Arquétipo: </strong>'+arquetipo()+
        '</div>');

    });

    $('#btnGerarMissao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Missão de Aventura: </strong>'+missao()+
        '</div>');

    });

    $('.boxRonin').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

