$( document ).ready(function() {

    function encontroNeutro() {
        return random([
            'Um álfar, elfo, lhe visita e te conta segredos. Explore um presságio do território sem gastar uma ação.',
            'Um espírito selvagem da natureza, landvættir, está atrapalhando a conjuração de seus feitiços. Tente se livrar dele sendo Estiloso ou Esperto.',
            'Você encontra um grande freixo, com uma águia na copa e serpentes nas raízes. Os deuses sorriem para você. Recebe ■ um Ponto de Wyrd.',
            'Uma família pede por alimentos, você dá a eles uma erva qualquer de seu estoque.',
            'Você encontra um(a) xamã de sua terra. Ele (ou ela) pode se tornar um aliado, teste Estiloso ou Esperto.',
            'Um de seus inimigos conhecidos foi capturado e você realiza o ritual águia de sangue, blódörn, com ele (apenas narrativo, não é preciso conjurar feitiço).',
            'A mata está muito fechada em seu caminho, utilize Esperto ou Sorrateiro para prosseguir.',
            'Você encontra um anão dvergar que cria para você um amuleto mágico. Utilize qualquer runa uma única vez em um feitiço, depois disso o amuleto se desfaz.',
            'É tempo do dísablót, um ritual menor de fertilidade em honra às dísir, espíritos tutelares femininos. Teste Estiloso ou Esperto.',
            'Um escaldo, poeta, de seu reino foi vítima de um encantamento hostil e não consegue mais entreter o jarl. Conjure um feitiço para ajudá-lo.',
            'Você encontra uma cachoeira de águas cristalinas, limpe um ■ de fadiga.',
            'Você encontra um xamã de um território inimigo. Consulte a norna Skuld para saber suas intenções.',
            'Um jarl lhe convoca e diz que seu espírito protetor, fylgja, está desaparecido. Conjure um feitiço para resolver este problema.',
            'Você encontra uma erva à sua escolha.',
            'O cavalo de um karl de uma vila próxima torceu a pata, conjure um feitiço para curá-lo.',
            'É tempo de celebração, você deve realizar o ritual Álfablót, um sacrifício aos elfos, para boa fortuna. Teste Estiloso ou Esperto.',
            'Você encontra Draupnir, o anel amaldiçoado. Crie um presságio para reverter a maldição. Ele trará grandes riquezas para o seu reino.',
            'Os deuses se comunicam com você através dos sonhos. Consulte as nornas Skuld e Verdandi para saber o significado do seu sonho e criar um presságio.',
            'O seu jarl lhe convida para um sumbl, um banquete, em honras à Óðinn, o Pai de Todos. Você deve lhe fazer um juramento e um brinde almejando a vitória.',
            'Você recebe de um anão dvergar ferreiro um bastão mágico de ferro. Escolha um tipo de feitiço. Você gasta apenas a erva exigida para conjurar este feitiço.',
            'Você encontra mel e hera-terrestre, essenciais para a fabricação do mjöð, o hidromel. Marque ■ uma erva qualquer à sua escolha.',
            'Um jarl local lhe convoca pois quer saber do futuro dele. Crie um presságio para saber o que acontecerá.',
            'Você é convocado para resolver uma desavença entre karls. Utilize Estiloso ou Esperto.',
            'Um grupo de caçadores pede a sua ajuda, conjure um feitiço para auxiliá-los na caça.',
            'Você encontra um homem grande e forte pescando em um rio. Você pode ajudá-lo com Esperto ou Sorrateiro. Caso obtenha sucesso, ele lhe dará um pingente com o martelo de Thor. Você poderá usar a runa ᛅ ár uma única vez, mesmo não possuindo-a.',
            'Você encontra com um alto homem velho e caolho, vestindo um manto cinza e portando um cajado. Ele lhe conta alguns segredos. Marque ■ uma nova runa.',
            'Você sonha com uma revelação de que um antigo amigo, já levado pelas valkyrias, agora é um einherjar, um guerreiro que banqueteia com Óðinn em Valhöll, à espera do Ragnarok, o Crepúsculo dos Deuses.',
            'Você encontra um álfar, exímio ferreiro, que te pede um favor. Se quiser, você pode criar um presságio para tanto. Ao obter sucesso resolvendo o presságio, ele te forja como presente um precioso anel, que aumenta a sua menor abordagem em um ■.',
            'Um guerreiro berserker aliado perdeu o controle sobre o seu hamr, espírito animal violento, o que o faz se transformar em lobisomem e assassinar quem encontra. Conjure um feitiço para resolver este problema antes da próxima lua cheia.',
            'Você é convocado para realizar os ritos fúnebres de um importante guerreiro, que será cremado em um navio. Teste seu Estiloso ou Esperto para garantir que a passagem para o mundo dos mortos seja tranquila.',
            'Um jöttun ameaça uma vila próxima, devorando todos os animais, gado ou de estimação. Crie um presságio para afastá-lo para um território adjacente.',
            'Você encontra rastros recentes de um cavalo estranho, pois este parece possuir 8 patas. Seria Sleipnir? Estariam Óðinn, ou Loki, próximos?',
            'O filho de um jarl local foi amaldiçoado e transformado em porco. Conjure um feitiço para desfazer a maldição.',
            'Você encontra Dvalin, o mítico ferreiro dos deuses, que te pede um favor. Se quiser, você pode criar um presságio para tanto. Ao obter sucesso resolvendo o presságio, ele te forja como recompensa uma lança rúnica, que aumenta a sua menor magia em um ■.',
            'Uma macieira encantada de seu reino adoeceu, suas maçãs não mais dão saúde a quem comê-las. Conjure um feitiço para resolver este problema.',
            'Ao voltar para casa você encontra um galho de aveleira e uma cabeça de cavalo. Você foi vítima de um níð, uma magia difamatória e malévola. Crie um presságio para saber quem conjurou este feitiço, para se livrar dele e também se vingar.',
        ]);
    };

    function encontroHostil() {
        return random([
            'Você encontra um feroz lobo em seu caminho. Se livre dele com Esperto ou Sorrateiro.',
            'Conversando com karls, homens livres, você descobre que o jarl deste local pretende invadir o seu território.',
            'Você encontra indícios de feitiços seiðr ofensivos feitos recentemente neste local. Consulte a norna Urd para saber qual é o feitiço e o seu efeito.',
            'Dois territórios adjacentes declaram guerra entre si. Crie um presságio para descobrir mais informações.',
            'Você encontra um urso pardo selvagem. Pode se livrar dele sendo Esperto ou Sorrateiro.',
            'É sexta-feira, dia de Frigg. Seu próximo feitiço que utilize a runa ᚴ kaun terá o seu efeito potencializado. ',
            'Você descobre que um xamã inimigo deste território estava perguntando sobre você há poucos dias. Você desconhece as intenções dele.',
            'Uma doença se espalha em um povoado. Crie um presságio para o problema. Você deve curá-la.',
            'Você encontra indícios de feitiços galdr ofensivos feitos recentemente neste local. Consulte a norna Urd para saber qual é o feitiço e o seu efeito.',
            'Você avista um grande grupo de guerreiros inimigos se deslocando em direção ao seu território.',
            'Você se depara com um draugr na floresta, um morto-vivo. Se livre dele com Esperto ou Sorrateiro.',
            'É quinta-feira, dia de Thor. Seu próximo feitiço que utilize a runa ᛅ ár terá o seu efeito potencializado.',
            'Batedores locais descobrem a sua posição, você pode se livrar deles com feitiços ou usando abordagens, sendo Estiloso ou Sorrateiro.',
            'É tempo do midvetrarblót, um ritual menor de fertilidade e fecundidade. Você pode atrapalhar o ritual inimigo conjurando um feitiço.',
            'É quarta-feira, dia de Óðinn. Seu próximo feitiço que utilize a runa ᚭ óss terá o seu efeito potencializado. ',
            'Thralls te perseguem pelo bosque e fazem ameaças de morte, dizendo que vão lhe entregar ao jarl local. Utilize Estiloso ou Esperto para se livrar.',
            'Você percebe que está no meio de diversos ninhos de serpentes. Escape com Estiloso ou Sorrateiro.',
            'Você encontra rastros recentes de dragão-serpente. Se quiser, crie um presságio para caçar a criatura e obter o seu tesouro (consulte a norna Skuld).',
            'O lobo celeste Hati captura sua presa, o sol, e ocorre um eclipse. O seu próximo feitiço terá uma penalidade de -1 no número alvo.',
            'No horizonte você avista a bifrost, a ponte arco-íris que leva à Asgarðr. Aumente o número alvo de seu próximo feitiço em um.',
            'Você descobre onde habita o escaldo, poeta, do jarl local. Se quiser, conjure um feitiço para prejudicá-lo.',
            'Você encontra o colar mágico Brisingamen. Agora os seus feitiços contra jötunns, ogros e trölls recebe um aumento de um no número alvo.',
            'Os animais da região não estão mais produzindo alimentos. Você pode resolver o problema conjurando um feitiço.',
            'É terça-feira, dia de Týr. Seu próximo feitiço que utilize a runa ᛏ týr terá o seu efeito potencializado.',
            'No horizonte você avista uma valkyria, ela está carregando um de seus aliados em seu cavalo, levando-o aos salões de Valhöll. Você não poderá mais contar com a sua ajuda.',
            'Você encontra um dos três fragmentos da espada mágica Gram. Quando possuir três fragmentos você pode reforjá-la com a ajuda de um anão dvergar, ao encontrá-lo. Isso tratá grandes vitórias ao seu jarl.',
            'Você encontra uma montanha cercada por fogo. Você pode atravessar o fogo com feitiços ou testando Estiloso ou Esperto. No centro está uma jovem e bela guerreira. Ela te ensina conhecimentos secretos das runas. Marque ■ uma nova runa.',
            'Uma colina próxima é o lar de um ogro de duas cabeças. Você pode usá-lo contra os seus inimigos ou derrotá-lo e tomar o seu tesouro (consulte a Skuld).',
            'Você encontra indícios de feitiços völva ofensivos feitos recentemente neste local. Consulte a norna Urd para saber qual é o feitiço e o seu efeito. ',
            'Uma suspeita tempestade se aproxima no horizonte. Parece ser a ação de algum outro xamã inimigo agindo contra este território. Crie um presságio.',
            'No meio da mata você encontra um hörgr, um grande círculo de pedras. O próximo feitiço que você conjurar terá o seu número alvo aumentado em um e o seu efeito será potencializado.',
            'Você descobre que em um grupo de guerreiros inimigos há um úlfheðnar, um guerreiro berserker, de grande força física e temperamento violento. Você pode conjurar um feitiço maligno para ele.',
            'Você encontra um anão dvergar que diz saber a localização da espada mítica Tyrfing. Você pode criar um presságio para obter a espada, porém ela é amaldiçoada. Ela torna o seu portador ganancioso, perverso e assassino.',
            'Você chega em um bosque onde habita um landvættir, um espírito da natureza. Caso você lhe dê algo especial de presente ele irá lhe fazer um favor. Explore um presságio deste território sem gastar uma ação.',
            'Você encontra uma pedra pintada, estela, com cenas da morte de um rei. Cria um presságio para descobrir mais sobre esta estela e o seu significado.',
            'Você encontra uma caverna onde habita um tröll. Se quiser, conjure um feitiço para usar o tröll contra os seus inimigos.',
        ]);
    };

    function skuld() {
        parte_um = random(['Fogo','Passagem','Proteção','Fartura','Tempo','Som','Água','Barreira','Exposição','Escassez','Espaço','Silêncio','Terra','Perda','Movimento','Natureza','Caminho','Vínculo','Trevas','Fraqueza','Declínio','Espírito','Caos','Destino','Ar','Descoberta','Inércia','Ilusão','Labirinto','Ruptura','Luz','Força','Progresso','Matéria','Paz','Origem']);
        parte_dois = random(['Abandonado','Adulterado','Antigo','Belo','Frio','Escuro','Delicado','Furioso','Vazio','Exótico','Grotesco','Abundante','Instável','Severo','Artificial','Grandioso','Letal','Solitário','Perdido','Sombrio','Poderoso','Misterioso','Natural','Raro','Intenso','Fraco','Novo','Místico','Ardente','Confuso','Ilusório','Requintado','Mensageiro','Oculto','Rústico','Glorioso']);
        return parte_um+' / '+parte_dois;
    };

    function verdandi() {
        return random(
            ['<i>Um grande galho de árvore se parte próximo a você<br></i>Obstáculo (barreira, empecilho, tarefa) ',
            '<i>Vários corvos empoleirados alçam voo ao te ver</i><br>Conflito (briga, batalha, desavença)',
            '<i>Um lobo no horizonte te observa e te dá as costas</i><br>Ameaça (armadilha, desastre, perigo)',
            '<i>Uma serpente cruza o seu caminho e se esconde</i><br>Disputa (perseguição, debate, competição)',
            '<i>Uma coruja te observa atentamente bem de longe</i><br>Enigma (investigação, quebra-cabeças, mistérios)',
            '<i>Você ouve gemidos, choros e lamentos de Niflheim</i><br>Interação (negociação, interrogatório, persuasão)']
        );
    };

    function urd() {
        return ['Maldição','Doença','Veneno','Controlar a Natureza','Emplastro','Encantamento','Convocar Espíritos','Comunhão','Clarividência'];
    }

    function runa() {
        return [{
                nome: 'ᚠ fé',
                entidade: 'Freyr',
                efeito: 'Riqueza, abundância, fertilidade, sorte',
                malogro: 'Pobreza, escassez, ruína, azar'
            },{
                nome: 'ᚢ úr',
                entidade: 'Móði e Magni',
                efeito: 'Força física, terra, energia, saúde',
                malogro: 'Perda, doença, fraqueza, passividade'
            },{
                nome: 'ᚦ ðurs',
                entidade: 'Loki',
                efeito: 'Gigante, poderoso, fogo, temperamento explosivo',
                malogro: 'Egoísmo, conflito, dificuldades, riscos'
            },{
                nome: 'ᚭ óss',
                entidade: 'Oðinn',
                efeito: 'Deuses, intuição, comunicação, inspiração',
                malogro: 'Intrigas, mentiras, fofocas, difamação'
            },{
                nome: 'ᚱ reið',
                entidade: 'Hermóðr',
                efeito: 'Deslocamento, jornada, mudança, viagem',
                malogro: 'Sequestro, infortúnios, paralisia, estagnação'
            },{
                nome: 'ᚴ kaun',
                entidade: 'Frigg',
                efeito: 'Revelação, imaginação, conhecimento, paixão',
                malogro: 'Desgraça, infelicidade, ódio, ignorância'
            },{
                nome: 'ᚼ hagall',
                entidade: 'Njörðr',
                efeito: 'Fúria da natureza, ar, tempestade, nevasca',
                malogro: 'Recuo, rendição, seca, alagamento'
            },{
                nome: 'ᚾ nauðr',
                entidade: 'Hel',
                efeito: 'Sofrimento, dificuldade, pobreza, tormento',
                malogro: 'Aprisionamento, morte, submissão, inanição'
            },{
                nome: 'ᛁ isa',
                entidade: 'Skaði',
                efeito: 'Inverno, desafio, gelo, paciência',
                malogro: 'Ansiedade, bloqueios, aflição, inflexibilidade'
            },{
                nome: 'ᛅ ár',
                entidade: 'Thor',
                efeito: 'Colheita, fartura, paz, prosperidade',
                malogro: 'Fome, guerra, declínio, miséria'
            },{
                nome: 'ᛋ sól',
                entidade: 'Heimdallr',
                efeito: 'Sol, vitória, honra, cura',
                malogro: 'Frio, desonra, derrota, definhar'
            },{
                nome: 'ᛏ týr',
                entidade: 'Týr',
                efeito: 'Justiça, coragem, disciplina, liderança',
                malogro: 'Traição, derrota, vingança, covardia'
            },{
                nome: 'ᛒ bjarkan',
                entidade: 'Freya',
                efeito: 'Nascimento, casamento, recomeço, crescimento',
                malogro: 'Morte, moléstia, fim abrupto, doença'
            },{
                nome: 'ᛘ maðr',
                entidade: 'Forseti',
                efeito: 'Humanidade, amizade, família, ordem social ',
                malogro: 'Solidão, egoísmo, falsidade, inimigos'
            },{
                nome: 'ᛚ lögr',
                entidade: 'Bragi',
                efeito: 'Emoções, sentimentos, sonhos, água',
                malogro: 'Pesadelos, medo, náufrago, confusão'
            },{
                nome: 'ᛦ yr',
                entidade: 'Ullr',
                efeito: 'Animais, sustento, proteção, conforto',
                malogro: 'Angústia, desânimo, fadiga, vulnerabilidade'
            }];
    }

    function rolarDadosd6(){
        min = Math.ceil(1);
        max = Math.floor(6);
        return Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function rolarDadosd10(){
        min = Math.ceil(1);
        max = Math.floor(10);
        return Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function nome(type){
        switch(type){
            case "masculino":
                return random(['Agantyr','Alvig','Asmund','Auðr','Barri','Bjårkmar','Borgar','Eddval','Egill','Einar','Finnbog','Fløki','Freki','Gårdar','Geimunð','Gunnar','Guðorn','Halfdan','Helgi','Hjalmar','Holmgeir','Ingjald','Jormunð','Kaetill','Melnir','Øleg','Ottär','Rolf','Sigar','Skelfir','Svåfnir','Svein','Ðornst','Vignir','Wulfgär','Yngvi']);        
                break;
            case "feminino":
                return random(['Alfhild','Aslåug','Astrid','Aüd','Bodvild','Borghild','Dagmæ','Fjøtra','Freydis','Gdumvæ','Geirrid','Gjaflaug','Grimhil','Gullrond','Gýda','Hållfrid','Helveig','Helga','Hildrið','Ingibjörg','Ingred','Ingvild','Isgerd','Lofnheid','Lynghei','Oddrun','Rågnhild','Særeid','Sigrid','Silksif','Torvi','Thjodhild','Thorged','Ðorunn','Vætild','Yrsa']);
                break;
        }
    }

    function apelido(type){
        switch(type){
            case "masculino":
                return random(['o Audaz','o Bastardo','o Benevolente','o Débil','o Distraído','o Esfolador','o Perverso','o Intrépido','o Irascível','o Justo','o Louco','o Orgulhoso','o Peçonhento','o Peregrino','o Poderoso','o Pretensioso','o Sortudo','o Teimoso']);
                break;
            case "feminino":
                return random(['a Audaz','a Bastarda','a Benevolente','a Débil','a Distraída','a Esfoladora','a Perversa','a Intrépida','a Irascível','a Justa','a Louca','a Orgulhosa','a Peçonhenta','a Peregrina','a Poderosa','a Pretensiosa','a Sortuda','a Teimosa']);
                break;
        }
    }

    function atributosXama(){
        var estiloso = 1;
        var esperto = 1;
        var sorrateiro = 1;
        var seidr = 1;
        var galdr = 1;
        var volva = 1;
       
        var origem = random(['Sueco','Dinamarquês','Norueguês']);

        switch(origem){
            case 'Sueco':
                estiloso = estiloso + 1;
                break;
            case 'Dinamarquês':
                esperto = esperto + 1;
                break;
            case 'Norueguês':
                sorrateiro = sorrateiro + 1;
                break;
        }

        var personalidade = random(['Pretensioso','Sábio','Misterioso']);

        switch(personalidade){
            case 'Pretensioso':
                estiloso = estiloso + 1;
                break;
            case 'Sábio':
                esperto = esperto + 1;
                break;
            case 'Misterioso':
                sorrateiro = sorrateiro + 1;
                break;
        }

        if(estiloso == 3){
            var rnd = random(['1','2']);
            if(rnd == '1')
                esperto = esperto + 1;
            else
                sorrateiro = sorrateiro + 1;
        }

        if(esperto == 3){
            var rnd = random(['1','2']);
            if(rnd == '1')
                estiloso = estiloso + 1;
            else
                sorrateiro = sorrateiro + 1;
        }

        if(sorrateiro == 3){
            var rnd = random(['1','2']);
            if(rnd == '1')
                estiloso = estiloso + 1;
            else
                esperto = esperto + 1;
        }

        if((estiloso == 2) && (esperto == 2)){
            var rnd = random(['1','2']);
            if(rnd == '1')
                estiloso = estiloso + 1;
            else
                esperto = esperto + 1;
        }

        if((estiloso == 2) && (sorrateiro == 2)){
            var rnd = random(['1','2']);
            if(rnd == '1')
                estiloso = estiloso + 1;
            else
                sorrateiro = sorrateiro + 1;
        }

        if((esperto == 2) && (sorrateiro == 2)){
            var rnd = random(['1','2']);
            if(rnd == '1')
                esperto = esperto + 1;
            else
                sorrateiro = sorrateiro + 1;
        }

        var tipoAnimal = random(['Peçonhento','Mamífero','Ave']);
        var animal = '';

        switch(tipoAnimal){
            case 'Peçonhento':
                seidr = seidr + 1;
                animal = random(['Serpente','Aranha','Escorpião','Sapo','Vespa','Lacraia']);
                break;
            case 'Mamífero':
                galdr = galdr + 1;
                animal = random(['Lobo','Urso','Javali','Gato','Cervo','Cavalo']);
                break;
            case 'Ave':
                volva = volva + 1;
                animal = random(['Corvo','Gavião','Águia','Falcão','Urubu','Abutre']);
                break;
        }
        
        var pratica = random(['Feitiços Ofensivos','Feitiços Defensivos','Feitiços Adivinhatórios']);

        switch(pratica){
            case 'Feitiços Ofensivos':
                seidr = seidr + 1;
                break;
            case 'Feitiços Defensivos':
                galdr = galdr + 1;
                break;
            case 'Feitiços Adivinhatórios':
                volva = volva + 1;
                break;
        }

        if(seidr == 3){
            var rnd = random(['1','2']);
            if(rnd == '1')
                galdr = galdr + 1;
            else
                volva = volva + 1;
        }

        if(galdr == 3){
            var rnd = random(['1','2']);
            if(rnd == '1')
                seidr = seidr + 1;
            else
                volva = volva + 1;
        }

        if(volva == 3){
            var rnd = random(['1','2']);
            if(rnd == '1')
                seidr = seidr + 1;
            else
                galdr = galdr + 1;
        }

        if((seidr == 2) && (galdr == 2)){
            var rnd = random(['1','2']);
            if(rnd == '1')
                seidr = seidr + 1;
            else
                galdr = galdr + 1;
        }

        if((seidr == 2) && (volva == 2)){
            var rnd = random(['1','2']);
            if(rnd == '1')
                seidr = seidr + 1;
            else
                volva = volva + 1;
        }

        if((galdr == 2) && (volva == 2)){
            var rnd = random(['1','2']);
            if(rnd == '1')
                galdr = galdr + 1;
            else
                volva = volva + 1;
        }

        return {
            estiloso: estiloso,
            esperto: esperto,
            sorrateiro: sorrateiro,
            seidr: seidr,
            galdr: galdr,
            volva: volva,
            origem: origem,
            personalidade: personalidade,
            tipoAnimal: tipoAnimal,
            animal: animal,
            pratica: pratica
        }

    }

    function aparencia(){
        return random(['Um grande manto negro com capuz, feito de penas de corvos, com diversos adornos e jóias em prata','Um cajado feito inteiramente de ossos, com adornos de penas de pássaros e diversas caveiras','Uma grossa capa de pele de urso branco','Uma máscara feita com diversos ossos de animais','Um elmo feito com grandes galhadas de cervo','Seu rosto é uma só cicatriz, foi inteiro queimado','Tatuagens pelo corpo todo, com runas e símbolos','Longos cabelos (talvez barba) brancos que vão até o chão, lar de alguns insetos','Um cajado torcido de ferro frio, com runas entalhadas e um grande cristal na ponta','Um elmo feito do crânio de um touro','Dois corvos sempre estão empoleirados em seus ombros, um de cada lado','Unhas extremamente longas, rígidas e encurvadas']);
    }

    $('#btnUndo').click(function(){
        $('.boxRonin .boxNPC:first-child').remove();
    });

    $('#btnGerarEncontroNeutro').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Evento Neutro: </strong>'+encontroNeutro()+
        '</div><br>');

    });

    $('#btnGerarEncontroHostil').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Evento Hostil: </strong>'+encontroHostil()+
        '</div><br>');

    });

    $('#btnGerarXama').click(function(){

        var xama = atributosXama();
        var sexo = random(['masculino','feminino']);
        var runas = exclusiveRandom(runa(),4);

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<center><h4>'+nome(sexo)+', '+apelido(sexo)+'</h4>'+
          '<p><i>'+aparencia()+'</i></p></center>'+
          '<div><strong>Origem:</strong> '+xama.origem+'</div>'+
          '<div><strong>Personalidade:</strong> '+xama.personalidade+'</div>'+
          '<div><strong>Animal totêmico:</strong> '+xama.animal+'</div>'+
          '<div><strong>Prática mágica inerente:</strong> '+xama.pratica+'</div><br>'+
          '<div><strong>Abordagens</strong>'+
          '<div class="textIndent">Estiloso '+nbsp(4)+stress(xama.estiloso,xama.estiloso)+'</div>'+
          '<div class="textIndent">Esperto '+nbsp(4)+stress(xama.esperto,xama.esperto)+'</div>'+
          '<div class="textIndent">Sorrateiro '+stress(xama.sorrateiro,xama.sorrateiro)+'</div></div><br>'+
          '<div><strong>Magia</strong>'+
          '<div class="textIndent">Seiðr '+nbsp(2)+stress(xama.seidr,xama.seidr)+'</div>'+
          '<div class="textIndent">Galdr '+nbsp(2)+stress(xama.galdr,xama.galdr)+'</div>'+
          '<div class="textIndent">Völva '+nbsp(2)+stress(xama.volva,xama.volva)+'</div></div><br>'+
          '<div><strong>Runas</strong>'+
          '<div class="textIndent">'+runas[0].nome+'</div>'+
          '<div class="textIndent">'+runas[1].nome+'</div>'+
          '<div class="textIndent">'+runas[2].nome+'</div>'+
          '<div class="textIndent">'+runas[3].nome+'</div></div><br>'+
        '</div>');

    });

    $('#btnGerarUrd').click(function(){

        var runas = exclusiveRandom(runa(),2);

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Urd: </strong>'+random(urd())+'<br>'+
          '<div><h4>'+runas[0].nome+'</h4></div>'+
          '<div><strong>Entidade: </strong>'+runas[0].entidade+'</div>'+
          '<div><strong>Efeito: </strong>'+runas[0].efeito+'</div>'+
          '<div><strong>Malogro: </strong>'+runas[0].malogro+'</div>'+
          '<div><h4>'+runas[1].nome+'</h4></div>'+
          '<div><strong>Entidade: </strong>'+runas[1].entidade+'</div>'+
          '<div><strong>Efeito: </strong>'+runas[1].efeito+'</div>'+
          '<div><strong>Malogro: </strong>'+runas[1].malogro+'</div>'+
        '</div><br>');

    });

    $('#btnGerarVerdandi').click(function(){

        var runas = exclusiveRandom(runa(),2);

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Verdandi: </strong>'+verdandi()+'<br>'+
          '<div><h4>'+runas[0].nome+'</h4></div>'+
          '<div><strong>Entidade: </strong>'+runas[0].entidade+'</div>'+
          '<div><strong>Efeito: </strong>'+runas[0].efeito+'</div>'+
          '<div><strong>Malogro: </strong>'+runas[0].malogro+'</div>'+
          '<div><h4>'+runas[1].nome+'</h4></div>'+
          '<div><strong>Entidade: </strong>'+runas[1].entidade+'</div>'+
          '<div><strong>Efeito: </strong>'+runas[1].efeito+'</div>'+
          '<div><strong>Malogro: </strong>'+runas[1].malogro+'</div>'+
        '</div><br>');

    });

    $('#btnGerarSkuld').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Skuld: </strong>'+skuld()+
        '</div><br>');

    });

    $('#btnRolarD6').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<center><img src="./img/d6_'+rolarDadosd6()+'.jpg" width=100 > <img src="./img/d6_'+rolarDadosd6()+'.jpg" width=100></center>'+
        '</div><br>');

    });

    $('#btnRolarD10').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<center><img src="./img/d10_'+rolarDadosd10()+'.jpg" width=100 > <img src="./img/d10_'+rolarDadosd10()+'.jpg" width=100></center>'+
        '</div><br>');

    });

    $('.boxRonin').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

