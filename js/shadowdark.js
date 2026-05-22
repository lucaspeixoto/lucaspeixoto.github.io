$(document).ready(function() {

function random(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function rolarDado(lados) {
    return Math.floor(Math.random() * lados) + 1;
}

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
    var idade = idadeShadowdark(rolarDado(8));
    var alinhamento = alinhamentoShadowdark(rolarDado(6));
    var riqueza = riquezaShadowdark(rolarDado(6));

    var aparencia = random(aparenciaShadowdark());
    var trejeito = random(trejeitoShadowdark());
    var segredo = random(segredoShadowdark());
    var ocupacao = random(ocupacaoShadowdark());

    $('.boxNPC').html(

        '<h2><strong>NPC Gerado</strong></h2>' +

        '<hr>' +

        '<strong>Ancestralidade:</strong> ' + ancestralidade +
        '<br><strong>Idade:</strong> ' + idade +
        '<br><strong>Alinhamento:</strong> ' + alinhamento +
        '<br><strong>Riqueza:</strong> ' + riqueza +

        '<hr>' +

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
        'background-color': '#f5f5f5',
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

