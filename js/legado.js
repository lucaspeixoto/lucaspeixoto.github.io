$( document ).ready(function() {

    function acaoLider() {
        return [
            'Atacar criatura desconhecida',
            'Substância Preta Viscosa',
            'Fazenda',
            'Círculo de Pedra',
            'Atacar adversário mais próximo',
            'Voltar para a Colonia',
            'Provocar loucura no Camponês ou Cultista mais próximo',
        ];
    };

    function tipoLider() {
        return ['Forte','Veloz','Sobrevivente','Profano','Furtivo'];
    };

    function posicaoNinho() {
        return ['Átrio','Comida','Produção','Sala do Governante','Recrutamento','Manutenção']
    };

    $('#btnGerarColonia').click(function(){

        var espacos = exclusiveRandom(posicaoNinho(),6);

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Posição da Rainha: </strong>'+random(posicaoNinho())+
          '<br><strong>Posição dos Trabalhadores: </strong>'+
          '<br>'+nbsp(4)+espacos[0]+' ('+randomNumber(1,3)+')'+
          '<br>'+nbsp(4)+espacos[1]+' ('+randomNumber(1,3)+')'+
          '<br>'+nbsp(4)+espacos[2]+' ('+randomNumber(1,3)+')'+
          '<br>'+nbsp(4)+espacos[3]+' ('+randomNumber(1,3)+')'+
          '<br>'+nbsp(4)+espacos[4]+' ('+randomNumber(1,3)+')'+
          '<br>'+nbsp(4)+espacos[5]+' ('+randomNumber(1,3)+')'+
        '</div><br>');

    });

    $('#btnGerarTropa').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
            '<strong>Tropas: </strong>'+randomNumber(1,5)+
        '</div><br>');

    });

    $('#btnGerarLider').click(function(){

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Líder: </strong>'+random(tipoLider())+
        '</div><br>');

    });

    $('#btnGerarAcaoLider').click(function(){

        var acoes = exclusiveRandom(acaoLider(),3);

        $('.boxRonin').prepend(
        '<div class="boxNPC">'+
          '<strong>Ação do Líder</strong>'+
          '<br>(1) '+acoes[0]+
          '<br>(2) '+acoes[1]+
          '<br>(3) '+acoes[2]+
        '</div><br>');

    });

    $('.boxRonin').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

