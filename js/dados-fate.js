$( document ).ready(function() {

    function ladder (value) {

      if (value < -4) value = -4;
      if (value > 8) value = 8;
      switch(value) {
        case -4: phrase = 'Horripilante'; break;
        case -3: phrase = 'Catastrófico'; break;
        case -2: phrase = 'Terrível'; break;
        case -1: phrase = 'Ruim'; break;
        case 0: phrase = 'Medíocre'; break;
        case 1: phrase = 'Regular'; break;
        case 2: phrase = 'Razoável'; break;
        case 3: phrase = 'Bom'; break;
        case 4: phrase = 'Ótimo'; break;
        case 5: phrase = 'Excepcional'; break;
        case 6: phrase = 'Fantástico'; break;
        case 7: phrase = 'Épico'; break;
        case 8: phrase = 'Lendário'; break;
      }
      return phrase;
    }

    function rollFateDice(){

        var value = 0;
        var roll = [];
        var resultArray = [];

        min = Math.ceil(1);
        max = Math.floor(3);

        for(i=0;i<4;i++){

          var number = Math.floor(Math.random() * (max - min + 1)) + min;

          if(number == 1) {
              value = value-1;
              resultArray.push('minus');
          }
          if(number == 2) {
              resultArray.push('blank');
          }
          if(number == 3) {
              value = value+1;
              resultArray.push('plus');
          }

        }

        resultArray.push(value);
        return resultArray;

    }

    function rollFateDiceAction(acao,bonus,target){

        var value = 0;
        var roll = [];
        var resultArray = [];

        min = Math.ceil(1);
        max = Math.floor(3);

        for(i=0;i<4;i++){

          var number = Math.floor(Math.random() * (max - min + 1)) + min;

          if(number == 1) {
              value = value-1;
              resultArray.push('minus');
          }
          if(number == 2) {
              resultArray.push('blank');
          }
          if(number == 3) {
              value = value+1;
              resultArray.push('plus');
          }

        }

        resultArray.push(value);

        value = value + Number(bonus);
        var frase = checkResult(value,target);

        resultArray.push(value);
        resultArray.push(frase);
        resultArray.push(checkAction(acao,frase));
        return resultArray;

    }

    function checkResult (value,target) {
        if (value > (Number(target)+2)) return "SUCESSO COM ESTILO";
        if (value > target) return "SUCESSO";
        if (value == target) return "EMPATE";
        if (value < target) return "FALHA";
    }

    function checkAction (action,frase){

        switch(action) {
            case "btnRolarAtacar":
                switch(frase){
                    case "FALHA":
                        return '\n ATAQUE: Você falhou no ataque.'
                        break;
                    case "EMPATE":
                        return '\n ATAQUE: Você ganha um impulso.'
                        break;
                    case "SUCESSO":
                        return '\n ATAQUE: Você inflige dano igual ao número de tensões subtraindo a rolagem de defesa.'
                        break;
                    case "SUCESSO COM ESTILO":
                        return '\n ATAQUE: Você pode reduzir a tensão em 1 para ganhar um impulso.'
                        break;
                }
                break;
            case "btnRolarDefender":
                switch(frase){
                    case "FALHA":
                        return '\n DEFESA: Você falhou na defesa e recebe dano.'
                        break;
                    case "EMPATE":
                        return '\n DEFESA: O atacante ganha um impulso.'
                        break;
                    case "SUCESSO":
                        return '\n DEFESA: Você impede a ação do inimigo.'
                        break;
                    case "SUCESSO COM ESTILO":
                        return '\n DEFESA: Você impede a ação do inimigo e ganha um impulso.'
                        break;
                }
                break;
            case "btnRolarSuperar":
                switch(frase){
                    case "FALHA":
                        return '\n SUPERAR: Você falha ou tem sucesso a um custo.'
                        break;
                    case "EMPATE":
                        return '\n SUPERAR: Sucesso a um custo menor, ou falha mas ganha um impulso.'
                        break;
                    case "SUCESSO":
                        return '\n SUPERAR: Você foi bem-sucedido.'
                        break;
                    case "SUCESSO COM ESTILO":
                        return '\n SUPERAR: Você foi bem-sucedido e ganhou um impulso.'
                        break;
                }
                break;
            case "btnRolarCriar":
                switch(frase){
                    case "FALHA":
                        return '\n NOVO ASPECTO: Você não cria o aspecto, ou cria e o inimigo ganha um impulso.'
                        break;
                    case "EMPATE":
                        return '\n NOVO ASPECTO: Você não cria o aspecto, mas ganha um impulso.'
                        break;
                    case "SUCESSO":
                        return '\n NOVO ASPECTO: Você cria o aspecto e ganha uma invocação grátis.'
                        break;
                    case "SUCESSO COM ESTILO":
                        return '\n NOVO ASPECTO: Você cria o aspecto e ganha duas invocações grátis.'
                        break;
                }
                break;
            case "btnRolarDescobrir":
                switch(frase){
                    case "FALHA":
                        return '\n ASPECTO EXISTENTE: O inimigo ganha uma invocação grátis do aspecto.'
                        break;
                    case "EMPATE":
                        return '\n ASPECTO EXISTENTE: Você ganha uma invocação grátis do aspecto.'
                        break;
                    case "SUCESSO":
                        return '\n ASPECTO EXISTENTE: Você ganha uma invocação grátis do aspecto.'
                        break;
                    case "SUCESSO COM ESTILO":
                        return '\n ASPECTO EXISTENTE: Você ganha duas invocações grátis do aspecto.'
                        break;
                }
                break;
            default:
                return '';
        }
    }

    $('.btnAcao').click(function(){

        var acao = $(this).attr('id');
        var bonus = $('#bonus_value').val();
        var target = $('#target_value').val();

        if((bonus == '') || (bonus == undefined) || (isNaN(bonus)))
            bonus = 0;

        if((target == '') || (target == undefined) || (isNaN(target)))
            target = 0;

        resultado = rollFateDiceAction(acao,bonus,target);

        $('.boxRonin').html(
        '<div class="boxNPC">'+
          '<center><p><img src="./img/fate_'+resultado[0]+'.png" style="width: 60px;">&nbsp;&nbsp;&nbsp;'+
          '<img src="./img/fate_'+resultado[1]+'.png" style="width: 60px;">&nbsp;&nbsp;&nbsp;'+
          '<img src="./img/fate_'+resultado[2]+'.png" style="width: 60px;">&nbsp;&nbsp;&nbsp;'+
          '<img src="./img/fate_'+resultado[3]+'.png" style="width: 60px;"></p>'+
          '<div><h4><strong>('+bonus+')+('+resultado[4]+') = '+resultado[5]+'</strong>&nbsp;&nbsp;&nbsp;&nbsp;<i>('+ladder(resultado[5])+')</i></h4></div>'+
          '<h6><p>'+resultado[5]+' | '+target+' = <strong>'+resultado[6]+'</strong></p><p>'+resultado[7]+'</p></h6></center>'+
        '</div>');

    });

    $('#btnRolarDados').click(function(){

        resultado = rollFateDice();

        $('.boxRonin').html(
        '<div class="boxNPC">'+
          '<center><p><img src="./img/fate_'+resultado[0]+'.png" style="width: 60px;">&nbsp;&nbsp;&nbsp;'+
          '<img src="./img/fate_'+resultado[1]+'.png" style="width: 60px;">&nbsp;&nbsp;&nbsp;'+
          '<img src="./img/fate_'+resultado[2]+'.png" style="width: 60px;">&nbsp;&nbsp;&nbsp;'+
          '<img src="./img/fate_'+resultado[3]+'.png" style="width: 60px;"></p>'+
          '<div><h4><strong>'+resultado[4]+'</strong>&nbsp;&nbsp;&nbsp;&nbsp;<i>('+ladder(resultado[4])+')</i></h4></div></center>'+
        '</div>');

    });

    $('.boxRonin').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

