$( document ).ready(function() {

    function gerarConteudo() {
        return ['Esqueleto','Fantasma','Múmia','Zumbi','Baú','Buraco'];
    }

    function gerarGrupo(dificuldade) {

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

    $('#btnGerarGrupo').click(function(){

        var grupo = gerarGrupo($('#selectDificuldade').val());

        $('.boxTorre').prepend(
            '<div class="boxNPC">'+
              grupo+
            '</div>');

    });

    $('.boxLabirinto td').click(function(){

        $(this).html(random(gerarConteudo()));
        console.log(random(gerarConteudo()));

    });


    $('.boxTorre').css({'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px'});

});

