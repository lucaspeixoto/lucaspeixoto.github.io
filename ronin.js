$( document ).ready(function() {

    function procurando() {
        return [
            'Você encontra o que procurava, mas antes terá que enfrentar um Inimigo (Combate +2; Bloq 1).',
            'Você encontra o que procurava, mas acabou chamando muita atenção. Adicione 1 de Reputação.',
            'Você encontra o que procurava, mas não é bem o que você esperava.',
            'Você não encontra o que procurava.',
            'Você não encontra o que procurava e acabou chamando muita atenção. Adicione 1 de Reputação.',
            'Você não encontra o que procurava e acabou tendo que enfrentar um Inimigo (Combate +2; Bloq 1).',
        ];
    };

    function passado() {
        return [
            'Conta sobre o segredo de outra pessoa ou clã. Possivelmente, alguém que você não conhece bem ou ainda não conheceu.',
            'Conta algo sobre o passado dele que faz você entender as ações dele no presente.',
            'Você percebe que apesar de fazer o que faz, ele tem um certo ódio de sua condição.',
            'É um idealista fervoroso e vai morrer defendendo o que julga ser certo.',
            'Não conta quase nada. É muito fechado, mas deixa escapar que possui alguma ligação com algum aliado seu.',
            'Não possui nenhum passado interessante nem informação pertinente.'
        ];
    };

    function esqueleto() {
        return [
            'Lutou numa guerra e perdeu alguém muito importante nela.',
            'Ele foi vítima de uma tragédia parecida com a sua.',
            'É parente de alguém que te causou dor no seu passado.',
            'Foi o causador de muita dor, mas hoje está arrependido.',
            'Ele tem um sonho maluco, mas que talvez não seja impossível.',
            'Ele está apaixonado por você.',
        ];
    };

    function nome(type) {
        switch(type){
            case 'masculino':
                return ['Haruto','Yamato','Yoshiro','Kentaro','Shin','Tadashi','Riku','Benjiro','Akira','Kioshi','Ichiro','Takahiro','Haru','Ginjiro','Yuuto','Kyo','Ryuu','Takuma','Hinata','Hansuke','Takashi','Raiden','Kouki','Toshiro','Kaito','Hideo','Itsuki','Ringo','Makoto','Hanzo','Asahi','Kenji','Reo','Sasuke','Nobu','Mitsukun'];
                break;
            case 'feminino':
                return ['Kokoro','Hana','Kaoru','Mei','Sora','Ren','Aika','Himari','Katara','Sakura','Suki','Aina','Emi','Akari','Kimiko','Michi','Tamura','Takara','Fumiko','Ichika','Masami','Atsuko','Tomoe','Shizuka','Kagami','Sara','Mayuko','Izumi','Yumi','Shiori','Kaida','Yui','Saori','Nanami','Yoshihime','Noriko',];
                break;
        }
    };

    function aparencia() {
        return ['Atlético','Gordo','Magro','Alto','Baixa Estatura','Tatuagem','Muitas Tatuagens','Muito Cabelo','Sobrancelhas','Ruivo','Cabelo errado','Grisalho','Careca','Sex Appeal','Olhos Claros','Usa Máscara','Sem Expressão','Cabelo Branco','Mancha de Pele','Andrógeno','Albino','Gigantismo','Cego','Voz Marcante','Rosto Deformado','Cabelo Azulado','Olhos Vermelhos','Totalmente Pálido',];
    };

    function tecnica(type) {

        if(type == null)
            type = random(['comum','comum','comum','comum','comum','incomum']);

        switch(type){
            case 'comum':
                return ['Kenjutsu [Katana] (Combate +2; Bloq 2)','Iaijutsu [Katana] (Combate +4 na primeira rolagem de um duelo; Bloq 2)','Niten Ichi-ryu [Katana e Wakizashi] (Combate +1; Bloq 3)','Naginata (Combate +2; Bloq 2)','Jitte (Combate +1; Se empatar, destrói a lâmina do oponente; Bloq 2)'];
                break;
            case 'incomum':
                return ['Bojutsu [Bastão] (Combate +4 contra Espadas; Bloq 2)','Kusarigama (Combate +0; Se bloquear, ganha +4 pra próxima rolagem; Bloq 2)','Kama (Combate +0; Se bloquear ganha +2 pra próxima rolagem; Bloq 3)','Kanabo (Combate +2 contra qualquer arma que não seja espada; Bloq 3)','Odachi (Combate +3; Bloq 1)','Tonfa (Combate +0; Bloq 4)',];
                break;                
        }
    };

    function familia() {
        return [
            'Samurais de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>]. Você foi expulso da família por desonra.',
            'Samurais de um clã extinto (defina apenas o nome) depois de perderem uma guerra para outro Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>].',
            'Família plebeia assassinada por um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] por não pagarem tributo ao Daimiô.',
            'Família plebeia que se revoltou contra o Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] dominante e hoje é perseguida por ele.',
            'Família de artesãos renomados. Seu pai ou sua mãe lhe revelou um segredo terrível antes de falecer.',
            'Órfão. Foi criado por uma família de samurais de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] como serviçal até ser expulso.',
        ];
    };

    function cicatriz() {
        return ['Corte no rosto','Corte sobre o nariz','Cortes no peito','Cortes em uma perna','Corte no braço','Corte longo pelas costas','Corte sobre a boca','Corte sobre um olho cego','Corte longo no peito','Corte longo em uma perna','Corte na mão','Cortes pelo corpo todo','Queimadura no rosto','Queimadura por toda a cabeça','Queimadura no peito','Queimadura em uma perna','Queimadura em todo o braço','Queimadura pelo corpo todo','Orelha amputada','Nariz amputado','Olho faltante','Pé amputado','1d6 dedos amputados','Duas cicatrizes',];
    };

    function significadoCicatriz(){
        return ['<u>Decepção:</u> Alguém muito próximo te traiu.','<u>Honestidade:</u> Você dará sua vida para cumprir o que prometeu.','<u>Arrependimento:</u> No passado, você foi extremamente cruel e desumano.','<u>Lamentação:</u> Alguém que você ama morreu.','<u>Dever:</u> Você tem uma missão bem clara de vida e sabe o que deve fazer.','<u>Vingança:</u> Quem fez isso irá pagar pelo que fez.',]
    }

    function pesadelo() {
        return ['Uma criança brincando num jardim, de costas, até que ela se vira e você percebe que ela não tem rosto.','Você carregando alguém no colo enquanto anda com dificuldade na neve espessa.','Você está no chão de uma rua de uma cidade durante a chuva, enquanto uma pessoa está indo embora.','Uma pessoa chorando dentro de um poço.','Você dentro de um caixão enquanto é enterrado e uma pessoa lá fora rindo.','Uma pessoa partindo ao longe enquanto, na sua mão, aparece um Japamala (colar budista).','Você desenterrando um crânio humano e, ao olhar, ele começa a se desmanchar.','Uma mesa com diversos pergaminhos e uma pessoa caída sobre eles.','Uma criatura horrenda sai de trás de um arbusto e você corre desesperadamente.','Uma muralha de vultos de pessoas à sua volta rindo.','Uma pessoa embaixo d`água. Ela está parada, mas parece muito triste.','Um polvo gigante devorando um animal enquanto ele se debate.','Um pedaço de roupa ou lenço sendo levado pelo vento.','Você de joelhos olhando o sol se pondo no horizonte.','Uma pessoa rindo descontroladamente enquanto sangue escorre em seu rosto.','Campos de trigo dançando com o vento sob a luz da lua.','Uma grande sombra detrás de uma cama com alguém dormindo nela.','O som de correntes vindo de uma pequena casa no alto de uma montanha.',];
    };

    function caracteristicaCla() {
        return [
            'Este clã é um dos mais poderosos da região. São arrogantes e vivem causando atrito e guerras.',
            'Este clã possui um clã rival (determine este desde já) e está sempre preparado para a guerra contra eles.',
            'Este clã é conhecido pelo uso militar de Ninjas. Possuem uma rede de contatos e sabem sempre de tudo.',
            'Este clã é um dos mais antigos e famosos. Hoje são pequenos, mas planejam um dia voltar aos seus tempos de glória.',
            'Este clã é novo. Acabou de se formar depois que outro clã foi exterminado na região.',
            'Este é um clã menor, vassalo de um clã maior (determine qual).',
        ];
    };

    function nomeCla() {
        return ['Ukiryuu (Dragão)','Kitsune (Raposa)','Nezumi (Rato)','Kasaitori (Ave)','Tsukiinu (Cão)','Mushi (Inseto)','Akaitora (Tigre)','Yamabuta (Javali)','Osuushi (Touro)','Shiroiuma (Cavalo)','Kinsaru (Macaco)','Fuyukumo (Aranha)','Kazekani (Caranguejo)','Tetsukoi (Carpa)','Harihebi (Serpente)','Kuroineko (Gato)','Usagi (Coelho)','Karasu (Corvo)','Ondori (Galo)','Shinkame (Tartaruga)','Ushi (Vaca)','Kuma (Urso)','Ookami (Lobo)','Tokage (Lagarto)','Akirisu (Esquilo)','Shimayagi (Bode)','Ahiru (Pato)','Natsusai (Rinoceronte)','Umisame (Tubarão)','Yukiga (Mariposa)','Sasori (Escorpião)','Suzume (Pardal)','Washi (Águia)','Tsuru (Garça)','Yorutako (Polvo)','Kaeru (Sapo)',];
    };

    function rota() {
        return [
            'Nada aconteceu.',
            'Se tiver Reputação 4 ou mais, um Vilão [<i class="fa fa-star" aria-hidden="true"></i>] te encontrou. Senão, nada aconteceu.',
            'Se tiver Reputação 5 ou mais, um Vilão [<i class="fa fa-star" aria-hidden="true"></i>] te encontrou. Senão, terá um <u>Encontro na Estrada</u>.',
            'Se tiver Reputação 6, um Vilão [<i class="fa fa-star" aria-hidden="true"></i>] te encontrou. Senão, terá um <u>Encontro na Estrada</u>.',
            'Você teve um <u>Encontro na Estrada</u>.',
            'Você teve um <u>Encontro na Estrada</u>.',
        ];
    };


    function localidade() {
        return [
            'Você chegou a uma grande cidade comandada por um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>].<br>Se você tiver Reputação 4 ou mais, será abordado por 2 Soldados (Combate +1; Bloq 0).<br>Aqui você ganha 1 de Reputação e terá um <u>Encontro Urbano</u>.',
            'Você chegou a uma cidade.<br>Se você tiver Reputação 5 ou mais, será abordado por 2 Soldados (Combate +1; Bloq 0).<br>Aqui você ganha 1 de Reputação e terá um <u>Encontro Urbano</u>.',
            'Você chegou a uma pequena cidade.<br>Se você tiver Reputação 6, será abordado por um Soldado (Combate +1; Bloq 0).<br>Aqui você terá um <u>Encontro Urbano</u>.',
            'Você chegou a um porto.<br>Aqui você pode escolher entre ter um <u>Encontro Urbano</u> ou abrigar-se para ganhar 1 de Determinação.',
            'Você chegou a um vilarejo.<br>Aqui você pode ajudar a população para ganhar 1 de Compaixão ou apenas se abrigar para ganhar 1 de Determinação.',
            'Você chegou a um pequeno vilarejo.<br>Aqui você pode ajudar a população para ganhar 1 de Compaixão ou apenas se abrigar para ganhar 1 de Determinação.',
        ];
    };

    function estrada() {
        return [
            'Você encontrou um templo budista. Lá, um monge lhe convidou a passar uns dias meditando. Se quiser, pode ficar no templo por uma semana. Se fizer isso, ao final da semana, role um dado. Se o resultado for entre 6 e 2, reduza 1 de Reputação. Mas se o resultado for 1, você foi visitado pelo espírito de uma de suas vítimas (Combate +1; Bloq 0). Ele desejará lutar contra você e só sumirá se te matar. Se derrotá-lo, ele ainda aparecerá ao final de cada rota para lutar contra você.',
            'Há um grande animal selvagem à solta. Alguns fazendeiros contam que ele já matou vários animais e atacou alguns habitantes da região. Você pode ignorar e seguir adiante, mas se quiser investigar, role um dado. Se o resultado for entre 6 e 2, você descobriu que era um grande Lobo (Combate +0; Bloq 1) e, se vencê-lo, ganhará 1 de Reputação. Mas se o resultado for 1, você encontrou um Yokai chamado Nue (Combate +1; Bloq 2), uma criatura quimérica perigosa.',
            'Você passou a noite numa hospedaria bem simples à beira da estrada. À noite, você escutou gritos de socorro e logo saiu para ver o que era. Os gritos vinham da direção de um campo de mato alto. Você pode ignorar isso, mas perderá 1 de Compaixão. Se quiser verificar, role um dado. Se o resultado for 6, você descobre que um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] está sendo atacado por um Lobo (Combate +1; Bloq 1). Se o resultado for entre 5 e 2, descobre que eram crianças brincando longe de suas casas. E se o resultado for 1, você encontra uma linda pessoa nua caída ao chão. Quando você se aproxima, a pessoa se transforma numa horrenda aranha de 3 metros de altura. É um Jorogumo (Combate +2; Bloq 2), um Yokai terrível que não deixa vítimas. Se perder o combate contra ele, você está morto.',
            'Você encontrou um guarda-chuva estragado à beira da estrada. Você pode guardá-lo e levá-lo para consertar ou deixá-lo no chão. Se deixar, role um dado. Se o resultado for 1, o guarda-chuva se torna um Kasa-obake (Combate +4; Bloq 0) e te ataca na noite seguinte.',
            'Uma família estava passando com sua carroça na estrada e lhe ofereceu carona. Se recusar, eles vão embora. Caso aceite, você então rolará um dado. Se o resultado for entre 6 e 2, você fez uma boa viagem até a próxima cidade e nada aconteceu. Mas caso o resultado seja 1, você descobriu que um membro dessa família é um Kitsune (Combate +0; Bloq 2), um Yokai traiçoeiro. Ele não pode ser intimidado e, se tentar dialogar e perder, você perde 1 de Determinação e acorda sem seus pertences à beira da estrada.',
            'Você descobre que 3 crianças sumiram nas últimas semanas. Alguns dizem que há um Kappa vivendo em um rio próximo. Não há muito além de rumores. Se quiser explorar o rio à noite (quando supostamente o Kappa aparece), role um dado. Se o resultado for entre 6 e 3, nada acontece. Se o resultado for 2, você se machucou feio andando nas pedras do rio e agora está Ferido (-1 de Combate até se recuperar). Se o resultado for 1, você encontrou o Kappa (Combate +1; Bloq 1).',
            'Você descobriu uma casa abandonada à beira da estrada que, segundo rumores, seria mal-assombrada. Se quiser investigar, role um dado. Se o resultado for entre 6 e 3, você não encontrou nada no lugar. Se o resultado for 2, você descobriu uma pessoa sem teto vivendo no lugar. E se o resultado for 1, você realmente encontrou um Fantasma (Combate +3; Bloq 2). ',
            'Você encontrou uma fazenda no meio do caminho. A família que mora ali é bem receptiva e lhe oferece abrigo e comida. Você pode ignorar e seguir viagem ou ficar. Se escolher ficar, role um dado. Se o resultado for entre 6 e 2, você ganha 1 de Determinação e estará se sentindo ótimo e feliz. Se o resultado for 1, você acorda no outro dia preso numa cela e acaba descobrindo que a família aprisiona viajantes para fazer um sopão com carne humana. Para escapar da prisão, terá que vencer os 1d6 Canibais (Combate +0; Bloq 0), usando apenas um pedaço de pau (Combate +0; Bloq 1). Você conseguirá recuperar sua arma se escapar.',
            'Você está andando pela estrada quando encontra um Mestre Ninja (Combate +2; Bloq 0) e 2 Ninjas (Combate +0; Bloq 0) intimidando um homem. Se você se meter, existe a chance do homem ser um nobre. Role um dado, se o resultado for 4 ou mais, ele é um Samurai (Combate +1; Bloq 1) de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] e estava com dois Jitte escondidos. Se o resultado for 3 ou menos, ele é apenas um mercador perdido. Se você seguir adiante, eles irão lutar.',
            'Um Senhor Idoso (Combate -2; Bloq 2) abordou você no meio do caminho usando uma velha espada enferrujada. Ele parece estar delirando e diz que precisa te matar para restaurar a honra de sua família.',
            'Andando na estrada, você encontra um homem caído no chão. Ao se aproximar, você é surpreendido por mais 3 Mercenários (Combate +1; Bloq 0) que saem de trás das árvores usando Naginatas.',
            'Se você deixou algum inimigo vivo recentemente, ele aparece no seu caminho com Combate +1.',
            'Andando pela estrada, você encontra um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] cercado por 2 Samurais (Combate +1; Bloq 1). Pelas vestes, eles são de um conhecido Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] e estão usando armadura e katanas.',
            'Você está andando pela estrada quando encontra um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] sendo atacado por um Samurai (Combate +2; Bloq 1) usando uma katana nova e brilhante.',
            'Você está andando pela estrada quando encontra um Jovem Samurai (Combate +2; Bloq 0) atacando inocentes para “treinar” (Tsujigiri). Se enfrentá-lo, você ganha 1 de Compaixão.',
            'Você está andando pela estrada quando encontra um Tigre Selvagem (Combate +0; Bloq 3) atacando uma família. Se decidir ignorar, você perde 1 de Compaixão.',
            'Você encontrou uma carta no chão que aparentemente foi escrita por um samurai de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] antes de entrar numa batalha. É direcionada à família dele, que parece morar na próxima localidade. Se entregar essa carta, você ganhará 1 de Determinação.',
            'Se você deixou algum inimigo vivo recentemente, ele aparece no seu caminho com Combate +1.',
            'Você chega a uma hospedaria à beira da estrada e se espanta com a quantidade de gatos no lugar. Tão logo você escuta uma melodia incrível tocada por um músico com o rosto coberto. Ao final da melodia, o músico se aproxima de você e diz que precisa conversar. Você pode recusar. Se aceitar, role um dado. Se o resultado for entre 6 e 2, o músico se revela como um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] que precisa que você leve um objeto até a próxima localidade (ganhará 1 de Determinação se o fizer). Se o resultado for 1, o músico se revela como um Yokai chamado Nekomata (Combate +2; Bloq 1).',
            'Uma fazenda está em chamas. Você pode tentar resgatar sobreviventes ou ignorar. Se optar por não se meter, você perderá 1 de Compaixão, mas se ajudar, ganhará 1 de Reputação. Para resgatar os sobreviventes, role 3 vezes o dado. Cada resultado 6 significa que conseguiu salvar um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>]. Resultados 5 ou 4 significam que salvou uma pessoa aleatória (e você ganha 1 de Determinação). 3 ou 2 significam que não encontrou mais ninguém, e 1 significa que você ficou Ferido (-1 de Combate até se recuperar).',
            'Você estava num bar comendo quando foi abordado por um homem de aparência nobre. Ele disse que seu senhor queria conversar com você. Se não quiser ir, role um dado. Se o resultado for entre 6 e 2, o homem deixará você ir, sem resistência. Mas se o resultado for 1, aparecerá um Guarda (Combate +1; Bloq 0) para te impedir. Se decidir ir junto com o homem, role um dado. Se o resultado for entre 6 e 2, o homem o levará até uma carruagem onde um nobre lhe oferecerá “muito dinheiro” caso mate um Samurai (Combate +2; Bloq 1) de um famoso Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>], que estará na próxima localidade. Mas se o resultado for 1, o homem o levará até um beco onde você será atacado por 1d6 Guardas (Combate +1; Bloq 0).',
            'Você foi cercado por 4 Guardas da região (Combate +0; Bloq 0). Eles estão atrás de um ladrão e querem te prender para poder te interrogar. Você pode se entregar, mas se quiser escapar, terá que lutar com eles. Se vencer todos, poderá seguir seu caminho. Se perder, terá sido preso. Depois de alguns dias, você será solto por terem encontrado o verdadeiro ladrão.',
            'Na estrada, você encontra uma criança carregando uma Naginata (Combate -2; Bloq 0). Ela parece abalada e diz que quer matar o ronin que assassinou sua família. A criança pensa que foi você. Se não a ignorar, ganhe 1 de Compaixão.',
            'Se você deixou algum inimigo vivo recentemente, ele aparece no seu caminho com Combate +1.',
            'Você encontrou um Mercenário (Combate +1; Bloq 0) que além de te atacar, lhe falará sobre o Vilão Final [<i class="fa fa-star-o" aria-hidden="true"></i>] (se você ainda não sabe quem é ele, defina agora). O mercenário também te deixará um objeto que revela o quão terrível é o vilão final. Enquanto você estiver com esse objeto, ganhará +1 de Combate contra qualquer vilão.',
            'Você estava andando na estrada quando foi surpreendido por um ataque pelas costas de uma Shuriken. Você agora estará com -1 no seu próximo ataque. Um Ninja (Combate +3; Bloq 0) sai de trás de uma árvore e te ataca.',
            'Você é abordado por um Samurai (Combate +1; Bloq 1) de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>]. Ele não gosta de você e qualquer coisa que fizer poderá ser motivo para ele te atacar.',
            'Se você já tiver aliados, você encontra, à beira da estrada, um deles (aleatório). Ele está ferido e conta que foi o próximo Vilão [<i class="fa fa-star" aria-hidden="true"></i>] (determine os dados dele agora) quem o feriu. Adicione 1 de Reputação. Se não tiver aliados, você encontra um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] andando pela estrada.',
            'Você encontra um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] caído no meio da estrada. Se quiser ajudá-lo, verá que ele possui uma ferida na cabeça. Parece que alguém o atacou. Se quiser achar o agressor, role um dado. Se o resutlado for 6, você conseguiu encontrar um Samurai (Combate +1; Bloq 1) arrogante que, possivelmente, foi quem o atacou. Se o resultado for entre 5 e 1, você não descobriu nada.',
            'Se você deixou algum inimigo vivo recentemente, ele aparece no seu caminho com Combate +1.',
            'Se você matou algum vilão ou um samurai durante este jogo, um familiar dele aparece para se vingar. Ele também é um Samurai (Combate +2; Bloq 1). Se não matou ninguém, nada acontece.',
            'Você é atacado por um Cão Selvagem (Combate +0; Bloq 0).',
            'Você é atacado por um Urso (Combate +2; Bloq 1).',
            'Você foi cercado por 3 Membros de Gangue (Combate +0; Bloq 0) com porretes.',
            'Você foi cercado por 2 Assaltantes (Combate -1; Bloq 0) que querem alguma coisa de valor ou vão atacar.',
            'Você nota que sua arma foi danificada no último combate que teve. Você terá que encontrar um Ferreiro para consertá-la (ele não precisa ser Aliado para isso). Até lá, você terá -1 de Combate.',
        ];
    };

    function urbano() {
        return [
            'Um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] começou um contato com você nas ruas da localidade.',
            'Um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] esbarrou em você nas ruas movimentadas da cidade. Ele estava fugindo de alguém ou indo com muita pressa para algum lugar.',
            'Num bar, você começa uma conversa com um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] e, com o tempo, vão se conhecendo.',
            'Você encontra nas ruas alguém do seu passado. Agora ele é um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>].',
            'Um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] está sendo atacado por um Inimigo (Combate +1; Bloq 0) num beco ou ruela da localidade.',
            'Você descobre que nesta localidade vive um conhecido ferreiro. Se decidir procurá-lo, será um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] com a ocupação já determinada como Ferreiro.',
            'Se você deixou viver algum inimigo, você o encontra na localidade. Ele é um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>]. Caso contrário, você encontrou um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] na estalagem onde você ficar.',
            'Você passou por um estabelecimento cujo dono é um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>].',
            'Você viu um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] sendo expulso de um estabelecimento.',
            'Você ficou numa estalagem dividindo o quarto com um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>].',
            'Você viu um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] sendo atacado por um Assaltante (Combate -1; Bloq 0). Se não fizer nada, o assaltante foge levando um pertence do Possível Aliado.',
            'Você descobre que nesta localidade vive um conhecido mestre. Se decidir procurá-lo, será um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] com a ocupação já determinada como Mentor.',
            'Está caindo uma tempestade. Algumas casas não estão aguentando e muitas pessoas estão perdendo suas coisas com a chuva. Você pode ignorar e só se preocupar consigo, mas perderá 1 ponto de Compaixão. Se quiser ajudar essas pessoas, role 1d6. Se o resultado for 6, você conseguiu ajudar todas as pessoas e consertar os telhados e paredes, ganhando 1 ponto de Determinação. Se o resultado for entre 5 e 2, você conseguiu ajudar algumas pessoas. E se o resultado for 1, você não conseguiu ajudar muita gente e ainda ficou Ferido (-1 de Combate até se recuperar).',
            'As pessoas desta localidade são estranhas. Além de te tratarem de modo estranho, suas expressões parecem falsas. Você pode ignorar e seguir seu caminho ou tentar descobrir o que está acontecendo. Se quiser investigar, role um dado. Se o resultado for entre 6 e 2, você descobre que é apenas o jeito normal das pessoas dali. Se o resultado for 1, você descobre que elas estão sob o controle de uma seita e seu Líder (Combate +0; Bloq 0) é um louco que sacrifica humanos em toda lua nova. Se tentar enfrentar o líder, 1d6 Pessoas Inocentes (Combate -2; Bloq 0) irão protegê-lo com suas vidas.',
            'Um Batedor de Carteiras (Combate -1; Bloq 0) passou por você e levou todas suas coisas, com exceção da sua arma. Você pode deixá-lo ir ou atacá-lo. Se você o derrotar, poderá pegar suas coisas de volta.',
            'Um exército de soldados de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] está na cidade. Se você chegar perto, será abordado por 1d6 Soldados (Combate +1; Bloq 1).',
            'Você é abordado por um Samurai (Combate +1; Bloq 1) de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>]. Ele não gosta de você e qualquer coisa que fizer poderá ser motivo para ele te atacar.',
            'Você descobre que nesta localidade vive um médico. Se decidir procurá-lo, será um Possível Aliado [<i class="fa fa-user" aria-hidden="true"></i>] com a ocupação já determinada como Curandeiro.',
        ];
    };

    function ocupacao() {
        return [
            '<u>Mentor:</u> Caso se torne um aliado, você pode ser treinado por ele e adicionar a técnica dele na sua ficha (assim você poderá escolher qual técnica usar quando Lutar).',
            '<u>Ferreiro:</u> Caso se torne um aliado, pode fabricar uma Arma Especial (igual à sua, mas que garante um bônus de +1 no combate) que será entregue a você na próxima “grande cidade” que encontrar.',
            '<u>Curandeiro:</u> Caso se torne um aliado, você não tem como morrer quando for derrotado em combate.',
            '<u>Combatente:</u> Caso se torne um aliado, quando encontrar um Vilão, esse aliado  aparecerá e lutará antes de você. Se vencer o Vilão, ele te abandonará e seguirá sua própria trilha, mas se for derrotado, ele estará morto.',
            '<u>Inocente Indefeso:</u> Se ele se tornar seu aliado, você sempre terá +1 em Combate. Porém, quando encontrar um Vilão, role um dado. Se o resultado for 1 ou 2, o vilão matou esse aliado e você perde, além do seu bônus, 2 de Determinação.',
        ];
    };

    function localExotico(type) {
        switch(type){
            case "local":
                return ['Em um bambuzal','Em uma floresta de cerejeiras','Na escadaria de pedra de um templo','Em uma praia deserta','Na grande ponte de madeira','Em uma estrada deserta'];
                break;
            case "clima":
                return ['à noite, sob a luz da lua...','no final da tarde...','ao nascer do sol...','durante uma ventania...','no meio de uma chuva...','enquanto neva levemente...'];
                break;
        }
    };

    function vilao() {
        return [
            'Este vilão foi um personagem envolvido no seu passado. Provavelmente, foi um dos causadores da sua tragédia, mas não o principal causador.',
            'Este vilão é lacaio do Vilão Final [<i class="fa fa-star-o" aria-hidden="true"></i>] (determine agora). Ele fala sobre seu mestre e suas motivações.',
            'Este vilão é um mercenário contratado pelo Vilão Final [<i class="fa fa-star-o" aria-hidden="true"></i>]. Você ainda não sabe quem é esse vilão final, mas já sabe que se chama <i>'+random(nome(random(['masculino','feminino'])))+'</i> e que ele (ou ela) te quer morto.',
            'Este vilão é, na verdade, alguém que te ama. Mas algo aconteceu no seu passado que fez com que agora a sua destruição seja mais importante que seus laços. Você perde 2 de Compaixão se matar esse vilão.',
            'Este vilão é seu irmão. Você não esperava por isso. Mas agora você descobriu que ele esteve lá, junto com você, quando ganhou sua cicatriz. Porém, ele te culpa por tudo e agora quer a sua morte.',
            'Este vilão é um honrado samurai que quer acabar com os ronins e samurais sem honra. Não possui nenhum objetivo além de fazer o que seu código de honra manda. Pertence a um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>].',
        ];
    };

    function vilaoFinal() {
        return [
            'Este é o culpado pela sua cicatriz. Agora você descobre que ele sempre soube e até pode ter planejado a sua desgraça. Ele ri da sua existência e a luta será uma diversão para ele.',
            'Este vilão era seu antigo mestre. Ele se revela agora como um megalomaníaco que deseja poder, de quem, teoricamente, era para você estar ao lado. Mas se você não colaborar, deverá ser eliminado.',
            'Diversas tragédias e conflitos que você presenciou na sua jornada foram causados por este Vilão Final. Ele esteve por trás das cortinas puxando as cordas. E, agora, você é um obstáculo para os planos dele.',
            'Este Vilão Final é um poderoso e tirânico Daimiô de um Clã Nobre [<i class="fa fa-flag" aria-hidden="true"></i>] que domina uma região vizinha e que deseja provocar uma guerra. Por alguma razão, você está no caminho dele e precisa ser eliminado.',
            'Você encontra o Vilão Final e descobre que ele é, na verdade, o primeiro Vilão que havia aparecido. Porém, agora ele se transformou, mudou a forma ou se revelou, tendo a Vantagem Única.',
            'O Vilão Final se revela como o primeiro Possível Aliado que você encontrou. Se ele se tornou seu Aliado, terá sido apenas para te enganar. Você descobre agora que ele tem uma cicatriz também, sendo você um dos possíveis causadores dela.<br><strong>Cicatriz: </strong>'+random(cicatriz())+'<br><strong>Significado da cicatriz: </strong>'+random(significadoCicatriz())
        ];
    };

    function vantagem() {
        return [
            'Este Vilão é muito observador e ganha +1 em Combate cada vez que ele gasta um ponto de Bloqueio.',
            'Este Vilão é muito rápido e tem 2 pontos extras de Bloqueio.',
            'Este Vilão consegue manipular fogo e ganha +1 em Combate. Mas se sua cicatriz for uma queimadura, esse número passa a ser +2 em vez disso.',
            'Antes de enfrentar este Vilão, terá que enfrentar um de seus servos. Ele é o último Possível Aliado que você não conseguiu que se tornasse um aliado.',
            'Este Vilão está com um dos seus Aliados (aleatório). Ele bloqueia o primeiro ataque recebido usando seu Aliado como escudo (matando-o). Se você se render, o vilão irá manter o aliado prisioneiro.',
            'Um dos seus Aliados (aleatório) se revela como um servo deste Vilão Final e você terá que enfrentá-lo primeiro. Se ele não possuía técnica, determine agora. <br><strong>Técnica: </strong>'+random(tecnica())
        ];
    };

    function rolarDados(){
        min = Math.ceil(1);
        max = Math.floor(6);
        return Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    $('#btnUndo').click(function(){
        $('.boxRonin .boxNPC:first-child').remove();
    });

    function titulo(type){

        switch(type){
            case 'ronin': 
                corbg = '#e6f0f1'; 
                corfont = 'black';
                icon = 'user-o';
                title = 'Ronin';
                break;
            case 'cla': 
                corbg = '#c05a20'; 
                corfont = 'black';
                icon = 'flag';
                title = 'Clã Nobre';
                break;    
            case 'aliado': 
                corbg = '#db9c24'; 
                corfont = 'black';
                icon = 'user';
                title = 'Aliado';
                break;   
            case 'vilao': 
                corbg = '#a41b15'; 
                corfont = 'white';
                icon = 'star';
                title = 'Vilão';
                break;   
            case 'vilaoFinal': 
                corbg = '#401710'; 
                corfont = 'white';
                icon = 'star-o';
                title = 'Vilão Final';
                break;   
        }

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<h5 style="color: '+corfont+'; background-color: '+corbg+'; border-radius: 5px; padding: 5px;">&nbsp;&nbsp;<i class="fa fa-'+icon+'" aria-hidden="true"></i> '+title+'</h5>'+
        '</div>');
    };

    $('#btnRolarDados').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<p><center><img src="./img/w'+rolarDados()+'.jpg">&nbsp;&nbsp;&nbsp;&nbsp;<img src="./img/b'+rolarDados()+'.jpg"></center></p>'+
        '</div>');

    });

    $('#btnGerarProcurando').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Procurando por Algo: </strong>'+random(procurando())+
        '</div><br>');

    });

    $('#btnGerarInformacoes').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Informações do Passado: </strong>'+random(passado())+
        '</div><br>');

    });

    $('#btnGerarEsqueleto').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Esqueleto no Armário: </strong>'+random(esqueleto())+
        '</div><br>');

    });

    $('#btnGerarUrbano').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Encontro Urbano: </strong>'+random(urbano())+
        '</div><br>');

    });

    $('#btnGerarEstrada').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Encontro na Estrada: </strong>'+random(estrada())+
        '</div><br>');

    });

    $('#btnGerarLocalidade').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Localidade: </strong>'+random(localidade())+
        '</div><br>');

    });

    $('#btnGerarRota').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Rota: </strong>'+random(rota())+
        '</div><br>');

    });

    $('#btnGerarCla').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<p><center><img width=78 src="./img/cla'+Number(Math.floor(Math.random() * (36)) + 1)+'.jpg"></center></p>'+
          '<strong>Nome:</strong> '+random(nomeCla())+
          '<br><strong>Característica:</strong> '+random(caracteristicaCla())+
        '</div><br>');

        titulo('cla');
        
    });

    $('#btnGerarVilaoFinal').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<p><i><center>'+random(localExotico('local'))+' '+random(localExotico('clima'))+'</center></i></p>'+
          random(vilaoFinal())+
          '<br><br><strong>Nome:</strong> '+random(nome(random(['masculino','feminino'])))+
          '<br><strong>Sexo:</strong> '+random(['Masculino','Feminino'])+
          '<br><strong>Aparência:</strong> '+random(aparencia())+' / '+random(aparencia())+
          '<br><strong>Técnica:</strong> '+random(tecnica())+
          '<br><strong>Vantagem:</strong> '+random(vantagem())+
        '</div><br>');

        titulo('vilaoFinal');
        
    });

    $('#btnGerarVilao').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<p><i><center>'+random(localExotico('local'))+' '+random(localExotico('clima'))+'</center></i></p>'+
          random(vilao())+ 
          '<br><br><strong>Nome:</strong> '+random(nome(random(['masculino','feminino'])))+
          '<br><strong>Sexo:</strong> '+random(['Masculino','Feminino'])+
          '<br><strong>Aparência:</strong> '+random(aparencia())+' / '+random(aparencia())+
          '<br><strong>Técnica:</strong> '+random(tecnica())+
        '</div><br>');

        titulo('vilao');
        
    });

    $('#btnGerarAliado').click(function(){

        var ocupacaoAliado = random(ocupacao());
        var tecnicaAliado = '';
        
        if ((ocupacaoAliado.indexOf('Combatente') > 0) || (ocupacaoAliado.indexOf('Mentor') > 0))
            tecnicaAliado = '<br><strong>Técnica:</strong> '+random(tecnica());

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Nome:</strong> '+random(nome(random(['masculino','feminino'])))+
          '<br><strong>Sexo:</strong> '+random(['Masculino','Feminino'])+
          '<br><strong>Aparência:</strong> '+random(aparencia())+' / '+random(aparencia())+
          '<br><strong>Ocupação:</strong> '+ocupacaoAliado+
          tecnicaAliado+
        '</div><br>');

        titulo('aliado');
        
    });

    $('#btnGerarPersonagem').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Nome:</strong> '+random(nome('masculino'))+
          '<br><strong>Aparência:</strong> '+random(aparencia())+' / '+random(aparencia())+
          '<br><strong>Técnica:</strong> '+random(tecnica())+
          '<br><strong>Família:</strong> '+random(familia())+
          '<br><strong>Pesadelo Constante:</strong> '+random(pesadelo())+
          '<br><strong>Cicatriz:</strong> '+random(cicatriz())+
          '<br><strong>Significado da Cicatriz:</strong> '+random(significadoCicatriz())+
        '</div><br>');

        titulo('ronin');
        
    });

    $('.boxRonin').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

