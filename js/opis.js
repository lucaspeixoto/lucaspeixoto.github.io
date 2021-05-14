$( document ).ready(function() {

    var opissn = ['NÃO, e surge uma adversidade','NÃO','NÃO, mas surge algo favorável','SIM, mas não exatamente o esperado','SIM','SIM, e surge uma vantagem'];
    var opissn_mais = ['NÃO','NÃO, mas surge algo favorável','SIM, mas não exatamente o esperado','SIM','SIM, e surge uma vantagem','SIM, e surge uma grande vantagem'];
    var opissn_menos = ['NÃO, e surge uma grande adversidade','NÃO, e surge uma adversidade','NÃO','NÃO, mas surge algo favorável','SIM, mas não exatamente o esperado','SIM'];

    function opisnpc(type) {

        switch(type){
            case "a":
                return {
                    tipo: ['Uma pessoa que tenta se afastar de você','Uma pessoa que não deveria estar ali','Uma pessoa com um certo renome','Uma pessoa que tenta se aproximar de você','Um aliado em potencial','Um aliado conhecido'],
                    atitude: ['Um pouco hostil','Neutra','Neutra','Um pouco amigável','Amigável','Muito amigável'],
                }
                break;

            case "n":
                return {
                    tipo: ['Um inimigo em potencial','Uma pessoa que tenta se afastar de você','Uma pessoa que não deveria estar ali','Uma pessoa com um certo renome','Uma pessoa que tenta se aproximar de você','Um aliado em potencial'],
                    atitude: ['Hostil','Um pouco hostil','Neutra','Neutra','Um pouco amigável','Amigável'],
                }
                break;

            case "h":
                return {
                    tipo: ['Um inimigo conhecido','Um inimigo em potencial','Uma pessoa que tenta se afastar de você','Uma pessoa que não deveria estar ali','Uma pessoa com um certo renome','Uma pessoa que tenta se aproximar de você'],
                    atitude: ['Muito hostil','Hostil','Um pouco hostil','Neutra','Neutra','Um pouco amigável'],
                }
                break;

            default:
                return 'especifique o ambiente no segundo argumento: (a)migável, (n)eutro ou (h)ostil<br>Ex.: !opis npc a';

        }

    }

    function opisnpc_data() {
        return {
            motivacao: ['Está contra você','Está a favor de seus inimigos','Está por conta própria','Apenas executa ordens de superiores','Está a favor dos seus aliados','Está ao seu favor'],
            conversa: ['Recuado','Desconfiado','Neutro','Sociável','Cooperativo','Interessado'],
            comportamento: ['Planejador','Inquisitivo','Informativo','Misterioso','Intolerante','Controlador'],
            qualidade: ['Generoso','Prestativo','Calmo','Proativo','Astuto','Polivalente'],
            defeito: ['Egoísta','Preguiçoso','Ganancioso','Temperamento explosivo','Excesso de confiança','Cabeça dura'],
            sentimento: ['Mau humor','Coragem','Alegria','Tristeza','Esperança','Preocupação']
        }
    }

    function opis_insp() {
        return {
            substantivo: ['Ar','Fogo','Espaço','Destino','Passagem','Declínio','Som','Força','Origem','Inércia','Proteção','Labirinto','Luz','Tempo','Ilusão','Ruptura','Escassez','Exposição','Paz','Terra','Fartura','Matéria','Natureza','Movimento','Água','Perda','Caminho','Espírito','Silêncio','Progresso','Caos','Trevas','Vínculo','Barreira','Fraqueza','Descoberta'],
            adjetivo: ['Belo','Letal','Natural','Rústico','Glorioso','Abandonado','Frio','Severo','Intenso','Furioso','Grotesco','Adulterado','Novo','Escuro','Místico','Exótico','Solitário','Abundante','Raro','Oculto','Ardente','Artificial','Delicado','Requintado','Fraco','Antigo','Confuso','Instável','Grandioso','Passageiro','Vazio','Perdido','Sombrio','Ilusório','Poderoso','Misterioso'],
            verbo: ['Realizar','Negligenciar','Lutar','Triunfar','Violar','Opor','Comunicar','Perseguir','Aumentar','Diminuir','Abandonar','Retornar','Brigar','Informar','Conceder','Adiar','Celebrar','Viajar','Prejudicar','Exagerar','Perturbar','Matar','Oprimir','Espionar','Mudar','Punir','Vingar','Controlar','Atrair','Confiar','Ajudar','Recusar','Aceitar','Enganar','Arruinar','Transportar']
        }
    }

    function opis_detalhes() {
        return {
            dia: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado','Feriado'],
            hora: ['00:00','00:40','01:20','02:00','02:40','03:20','04:00','04:40','05:20','06:00','06:40','07:20','08:00','08:40','09:20','10:00','10:40','11:20','12:00','12:40','13:20','14:00','14:40','15:20','16:00','16:40','17:20','18:00','18:40','19:20','20:00','20:40','21:20','22:00','22:40','23:20'],
            tempo: ['Frio extremo','Muito frio','Frio','Esfriando','Esquentando','Calor','Muito calor','Calor extremo','Agradável','Relampejando','Céu limpo','Ventando','Ar seco ','Nublado','Garoando','Chovendo','Nevando','Neblina','Trovoada','Calor insuportável','Rajadas de vento','Ventos fracos','Ventos fortes','Chuva pesada','Chuva e sol','Ciclone','Tornado','Tufão','Furacão','Tempestade','Frio congelante','Ameno','Poucas nuvens','Muitas nuvens','Nuvens carregadas','Ar úmido'],
            direcao: ['Norte','Nordeste','Leste','Sudeste','Sul','Sudoeste','Oeste','Noroeste','Centro']
        }
    }

    function opislocal(type) {

        switch(type){
            case "a":
                return ['No estabelecimento de um conhecido','A sua casa, onde você reside','A sede do seu clã, partido, culto ou guilda','Um evento social privado','Nas ruas de seu bairro ou comunidade','Na habitação de um aliado'];
                break;

            case "n":
                return ['Um bar, café, cantina ou taverna','Em uma estrada ou caminho conhecido','Em uma instalação do poder público','Nas ruas de uma cidade conhecida','Um evento social público','Um estabelecimento comercial'];
                break;

            case "h":
                return ['Em território inimigo','Nas ruas de uma cidade desconhecida','Em uma estrada ou caminho desconhecido','Em uma vizinhança de malfeitores','Em ermos notadamente perigosos','Em uma ruína ou construção abandonada'];
                break;

            default:
                return 'especifique o ambiente no segundo argumento: (a)migável, (n)eutro ou (h)ostil<br>Ex.: !opis local n';

        }

    }

    function opisevento(type) {

        switch(type){
            case "a":
                return {
                    efeito: ['Desfavorável em um sentido','Pouco desfavorável','Neutro','Pouco favorável','Favorável em um sentido','Favorável'],
                    evento: ['Você encontra um NPC do seu passado','Você descobre um segredo grave','Você percebe más intenções de um NPC','Um aliado se envolve em uma briga','Você avista um inimigo ao longe','Um inimigo se revela um aliado'],
                }
                break;

            case "n":
                return {
                    efeito: ['Desfavorável','Desfavorável em um sentido','Pouco desfavorável','Neutro','Pouco favorável','Favorável em um sentido'],
                    evento: ['O local em que você está é assaltado','Ocorre um assassinato próximo a você','Você descobre que te passaram a perna','Você é abordado por um ser estranho','Um aliado se revela um inimigo','Você é provocado por um inimigo'],
                }
                break;

            case "h":
                return {
                    efeito: ['Muito desfavorável','Desfavorável','Desfavorável em um sentido','Pouco desfavorável','Neutro','Pouco favorável'],
                    evento: ['Uma coisa ruim se torna ainda pior','Novos inimigos estão se aproximando','Você é alvo de uma pequena traição','É perigoso aqui, você precisa agir rápido','Um inimigo descobre a sua posição','Você é atacado por um inimigo'],
                }
                break;

            default:
                return 'especifique o ambiente no segundo argumento: (a)migável, (n)eutro ou (h)ostil<br>Ex.: !opis evento h';

        }

    }

    function opiscomp(type) {

        switch(type){
            case "a":
                return [
                    '<b>Aparece uma nova ameaça:</b> O inimigo deu um passo inesperado',
                    '<b>Aparece uma nova ameaça:</b> Um problema antigo surge novamente',
                    '<b>Aparece uma nova ameaça:</b> Um grupo rival busca o mesmo que você',
                    '<b>Aparece uma nova ameaça:</b> Uma pessoa que estava ajudando te trai',
                    '<b>Aparece uma nova ameaça:</b> Algo que você estava fazendo deu errado',
                    '<b>Aparece uma nova ameaça:</b> Um novo inimigo é revelado',
                    '<b>Você se envolve em uma briga:</b> Com um amigo',
                    '<b>Você se envolve em uma briga:</b> Com um desconhecido',
                    '<b>Você se envolve em uma briga:</b> Suas ideias e planos são questionados',
                    '<b>Você se envolve em uma briga:</b> Há agressão física',
                    '<b>Você se envolve em uma briga:</b> Outras pessoas se envolvem',
                    '<b>Você se envolve em uma briga:</b> A briga resulta em consequências',
                    '<b>Uma tarefa precisa ser executada:</b> Você precisa encontrar uma pessoa',
                    '<b>Uma tarefa precisa ser executada:</b> Você precisa encontrar um item',
                    '<b>Uma tarefa precisa ser executada:</b> Você precisa ir até um local',
                    '<b>Uma tarefa precisa ser executada:</b> Você precisa manter um local seguro',
                    '<b>Uma tarefa precisa ser executada:</b> Você precisa manter uma pessoa segura',
                    '<b>Uma tarefa precisa ser executada:</b> Você precisa manter um item seguro',
                    '<b>Ocorre um desentendimento:</b> Pessoas ficam contra você',
                    '<b>Ocorre um desentendimento:</b> Você é acusado injustamente',
                    '<b>Ocorre um desentendimento:</b> Ocorre uma briga onde você está',
                    '<b>Ocorre um desentendimento:</b> Você foi para o lugar errado',
                    '<b>Ocorre um desentendimento:</b> Agiram da maneira oposta ao que você disse',
                    '<b>Ocorre um desentendimento:</b> Te passaram uma informação falsa',
                    '<b>Um grande mistério surge:</b> A real identidade do vilão é confusa',
                    '<b>Um grande mistério surge:</b> O item necessário não é visto há anos',
                    '<b>Um grande mistério surge:</b> Uma pessoa importante desapareceu',
                    '<b>Um grande mistério surge:</b> As informações encontradas não batem',
                    '<b>Um grande mistério surge:</b> Uma criatura que não deveria estar ali',
                    '<b>Um grande mistério surge:</b> Um inimigo derrotado aparece novamente',
                    '<b>Um importante pertence seu foi roubado:</b> Uma arma',
                    '<b>Um importante pertence seu foi roubado:</b> Um item de proteção',
                    '<b>Um importante pertence seu foi roubado:</b> Um item importante para a aventura',
                    '<b>Um importante pertence seu foi roubado:</b> Um item valioso',
                    '<b>Um importante pertence seu foi roubado:</b> Um item muito raro',
                    '<b>Um importante pertence seu foi roubado:</b> Um equipamento essencial'
                ];
                break;

            case "n":
                return [
                    '<b>Algo impede o seu progresso:</b> Uma barreira física',
                    '<b>Algo impede o seu progresso:</b> Pessoas não deixam você passar',
                    '<b>Algo impede o seu progresso:</b> Você está sem suprimentos',
                    '<b>Algo impede o seu progresso:</b> Há uma barreira mágica/tecnológica',
                    '<b>Algo impede o seu progresso:</b> Você não tem o equipamento necessário',
                    '<b>Algo impede o seu progresso:</b> Você não está bem de saúde',
                    '<b>Um interrogatório não vai funcionar aqui:</b> Não confiam em você',
                    '<b>Um interrogatório não vai funcionar aqui:</b> Não sabem de nada',
                    '<b>Um interrogatório não vai funcionar aqui:</b> Não querem contar nada',
                    '<b>Um interrogatório não vai funcionar aqui:</b> Não podem contar nada',
                    '<b>Um interrogatório não vai funcionar aqui:</b> Não há ninguém para interrogar',
                    '<b>Um interrogatório não vai funcionar aqui:</b> As informações não fazem sentido algum',
                    '<b>Ocorre um desastre natural:</b> Uma tempestade provoca alagamento',
                    '<b>Ocorre um desastre natural:</b> Cai muita neve e prejudica a viagem',
                    '<b>Ocorre um desastre natural:</b> Um desmoronamento impede a passagem',
                    '<b>Ocorre um desastre natural:</b> Ventos fortes e risco de furacão',
                    '<b>Ocorre um desastre natural:</b> O nível das águas se eleva demais',
                    '<b>Ocorre um desastre natural:</b> Um incêndio irrompe no local',
                    '<b>Uma disputa deve ser feita:</b> Uma disputa intelectual',
                    '<b>Uma disputa deve ser feita:</b> Uma disputa de força física',
                    '<b>Uma disputa deve ser feita:</b> Uma disputa de agilidade',
                    '<b>Uma disputa deve ser feita:</b> Uma disputa desvantajosa para você',
                    '<b>Uma disputa deve ser feita:</b> Uma disputa econômica',
                    '<b>Uma disputa deve ser feita:</b> Uma disputa com sérias consequências',
                    '<b>Você precisa resolver um enigma:</b> Que envolve pensamento rápido',
                    '<b>Você precisa resolver um enigma:</b> Que envolve conhecimentos antigos',
                    '<b>Você precisa resolver um enigma:</b> Que envolve muita pesquisa',
                    '<b>Você precisa resolver um enigma:</b> Que envolve paciência',
                    '<b>Você precisa resolver um enigma:</b> Você não consegue resolvê-lo sozinho',
                    '<b>Você precisa resolver um enigma:</b> Ninguém pode te ajudar nisso',
                    '<b>Você descobre uma verdade prejudicial:</b> Um aliado irá trair você',
                    '<b>Você descobre uma verdade prejudicial:</b> Cumprir o seu objetivo favorece o inimigo',
                    '<b>Você descobre uma verdade prejudicial:</b> Você está sendo enganado desde o início',
                    '<b>Você descobre uma verdade prejudicial:</b> Pessoas morrerão se você tiver sucesso',
                    '<b>Você descobre uma verdade prejudicial:</b> Um sacrifício deve ser feito',
                    '<b>Você descobre uma verdade prejudicial:</b> O inimigo é pior do que você pensava'
                ];
                break;

            case "h":
                return [
                    '<b>Uma perigosa negociação deve ser feita:</b> A vida de reféns estão em jogo',
                    '<b>Uma perigosa negociação deve ser feita:</b> Você não tem a moeda de troca',
                    '<b>Uma perigosa negociação deve ser feita:</b> Isso precisa ser resolvido neste momento',
                    '<b>Uma perigosa negociação deve ser feita:</b> Você ficará sem um item importante',
                    '<b>Uma perigosa negociação deve ser feita:</b> Alguém importante para você é envolvido',
                    '<b>Uma perigosa negociação deve ser feita:</b> Seu objetivo depende disso',
                    '<b>Um obstáculo precisa ser superado:</b> Há muitos inimigos à frente',
                    '<b>Um obstáculo precisa ser superado:</b> Uma barreira que lhe causará dano',
                    '<b>Um obstáculo precisa ser superado:</b> Você precisa de um equipamento especial',
                    '<b>Um obstáculo precisa ser superado:</b> Somente magia/tecnologia vai ajudar',
                    '<b>Um obstáculo precisa ser superado:</b> Falhar aqui lhe causará muito dano',
                    '<b>Um obstáculo precisa ser superado:</b> É preciso fazer um teste bem difícil',
                    '<b>Você cai em uma armadilha:</b> Que te atrasará por um bom tempo',
                    '<b>Você cai em uma armadilha:</b> Que você não sabe como sair',
                    '<b>Você cai em uma armadilha:</b> Inimigos te esperam ao sair dela',
                    '<b>Você cai em uma armadilha:</b> Que alerta sobre a sua presença',
                    '<b>Você cai em uma armadilha:</b> Que te causa muito dano, mesmo',
                    '<b>Você cai em uma armadilha:</b> Que te faz perder parte de seu equipamento',
                    '<b>Você é perseguido:</b> Por inimigos que você sabia da presença',
                    '<b>Você é perseguido:</b> Por um monstro inesperado',
                    '<b>Você é perseguido:</b> Por um novo inimigo desconhecido',
                    '<b>Você é perseguido:</b> Por um artifício mágico/tecnológico',
                    '<b>Você é perseguido:</b> Por uma criatura selvagem',
                    '<b>Você é perseguido:</b> Por algo mais veloz do que você',
                    '<b>Surge um novo confronto:</b> Com inimigos já conhecidos',
                    '<b>Surge um novo confronto:</b> Com um novo inimigo mais poderoso',
                    '<b>Surge um novo confronto:</b> Com vários inimigos fracos',
                    '<b>Surge um novo confronto:</b> Que envolve magia/tecnologia',
                    '<b>Surge um novo confronto:</b> Com um monstro errante',
                    '<b>Surge um novo confronto:</b> Com uma criatura selvagem',
                    '<b>É preciso abrir mão de algo importante:</b> Algo que você usa o tempo todo',
                    '<b>É preciso abrir mão de algo importante:</b> Algo mágico/tecnológico',
                    '<b>É preciso abrir mão de algo importante:</b> Algo importante para a aventura',
                    '<b>É preciso abrir mão de algo importante:</b> Algo de grande valor sentimental',
                    '<b>É preciso abrir mão de algo importante:</b> Algo muito raro ou valioso',
                    '<b>É preciso abrir mão de algo importante:</b> Algo essencial no momento'
                ];
                break;

            default:
                return 'especifique o ambiente no segundo argumento: (a)migável, (n)eutro ou (h)ostil<br>Ex.: !opis comp n';

        }

    }

    $('#btnGerarComplicacao').click(function(){

        var ambiente = $('#selectAmbiente').val();
        if(ambiente == '') ambiente = random(['a','n','h']);

        $('.boxOpis').prepend(
          '<strong>Complicação gerada</strong><br><i>'+random(opiscomp(ambiente))+'</i><br><br>'
        );

    });

    $('#btnGerarEvento').click(function(){

        var ambiente = $('#selectAmbiente').val();
        if(ambiente == '') ambiente = random(['a','n','h']);

        var efeito = random(opisevento(ambiente).efeito);
        var evento = random(opisevento(ambiente).evento);

        result = '<strong>Efeito do evento em relação à você:</strong> '+efeito+'<br>'+
            '<strong>Evento:</strong> '+evento+'<br><br>';

        $('.boxOpis').prepend(result);

    });

    $('#btnGerarLocal').click(function(){

        var ambiente = $('#selectAmbiente').val();
        if(ambiente == '') ambiente = random(['a','n','h']);

        $('.boxOpis').prepend(
          '<strong>Local: </strong><i>'+random(opislocal(ambiente))+'</i><br><br>'
        );

    });

    $('#btnGerarInspiracao').click(function(){

        $('.boxOpis').prepend(
          '<strong>Palavras de inspiração: </strong><i>'+random(opis_insp().substantivo)+' - '+random(opis_insp().adjetivo)+' - '+random(opis_insp().verbo)+'</i><br><br>'
        );

    });


    $('#btnGerarDetalhes').click(function(){

        $('.boxOpis').prepend(
          '<strong>Detalhes: </strong><i>'+random(opis_detalhes().dia)+' - '+random(opis_detalhes().hora)+' - '+random(opis_detalhes().tempo)+' - '+random(opis_detalhes().direcao)+'</i><br><br>'
        );

    });

    $('#btnGerarNPC').click(function(){

        var ambiente = $('#selectAmbiente').val();
        if(ambiente == '') ambiente = random(['a','n','h']);
                    
        var npc_tipo = random(opisnpc(ambiente).tipo);
        var npc_atitude = random(opisnpc(ambiente).atitude);
        var npc_motivacao = random(opisnpc_data().motivacao);
        var npc_conversa = random(opisnpc_data().conversa);
        var npc_comportamento = random(opisnpc_data().comportamento);
        var npc_qualidade = random(opisnpc_data().qualidade);
        var npc_defeito = random(opisnpc_data().defeito);
        var npc_sentimento = random(opisnpc_data().sentimento);

        result = '<strong>NPC presente na cena:</strong><i> '+npc_tipo+'</i><br>'+
            '<strong>Atitude em relação à você:</strong><i> '+npc_atitude+'</i><br>'+
            '<strong>Motivação:</strong><i> '+npc_motivacao+'</i><br>'+
            '<strong>Disposição de conversa:</strong><i> '+npc_conversa+'</i><br>'+
            '<strong>Comportamento:</strong><i> '+npc_comportamento+'</i><br>'+
            '<strong>Qualidade:</strong><i> '+npc_qualidade+'</i><br>'+
            '<strong>Defeito:</strong><i> '+npc_defeito+'</i><br>'+
            '<strong>Sentimento:</strong><i> '+npc_sentimento+'</i><br><br>';

        $('.boxOpis').prepend(result);

    });

    $('#btnGerarSNMais').click(function(){

        $('.boxOpis').prepend(
          '<strong>Resposta do oráculo: </strong><i>'+random(opissn_mais)+'</i><br><br>'
        );

    });

    $('#btnGerarSNMenos').click(function(){

        $('.boxOpis').prepend(
          '<strong>Resposta do oráculo: </strong><i>'+random(opissn_menos)+'</i><br><br>'
        );

    });

    $('#btnGerarSN').click(function(){

        $('.boxOpis').prepend(
          '<strong>Resposta do oráculo: </strong><i>'+random(opissn)+'</i><br><br>'
        );

    });

    $('.boxOpis').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

