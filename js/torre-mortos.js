$( document ).ready(function() {

    function gerarConteudo() {
        return ['Esqueleto','Fantasma','Múmia','Zumbi','Baú','Buraco'];
    }

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
    }

    function gerarEntradas(entrada,saida,lado){
        if(lado == 'esquerdo'){
            $('.linha'+entrada+' .coluna1').html('Entrada');
            $('.linha'+saida+' .coluna6').html('Saída');
        } else {
            $('.linha'+entrada+' .coluna6').html('Entrada');
            $('.linha'+saida+' .coluna1').html('Saída');
        }
    }

    function gerarVilao(){

        var viloes = ['Cavaleiro da Morte','Banshee','Espectro','Assombração','Vampiro','Necrolich'];
        var vilaoGerado = 'nao';
        var linha = '';
        var coluna = '';

        while(vilaoGerado == 'nao'){
            linha = randomNumber(1,6);
            coluna = randomNumber(1,6);
            if($('.linha'+linha+' .coluna'+coluna).html() == ''){
                $('.linha'+linha+' .coluna'+coluna).html(random(viloes))
                vilaoGerado = 'sim';
            }
        }

    }

    function colorir(){
        $('td:contains("Guerreiro")').css('color', 'green');
        $('td:contains("Clérigo")').css('color', 'blue');
        $('td:contains("Mago")').css('color', 'purple');
        $('td:contains("Ladrão")').css('color', 'maroon');
        $('td:contains("Paladino")').css('color', 'orange');

        $('td:contains("Zumbi")').css('color', 'green');
        $('td:contains("Múmia")').css('color', 'blue');
        $('td:contains("Fantasma")').css('color', 'purple');
        $('td:contains("Esqueleto")').css('color', 'maroon');
        $('td:contains("Baú")').css('color', 'fuchsia');
        $('td:contains("Buraco")').css('background-color', 'black');

        $('td:contains("Cavaleiro da Morte")').css('color', 'green');
        $('td:contains("Banshee")').css('color', 'blue');
        $('td:contains("Espectro")').css('color', 'purple');
        $('td:contains("Assombração")').css('color', 'maroon');
        $('td:contains("Vampiro")').css('color', 'orange');
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
                $('.tabelaHerois tbody').append('<tr><td>Guerreiro</td><td><input type="number" value="'+grupo['Guerreiro']+'"></td><td><input type="number" value="'+Number(grupo['Guerreiro']+1)+'"></td>');
                grupo['Guerreiro'] = 0;
            }
            if(grupo['Clérigo'] > 0){
                $('.tabelaHerois tbody').append('<tr><td>Clérigo</td><td><input type="number" value="'+grupo['Clérigo']+'"></td><td><input type="number" value="'+Number(grupo['Clérigo']+1)+'"></td>');
                grupo['Clérigo'] = 0;
            }
            if(grupo['Mago'] > 0){
                $('.tabelaHerois tbody').append('<tr><td>Mago</td><td><input type="number" value="'+grupo['Mago']+'"></td><td><input type="number" value="'+Number(grupo['Mago']+1)+'"></td>');
                grupo['Mago'] = 0;
            }
            if(grupo['Ladrão'] > 0){
                $('.tabelaHerois tbody').append('<tr><td>Ladrão</td><td><input type="number" value="'+grupo['Ladrão']+'"></td><td><input type="number" value="'+Number(grupo['Ladrão']+1)+'"></td>');
                grupo['Ladrão'] = 0;
            }
            if(grupo['Paladino'] > 0){
                $('.tabelaHerois tbody').append('<tr><td>Paladino</td><td><input type="number" value="'+grupo['Paladino']+'"></td><td><input type="number" value="'+Number(grupo['Paladino']+1)+'"></td>');
                grupo['Paladino'] = 0;
            }
        }

        gerarEntradas(randomNumber(1,6),randomNumber(1,6),'esquerdo');
        gerarVilao();

        $('.numeroAndar').html('1');
        $('.pvsVilao').attr('value','2');

        $('#btnSubir').show();

        colorir();

    });

    $('.boxLabirinto td').click(function(){

        var conteudoBau = ['Armadilha','Espada','Cetro','Bota','Anel','Poção'];
        var color = $(this).css('background-color');

        if($(this).html() == 'Baú')
            $(this).html(random(conteudoBau));

        if($(this).html() == '')
            $(this).html(random(gerarConteudo()));
        else if(color == 'rgb(255, 255, 255)')
            $(this).css('background-color','lightgrey');
        else
            $(this).css('background-color','white');

        colorir();

    });

    $('.bota, .anel').click(function(){

        var color = $(this).css('color');

        if(color == 'rgb(0, 0, 0)')
            $(this).css('color','grey');
        else
            $(this).css('color','black');

    });

    $('#btnSubir').click(function(){
        
        var colunaAntiga = $("td:contains('Saída')").attr('class'); 
        var linhaAntiga = $("td:contains('Saída')").parent().attr('class');

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

        colorir();
    });

});