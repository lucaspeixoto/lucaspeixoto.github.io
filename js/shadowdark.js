$(document).ready(function() {
 
    function rolarDado(lados) {
        return Math.floor(Math.random() * lados) + 1;
    }

    function rolar(expressao) {

        const partes = expressao.toLowerCase().split('d');

        const quantidade = parseInt(partes[0]);
        const lados = parseInt(partes[1]);

        let total = 0;

        for (let i = 0; i < quantidade; i++) {
            total += rolarDado(lados);
        }

        return total;
    }

    function random(lista) {
        return lista[Math.floor(Math.random() * lista.length)];
    }

    function modificador(valor) {

        if (valor <= 3) return -4;
        if (valor <= 5) return -3;
        if (valor <= 7) return -2;
        if (valor <= 9) return -1;
        if (valor <= 11) return 0;
        if (valor <= 13) return 1;
        if (valor <= 15) return 2;
        if (valor <= 17) return 3;

        return 4;
    }

    function textoModificador(mod) {

        if (mod >= 0) {
            return '+' + mod;
        }

        return mod;
    }

    function ancestralidade() {

        const valor = rolarDado(12);

        if (valor <= 4) return 'Humano';
        if (valor <= 6) return 'Elfo';
        if (valor <= 8) return 'Anão';
        if (valor <= 10) return 'Halfling';
        if (valor == 11) return 'Meio-orc';

        return 'Goblin';
    }

    function classe() {

        const valor = rolarDado(4);

        switch (valor) {

            case 1:
                return 'Guerreiro';

            case 2:
                return 'Ladrão';

            case 3:
                return 'Mago';

            case 4:
                return 'Sacerdote';

        }

    }

    function alinhamento() {

        const valor = rolarDado(6);

        if (valor <= 3) return 'Ordeiro';
        if (valor <= 5) return 'Neutro';

        return 'Caótico';
    }

    function antecedente() {

        const lista = [
            'Garoto de Rua',
            'Procurado',
            'Iniciado do Culto',
            'Guilda dos Ladrões',
            'Banido',
            'Órfão',
            'Aprendiz de Mago',
            'Joalheiro',
            'Herbalista',
            'Bárbaro',
            'Mercenário',
            'Marinheiro',
            'Acólito',
            'Soldado',
            'Guardião',
            'Batedor',
            'Menestrel',
            'Estudioso',
            'Nobre',
            'Cirurgião'
        ];

        return random(lista);
    }

    function nome(ancestralidade) {

        const nomes = {

            'Humano': [
                'Zali', 'Bram', 'Clara', 'Nattias', 'Rina',
                'Denton', 'Mirena', 'Aran', 'Morgan', 'Giralt',
                'Tamra', 'Oscar', 'Ishana', 'Rogar', 'Jasmin',
                'Tarin', 'Yuri', 'Malchor', 'Lienna', 'Godfrey'
            ],

            'Elfo': [
                'Eliara', 'Ryarn', 'Sariel', 'Tirolas', 'Galira',
                'Varos', 'Daeniel', 'Axidor', 'Hiralia', 'Cyrwin',
                'Lothiel', 'Zaphiel', 'Nayra', 'Ithior', 'Amriel',
                'Elyon', 'Jirwyn', 'Natinel', 'Fiora', 'Ruhiel'
            ],

            'Anão': [
                'Hilde', 'Torbin', 'Marga', 'Bruno', 'Karina',
                'Naugrim', 'Brenna', 'Darvin', 'Elga', 'Alric',
                'Isolde', 'Gendry', 'Bruga', 'Junnor', 'Vidrid',
                'Torson', 'Brielle', 'Ulfgar', 'Sarna', 'Grimm'
            ],

            'Halfling': [
                'Willow', 'Benny', 'Annie', 'Tucker', 'Marie',
                'Hobb', 'Cora', 'Gordie', 'Rose', 'Ardo',
                'Alma', 'Norbert', 'Jennie', 'Barvin', 'Tilly',
                'Pike', 'Lydia', 'Marlow', 'Astrid', 'Jasper'
            ],

            'Goblin': [
                'Iggs', 'Tark', 'Nix', 'Lenk', 'Roke',
                'Fitz', 'Tila', 'Riggs', 'Prim', 'Zeb',
                'Finn', 'Borg', 'Yark', 'Deeg', 'Nibs',
                'Brak', 'Fink', 'Rizzo', 'Squib', 'Grix'
            ],

            'Meio-orc': [
                'Vara', 'Gralk', 'Ranna', 'Korv', 'Zasha',
                'Hrogar', 'Klara', 'Tragan', 'Brolga', 'Drago',
                'Yelena', 'Krull', 'Ulara', 'Tulk', 'Shiraal',
                'Wulf', 'Ivara', 'Hirok', 'Aja', 'Zoraan'
            ]

        };

        return random(nomes[ancestralidade]);
    }

    function nomeNPCs(ancestralidade) {

        const nomes = {

            'Anão': [
                'Hera',
                'Torin',
                'Ginny',
                'Gant',
                'Olga',
                'Dendor',
                'Ygrid',
                'Pike',
                'Sarda',
                'Brigg',
                'Zorli',
                'Yorin',
                'Jorgena',
                'Trogin',
                'Riga',
                'Barton',
                'Katrina',
                'Egrim',
                'Elsa',
                'Orgo'
            ],

            'Elfo': [
                'Sarenia',
                'Ravos',
                'Imeria',
                'Farond',
                'Isolden',
                'Kieren',
                'Mirenel',
                'Riarden',
                'Allindra',
                'Arlomas',
                'Sylara',
                'Tyr',
                'Rinariel',
                'Saramir',
                'Vedana',
                'Elindos',
                'Ophelia',
                'Cydaros',
                'Tiramel',
                'Varond'
            ],

            'Goblin': [
                'Kog',
                'Dibbs',
                'Fronk',
                'Irv',
                'Squag',
                'Mort',
                'Vig',
                'Sticks',
                'Gorb',
                'Yogg',
                'Plok',
                'Zrak',
                'Dent',
                'Krik',
                'Mizzo',
                'Bort',
                'Nabo',
                'Hink',
                'Bree',
                'Kreeb'
            ],

            'Halfling': [
                'Myrtle',
                'Robby',
                'Nora',
                'Percy',
                'Daisy',
                'Jolly',
                'Evelyn',
                'Horace',
                'Willie',
                'Gertie',
                'Peri',
                'Carlsby',
                'Nyx',
                'Kellan',
                'Fern',
                'Harlow',
                'Moira',
                'Sage',
                'Reenie',
                'Wendry'
            ],

            'Humano': [
                'Hesta',
                'Matteo',
                'Rosalin',
                'Endric',
                'Kiara',
                'Yao',
                'Corina',
                'Rowan',
                'Hariko',
                'Ikam',
                'Mariel',
                'Jin',
                'Hana',
                'Lios',
                'Indra',
                'Remy',
                'Nura',
                'Vakesh',
                'Una',
                'Nabilo'
            ],

            'Meio-orc': [
                'Troga',
                'Boraal',
                'Urgana',
                'Zoraal',
                'Scalga',
                'Krell',
                'Voraga',
                'Morak',
                'Draga',
                'Sorak',
                'Varga',
                'Ulgar',
                'Jala',
                'Kresh',
                'Zana',
                'Torvash',
                'Rokara',
                'Gartak',
                'Iskana',
                'Ziraak'
            ]

        };

        return random(nomes[ancestralidade]);

    }

    function idiomaComum() {

        const lista = [
            'Anão',
            'Élfico',
            'Gigante',
            'Goblin',
            'Merrano',
            'Orc',
            'Reptiliano',
            'Silvestre',
            'Thaniano'
        ];

        return random(lista);
    }

    function idiomaRaro() {

        const lista = [
            'Celestial',
            'Diabólico',
            'Dracônico',
            'Primordial'
        ];

        return random(lista);
    }

    function magiaMago() {

        const lista = [
            'Alarme',
            'Armadura Arcana',
            'Detectar Magia',
            'Disco Flutuante',
            'Encantar Pessoa',
            'Luz',
            'Mãos Flamejantes',
            'Míssil Mágico',
            'Obstruir Porta',
            'Proteção contra o Mal',
            'Queda Suave',
            'Sono'
        ];

        return random(lista);
    }

    function magiaSacerdote() {

        const lista = [
            'Luz',
            'Curar Ferimentos',
            'Arma Sagrada',
            'Proteção contra o Mal',
            'Escudo da Fé'
        ];

        return random(lista);
    }

    function divindade() {

        const lista = [
            'Santa Terragnis',
            'Gede',
            'Madeera',
            'Ord',
            'Memnon',
            'Shune',
            'Ramlaat'
        ];

        return random(lista);
    }

    function tituloClasse(classe, alinhamento) {

        const titulos = {

            'Guerreiro': {
                'Ordeiro': 'Escudeiro',
                'Neutro': 'Guerreiro',
                'Caótico': 'Valete'
            },

            'Ladrão': {
                'Ordeiro': 'Malandro',
                'Neutro': 'Bandoleiro',
                'Caótico': 'Rufião'
            },

            'Mago': {
                'Ordeiro': 'Aprendiz',
                'Neutro': 'Xamã',
                'Caótico': 'Adepto'
            },

            'Sacerdote': {
                'Ordeiro': 'Acólito',
                'Neutro': 'Rastreador',
                'Caótico': 'Iniciado'
            }

        };

        return titulos[classe][alinhamento];
    }

    function gerarAtributos() {

        return {
            forca: rolar('3d6'),
            destreza: rolar('3d6'),
            constituicao: rolar('3d6'),
            inteligencia: rolar('3d6'),
            sabedoria: rolar('3d6'),
            carisma: rolar('3d6')
        };

    }

    function gerarPV(classe, modCon) {

        let base = 0;

        switch (classe) {

            case 'Guerreiro':
                base = rolarDado(8);
                break;

            case 'Ladrão':
                base = rolarDado(6);
                break;

            case 'Sacerdote':
                base = rolarDado(6);
                break;

            case 'Mago':
                base = rolarDado(4);
                break;

        }

        return Math.max(1, base + modCon);
    }

    function gerarCA(classe, modDes) {

        let base = 10 + modDes;

        if (
            classe == 'Guerreiro' ||
            classe == 'Ladrão' ||
            classe == 'Sacerdote'
        ) {
            base = 11 + modDes;
        }

        return base;
    }

    function gerarArma(classe) {

        const armas = {

            'Guerreiro': [
                'Espada longa',
                'Machado grande',
                'Martelo de guerra',
                'Arco longo',
                'Lança'
            ],

            'Ladrão': [
                'Adaga',
                'Espada curta',
                'Arco curto',
                'Besta'
            ],

            'Mago': [
                'Adaga',
                'Cajado'
            ],

            'Sacerdote': [
                'Maça',
                'Clava',
                'Martelo de guerra',
                'Cajado',
                'Espada longa'
            ]

        };

        return random(armas[classe]);
    }

    function gerarIdiomas(ancestralidade, classe) {

        let idiomas = ['Comum'];

        switch (ancestralidade) {

            case 'Anão':
                idiomas.push('Anão');
                break;

            case 'Elfo':
                idiomas.push('Élfico');
                break;

            case 'Goblin':
                idiomas.push('Goblin');
                break;

            case 'Meio-orc':
                idiomas.push('Orc');
                break;

            case 'Halfling':
                idiomas.push('Silvestre');
                break;

        }

        if (classe == 'Mago') {

            idiomas.push(idiomaComum());
            idiomas.push(idiomaComum());

            idiomas.push(idiomaRaro());
            idiomas.push(idiomaRaro());

        }

        if (classe == 'Sacerdote') {

            idiomas.push(
                random([
                    'Celestial',
                    'Diabólico',
                    'Primordial'
                ])
            );

        }

        return idiomas;
    }

    function gerarPersonagem() {

        const ancestralidadePJ = ancestralidade();
        const classePJ = classe();
        const alinhamentoPJ = alinhamento();

        const atributos = gerarAtributos();

        const modCon = modificador(atributos.constituicao);
        const modDes = modificador(atributos.destreza);

        const personagem = {

            nome: nome(ancestralidadePJ),
            ancestralidade: ancestralidadePJ,
            classe: classePJ,
            alinhamento: alinhamentoPJ,
            titulo: tituloClasse(classePJ, alinhamentoPJ),

            nivel: 1,

            antecedente: antecedente(),

            forca: atributos.forca,
            destreza: atributos.destreza,
            constituicao: atributos.constituicao,
            inteligencia: atributos.inteligencia,
            sabedoria: atributos.sabedoria,
            carisma: atributos.carisma,

            pv: gerarPV(classePJ, modCon),

            ca: gerarCA(classePJ, modDes),

            ouro: rolar('2d6') * 5,

            arma: gerarArma(classePJ),

            idiomas: gerarIdiomas(
                ancestralidadePJ,
                classePJ
            ),

            equipamento: [
                'Kit de exploração',
                '5 PO'
            ]

        };

        if (
            classePJ == 'Guerreiro' ||
            classePJ == 'Ladrão' ||
            classePJ == 'Sacerdote'
        ) {
            personagem.equipamento.push(
                'Armadura de couro'
            );
        }

        if (classePJ == 'Mago') {

            personagem.magias = [
                magiaMago(),
                magiaMago(),
                magiaMago()
            ];

        }

        if (classePJ == 'Sacerdote') {

            personagem.divindade = divindade();

            personagem.magias = [
                magiaSacerdote(),
                magiaSacerdote()
            ];

        }

        $('.boxNPC').html(`

            <h2>${personagem.nome}</h2>

            <br>

            <strong>Título:</strong> ${personagem.titulo}<br>
            <strong>Ancestralidade:</strong> ${personagem.ancestralidade}<br>
            <strong>Classe:</strong> ${personagem.classe}<br>
            <strong>Nível:</strong> ${personagem.nivel}<br>
            <strong>Alinhamento:</strong> ${personagem.alinhamento}<br>
            <strong>Antecedente:</strong> ${personagem.antecedente}<br>

            <br>

            <strong>FOR:</strong> ${personagem.forca}
            (${textoModificador(modificador(personagem.forca))})<br>

            <strong>DES:</strong> ${personagem.destreza}
            (${textoModificador(modificador(personagem.destreza))})<br>

            <strong>CON:</strong> ${personagem.constituicao}
            (${textoModificador(modificador(personagem.constituicao))})<br>

            <strong>INT:</strong> ${personagem.inteligencia}
            (${textoModificador(modificador(personagem.inteligencia))})<br>

            <strong>SAB:</strong> ${personagem.sabedoria}
            (${textoModificador(modificador(personagem.sabedoria))})<br>

            <strong>CAR:</strong> ${personagem.carisma}
            (${textoModificador(modificador(personagem.carisma))})<br>

            <br>

            <strong>PV:</strong> ${personagem.pv}<br>
            <strong>CA:</strong> ${personagem.ca}<br>
            <strong>Arma:</strong> ${personagem.arma}<br>
            <strong>Ouro:</strong> ${personagem.ouro} PO<br>

            <br>

            <strong>Idiomas:</strong><br>
            ${personagem.idiomas.join(', ')}

            <br><br>

            <strong>Equipamentos:</strong><br>
            ${personagem.equipamento.join('<br>')}

            ${personagem.divindade ? `
                <br><br>
                <strong>Divindade:</strong>
                ${personagem.divindade}
            ` : ''}

            ${personagem.magias ? `
                <br><br>
                <strong>Magias:</strong><br>
                ${personagem.magias.join('<br>')}
            ` : ''}

        `);

    }

    $('#btnGerarPersonagem').click(function () {
        gerarPersonagem();
    });

    function ancestralidadeShadowdark(valor) {

        if (valor >= 1 && valor <= 4) return 'Humano';
        if (valor >= 5 && valor <= 6) return 'Elfo';
        if (valor >= 7 && valor <= 8) return 'Anão';
        if (valor >= 9 && valor <= 10) return 'Halfling';
        if (valor == 11) return 'Meio-orc';

        return 'Goblin';
    }

    function idadeShadowdark(valor) {

        switch(valor) {

            case 1:
                return 'Adolescente';

            case 2:
                return 'Jovem adulto';

            case 3:
            case 4:
                return 'Adulto';

            case 5:
            case 6:
                return 'Meia-idade';

            case 7:
                return 'Idoso';

            case 8:
                return 'Ancião';

        }

    }

    function alinhamentoShadowdark(valor) {

        if (valor >= 1 && valor <= 3) return 'Ordeiro';
        if (valor == 4) return 'Neutro';

        return 'Caótico';

    }

    function riquezaShadowdark(valor) {

        switch(valor) {

            case 1:
                return 'Pobre';

            case 2:
            case 3:
                return 'Padrão';

            case 4:
            case 5:
                return 'Rico';

            case 6:
                return 'Extravagante';

        }

    }

    function aparenciaShadowdark() {

        return [
            'Careca',
            'Robusto',
            'Muito alto',
            'Marca de beleza',
            'Caolho',
            'Cabelos trançados',
            'Musculoso',
            'Grisalho',
            'Cicatriz no rosto',
            'Esbelto',
            'Sua muito',
            'Queixo fendido',
            'Frágil',
            'Sobrancelhas grossas',
            'Tatuado',
            'Chapéu largo',
            'Dente de ouro',
            'Seis dedos',
            'Muito baixo',
            'Nariz grande'
        ];

    }

    function trejeitoShadowdark() {

        return [
            'Cospe muito',
            'Sempre comendo',
            'Se move rápido',
            'Truques com cartas',
            'Reza em voz alta',
            'Escreve em um diário',
            'Apologético',
            'Impulsivo',
            'Deixa coisas caírem',
            'Faz juramentos',
            'Faz trocadilhos',
            'Sotaque raro',
            'Se assusta facilmente',
            'Esquecido',
            'Fala baixo',
            'Tem tremores',
            'Se move devagar',
            'Fala alto',
            'Arrogante',
            'Fuma cachimbo'
        ];

    }

    function segredoShadowdark() {

        return [
            'Oculta fugitivos',
            'Adora filhotes',
            'Incendiário',
            'Em um culto religioso',
            'É meio-demônio',
            'Foi aprendiz de um mago',
            'Furta sem precisar',
            'Tem uma identidade falsa',
            'Medo de tempestades',
            'Quer as funcionais',
            'Grande débito em apostas',
            'É contrabandista',
            'É um lobisomem',
            'Cheira mentiras',
            'Expulso de família rica',
            'Apaixonado pelo garçom',
            'Saiu da Guilda dos Ladrões',
            'Amigo do príncipe',
            'Explorador aposentado',
            'Basílisco mascote'
        ];

    }

    function ocupacaoShadowdark() {

        return [
            'Coveiro',
            'Carpinteiro',
            'Erudito',
            'Ferreiro',
            'Coletor de impostos',
            'Fazendeiro',
            'Garçom',
            'Pedinte',
            'Padeiro',
            'Cozinheiro',
            'Marinheiro',
            'Açougueiro',
            'Chaveiro',
            'Sapateiro',
            'Frade/freira',
            'Mercador'
        ];

    }

    function gerarNPCShadowdark() {

        var ancestralidade = ancestralidadeShadowdark(rolarDado(12));
        var nomeNPC = nomeNPCs(ancestralidade);
        var idade = idadeShadowdark(rolarDado(8));
        var alinhamento = alinhamentoShadowdark(rolarDado(6));
        var riqueza = riquezaShadowdark(rolarDado(6));

        var aparencia = random(aparenciaShadowdark());
        var trejeito = random(trejeitoShadowdark());
        var segredo = random(segredoShadowdark());
        var ocupacao = random(ocupacaoShadowdark());

        $('.boxNPC').html(

            '<h2>' + nomeNPC + '</h2>' +

            '<br>' +

            '<strong>Ancestralidade:</strong> ' + ancestralidade +
            '<br><strong>Idade:</strong> ' + idade +
            '<br><strong>Alinhamento:</strong> ' + alinhamento +
            '<br><strong>Riqueza:</strong> ' + riqueza +

            '<br><br>' +

            '<strong>Ocupação:</strong> ' + ocupacao +
            '<br><strong>Aparência:</strong> ' + aparencia +
            '<br><strong>Trejeito:</strong> ' + trejeito +
            '<br><strong>Segredo:</strong> ' + segredo

        );

        $('.boxNPC').css({
            'border': 'solid 1px black',
            'border-radius': '5px',
            'padding': '15px',
            'margin-top': '20px',
            'max-width': '600px',
            'box-shadow': '5px 5px 10px lightgrey'
        });

    }

    setTimeout(function() {
        $('#btnGerarNPC').trigger('click');
    }, 10);

    $('#btnGerarNPC').click(function() {
        gerarNPCShadowdark();
    });

});

