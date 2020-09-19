$( document ).ready(function() {

    function setarDificuldade(dificuldade) {

        var dados = 0;

        switch(dificuldade){
            case "muitoDificil":
                dados = 2;
                break;
            case "dificil":
                dados = 3;
                break;
            case "medio":
                dados = 4;
                break;
            case "facil":
                dados = 5;
                break;
            case "muitoFacil":
                dados = 6;
                break;
        }

        return dados;
    }

    function gerarGrupo(dificuldade){

        var herois = ['Guerreiro','Clérigo','Mago','Ladrão','Paladino'];
        var grupo = [];

        grupo['Guerreiro'] = 0;
        grupo['Clérigo'] = 0;
        grupo['Mago'] = 0;
        grupo['Ladrão'] = 0;
        grupo['Paladino'] = 0;

        for(i=0;i<dificuldade;i++){
            heroi = random(herois);
            grupo[heroi] = grupo[heroi] + 1;
        }

        return grupo;

    }

    function limparLabirinto(){
        $('.boxLabirinto td').html('');
        $('.boxLabirinto td').css('color','black');
        $('.boxLabirinto td').css('background-color','white');
        $('.bauVilao img').attr('src','./img/bau.png');
        $('.inventario img').css('filter','opacity(0.3)');
    }

    function gerarEntradas(entrada,saida,lado){
        if(lado == 'esquerdo'){
            $('.linha'+entrada+' .coluna1').html('<img src="./img/escada_entrada.png">');
            $('.linha'+entrada+' .coluna1').css('background-color','lightgrey');
            $('.linha'+saida+' .coluna6').html('<img class="escadaSaida" src="./img/escada_saida.png">');
        } else {
            $('.linha'+entrada+' .coluna6').html('<img src="./img/escada_saida.png">');
            $('.linha'+entrada+' .coluna6').css('background-color','lightgrey');
            $('.linha'+saida+' .coluna1').html('<img class="escadaSaida" src="./img/escada_entrada.png">');
        }
    }

    function gerarVilao(){

        var vilao = random(['guerreiro','clerigo','mago','ladrao','paladino','neutro']);
        var vilaoGerado = 'nao';
        var linha = '';
        var coluna = '';

        while(vilaoGerado == 'nao'){
            linha = randomNumber(1,6);
            coluna = randomNumber(1,6);
            if($('.linha'+linha+' .coluna'+coluna).html() == ''){
                $('.linha'+linha+' .coluna'+coluna).html('<img src="./img/vilao_'+vilao+'.png">');
                vilaoGerado = 'sim';
            }
        }

    }

    $('#btnRolarDados').click(function(){
        $('.spanDados').html('&nbsp;&nbsp;&nbsp;&nbsp;<img src="./img/b'+randomNumber(1,6)+'.jpg" width=38px>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./img/w'+randomNumber(1,6)+'.jpg" width=38px>');
    });

    $('#btnGerarGrupo').click(function(){

        limparLabirinto();

        var dificuldade = setarDificuldade($('#selectDificuldade').val());
        var grupo = gerarGrupo(dificuldade);

        $('.tabelaHerois tbody').html('');

        for(i=0;i<5;i++){
            if(grupo['Guerreiro'] > 0){
                $('.tabelaHerois tbody').append('<tr><td><img src="./img/guerreiro.png">&nbsp;&nbsp;Guerreiro</td><td><input type="number" value="'+grupo['Guerreiro']+'"></td><td><input type="number" value="'+Number(grupo['Guerreiro']+1)+'"></td>');
                grupo['Guerreiro'] = 0;
            }
            if(grupo['Clérigo'] > 0){
                $('.tabelaHerois tbody').append('<tr><td><img src="./img/clerigo.png">&nbsp;&nbsp;Clérigo</td><td><input type="number" value="'+grupo['Clérigo']+'"></td><td><input type="number" value="'+Number(grupo['Clérigo']+1)+'"></td>');
                grupo['Clérigo'] = 0;
            }
            if(grupo['Mago'] > 0){
                $('.tabelaHerois tbody').append('<tr><td><img src="./img/mago.png">&nbsp;&nbsp;Mago</td><td><input type="number" value="'+grupo['Mago']+'"></td><td><input type="number" value="'+Number(grupo['Mago']+1)+'"></td>');
                grupo['Mago'] = 0;
            }
            if(grupo['Ladrão'] > 0){
                $('.tabelaHerois tbody').append('<tr><td><img src="./img/ladrao.png">&nbsp;&nbsp;Ladrão</td><td><input type="number" value="'+grupo['Ladrão']+'"></td><td><input type="number" value="'+Number(grupo['Ladrão']+1)+'"></td>');
                grupo['Ladrão'] = 0;
            }
            if(grupo['Paladino'] > 0){
                $('.tabelaHerois tbody').append('<tr><td><img src="./img/paladino.png">&nbsp;&nbsp;Paladino</td><td><input type="number" value="'+grupo['Paladino']+'"></td><td><input type="number" value="'+Number(grupo['Paladino']+1)+'"></td>');
                grupo['Paladino'] = 0;
            }
        }

        gerarEntradas(randomNumber(1,6),randomNumber(1,6),'esquerdo');
        gerarVilao();

        $('.numeroAndar').html('1');
        $('.pvsVilao').attr('value','2');

        $('#btnSubir').show();

        activateStressBox();
    });

    $('.boxLabirinto td').click(function(){

        var conteudoTile = random(['esqueleto','fantasma','mumia','zumbi','bau','buraco']);
        var conteudoBau = random(['armadilha','espada','cetro','bota','anel','pocao']);
        var color = $(this).css('background-color');

        if($(this).html() == '<img src="./img/bau.png">'){
            $(this).html('<img src="./img/'+conteudoBau+'.png">');
            $('.'+conteudoBau+' img').css('filter','opacity(1)');
        }

        if($(this).html() == ''){
            if(conteudoTile == 'buraco')
                $(this).css('background-color','black');
            else
                $(this).html('<img src="./img/'+conteudoTile+'.png">');
        }
        else if(color == 'rgb(255, 255, 255)')
            $(this).css('background-color','lightgrey');
        else
            $(this).css('background-color','white');

    });

    $('.bauVilao').on('click',function(){

        var conteudoBau = random(['armadilha','espada','cetro','bota','anel','pocao']);
        
        if(($(this).html() == '<img src="./img/bau.png">') || 
            ($(this).html() == '<img src="./img/bau.png" style="filter: opacity(1);">') ||
            ($(this).html() == '<img src="./img/bau.png" style="filter: opacity(0.3);">')){
            $(this).html('<img src="./img/'+conteudoBau+'.png">');
            $('.bauVilao img').css('filter','opacity(1)');
        }
        
    });

    $('.bota img, .anel img').click(function(){

        var color = $(this).css('filter');

        if(color == 'opacity(1)')
            $(this).css('filter','opacity(0.3)');
        else
            $(this).css('filter','opacity(1)');

    });

    $('#btnSubir').click(function(){
        
        var colunaAntiga = $(".escadaSaida").parent().attr('class'); 
        var linhaAntiga = $(".escadaSaida").parent().parent().attr('class');

        if(colunaAntiga == 'coluna6')
            lado = 'direito';
        else
            lado = 'esquerdo';
        
        limparLabirinto();

        gerarEntradas(linhaAntiga[5],randomNumber(1,6),lado);

        gerarVilao();

        var numero = Number($('.numeroAndar').html());

        $('.numeroAndar').html(Number(numero+1));
        $('.pvsVilao').attr('value',Number(numero+2));

        $('.bota, .anel').css('color','grey');

    });

});