$( document ).ready(function() {

    $('.boxLabirinto').css('border','1px solid lightgrey');
    $('.boxLabirinto').css('border-right','0px');
    $('.boxLabirinto').css('border-bottom','0px');
    $('.boxLabirinto td').css('border-right','1px solid lightgrey');
    $('.boxLabirinto td').css('border-bottom','1px solid lightgrey');

    var hexmap = [];

    for(var i=0; i<14; i++) {
        hexmap[i] = new Array(27);
    }

    var terrenos = ['planicie','floresta','montanha','deserto','pantano','agua'];
    var cor_planicie = ['agua','montanha','floresta','planicie','planicie','planicie'];
    var cor_floresta = ['agua','pantano','montanha','floresta','floresta','planicie'];
    var cor_montanha = ['deserto','montanha','montanha','floresta','floresta','planicie'];
    var cor_deserto = ['deserto','deserto','deserto','montanha','montanha','montanha'];
    var cor_pantano = ['agua','agua','floresta','pantano','pantano','pantano'];
    var cor_agua = ['agua','agua','agua','agua','pantano','planicie'];

    var local = ['nao','nao','nao','nao','nao','sim'];

    for(i=0;i<14;i++)
        for(j=0;j<27;j++)
            hexmap[i][j] = '';

    $('#btnGerarMundo').click(function(){

        for(i=0;i<14;i++)
            for(j=0;j<27;j++)
                hexmap[i][j] = random(terrenos);

        $('.boxLabirinto td').html('');
        $('.boxLabirinto td').css('color','black');
        $('.boxLabirinto td').css('background-color','white');

    });

    $('.boxLabirinto td').click(function(){

        var conteudoTile = '';

        var coluna = $(this).attr('class');
        var linha = $(this).parent().attr('class');

        linha = linha.substring(5, 7);
        coluna = coluna.substring(6, 8);

        linha = linha - Number(1);
        coluna = coluna - Number(1);

        if(hexmap[linha][coluna] == ''){

            $(this).css('background-color','#ABEBC6');
            $(this).css('border','1px solid #ABEBC6');
            
            hexmap[linha][coluna] = 'planicie';

            if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_planicie);
            if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_planicie);
            if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_planicie);
            if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_planicie);
            if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_planicie);
            if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_planicie);
            if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_planicie);
            if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_planicie);

            $(this).html('<img src="./img/dwarf-face.png">');

        } else {

            if(hexmap[linha][coluna] == 'planicie'){

                $(this).css('background-color','#ABEBC6');
                $(this).css('border','1px solid #ABEBC6');

                if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_planicie);
                if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_planicie);
                if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_planicie);
                if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_planicie);
                if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_planicie);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_planicie);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_planicie);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_planicie);

            } else if(hexmap[linha][coluna] == 'floresta'){

                $(this).css('background-color','#196F3D');
                $(this).css('border','1px solid #196F3D');

                if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_floresta);
                if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_floresta);
                if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_floresta);
                if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_floresta);
                if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_floresta);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_floresta);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_floresta);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_floresta);

            } else if(hexmap[linha][coluna] == 'montanha'){

                $(this).css('background-color','#873600');
                $(this).css('border','1px solid #873600');

                if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_montanha);
                if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_montanha);
                if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_montanha);
                if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_montanha);
                if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_montanha);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_montanha);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_montanha);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_montanha);

            } else if(hexmap[linha][coluna] == 'deserto'){

                $(this).css('background-color','#F9E79F');
                $(this).css('border','1px solid #F9E79F');

                if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_deserto);
                if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_deserto);
                if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_deserto);
                if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_deserto);
                if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_deserto);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_deserto);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_deserto);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_deserto);

            } else if(hexmap[linha][coluna] == 'pantano'){

                $(this).css('background-color','#D2B4DE');
                $(this).css('border','1px solid #D2B4DE');

                if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_pantano);
                if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_pantano);
                if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_pantano);
                if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_pantano);
                if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_pantano);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_pantano);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_pantano);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_pantano);

            } else if(hexmap[linha][coluna] == 'agua'){

                $(this).css('background-color','#3498DB');
                $(this).css('border','1px solid #3498DB');

                if(hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)-Number(1)][Number(coluna)-Number(1)] = random(cor_agua);
                if(hexmap[Number(linha)-Number(1)][Number(coluna)] == '') hexmap[Number(linha-1)][Number(coluna)] = random(cor_agua);
                if(hexmap[Number(linha)-Number(1)][Number(coluna+1)] == '') hexmap[Number(linha-1)][Number(coluna+1)] = random(cor_agua);
                if(hexmap[Number(linha)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)][Number(coluna)-Number(1)] = random(cor_agua);
                if(hexmap[Number(linha)][Number(coluna+1)] == '') hexmap[Number(linha)][Number(coluna+1)] = random(cor_agua);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)-Number(1)] = random(cor_agua);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)] = random(cor_agua);
                if(hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] == '') hexmap[Number(linha)+Number(1)][Number(coluna)+Number(1)] = random(cor_agua);

            }

        }

        for(i=1;i<15;i++)
            for(j=1;j<28;j++){
                conteudoTile = hexmap[Number(i)-Number(1)][Number(j)-Number(1)];

                switch(conteudoTile){
                    case 'planicie':
                        $('.linha'+i).children('.coluna'+j).css('background-color','#ABEBC6');
                        $('.linha'+i).children('.coluna'+j).css('border','1px solid #ABEBC6');
                        break;
                    case 'floresta':
                        $('.linha'+i).children('.coluna'+j).css('background-color','#196F3D');
                        $('.linha'+i).children('.coluna'+j).css('border','1px solid #196F3D');
                        break;
                    case 'montanha':
                        $('.linha'+i).children('.coluna'+j).css('background-color','#873600');
                        $('.linha'+i).children('.coluna'+j).css('border','1px solid #873600');
                        break;
                    case 'deserto':
                        $('.linha'+i).children('.coluna'+j).css('background-color','#F9E79F');
                        $('.linha'+i).children('.coluna'+j).css('border','1px solid #F9E79F');
                        break;
                    case 'pantano':
                        $('.linha'+i).children('.coluna'+j).css('background-color','#D2B4DE');
                        $('.linha'+i).children('.coluna'+j).css('border','1px solid #D2B4DE');
                        break;
                    case 'agua':
                        $('.linha'+i).children('.coluna'+j).css('background-color','#3498DB');
                        $('.linha'+i).children('.coluna'+j).css('border','1px solid #3498DB');
                        break;
                }
            }

        $('.boxLabirinto td').html('');
        $(this).html('<img src="./img/dwarf-face.png">');

    });

});