$( document ).ready(function() {

    function pokemonConditions(){
        return '<br><i>Condição:</i> <select name="pokemon-condition">'+
                '<option value="nenhum"></option>'+
                '<option value="envenenado">Envenenado</option>'+
                '<option value="paralisado">Paralisado</option>'+
                '<option value="congelado">Congelado</option>'+
                '<option value="confuso">Confuso</option>'+
                '<option value="incendiado">Incendiado</option>'+
                '<option value="adormecido">Adormecido</option></select>'
    };

    $('#selectInsignias').change(function() {
      
        if($(this).val() == 0) $('#qttd_insignias').html('Nível pokémons: 1-6 / Nível obediência: 20');
        if($(this).val() == 1) $('#qttd_insignias').html('Nível pokémons: 7-12 / Nível obediência: 30');
        if($(this).val() == 2) $('#qttd_insignias').html('Nível pokémons: 13-18 / Nível obediência: 40');
        if($(this).val() == 3) $('#qttd_insignias').html('Nível pokémons: 19-24 / Nível obediência: 50');
        if($(this).val() == 4) $('#qttd_insignias').html('Nível pokémons: 25-30 / Nível obediência: 60');
        if($(this).val() == 5) $('#qttd_insignias').html('Nível pokémons: 31-36 / Nível obediência: 70');
        if($(this).val() == 6) $('#qttd_insignias').html('Nível pokémons: 37-42 / Nível obediência: 80');
        if($(this).val() == 7) $('#qttd_insignias').html('Nível pokémons: 43-48 / Nível obediência: 90');
        if($(this).val() == 8) $('#qttd_insignias').html('Nível pokémons: 49-54 / Nível obediência: 100');

    });

    function buscaHabilidade(pokemon, nivel) {

        var habilidade = [];

        switch(pokemon){
            case "Bulbasaur":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[7] = {nome:'Semear',tipo:'Grama',desc:'No início do turno do oponente ele sofre 1 de dano e você recupera 1 PV. Efeito dobrado se super efetivo'};
                habilidade[13] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[20] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[27] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (3-6 se super efetivo)'};
                habilidade[34] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[41] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[48] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Ivysaur":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[7] = {nome:'Semear',tipo:'Grama',desc:'No início do turno do oponente ele sofre 1 de dano e você recupera 1 PV. Efeito dobrado se super efetivo'};
                habilidade[13] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[30] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (3-6 se super efetivo)'};
                habilidade[38] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[46] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[54] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Venusaur":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[7] = {nome:'Semear',tipo:'Grama',desc:'No início do turno do oponente ele sofre 1 de dano e você recupera 1 PV. Efeito dobrado se super efetivo'};
                habilidade[13] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[30] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (3-6 se super efetivo)'};
                habilidade[43] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[55] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[65] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Charmander":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[22] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o Charmander vença ou desmaie'};
                habilidade[30] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[38] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causa 4+ de dano'};
                habilidade[46] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                return habilidade[nivel];
                break;  
            case "Charmeleon":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[24] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o Charmander vença ou desmaie'};
                habilidade[33] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[42] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causa 4+ de dano'};
                habilidade[56] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                return habilidade[nivel];
                break;  
            case "Charizard":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[24] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o Charmander vença ou desmaie'};
                habilidade[36] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[46] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causa 4+ de dano'};
                habilidade[55] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                return habilidade[nivel];
                break;
            case "Squirtle":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[15] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[22] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[28] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[35] = {nome:'Golpe de Casco',tipo:'Normal',desc:'No seu próximo turno ataque com +5d6'};
                habilidade[42] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;  
            case "Wartortle":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[15] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[24] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[31] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[39] = {nome:'Golpe de Casco',tipo:'Normal',desc:'No seu próximo turno ataque com +5d6'};
                habilidade[47] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;  
            case "Blastoise":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[15] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[24] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[31] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[42] = {nome:'Golpe de Casco',tipo:'Normal',desc:'No seu próximo turno ataque com +5d6'};
                habilidade[52] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Caterpie":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Enredar',tipo:'Inseto',desc:'Reduz o próximo ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;        
            case "Metapod":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Enredar',tipo:'Inseto',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                return habilidade[nivel];
                break;        
            case "Butterfree":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Enredar',tipo:'Inseto',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[10] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[13] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[14] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[15] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[23] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[28] = {nome:'Rajada',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[34] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                return habilidade[nivel];
                break;        
            case "Weedle":
                habilidade[1] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[5] = {nome:'Enredar',tipo:'Inseto',desc:'Reduz o próximo ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;        
            case "Kakuna":
                habilidade[1] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[5] = {nome:'Enredar',tipo:'Inseto',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                return habilidade[nivel];
                break;        
            case "Beedrill":
                habilidade[1] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[5] = {nome:'Enredar',tipo:'Inseto',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[12] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[16] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[20] = {nome:'Agulhas Gêmeas',tipo:'Inseto',desc:'Ataque com +3d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[25] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada uso consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Não é mais possível realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[30] = {nome:'Alfinetadas',tipo:'Inseto',desc:'Ataque com +1d6 dados'};
                habilidade[35] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;        
            case "Pidgey":
                habilidade[1] = {nome:'Rajada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[12] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[19] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[28] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +3d6'};
                habilidade[36] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[44] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com o mesmo efeito e a mesma quantidade de dados de ataque (se aplicável)'};
                return habilidade[nivel];
                break;        
            case "Pidgeotto":
                habilidade[1] = {nome:'Rajada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[12] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[21] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[31] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[40] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[49] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com o mesmo efeito e a mesma quantidade de dados de ataque (se aplicável)'};
                return habilidade[nivel];
                break;        
            case "Pidgeot":
                habilidade[1] = {nome:'Rajada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[12] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[21] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[31] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[44] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[54] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com o mesmo efeito e a mesma quantidade de dados de ataque (se aplicável)'};
                return habilidade[nivel];
                break;        
            case "Rattata":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[7] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[14] = {nome:'Hiper Presas',tipo:'Normal',desc:'Ataque com +4d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[23] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[34] = {nome:'Super Presas',tipo:'Normal',desc:'Ataque com +Xd6, no qual X é a metade dos PVs restantes do oponente (mínimo +1d6)'};
                return habilidade[nivel];
                break;        
            case "Raticate":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[7] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[14] = {nome:'Hiper Presas',tipo:'Normal',desc:'Ataque com +4d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[41] = {nome:'Super Presas',tipo:'Normal',desc:'Ataque com +Xd6, no qual X é a metade dos PVs restantes do oponente (mínimo +1d6)'};
                return habilidade[nivel];
                break;        
            case "Spearow":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[22] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com o mesmo efeito e a mesma quantidade de dados de ataque (se aplicável)'};
                habilidade[29] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[36] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;        
            case "Fearow":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[25] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com o mesmo efeito e a mesma quantidade de dados de ataque (se aplicável)'};
                habilidade[34] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[43] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;
            case "Ekans":
                habilidade[1] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[10] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[17] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[24] = {nome:'Olhar Penetrante',tipo:'Normal',desc:'Paralisa o oponente'};
                habilidade[31] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[38] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques bem sucedidos causam 1 de dano a mais no oponente atual, até o final do combate'};
                return habilidade[nivel];
                break;
            case "Arbok":
                habilidade[1] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[10] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[17] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[27] = {nome:'Olhar Penetrante',tipo:'Normal',desc:'Paralisa o oponente'};
                habilidade[36] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[47] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques bem sucedidos causam 1 de dano a mais no oponente atual, até o final do combate'};
                return habilidade[nivel];
                break;
            case "Pikachu":
                habilidade[1] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[16] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[26] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[33] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[43] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 4+ de dano paralisa o oponente'};
                return habilidade[nivel];
                break;
            case "Raichu":
                habilidade[1] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[20] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[31] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[37] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[47] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 4+ de dano paralisa o oponente'};
                return habilidade[nivel];
                break;
            case "Sandshrew":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[10] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[17] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[24] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[31] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[38] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                return habilidade[nivel];
                break;
            case "Sandslash":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[10] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[17] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[27] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[36] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[47] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                return habilidade[nivel];
                break;       
            case "Nidoran♀":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[17] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[23] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[30] = {nome:'Mordida',tipo:'Normal',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[38] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                return habilidade[nivel];
                break;        
            case "Nidorina":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[19] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[27] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[36] = {nome:'Mordida',tipo:'Normal',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[46] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                return habilidade[nivel];
                break;
            case "Nidoqueen":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[23] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[27] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[31] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[40] = {nome:'Mordida',tipo:'Normal',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[50] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                return habilidade[nivel];
                break;  
            case "Nidoran♂":
                habilidade[1] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[17] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[23] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[30] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[38] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                return habilidade[nivel];
                break;        
            case "Nidorino":
                habilidade[1] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[19] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[36] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[46] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                return habilidade[nivel];
                break;
            case "Nidoking":
                habilidade[1] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[23] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[27] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Nidoking fica confuso'};
                habilidade[31] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[40] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[50] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                return habilidade[nivel];
                break;
            case "Clefairy":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[5] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[13] = {nome:'Cantar',tipo:'Normal',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[18] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[24] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[31] = {nome:'Metrônomo',tipo:'Normal',desc:'Consulte na última página da pokédex'};
                habilidade[39] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[48] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                return habilidade[nivel];
                break;
            case "Clefable":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[5] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[13] = {nome:'Cantar',tipo:'Normal',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[22] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[28] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[35] = {nome:'Metrônomo',tipo:'Normal',desc:'Consulte na última página da pokédex'};
                habilidade[43] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[52] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                return habilidade[nivel];
                break;
            case "Vulpix":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[16] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[21] = {nome:'Rugido',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[28] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente '};
                habilidade[35] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6, incendeia o oponente se causar 4+ de dano'};
                habilidade[42] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X rodadas, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                return habilidade[nivel];
                break;        
            case "Ninetales":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[16] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[25] = {nome:'Rugido',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[32] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente '};
                habilidade[39] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6, incendeia o oponente se causar 4+ de dano'};
                habilidade[46] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X rodadas, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                return habilidade[nivel];
                break;
            case "Jigglypuff":
                habilidade[1] = {nome:'Cantar',tipo:'Normal',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[9] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[14] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[19] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[24] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[29] = {nome:'Dormir',tipo:'Psíquico',desc:'Você adormece, recupera todos os PVs e se livra de todas as outras condições. No segundo turno após o uso desta habilidade você acorda no início do turno'};
                habilidade[34] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[39] = {nome:'Gume-Duplo',tipo:'Normal',desc:'Ataque com +5d6. Para cada 2 de dano inflingido, você perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Wigglytuff":
                habilidade[1] = {nome:'Cantar',tipo:'Normal',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[9] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[14] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[24] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[29] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[34] = {nome:'Dormir',tipo:'Psíquico',desc:'Você adormece, recupera todos os PVs e se livra de todas as outras condições. No segundo turno após o uso desta habilidade você acorda no início do turno'};
                habilidade[39] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[44] = {nome:'Gume-Duplo',tipo:'Normal',desc:'Ataque com +5d6. Para cada 2 de dano inflingido, você perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Zubat":
                habilidade[1] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[10] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[15] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[21] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[28] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +3d6'};
                habilidade[36] = {nome:'Neblina',tipo:'Gelo',desc:'Remove as tuas condições e as do oponente. Remove qualquer bônus de ataque, defesa ou dados extras do oponente'};
                return habilidade[nivel];
                break;
            case "Golbat":
                habilidade[1] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[10] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[15] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[21] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[32] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +3d6'};
                habilidade[43] = {nome:'Neblina',tipo:'Gelo',desc:'Remove as tuas condições e as do oponente. Remove qualquer bônus de ataque, defesa ou dados extras do oponente'};
                return habilidade[nivel];
                break;
            case "Oddish":
                habilidade[1] = {nome:'Absorver',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[7] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[12] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[19] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[24] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[36] = {nome:'Dança de Pétalas',tipo:'Grama',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Oddish fica confuso'};
                habilidade[46] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;        
            case "Gloom":
                habilidade[1] = {nome:'Absorver',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[7] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[12] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[19] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[28] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[38] = {nome:'Dança de Pétalas',tipo:'Grama',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Oddish fica confuso'};
                habilidade[52] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;        
            case "Vileplume":
                habilidade[1] = {nome:'Absorver',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[7] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[12] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[23] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[32] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[42] = {nome:'Dança de Pétalas',tipo:'Grama',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Oddish fica confuso'};
                habilidade[56] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Paras":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[27] = {nome:'Esporos',tipo:'Grama',desc:'Adormece o oponente'};
                habilidade[34] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[41] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                return habilidade[nivel];
                break;
            case "Parasect":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[30] = {nome:'Esporos',tipo:'Grama',desc:'Adormece o oponente'};
                habilidade[39] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[48] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                return habilidade[nivel];
                break;
            case "Venonat":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[11] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[27] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[30] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[35] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[38] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[43] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;        
            case "Venomoth":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[11] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[27] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[33] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[38] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[43] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[50] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;        
            case "Diglett":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[15] = {nome:'Escavar',tipo:'Terrestre',desc:'Fica imune a qualquer tipo de dano no próximo turno e não pode realizar nenhuma ação, para então atacar com +5d6 no turno subsequente'};
                habilidade[24] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[31] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[40] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
                return habilidade[nivel];
                break;
            case "Dugtrio":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[15] = {nome:'Escavar',tipo:'Terrestre',desc:'Fica imune a qualquer tipo de dano no próximo turno e não pode realizar nenhuma ação, para então atacar com +5d6 no turno subsequente'};
                habilidade[24] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[35] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[47] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
                return habilidade[nivel];
                break;
            case "Meowth":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[12] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[17] = {nome:'Dia de Pagamento',tipo:'Normal',desc:'Ataque com +2d6. Se vencer o duelo, receba 1d6 moedas para cada vez que usou esta habilidade'};
                habilidade[24] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[33] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[44] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                return habilidade[nivel];
                break;
            case "Persian":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[12] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[17] = {nome:'Dia de Pagamento',tipo:'Normal',desc:'Ataque com +2d6. Se vencer o duelo, receba 1d6 moedas para cada vez que usou esta habilidade'};
                habilidade[24] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[37] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[51] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                return habilidade[nivel];
                break;
            case "Psyduck":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[26] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[33] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[42] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Golduck":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[26] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[38] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[49] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Mankey":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[9] = {nome:'Chute Baixo',tipo:'Lutador',desc:'Ataque com +2d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Golpe de Karatê',tipo:'Normal',desc:'Ataque com +2d6 com sucesso a 4-6'};
                habilidade[21] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[33] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a quantidade total de PVs do oponente, arredondado para baixo'};
                habilidade[39] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Mankey fica confuso'};
                habilidade[45] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques causam 2 de dano a mais no oponente atual'};
                return habilidade[nivel];
                break;        
            case "Primeape":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[9] = {nome:'Chute Baixo',tipo:'Lutador',desc:'Ataque com +2d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Golpe de Karatê',tipo:'Normal',desc:'Ataque com +2d6 com sucesso a 4-6'};
                habilidade[21] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[37] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a quantidade total de PVs do oponente, arredondado para baixo'};
                habilidade[45] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Mankey fica confuso'};
                habilidade[49] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques causam 2 de dano a mais no oponente atual'};
                return habilidade[nivel];
                break;
            case "Growlithe":
                habilidade[1] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[7] = {nome:'Rugido',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
                habilidade[18] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[23] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[30] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Growlithe perde 1 PV'};
                habilidade[39] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[50] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causar 4+ de dano'};
                return habilidade[nivel];
                break;
            case "Arcanine":
                habilidade[1] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[7] = {nome:'Rugido',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
                habilidade[18] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[27] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[35] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Growlithe perde 1 PV'};
                habilidade[42] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[55] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causar 4+ de dano'};
                return habilidade[nivel];
                break;
            case "Poliwag":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[25] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[31] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[38] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                habilidade[45] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Poliwhirl":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[26] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[33] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[41] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                habilidade[49] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Poliwrath":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[26] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[33] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[45] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                habilidade[51] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Abra":
                habilidade[1] = {nome:'Teleporte',tipo:'Psíquico',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
                return habilidade[nivel];
                break;         
            case "Kadabra":
                habilidade[1] = {nome:'Teleporte',tipo:'Psíquico',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
                habilidade[7] = {nome:'Cinesia',tipo:'Psíquico',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[16] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[20] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[27] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[31] = {nome:'Recuperar-se',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
                habilidade[38] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                habilidade[42] = {nome:'Refletir',tipo:'Psíquico',desc:'Até o fim do combate reduz à metade todo dano recebido de ataques comuns (mínimo 1), não cumulativo'};
                return habilidade[nivel];
                break;
            case "Alakazam":
                habilidade[1] = {nome:'Teleporte',tipo:'Psíquico',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
                habilidade[7] = {nome:'Cinesia',tipo:'Psíquico',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[16] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[24] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[31] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[35] = {nome:'Recuperar-se',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
                habilidade[42] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                habilidade[46] = {nome:'Refletir',tipo:'Psíquico',desc:'Até o fim do combate reduz à metade todo dano recebido de ataques comuns (mínimo 1), não cumulativo'};
                return habilidade[nivel];
                break;
            case "Machop":
                habilidade[1] = {nome:'Golpe de Karatê',tipo:'Lutador',desc:'Ataque com +2d6 com sucesso a 4-6'};
                habilidade[7] = {nome:'Chute Baixo',tipo:'Lutador',desc:'Ataque com +2d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[21] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[27] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a metade do total de PVs do oponente, arredondado para baixo'};
                habilidade[35] = {nome:'Submissão',tipo:'Lutador',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Machop perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Machoke":
                habilidade[1] = {nome:'Golpe de Karatê',tipo:'Lutador',desc:'Ataque com +2d6 com sucesso a 4-6'};
                habilidade[7] = {nome:'Chute Baixo',tipo:'Lutador',desc:'Ataque com +2d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[25] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[31] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a metade do total de PVs do oponente, arredondado para baixo'};
                habilidade[39] = {nome:'Submissão',tipo:'Lutador',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Machop perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Machamp":
                habilidade[1] = {nome:'Golpe de Karatê',tipo:'Lutador',desc:'Ataque com +2d6 com sucesso a 4-6'};
                habilidade[7] = {nome:'Chute Baixo',tipo:'Lutador',desc:'Ataque com +2d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[29] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[35] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a metade do total de PVs do oponente, arredondado para baixo'};
                habilidade[43] = {nome:'Submissão',tipo:'Lutador',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Machop perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Bellsprout":
                habilidade[1] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[18] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[21] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[26] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[33] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (3-6 se super efetivo)'};
                habilidade[42] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                return habilidade[nivel];
                break;        
            case "Weepinbell":
                habilidade[1] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[18] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[23] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[29] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[38] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (3-6 se super efetivo)'};
                habilidade[49] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                return habilidade[nivel];
                break;        
            case "Victreebel":
                habilidade[1] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[22] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[27] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[33] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[42] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (3-6 se super efetivo)'};
                habilidade[53] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                return habilidade[nivel];
                break;
            case "Tentacool":
                habilidade[1] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques bem sucedidos causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[7] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[18] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[22] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[27] = {nome:'Constrição',tipo:'Normal',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[33] = {nome:'Barreira',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                habilidade[40] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[48] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Tentacruel":
                habilidade[1] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques bem sucedidos causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[7] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[18] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[22] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[27] = {nome:'Constrição',tipo:'Normal',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[35] = {nome:'Barreira',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                habilidade[43] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[50] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Geodude":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[15] = {nome:'Pedrada',tipo:'Pedra',desc:'Ataque com +2d6'};
                habilidade[21] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                habilidade[27] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[32] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
                habilidade[36] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                return habilidade[nivel];
                break;         
            case "Graveler":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[19] = {nome:'Pedrada',tipo:'Pedra',desc:'Ataque com +2d6'};
                habilidade[25] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                habilidade[31] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[36] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
                habilidade[40] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                return habilidade[nivel];
                break;
            case "Golem":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[19] = {nome:'Pedrada',tipo:'Pedra',desc:'Ataque com +2d6'};
                habilidade[29] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                habilidade[35] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[40] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
                habilidade[44] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                return habilidade[nivel];
                break;
            case "Ponyta":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[14] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[21] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[29] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                habilidade[35] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Ponyta perde 1 PV'};
                habilidade[45] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;        
            case "Rapidash":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[14] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[21] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[35] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                habilidade[40] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Ponyta perde 1 PV'};
                habilidade[45] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;
            case "Slowpoke":
                habilidade[1] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[9] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[18] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[27] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[33] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[40] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                habilidade[48] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;
            case "Slowbro":
                habilidade[1] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[9] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[18] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[27] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[37] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[44] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                habilidade[55] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;
            case "Magnemite":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[11] = {nome:'Explosão Sônica',tipo:'Normal',desc:'Sempre causa 2 de dano, não precisa rolar dados'};
                habilidade[19] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[29] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[35] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[41] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[47] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                return habilidade[nivel];
                break;
            case "Magneton":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[11] = {nome:'Explosão Sônica',tipo:'Normal',desc:'Sempre causa 2 de dano, não precisa rolar dados'};
                habilidade[19] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[29] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[38] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[46] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[54] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                return habilidade[nivel];
                break;
            case "Farfetch`d":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[4] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[23] = {nome:'Dança de Espadas',tipo:'Normal',desc:'Até o fim do combate seus ataques causam 2 de dano a mais'};
                habilidade[31] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[39] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                return habilidade[nivel];
                break;        
            case "Doduo":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[18] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[27] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[36] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[40] = {nome:'Ataque Triplo',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[44] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;
            case "Dodrio":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[18] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[27] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[39] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[45] = {nome:'Ataque Triplo',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[51] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;
            case "Seel":
                habilidade[1] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[10] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[20] = {nome:'Raio Aurora',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[30] = {nome:'Dormir',tipo:'Psíquico',desc:'Você adormece, recupera todos os PVs e se livra de todas as outras condições. No segundo turno após o uso desta habilidade você acorda no início do turno'};
                habilidade[40] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Seel perde 1 PV'};
                habilidade[50] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
                return habilidade[nivel];
                break;
            case "Dewgong":
                habilidade[1] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[10] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[20] = {nome:'Raio Aurora',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[35] = {nome:'Dormir',tipo:'Psíquico',desc:'Você adormece, recupera todos os PVs e se livra de todas as outras condições. No segundo turno após o uso desta habilidade você acorda no início do turno'};
                habilidade[44] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Seel perde 1 PV'};
                habilidade[55] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
                return habilidade[nivel];
                break;
            case "Grimer":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[18] = {nome:'Gás Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[25] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[31] = {nome:'Lama',tipo:'Venenoso',desc:'Ataque com +3d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[38] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[49] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[55] = {nome:'Armadura Ácida',tipo:'Venenoso',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                return habilidade[nivel];
                break;
            case "Muk":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[18] = {nome:'Gás Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[25] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[37] = {nome:'Lama',tipo:'Venenoso',desc:'Ataque com +3d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[45] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[53] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[60] = {nome:'Armadura Ácida',tipo:'Venenoso',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                return habilidade[nivel];
                break;
            case "Shellder":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[9] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[18] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[23] = {nome:'Apertar',tipo:'Água',desc:'Ataque com +2d6. Durante 1d6 turnos não é possível escolher outra ação, o oponente não pode ser trocado enquanto durar a habilidade'};
                habilidade[30] = {nome:'Raio Aurora',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[37] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[45] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
                return habilidade[nivel];
                break;
            case "Cloyster":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[9] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[18] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[23] = {nome:'Apertar',tipo:'Água',desc:'Ataque com +2d6. Durante 1d6 turnos não é possível escolher outra ação, o oponente não pode ser trocado enquanto durar a habilidade'};
                habilidade[34] = {nome:'Raio Aurora',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[40] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[49] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
                return habilidade[nivel];
                break;
            case "Gastly":
                habilidade[1] = {nome:'Lamber',tipo:'Fantasma',desc:'Ataque com +1d6. Se causar 3+ de dano paralisa o oponente'};
                habilidade[5] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[11] = {nome:'Sombra Noturna',tipo:'Fantasma',desc:'Ataque com +Xd6, no qual X é 1/10 do nível do oponente, arredondado para baixo'};
                habilidade[17] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[25] = {nome:'Pesadelos',tipo:'Psíquico',desc:'Só funciona em pokémons adormecidos. Ataque com +5d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                return habilidade[nivel];
                break;
            case "Haunter":
                habilidade[1] = {nome:'Lamber',tipo:'Fantasma',desc:'Ataque com +1d6. Se causar 3+ de dano paralisa o oponente'};
                habilidade[5] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[11] = {nome:'Sombra Noturna',tipo:'Fantasma',desc:'Ataque com +Xd6, no qual X é 1/10 do nível do oponente, arredondado para baixo'};
                habilidade[21] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[29] = {nome:'Pesadelos',tipo:'Psíquico',desc:'Só funciona em pokémons adormecidos. Ataque com +5d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                return habilidade[nivel];
                break;
            case "Gengar":
                habilidade[1] = {nome:'Lamber',tipo:'Fantasma',desc:'Ataque com +1d6. Se causar 3+ de dano paralisa o oponente'};
                habilidade[5] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[11] = {nome:'Sombra Noturna',tipo:'Fantasma',desc:'Ataque com +Xd6, no qual X é 1/10 do nível do oponente, arredondado para baixo'};
                habilidade[27] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[35] = {nome:'Pesadelos',tipo:'Psíquico',desc:'Só funciona em pokémons adormecidos. Ataque com +5d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                return habilidade[nivel];
                break;
            case "Onix":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques causam 2 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Prender',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[19] = {nome:'Pedrada',tipo:'Pedra',desc:'Ataque com +2d6'};
                habilidade[25] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada uso consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Não é mais possível realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[33] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[43] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                return habilidade[nivel];
                break;    
            case "Drowzee":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[12] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[17] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[24] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[29] = {nome:'Gás Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[32] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                habilidade[37] = {nome:'Meditar',tipo:'Psíquico',desc:'Até o fim do combate os seus ataques bem sucedidos causam 1 de dano a mais'};
                return habilidade[nivel];
                break;
            case "Hypno":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[12] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[17] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[24] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[33] = {nome:'Gás Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[37] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                habilidade[43] = {nome:'Meditar',tipo:'Psíquico',desc:'Até o fim do combate os seus ataques bem sucedidos causam 1 de dano a mais'};
                return habilidade[nivel];
                break;
            case "Krabby":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[17] = {nome:'Agarrar',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[25] = {nome:'Guilhotina',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[30] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[35] = {nome:'Martelada',tipo:'Água',desc:'Ataque com +5d6 com sucesso a 4-6'};
                habilidade[40] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                return habilidade[nivel];
                break;
            case "Kingler":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[17] = {nome:'Agarrar',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[25] = {nome:'Guilhotina',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[34] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[42] = {nome:'Martelada',tipo:'Água',desc:'Ataque com +5d6 com sucesso a 4-6'};
                habilidade[49] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                return habilidade[nivel];
                break;
            case "Voltorb":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[9] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[17] = {nome:'Explosão Sônica',tipo:'Normal',desc:'Sempre causa 2 de dano, não precisa rolar dados'};
                habilidade[22] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +10d6. Voltorb desmaia após o ataque'};
                habilidade[29] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[36] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[43] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Voltorb desmaia após o ataque'};
                return habilidade[nivel];
                break;
            case "Electrode":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[9] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[17] = {nome:'Explosão Sônica',tipo:'Normal',desc:'Sempre causa 2 de dano, não precisa rolar dados'};
                habilidade[22] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +10d6. Electrode desmaia após o ataque'};
                habilidade[29] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[40] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[50] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Electrode desmaia após o ataque'};
                return habilidade[nivel];
                break;
            case "Exeggcute":
                habilidade[1] = {nome:'Barragem',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[12] = {nome:'Refletir',tipo:'Psíquico',desc:'Até o fim do combate reduz à metade todo dano recebido de ataques comuns (mínimo 1), não cumulativo'};
                habilidade[18] = {nome:'Semear',tipo:'Grama',desc:'No início de cada turno do oponente ele sofre 1 de dano e você recupera 1 PV. Efeito dobrado se super efetivo'};
                habilidade[25] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[32] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[41] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                habilidade[48] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                return habilidade[nivel];
                break;
            case "Exeggutor":
                habilidade[1] = {nome:'Barragem',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[7] = {nome:'Hipnose',tipo:'Psíquico',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[12] = {nome:'Refletir',tipo:'Psíquico',desc:'Até o fim do combate reduz à metade todo dano recebido de ataques comuns (mínimo 1), não cumulativo'};
                habilidade[18] = {nome:'Semear',tipo:'Grama',desc:'No início de cada turno do oponente ele sofre 1 de dano e você recupera 1 PV. Efeito dobrado se super efetivo'};
                habilidade[25] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[35] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[43] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                habilidade[50] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                return habilidade[nivel];
                break;
            case "Cubone":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[7] = {nome:'Ossada',tipo:'Terrestre',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[13] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[18] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[25] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[31] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[38] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Cubone fica confuso'};
                habilidade[43] = {nome:'Ossomerangue',tipo:'Terrestre',desc:'Ataque com +5d6'};
                habilidade[46] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
                return habilidade[nivel];
                break;
            case "Marowak":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[7] = {nome:'Ossada',tipo:'Terrestre',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[13] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[18] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[25] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[33] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[41] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Cubone fica confuso'};
                habilidade[48] = {nome:'Ossomerangue',tipo:'Terrestre',desc:'Ataque com +5d6'};
                habilidade[55] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
                return habilidade[nivel];
                break;
            case "Hitmonlee":
                habilidade[1] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[8] = {nome:'Meditar',tipo:'Psíquico',desc:'Até o fim do combate os seus ataques bem sucedidos causam 1 de dano a mais'};
                habilidade[16] = {nome:'Chute Giratório',tipo:'Lutador',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[24] = {nome:'Chute Alto',tipo:'Lutador',desc:'Ataque com +4d6. Se não causar dano, Hitmonlee perde 1 PV'};
                habilidade[32] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[40] = {nome:'Voadora',tipo:'Lutador',desc:'Ataque com +5d6. Se não causar dano, Hitmonlee perde 2 PV'};
                habilidade[48] = {nome:'Mega Chute',tipo:'Normal',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Hitmonchan":
                habilidade[1] = {nome:'Soco Cometa',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[8] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[16] = {nome:'Soco de Fogo',tipo:'Fogo',desc:'Ataque com +3d6. Se causar 4+ de dano incendeia o oponente'};
                habilidade[24] = {nome:'Soco de Gelo',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 4+ de dano congela o oponente'};
                habilidade[32] = {nome:'Soco do Trovão',tipo:'Elétrico',desc:'Ataque com +3d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[40] = {nome:'Mega Soco',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[48] = {nome:'Contra-ataque',tipo:'Lutador',desc:'Se o último ataque que você recebeu foi do tipo Normal ou Lutador, cause o dobro deste dano no oponente'};
                return habilidade[nivel];
                break;
            case "Lickitung":
                habilidade[1] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[5] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[9] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[23] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[31] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[39] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                return habilidade[nivel];
                break;
            case "Koffing":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Poluição',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[15] = {nome:'Lama',tipo:'Venenoso',desc:'Ataque com +3d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[27] = {nome:'Cortina de fumaça',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[32] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +10d6. Koffing desmaia após o ataque'};
                habilidade[39] = {nome:'Neblina',tipo:'Gelo',desc:'Remove as tuas condições e as do oponente. Remove qualquer bônus de ataque, defesa ou dados extras do oponente'};
                habilidade[45] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Koffing desmaia após o ataque'};
                return habilidade[nivel];
                break;
            case "Weezing":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Poluição',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[15] = {nome:'Lama',tipo:'Venenoso',desc:'Ataque com +3d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[29] = {nome:'Cortina de fumaça',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[35] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +10d6. Koffing desmaia após o ataque'};
                habilidade[43] = {nome:'Neblina',tipo:'Gelo',desc:'Remove as tuas condições e as do oponente. Remove qualquer bônus de ataque, defesa ou dados extras do oponente'};
                habilidade[50] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Koffing desmaia após o ataque'};
                return habilidade[nivel];
                break;
            case "Rhyhorn":
                habilidade[1] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[10] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[20] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[25] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[30] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[35] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[40] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Rhyhorn perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Rhydon":
                habilidade[1] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[10] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[20] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[25] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[30] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[40] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[45] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Rhyhorn perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Chansey":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[6] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[12] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[24] = {nome:'Cantar',tipo:'Normal',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[30] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[38] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[44] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[48] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[54] = {nome:'Gume-Duplo',tipo:'Normal',desc:'Ataque com +6d6. Para cada 3 de dano inflingido, Chansey perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Tangela":
                habilidade[1] = {nome:'Constrição',tipo:'Normal',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[3] = {nome:'Prender',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[7] = {nome:'Absover',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[13] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[20] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6. Pokémons Venenosos e Metálicos são imunes'};
                habilidade[27] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[34] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[41] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[48] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                return habilidade[nivel];
                break;        
            case "Kangaskhan":
                habilidade[1] = {nome:'Soco Cometa',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[9] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[16] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[26] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[31] = {nome:'Mega Soco',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[39] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[46] = {nome:'Soco nocauteador',tipo:'Normal',desc:'Ataque com +3d6. Se causar 4+ de dano confunde o oponente'};
                return habilidade[nivel];
                break;
            case "Horsea":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[9] = {nome:'Cortina de fumaça',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[25] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[35] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[45] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Seadra":
                habilidade[1] = {nome:'Bolhas',tipo:'Água',desc:'Ataque com +1d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[9] = {nome:'Cortina de fumaça',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[28] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[40] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[50] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Goldeen":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[19] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[24] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[30] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[37] = {nome:'Cachoeira',tipo:'Água',desc:'Ataque com +4d6'};
                habilidade[45] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[54] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;
            case "Seaking":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[19] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[27] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[33] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[40] = {nome:'Cachoeira',tipo:'Água',desc:'Ataque com +4d6'};
                habilidade[48] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[59] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;
            case "Staryu":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[14] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[21] = {nome:'Recuperar-se',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
                habilidade[28] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[35] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[42] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[49] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Starmie":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[14] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[21] = {nome:'Recuperar-se',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
                habilidade[30] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[38] = {nome:'Minimizar',tipo:'Normal',desc:'Oponentes te atacam com 1d6 a menos até o fim do combate'};
                habilidade[46] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[52] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Mr. Mime":
                habilidade[1] = {nome:'Barreira',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                habilidade[15] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[23] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[31] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[39] = {nome:'Meditar',tipo:'Psíquico',desc:'Até o fim do combate os seus ataques bem sucedidos causam 1 de dano a mais'};
                habilidade[47] = {nome:'Substituto',tipo:'Normal',desc:'Você não recebe nenhum dano no próximo turno'};
                return habilidade[nivel];
                break;
            case "Scyther":
                habilidade[1] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[17] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[25] = {nome:'Duplicar-se',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[29] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[34] = {nome:'Dança de Espadas',tipo:'Normal',desc:'Até o fim do combate seus ataques bem sucedidos causam 2 de dano a mais'};
                habilidade[42] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[50] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +3d6'};
                return habilidade[nivel];
                break;
            case "Jynx":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[9] = {nome:'Beijo Apaixonado',tipo:'Normal',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Lamber',tipo:'Fantasma',desc:'Ataque com +1d6. Se causar 3+ de dano paralisa o oponente'};
                habilidade[23] = {nome:'Tapa Duplo',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[31] = {nome:'Soco de Gelo',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 4+ de dano congela o oponente'};
                habilidade[39] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[47] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Jynx fica confuso'};
                habilidade[58] = {nome:'Nevasca',tipo:'Gelo',desc:'Ataque com +6d6. Se causar 4+ de dano congela o oponente'};
                return habilidade[nivel];
                break;
            case "Electabuzz":
                habilidade[1] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[18] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[27] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 2 de dano a mais no oponente atual'};
                habilidade[36] = {nome:'Soco do Trovão',tipo:'Elétrico',desc:'Ataque com +3d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[45] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                habilidade[54] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 4+ de dano paralisa o oponente'};
                return habilidade[nivel];
                break;
            case "Magmar":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[18] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[27] = {nome:'Soco de Fogo',tipo:'Fogo',desc:'Ataque com +3d6. Se causar 4+ de dano incendeia o oponente'};
                habilidade[36] = {nome:'Cortina de fumaça',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[45] = {nome:'Poluição',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[54] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causar 4+ de dano'};
                return habilidade[nivel];
                break;
            case "Pinsir":
                habilidade[1] = {nome:'Agarrar',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[9] = {nome:'Prender',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[17] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a metade do total de PVs do oponente, arredondado para baixo'};
                habilidade[28] = {nome:'Guilhotina',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
                habilidade[36] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[43] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[49] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                habilidade[54] = {nome:'Dança de Espadas',tipo:'Normal',desc:'Até o fim do combate seus ataques bem sucedidos causam 2 de dano a mais'};
                return habilidade[nivel];
                break;
            case "Tauros":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[11] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[22] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[33] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[44] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[51] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Tauros perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Magikarp":
                habilidade[1] = {nome:'Borrifar',tipo:'Normal',desc:'Não faz nada e impede Magikarp de realizar um ataque comum'};
                habilidade[15] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                return habilidade[nivel];
                break;
            case "Gyarados":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[21] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[25] = {nome:'Fúria do Dragão',tipo:'Dragão',desc:'Sempre causa 4 de dano, não precisa rolar dados'};
                habilidade[32] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[41] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                habilidade[52] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
                return habilidade[nivel];
                break;
            case "Lapras":
                habilidade[1] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[8] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[16] = {nome:'Cantar',tipo:'Normal',desc:'Adormece o oponente com sucesso a 4-6 em 1d6'};
                habilidade[20] = {nome:'Névoa',tipo:'Gelo',desc:'Previne o seu pokémon de receber penalidades'};
                habilidade[25] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[31] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[38] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
                habilidade[46] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Ditto":
                habilidade[1] = {nome:'Transformar',tipo:'Normal',desc:'Copia o tipo e a habilidade do oponente'};
                return habilidade[nivel];
                break;
            case "Eevee":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[16] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[23] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[30] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[36] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[42] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Eevee perde 1 PV'};
                return habilidade[nivel];
                break;
            case "Vaporeon":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[16] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[23] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[30] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[35] = {nome:'Raio Aurora',tipo:'Gelo',desc:'Ataque com +3d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                habilidade[40] = {nome:'Neblina',tipo:'Gelo',desc:'Remove as tuas condições e as do oponente. Remove qualquer bônus do oponente'};
                habilidade[44] = {nome:'Névoa',tipo:'Gelo',desc:'Previne o seu pokémon de receber penalidades'};
                habilidade[48] = {nome:'Armadura Ácida',tipo:'Venenoso',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                habilidade[52] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Jolteon":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[16] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[23] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[30] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[36] = {nome:'Ferroada',tipo:'Inseto',desc:'Ataque com +1d6 dados'};
                habilidade[42] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[47] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[52] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 4+ de dano paralisa o oponente'};
                return habilidade[nivel];
                break;
            case "Flareon":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[8] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[16] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causar 4+ de dano'};
                habilidade[23] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[30] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[36] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                habilidade[42] = {nome:'Poluição',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[47] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[52] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causar 4+ de dano'};
                return habilidade[nivel];
                break;
            case "Porygon":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Afiar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente '};
                habilidade[15] = {nome:'Conversão',tipo:'Normal',desc:'Copia o tipo do pokémon oponente'};
                habilidade[23] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[28] = {nome:'Recuperar-se',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
                habilidade[35] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[42] = {nome:'Ataque Triplo',tipo:'Normal',desc:'Ataque com +4d6'};
                return habilidade[nivel];
                break;
            case "Omanyte":
                habilidade[1] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[11] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[23] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[34] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[43] = {nome:'Canhão de Espinhos',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[49] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Omastar":
                habilidade[1] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
                habilidade[11] = {nome:'Recuar',tipo:'Água',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[23] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[36] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[47] = {nome:'Canhão de Espinhos',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +1)'};
                habilidade[53] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Kabuto":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[11] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[23] = {nome:'Absorver',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[34] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[43] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[49] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Kabutops":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[11] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[23] = {nome:'Absorver',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[36] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[47] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[53] = {nome:'Hidrante',tipo:'Água',desc:'Ataque com +6d6'};
                return habilidade[nivel];
                break;
            case "Aerodactyl":
                habilidade[1] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +3d6'};
                habilidade[14] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[25] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[38] = {nome:'Mordida',tipo:'Noturno',desc:'Ataque com +3d6. Se causar 4+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[45] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, Aerodactyl perde 1 PV'};
                habilidade[54] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
                return habilidade[nivel];
                break;
            case "Snorlax":
                habilidade[1] = {nome:'Talhar',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[14] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                habilidade[28] = {nome:'Dormir',tipo:'Psíquico',desc:'Você adormece, recupera todos os PVs e se livra de todas as outras condições. No segundo turno após o uso desta habilidade você acorda no início do turno'};
                habilidade[35] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
                habilidade[41] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[48] = {nome:'Gume-Duplo',tipo:'Normal',desc:'Ataque com +6d6. Para cada 3 de dano inflingido, Snorlax perde 1 PV'};
                habilidade[56] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
                return habilidade[nivel];
                break;
            case "Articuno":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[15] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
                habilidade[30] = {nome:'Nevasca',tipo:'Gelo',desc:'Ataque com +6d6. Se causar 4+ de dano congela o oponente'};
                habilidade[45] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[60] = {nome:'Névoa',tipo:'Gelo',desc:'Previne o seu pokémon de receber penalidades'};
                return habilidade[nivel];
                break;
            case "Zapdos":
                habilidade[1] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[15] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[30] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 4+ de dano paralisa o oponente'};
                habilidade[45] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[60] = {nome:'Tela de Luz',tipo:'Psíquico',desc:'Até o fim do combate recebe +2d6 de ataque, não cumulativo'};
                return habilidade[nivel];
                break;
            case "Moltres":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[15] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Ataque normalmente. Prende o oponente por X turnos, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                habilidade[30] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[45] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[60] = {nome:'Ataque Celeste',tipo:'Voador',desc:'No seu próximo turno ataque com +7d6'};
                return habilidade[nivel];
                break;
            case "Dratini":
                habilidade[1] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[10] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[20] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[30] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[40] = {nome:'Fúria do Dragão',tipo:'Dragão',desc:'Sempre causa 4 de dano, não precisa rolar dados'};
                habilidade[50] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
                return habilidade[nivel];
                break;
            case "Dragonair":
                habilidade[1] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[10] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[20] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[35] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[45] = {nome:'Fúria do Dragão',tipo:'Dragão',desc:'Sempre causa 4 de dano, não precisa rolar dados'};
                habilidade[55] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
                return habilidade[nivel];
                break;
            case "Dragonite":
                habilidade[1] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6. Durante 1d6 turnos não é possível escolher outra ação'};
                habilidade[15] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques bem sucedidos causam 1 de dano a mais no oponente atual'};
                habilidade[10] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[20] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[35] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[45] = {nome:'Fúria do Dragão',tipo:'Dragão',desc:'Sempre causa 4 de dano, não precisa rolar dados'};
                habilidade[60] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
                return habilidade[nivel];
                break;
            case "Mewtwo":
                habilidade[1] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[9] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade por 1d6 turnos'};
                habilidade[18] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
                habilidade[27] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                habilidade[36] = {nome:'Barreira',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de ataques normais'};
                habilidade[45] = {nome:'Recuperar-se',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
                habilidade[56] = {nome:'Névoa',tipo:'Gelo',desc:'Previne o seu pokémon de receber penalidades'};
                habilidade[63] = {nome:'Amnésia',tipo:'Psíquico',desc:'Até o fim do combate reduz em 2 todo dano recebido de habilidades'};
                return habilidade[nivel];
                break;
            case "Mew":
                habilidade[1] = {nome:'Soco',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[10] = {nome:'Transformar',tipo:'Normal',desc:'Copia o tipo e a habilidade do oponente'};
                habilidade[20] = {nome:'Mega Soco',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[30] = {nome:'Metrônomo',tipo:'Normal',desc:'Consulte na última página da pokédex'};
                habilidade[40] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;
            } 

    }

    function nivelHabilidade(pokemon, nivel) {

        var habilidades = [];

        switch(pokemon){
            case "Bulbasaur":
                habilidades = [1,3,7,13,20,27,34,41,48];
                break;
            case "Ivysaur":
                habilidades = [1,3,7,13,22,30,38,46,54];
                break;
            case "Venusaur":
                habilidades = [1,3,7,13,22,30,43,55,65];
                break;
            case "Charmander":
                habilidades = [1,3,9,15,22,30,38,46];
                break;
            case "Charmeleon":
                habilidades = [1,3,9,15,24,33,42,56];
                break;
            case "Charizard":
                habilidades = [1,3,9,15,24,36,46,55];
                break;
            case "Squirtle":
                habilidades = [1,3,8,15,22,28,35,42];
                break;
            case "Wartortle":
                habilidades = [1,3,8,15,24,31,39,47];
                break;
            case "Blastoise":
                habilidades = [1,3,8,15,24,31,42,52];
                break;
            case "Caterpie":
                habilidades = [1,5];
                break;
            case "Metapod":
                habilidades = [1,5,7];
                break;
            case "Butterfree":
                habilidades = [1,5,7,10,13,14,15,18,23,28,34];
                break;
            case "Weedle":
                habilidades = [1,5];
                break;
            case "Kakuna":
                habilidades = [1,5,7];
                break;
            case "Beedrill":
                habilidades = [1,5,7,12,16,20,25,30,35];
                break;
            case "Pidgey":
                habilidades = [1,5,12,19,28,36,44];
                break;
            case "Pidgeotto":
                habilidades = [1,5,12,21,31,40,49];
                break;
            case "Pidgeot":
                habilidades = [1,5,12,21,31,44,54];
                break;
            case "Rattata":
                habilidades = [1,3,7,14,23,34];
                break;
            case "Raticate":
                habilidades = [1,3,7,14,27,41];
                break;
            case "Spearow":
                habilidades = [1,5,9,15,22,29,36];
                break;
            case "Fearow":
                habilidades = [1,5,9,15,25,34,43];
                break;
            case "Ekans":
                habilidades = [1,5,10,17,24,31,38];
                break;
            case "Arbok":
                habilidades = [1,5,10,17,27,36,47];
                break;
            case "Pikachu":
                habilidades = [1,5,9,16,26,33,43];
                break;
            case "Raichu":
                habilidades = [1,5,9,20,31,37,47];
                break;
            case "Sandshrew":
                habilidades = [1,10,17,24,31,38];
                break;
            case "Sandslash":
                habilidades = [1,10,17,27,36,47];
                break;
            case "Nidoran♀":
                habilidades = [1,5,8,12,17,23,30,38];
                break;
            case "Nidorina":
                habilidades = [1,5,8,12,19,27,36,46];
                break;
            case "Nidoqueen":
                habilidades = [1,5,8,12,23,27,31,40,50];
                break;
            case "Nidoran♂":
                habilidades = [1,5,8,12,17,23,30,38];
                break;
            case "Nidorino":
                habilidades = [1,5,8,12,19,27,36,46];
                break;
            case "Nidoking":
                habilidades = [1,5,8,12,23,27,31,40,50];
                break;
            case "Clefairy":
                habilidades = [1,5,13,18,24,31,39,48];
                break;
            case "Clefable":
                habilidades = [1,5,13,22,28,35,43,52];
                break;
            case "Vulpix":
                habilidades = [1,7,16,21,28,35,42];
                break;
            case "Ninetales":
                habilidades = [1,7,16,25,32,39,46];
                break;
            case "Jigglypuff":
                habilidades = [1,9,14,19,24,29,34,39];
                break;
            case "Wigglytuff":
                habilidades = [1,9,14,24,29,34,39,44];
                break;
            case "Zubat":
                habilidades = [1,10,15,21,28,36];
                break;
            case "Golbat":
                habilidades = [1,5,10,15,21,32,43];
                break;
            case "Oddish":
                habilidades = [1,7,12,19,24,36,46];
                break;
            case "Gloom":
                habilidades = [1,7,12,19,28,38,52];
                break;
            case "Vileplume":
                habilidades = [1,7,12,23,32,42,56];
                break;
            case "Paras":
                habilidades = [1,7,18,27,34,41];
                break;
            case "Parasect":
                habilidades = [1,7,18,30,39,48];
                break;
            case "Venonat":
                habilidades = [1,5,11,19,22,27,30,35,38,43];
                break;
            case "Venomoth":
                habilidades = [1,5,11,19,22,27,33,38,43,50];
                break;
            case "Diglett":
                habilidades = [1,7,15,24,31,40];
                break;
            case "Dugtrio":
                habilidades = [1,7,15,24,35,47];
                break;
            case "Meowth":
                habilidades = [1,5,12,17,24,33,44];
                break;
            case "Persian":
                habilidades = [1,5,12,17,24,37,51];
                break;
            case "Psyduck":
                habilidades = [1,7,15,26,33,42];
                break;
            case "Golduck":
                habilidades = [1,7,15,26,38,49];
                break;
            case "Mankey":
                habilidades = [1,5,9,15,21,27,33,39,45];
                break;
            case "Primeape":
                habilidades = [1,5,9,15,21,27,37,45,49];
                break;
            case "Growlithe":
                habilidades = [1,7,18,23,30,39,50];
                break;
            case "Arcanine":
                habilidades = [1,7,18,27,35,42,55];
                break;
            case "Poliwag":
                habilidades = [1,7,19,25,31,38,45];
                break;
            case "Poliwhirl":
                habilidades = [1,7,19,26,33,41,49];
                break;
            case "Poliwrath":
                habilidades = [1,7,19,26,33,45,51];
                break;
            case "Abra":
                habilidades = [1];
                break;
            case "Kadabra":
                habilidades = [1,7,16,20,27,31,38,42];
                break;
            case "Alakazam":
                habilidades = [1,7,16,24,31,35,42,46];
                break;
            case "Machop":
                habilidades = [1,7,15,21,27,35];
                break;
            case "Machoke":
                habilidades = [1,7,15,25,31,39];
                break;
            case "Machamp":
                habilidades = [1,7,15,29,35,43];
                break;
            case "Bellsprout":
                habilidades = [1,7,13,15,18,21,26,33,42];
                break;
            case "Weepinbell":
                habilidades = [1,7,13,15,18,23,29,38,49];
                break;
            case "Victreebel":
                habilidades = [1,7,13,15,22,27,33,42,53];
                break;
            case "Tentacool":
                habilidades = [1,7,13,18,22,27,33,40,48];
                break;
            case "Tentacruel":
                habilidades = [1,7,13,18,22,27,35,43,50];
                break;
            case "Geodude":
                habilidades = [1,7,15,21,27,32,36];
                break;
            case "Graveler":
                habilidades = [1,7,19,25,31,36,40];
                break;
            case "Golem":
                habilidades = [1,7,19,29,35,40,44];
                break;
            case "Ponyta":
                habilidades = [1,7,14,21,29,35,45];
                break;
            case "Rapidash":
                habilidades = [1,7,14,21,35,40,45];
                break;
            case "Slowpoke":
                habilidades = [1,9,18,27,33,40,48];
                break;
            case "Slowbro":
                habilidades = [1,9,18,27,37,44,55];
                break;
            case "Magnemite":
                habilidades = [1,11,19,29,35,41,47];
                break;
            case "Magneton":
                habilidades = [1,11,19,29,38,46,54];
                break;
            case "Farfetch`d":
                habilidades = [1,4,7,15,23,31,39];
                break;
            case "Doduo":
                habilidades = [1,9,18,27,36,40,44];
                break;
            case "Dodrio":
                habilidades = [1,9,18,27,39,45,51];
                break;
            case "Seel":
                habilidades = [1,10,20,30,40,50];
                break;
            case "Dewgong":
                habilidades = [1,10,20,35,45,55];
                break;
            case "Grimer":
                habilidades = [1,9,18,25,31,38,49,55];
                break;
            case "Muk":
                habilidades = [1,9,18,25,37,45,53,60];
                break;
            case "Shellder":
                habilidades = [1,9,18,23,30,37,45];
                break;
            case "Cloyster":
                habilidades = [1,9,18,23,34,40,49];
                break;
            case "Gastly":
                habilidades = [1,5,11,17,25];
                break;
            case "Haunter":
                habilidades = [1,5,11,21,29];
                break;
            case "Gengar":
                habilidades = [1,5,11,27,35];
                break;
            case "Onix":
                habilidades = [1,7,15,19,25,33,43];
                break;
            case "Drowzee":
                habilidades = [1,7,12,17,24,29,32,37];
                break;
            case "Hypno":
                habilidades = [1,7,12,17,24,33,37,43];
                break;
            case "Krabby":
                habilidades = [1,9,17,25,30,35,40];
                break;
            case "Kingler":
                habilidades = [1,9,17,25,34,42,49];
                break;
            case "Voltorb":
                habilidades = [1,9,17,22,29,36,43];
                break;
            case "Electrode":
                habilidades = [1,9,17,22,29,40,50];
                break;
            case "Exeggcute":
                habilidades = [1,7,12,18,25,32,41,48];
                break;
            case "Exeggutor":
                habilidades = [1,7,12,18,25,35,43,50];
                break;
            case "Cubone":
                habilidades = [1,7,13,18,25,31,38,43,46];
                break;
            case "Marowak":
                habilidades = [1,7,13,18,25,33,41,48,55];
                break;
            case "Hitmonlee":
                habilidades = [1,8,16,24,32,40,48];
                break;
            case "Hitmonchan":
                habilidades = [1,8,16,24,32,40,48];
                break;
            case "Lickitung":
                habilidades = [1,5,9,15,23,31,39];
                break;
            case "Koffing":
                habilidades = [1,7,15,27,32,39,45];
                break;
            case "Weezing":
                habilidades = [1,7,15,29,35,43,50];
                break;
            case "Rhyhorn":
                habilidades = [1,10,20,25,30,35,40];
                break;
            case "Rhydon":
                habilidades = [1,10,20,25,30,40,45];
                break;
            case "Chansey":
                habilidades = [1,6,12,24,30,38,44,48,54];
                break;
            case "Tangela":
                habilidades = [1,3,7,13,20,27,34,41,48];
                break;
            case "Kangaskhan":
                habilidades = [1,9,16,26,31,39,46];
                break;
            case "Horsea":
                habilidades = [1,9,15,25,35,45];
                break;
            case "Seadra":
                habilidades = [1,9,15,28,40,50];
                break;
            case "Goldeen":
                habilidades = [1,9,19,24,30,37,45,54];
                break;
            case "Seaking":
                habilidades = [1,9,19,27,33,40,48,59];
                break;
            case "Staryu":
                habilidades = [1,7,14,21,28,35,42,49];
                break;
            case "Starmie":
                habilidades = [1,7,14,21,30,38,46,52];
                break;
            case "Mr. Mime":
                habilidades = [1,15,23,31,39,47];
                break;
            case "Scyther":
                habilidades = [1,9,17,25,29,34,42,50];
                break;
            case "Jynx":
                habilidades = [1,9,18,23,31,39,47,58];
                break;
            case "Electabuzz":
                habilidades = [1,9,18,27,36,45,54];
                break;
            case "Magmar":
                habilidades = [1,9,18,27,36,45,54];
                break;
            case "Pinsir":
                habilidades = [1,9,17,28,36,43,49,54];
                break;
            case "Tauros":
                habilidades = [1,11,22,33,44,51];
                break;
            case "Magikarp":
                habilidades = [1,15];
                break;
            case "Gyarados":
                habilidades = [1,21,25,32,41,52];
                break;
            case "Lapras":
                habilidades = [1,8,16,20,25,31,38,46];
                break;
            case "Ditto":
                habilidades = [1];
                break;
            case "Eevee":
                habilidades = [1,5,8,16,23,30,36,42];
                break;
            case "Vaporeon":
                habilidades = [1,5,8,16,23,30,35,40,44,48,52];
                break;
            case "Jolteon":
                habilidades = [1,5,8,16,23,30,36,42,47,52];
                break;
            case "Flareon":
                habilidades = [1,5,8,16,23,30,36,42,47,52];
                break;
            case "Porygon":
                habilidades = [1,7,15,23,28,35,42];
                break;
            case "Omanyte":
                habilidades = [1,11,23,34,43,49];
                break;
            case "Omastar":
                habilidades = [1,11,23,36,47,53];
                break;
            case "Kabuto":
                habilidades = [1,11,23,34,43,49];
                break;
            case "Kabutops":
                habilidades = [1,11,23,36,47,53];
                break;
            case "Aerodactyl":
                habilidades = [1,14,25,38,45,54];
                break;
            case "Snorlax":
                habilidades = [1,14,28,35,41,48,56];
                break;
            case "Articuno":
                habilidades = [1,15,30,45,60];
                break;
            case "Zapdos":
                habilidades = [1,15,30,45,60];
                break;
            case "Moltres":
                habilidades = [1,15,30,45,60];
                break;
            case "Dratini":
                habilidades = [1,5,10,20,30,40,50];
                break;
            case "Dragonair":
                habilidades = [1,5,10,20,35,45,55];
                break;
            case "Dragonite":
                habilidades = [1,5,10,20,35,45,60];
                break;
            case "Mewtwo":
                habilidades = [1,9,18,27,36,45,56,63];
                break;
            case "Mew":
                habilidades = [1,10,20,30,40];
                break;
            }

        for(i=habilidades.length;i>=0;i--){
            if(habilidades[i] <= nivel)
                return habilidades[i];
        }

    }

    function encontro(terreno) {

        switch(terreno){
            case 'planicie':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival',par:'Você encontra o seu rival e ele não quer muita conversa, isso significa somente uma coisa: batalha!'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você recebe um e-mail, é a sua mãe que lhe enviou 50 moedas!'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você resolver cortar caminho e precisa pular uma cerca para isso. Teste Físico. Se falhar, sem perceber um de seus itens ficou preso na cerca e você o perdeu. Sorteie aleatoriamente qual.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'Um jovem treinador está emburrado por ter perdido muitos duelos. Teste Social para acalmá-lo. Se obter sucesso ele te dá um Item Comum.'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você encontra um pokémon que parece estar muito fraco, ele possui 1d6 níveis a menos.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'Você avista a Equipe Rocket vindo ao longe, em sua direção. Teste Mental para se esconder em um bom lugar. Se falhar, vocês devem batalhar!'},
                ];
                break;
            case 'relva':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival',par:'Você encontra o seu rival batalhando com um pokémon selvagem. Ao te avistar, o pokémon foge e o rival coloca a culpa em você! Faça um teste de Social, se falhar, vocês devem batalhar.'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'A treinadora se sente muito intimidada com a sua presença ali enquanto ela procurava por pokémons selvagens. Caso você queira, não precisa duelar com ela!'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você vê alguma coisa brilhando entre os arbustos. Teste Físico. Se obter sucesso você puxa uma grama e encontra um Item Comum.'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'A relva aqui parece mais densa e difícil de prosseguir. Um de seus pokémons, que estava andando ao seu lado, recebe 1 de dano.'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'O treinador parece muito irritado por algum motivo. Teste Mental. Se obter sucesso você consegue deixá-lo mais tranquilo, ele te promete um Item Comum extra caso você vença-o!'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'A Equipe Rocket está sugando diversos pokémons selvagens com um imenso aspirador. Impeça-os vencendo uma batalha contra eles!'},
                ];
                break;
            case 'colina':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival',par:'Você encontra o seu rival e ele te desafia imediatamente para uma batalha!'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'Você encontra o Mestre Tutor! Ele poderá ensinar a um de seus pokémons uma habilidade aleatória. Sorteia a habilidade na tabela de TMs. Caso você não queira, o Mestre Tutor vai embora.'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'O pokémon parece estar muito raivoso. Teste Mental. Se obter sucesso você descobre que ele foi envenenado, se ajudá-lo, pode tentar capturá-lo sem um duelo.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você encontra um pokémon mais forte do que o normal. Acrescente 1d6 níveis a ele.'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'O treinador parece estar perdido entre os morros. Teste Social. Se obter sucesso você o ajuda a encontrar o caminho certo e ele te dá um Item Raro, se falhar, vocês devem duelar!'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'A Equipe Rocket te avista entre as colinas e corre atrás de você. Teste Físico para superá-los na corrida. Se falhar, vocês devem batalhar.'},
                ];
                break;
            case 'agua':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival',par:'Você encontra o seu rival surfando em um pokémon, ele se desequilibra e cai na água. Teste Físico para ajudá-lo. Se falhar, ele coloca a culpa em você e te desafia para um duelo.'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'A treinadora pede a sua ajuda para capturar um pokémon selvagem. Teste Social. Se falhar, ela utilizará o pokémon extra contra você, além dos pokémons que ela já possui. Se obter sucesso e vencer o duelo contra ela, ganhará o pokémon.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você encontra uma bóia perdida na água, amarrada a ela está um Item Comum.'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'O pokémon que você encontra parece estar cansado, ele está com a metade dos Pontos de Vida.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'O Treinador não quer muito papo e quer batalha! Teste Mental. Se obter sucesso você consegue persuadi-lo do contrário, se falhar, vocês deverão duelar e você não ganhará recompensa.'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'A Equipe Rocket passa ao seu lado em um submarino, eles não percebem a sua presença.'},
                ];
                break;
            case 'floresta':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival',par:'Você encontra o seu rival batalhando com um outro treinador, nenhum deles dá atenção à você.'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Aqui tem uma árvore muito alta. Teste Físico. Caso obtenha sucesso, você consegue visualizar o tipo dos três hexágonos desconhecidos mais próximos de onde você está.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Faça um teste de Mental. Se obtiver sucesso, você percebe um Item Comum perdido entre uns arbustos.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Você encontra uma mochila perdida, dentro dela tem um Item Comum!'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'Ao avistar o pokémon selvagem, surge por detrás de uma árvore um outro treinador que também avistou o pokémon. Faça um teste de Social. Se obtiver sucesso, o treinador vai embora e você pode tentar capturar o pokémon, se falhar, você deve duelar com o treinador.'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'A Equipe Rocket surge detrás de uma árvore e te desafia para um duelo.'},
                ];
                break;
            case 'montanha':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival',par:'O seu rival parece estar perdido. Teste Mental para ajudá-lo a encontrar o caminho. Se falhar, ele fica bravo com você e te desafia para um duelo.'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'A treinadora acabou de sair de um duelo, ela possui um pokémon a menos.'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'Algumas rochas estão no seu caminho. Teste Físico. Se obter sucesso, você encontra um Item Raro embaixo das pedras!'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'O pokémon que você encontrou possui um brilho estranho, sua cor é um pouco diferenciada dos demais, você acha estranho pra segue mesmo assim para o duelo!'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'Você encontra o Mestre Tutor! Ele poderá ensinar a um de seus pokémons uma habilidade aleatória. Sorteia a habilidade na tabela de TMs. Caso você não queira, o Mestre Tutor vai embora.'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'A Equipe Rocket está importunando um outro treinador. Teste Social, se obter sucesso o treinador te ajuda a batalhar contra a Eq. Rocket em um duelo de duplas. Se falhar, você deve batalhar sozinho.'},
                ];
                break;
            case 'especial':
                return [
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora',par:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem',par:'nada'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket',par:'nada'},
                ];
                break;
        }

    }

    function pokemon(terreno) {
        switch(terreno){
            case 'planicie':
                return [
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                ];
                break;
            case 'relva':
                return [
                    {nome:'Ditto',tipo:'Normal',fraqueza:'Lutador',num:'132',evo:'0'},
                    {nome:'Pidgeotto',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'017',evo:'1'},
                    {nome:'Pidgeotto',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'017',evo:'1'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052',evo:'0'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052',evo:'0'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Eevee',tipo:'Normal',fraqueza:'Lutador',num:'133',evo:'0'},
                    {nome:'Eevee',tipo:'Normal',fraqueza:'Lutador',num:'133',evo:'0'},
                    {nome:'Snorlax',tipo:'Normal',fraqueza:'Lutador',num:'143',evo:'0'},
                ];
                break;
            case 'floresta':
                return [
                    {nome:'Dodrio',tipo:'Normal Voador',fraqueza:'Elétrico, Gelo e Pedra',num:'085',evo:'1'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Farfetch`d',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'083',evo:'0'},
                    {nome:'Farfetch`d',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'083',evo:'0'},
                    {nome:'Pidgeotto',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'017',evo:'1'},
                ];
                break;
            case 'mata':
                return [
                    {nome:'Bulbasaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'001',evo:'0'},
                    {nome:'Beedrill',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'015',evo:'2'},
                    {nome:'Beedrill',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'015',evo:'2'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064',evo:'1'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064',evo:'1'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064',evo:'1'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Butterfree',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'012',evo:'2'},
                    {nome:'Butterfree',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'012',evo:'2'},
                    {nome:'Vileplume',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'045',evo:'2'},
                ];
                break;
            case 'colina':
                return [
                    {nome:'Jigglypuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'039',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096',evo:'0'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096',evo:'0'},
                    {nome:'Clefairy',tipo:'Fada',fraqueza:'Metálico e Venenoso',num:'035',evo:'0'},
                ];
                break;
            case 'caverna':
                return [
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Mr. Mime',tipo:'Fada Psíquico',fraqueza:'Fantasma, Metálico e Venenoso',num:'122',evo:'0'},
                    {nome:'Mr. Mime',tipo:'Fada Psíquico',fraqueza:'Fantasma, Metálico e Venenoso',num:'122',evo:'0'},
                    {nome:'Mr. Mime',tipo:'Fada Psíquico',fraqueza:'Fantasma, Metálico e Venenoso',num:'122',evo:'0'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030',evo:'1'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030',evo:'1'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030',evo:'1'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030',evo:'1'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050',evo:'0'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050',evo:'0'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050',evo:'0'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050',evo:'0'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050',evo:'0'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033',evo:'1'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033',evo:'1'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033',evo:'1'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Golbat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'042',evo:'1'},
                    {nome:'Golbat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'042',evo:'1'},
                    {nome:'Dugtrio',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'051',evo:'1'},
                ];
                break;
            case 'montanha':
                return [
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052',evo:'0'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052',evo:'0'},
                    {nome:'Lickitung',tipo:'Normal',fraqueza:'Lutador',num:'108',evo:'0'},
                    {nome:'Lickitung',tipo:'Normal',fraqueza:'Lutador',num:'108',evo:'0'},
                    {nome:'Lickitung',tipo:'Normal',fraqueza:'Lutador',num:'108',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Pidgeotto',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'017',evo:'1'},
                ];
                break;
            case 'plato':
                return [
                    {nome:'Omanyte',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'138',evo:'0'},
                    {nome:'Persian',tipo:'Normal',fraqueza:'Lutador',num:'054',evo:'1'},
                    {nome:'Persian',tipo:'Normal',fraqueza:'Lutador',num:'054',evo:'1'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028',evo:'1'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028',evo:'1'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028',evo:'1'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028',evo:'1'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028',evo:'1'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024',evo:'1'},
                    {nome:'Porygon',tipo:'Normal',fraqueza:'Lutador',num:'137',evo:'0'},
                    {nome:'Porygon',tipo:'Normal',fraqueza:'Lutador',num:'137',evo:'0'},
                    {nome:'Porygon',tipo:'Normal',fraqueza:'Lutador',num:'137',evo:'0'},
                    {nome:'Primeape',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'057',evo:'1'},
                    {nome:'Primeape',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'057',evo:'1'},
                    {nome:'Kabuto',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'140',evo:'0'},
                ];
                break;
            case 'agua':
                return [
                    {nome:'Seadra',tipo:'Água',fraqueza:'Grama e Elétrico',num:'117',evo:'1'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Tentacool',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'072',evo:'0'},
                    {nome:'Tentacool',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'072',evo:'0'},
                    {nome:'Tentacool',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'072',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060',evo:'0'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060',evo:'0'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060',evo:'0'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060',evo:'0'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118',evo:'0'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118',evo:'0'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118',evo:'0'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118',evo:'0'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Horsea',tipo:'Água',fraqueza:'Grama e Elétrico',num:'116',evo:'0'},
                    {nome:'Horsea',tipo:'Água',fraqueza:'Grama e Elétrico',num:'116',evo:'0'},
                    {nome:'Horsea',tipo:'Água',fraqueza:'Grama e Elétrico',num:'116',evo:'0'},
                    {nome:'Krabby',tipo:'Água',fraqueza:'Grama e Elétrico',num:'098',evo:'0'},
                    {nome:'Krabby',tipo:'Água',fraqueza:'Grama e Elétrico',num:'098',evo:'0'},
                    {nome:'Slowbro',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'080',evo:'1'},
                ];
                break;
            case 'ilha':
                return [
                    {nome:'Squirtle',tipo:'Água',fraqueza:'Grama e Elétrico',num:'007',evo:'0'},
                    {nome:'Gyarados',tipo:'Água Voador',fraqueza:'Elétrico e Pedra',num:'130',evo:'1'},
                    {nome:'Gyarados',tipo:'Água Voador',fraqueza:'Elétrico e Pedra',num:'130',evo:'1'},
                    {nome:'Poliwhirl',tipo:'Água',fraqueza:'Grama e Elétrico',num:'061',evo:'1'},
                    {nome:'Poliwhirl',tipo:'Água',fraqueza:'Grama e Elétrico',num:'061',evo:'1'},
                    {nome:'Poliwhirl',tipo:'Água',fraqueza:'Grama e Elétrico',num:'061',evo:'1'},
                    {nome:'Kingler',tipo:'Água',fraqueza:'Grama e Elétrico',num:'099',evo:'1'},
                    {nome:'Kingler',tipo:'Água',fraqueza:'Grama e Elétrico',num:'099',evo:'1'},
                    {nome:'Kingler',tipo:'Água',fraqueza:'Grama e Elétrico',num:'099',evo:'1'},
                    {nome:'Kingler',tipo:'Água',fraqueza:'Grama e Elétrico',num:'099',evo:'1'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129',evo:'0'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090',evo:'0'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090',evo:'0'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090',evo:'0'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090',evo:'0'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090',evo:'0'},
                    {nome:'Seaking',tipo:'Água',fraqueza:'Grama e Elétrico',num:'119',evo:'1'},
                    {nome:'Seaking',tipo:'Água',fraqueza:'Grama e Elétrico',num:'119',evo:'1'},
                    {nome:'Seaking',tipo:'Água',fraqueza:'Grama e Elétrico',num:'119',evo:'1'},
                    {nome:'Seaking',tipo:'Água',fraqueza:'Grama e Elétrico',num:'119',evo:'1'},
                    {nome:'Tentacruel',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'073',evo:'1'},
                    {nome:'Tentacruel',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'073',evo:'1'},
                    {nome:'Tentacruel',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'073',evo:'1'},
                    {nome:'Dratini',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'147',evo:'0'},
                    {nome:'Dratini',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'147',evo:'0'},
                    {nome:'Dragonair',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'148',evo:'1'},
                ];
                break;
            case 'pewter':
                return [
                    {nome:'Wigglytuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'040',evo:'1'},
                    {nome:'Jigglypuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'039',evo:'0'},
                    {nome:'Jigglypuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'039',evo:'0'},
                    {nome:'Golbat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'042',evo:'1'},
                    {nome:'Golbat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'042',evo:'1'},
                    {nome:'Golbat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'042',evo:'1'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046',evo:'1'},
                    {nome:'Clefairy',tipo:'Fada',fraqueza:'Metálico e Venenoso',num:'035',evo:'0'},
                    {nome:'Clefairy',tipo:'Fada',fraqueza:'Metálico e Venenoso',num:'035',evo:'0'},
                    {nome:'Clefable',tipo:'Fada',fraqueza:'Metálico e Venenoso',num:'036',evo:'1'},
                ];
                break;
            case 'cerulean':
                return [
                    {nome:'Jolteon',tipo:'Elétrico',fraqueza:'Terrestre',num:'135',evo:'1'},
                    {nome:'Magneton',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'082',evo:'1'},
                    {nome:'Magneton',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'082',evo:'1'},
                    {nome:'Muk',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'089',evo:'1'},
                    {nome:'Muk',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'089',evo:'1'},
                    {nome:'Muk',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'089',evo:'1'},
                    {nome:'Electabuzz',tipo:'Elétrico',fraqueza:'Terrestre',num:'125',evo:'0'},
                    {nome:'Electabuzz',tipo:'Elétrico',fraqueza:'Terrestre',num:'125',evo:'0'},
                    {nome:'Electabuzz',tipo:'Elétrico',fraqueza:'Terrestre',num:'125',evo:'0'},
                    {nome:'Electabuzz',tipo:'Elétrico',fraqueza:'Terrestre',num:'125',evo:'0'},
                    {nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081',evo:'0'},
                    {nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081',evo:'0'},
                    {nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081',evo:'0'},
                    {nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081',evo:'0'},
                    {nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    {nome:'Electrode',tipo:'Elétrico',fraqueza:'Terrestre',num:'101',evo:'1'},
                    {nome:'Electrode',tipo:'Elétrico',fraqueza:'Terrestre',num:'101',evo:'1'},
                    {nome:'Electrode',tipo:'Elétrico',fraqueza:'Terrestre',num:'101',evo:'1'},
                    {nome:'Raichu',tipo:'Elétrico',fraqueza:'Terrestre',num:'026',evo:'1'},
                    {nome:'Raichu',tipo:'Elétrico',fraqueza:'Terrestre',num:'026',evo:'1'},
                    {nome:'Zapdos',tipo:'Elétrico Voador',fraqueza:'Gelo e Pedra',num:'145',evo:'0'},
                ];
                break;
            case 'vermilion':
                return [
                    {nome:'Lapras',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'131',evo:'0'},
                    {nome:'Vaporeon',tipo:'Água',fraqueza:'Grama e Elétrico',num:'134',evo:'1'},
                    {nome:'Vaporeon',tipo:'Água',fraqueza:'Grama e Elétrico',num:'134',evo:'1'},
                    {nome:'Slowbro',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'080',evo:'1'},
                    {nome:'Slowbro',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'080',evo:'1'},
                    {nome:'Slowbro',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'080',evo:'1'},
                    {nome:'Starmie',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'121',evo:'1'},
                    {nome:'Starmie',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'121',evo:'1'},
                    {nome:'Starmie',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'121',evo:'1'},
                    {nome:'Starmie',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'121',evo:'1'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079',evo:'0'},
                    {nome:'Seel',tipo:'Água',fraqueza:'Grama e Elétrico',num:'086',evo:'0'},
                    {nome:'Seel',tipo:'Água',fraqueza:'Grama e Elétrico',num:'086',evo:'0'},
                    {nome:'Seel',tipo:'Água',fraqueza:'Grama e Elétrico',num:'086',evo:'0'},
                    {nome:'Seel',tipo:'Água',fraqueza:'Grama e Elétrico',num:'086',evo:'0'},
                    {nome:'Seel',tipo:'Água',fraqueza:'Grama e Elétrico',num:'086',evo:'0'},
                    {nome:'Golduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'055',evo:'1'},
                    {nome:'Golduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'055',evo:'1'},
                    {nome:'Golduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'055',evo:'1'},
                    {nome:'Golduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'055',evo:'1'},
                    {nome:'Cloyster',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'091',evo:'1'},
                    {nome:'Cloyster',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'091',evo:'1'},
                    {nome:'Cloyster',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'091',evo:'1'},
                    {nome:'Dewgong',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'087',evo:'1'},
                    {nome:'Dewgong',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'087',evo:'1'},
                    {nome:'Articuno',tipo:'Gelo Voador',fraqueza:'Metálico, Fogo, Elétrico e Pedra',num:'144',evo:'0'},
                ];
                break;
            case 'lavender':
                return [
                    {nome:'Marowak',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'105',evo:'1'},
                    {nome:'Haunter',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'093',evo:'1'},
                    {nome:'Haunter',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'093',evo:'1'},
                    {nome:'Jynx',tipo:'Gelo Psíquico',fraqueza:'Metálico, Fantasma, Fogo, Noturno, Pedra e Inseto',num:'124',evo:'0'},
                    {nome:'Jynx',tipo:'Gelo Psíquico',fraqueza:'Metálico, Fantasma, Fogo, Noturno, Pedra e Inseto',num:'124',evo:'0'},
                    {nome:'Jynx',tipo:'Gelo Psíquico',fraqueza:'Metálico, Fantasma, Fogo, Noturno, Pedra e Inseto',num:'124',evo:'0'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096',evo:'0'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096',evo:'0'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096',evo:'0'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092',evo:'0'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092',evo:'0'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092',evo:'0'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092',evo:'0'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092',evo:'0'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064',evo:'1'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064',evo:'1'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064',evo:'1'},
                    {nome:'Hypno',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'097',evo:'1'},
                    {nome:'Hypno',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'097',evo:'1'},
                    {nome:'Gengar',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'094',evo:'2'},
                ];
                break;
            case 'celadon':
                return [
                    {nome:'Hitmonlee',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'106',evo:'0'},
                    {nome:'Weezing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'110',evo:'1'},
                    {nome:'Weezing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'110',evo:'1'},
                    {nome:'Ditto',tipo:'Normal',fraqueza:'Lutador',num:'132',evo:'0'},
                    {nome:'Ditto',tipo:'Normal',fraqueza:'Lutador',num:'132',evo:'0'},
                    {nome:'Ditto',tipo:'Normal',fraqueza:'Lutador',num:'132',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023',evo:'0'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109',evo:'0'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109',evo:'0'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109',evo:'0'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109',evo:'0'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109',evo:'0'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088',evo:'0'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Muk',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'089',evo:'1'},
                    {nome:'Muk',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'089',evo:'1'},
                    {nome:'Hitmonchan',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'107',evo:'0'},
                ];
                break;
            case 'fuchsia':
                return [
                    {nome:'Pinsir',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'127',evo:'0'},
                    {nome:'Kangaskhan',tipo:'Normal',fraqueza:'Lutador',num:'115',evo:'0'},
                    {nome:'Kangaskhan',tipo:'Normal',fraqueza:'Lutador',num:'115',evo:'0'},
                    {nome:'Chansey',tipo:'Normal',fraqueza:'Lutador',num:'113',evo:'0'},
                    {nome:'Chansey',tipo:'Normal',fraqueza:'Lutador',num:'113',evo:'0'},
                    {nome:'Chansey',tipo:'Normal',fraqueza:'Lutador',num:'113',evo:'0'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111',evo:'0'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047',evo:'1'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047',evo:'1'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047',evo:'1'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047',evo:'1'},
                    {nome:'Venomoth',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'049',evo:'1'},
                    {nome:'Venomoth',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'049',evo:'1'},
                    {nome:'Venomoth',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'049',evo:'1'},
                    {nome:'Tauros',tipo:'Normal',fraqueza:'Lutador',num:'128',evo:'0'},
                    {nome:'Tauros',tipo:'Normal',fraqueza:'Lutador',num:'128',evo:'0'},
                    {nome:'Scyther',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'123',evo:'0'},
                ];
                break;
            case 'cinnabar':
                return [
                    {nome:'Charmander',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'004',evo:'0'},
                    {nome:'Flareon',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'136',evo:'1'},
                    {nome:'Flareon',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'136',evo:'1'},
                    {nome:'Ninetales',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'038',evo:'1'},
                    {nome:'Ninetales',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'038',evo:'1'},
                    {nome:'Ninetales',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'038',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058',evo:'0'},
                    {nome:'Magmar',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'126',evo:'0'},
                    {nome:'Magmar',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'126',evo:'0'},
                    {nome:'Magmar',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'126',evo:'0'},
                    {nome:'Magmar',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'126',evo:'0'},
                    {nome:'Rapidash',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'078',evo:'1'},
                    {nome:'Rapidash',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'078',evo:'1'},
                    {nome:'Rapidash',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'078',evo:'1'},
                    {nome:'Arcanine',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'059',evo:'1'},
                    {nome:'Arcanine',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'059',evo:'1'},
                    {nome:'Moltres',tipo:'Fogo Voador',fraqueza:'Água, Elétrico e Pedra',num:'146',evo:'0'},
                ];
                break;
            case 'planalto':
                return [
                    {nome:'Dragonite',tipo:'Dragão Voador',fraqueza:'Fada, Dragão, Gelo e Pedra',num:'149',evo:'2'},
                    {nome:'Nidoking',tipo:'Venenoso Terrestre',fraqueza:'Água, Psíquico, Gelo e Terrestre',num:'034',evo:'2'},
                    {nome:'Nidoking',tipo:'Venenoso Terrestre',fraqueza:'Água, Psíquico, Gelo e Terrestre',num:'034',evo:'2'},
                    {nome:'Pidgeot',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'018',evo:'2'},
                    {nome:'Pidgeot',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'018',evo:'2'},
                    {nome:'Pidgeot',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'018',evo:'2'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075',evo:'1'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103',evo:'1'},
                    {nome:'Nidoqueen',tipo:'Venenoso Terrestre',fraqueza:'Água, Psíquico, Gelo e Terrestre',num:'031',evo:'2'},
                    {nome:'Nidoqueen',tipo:'Venenoso Terrestre',fraqueza:'Água, Psíquico, Gelo e Terrestre',num:'031',evo:'2'},
                    {nome:'Aerodactyl',tipo:'Pedra Voador',fraqueza:'Metálico, Água, Elétrico, Gelo e Pedra',num:'142',evo:'0'},
                ];
                break;
            case 'epico':
                return [
                    {nome:'Ivysaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'002',evo:'1'},
                    {nome:'Venusaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'003',evo:'2'},
                    {nome:'Charmeleon',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'005',evo:'1'},
                    {nome:'Charizard',tipo:'Fogo Voador',fraqueza:'Água, Elétrico e Pedra',num:'006',evo:'2'},
                    {nome:'Wartortle',tipo:'Água',fraqueza:'Grama e Elétrico',num:'008',evo:'1'},
                    {nome:'Blastoise',tipo:'Água',fraqueza:'Grama e Elétrico',num:'009',evo:'2'},
                    {nome:'Poliwrath',tipo:'Água Lutador',fraqueza:'Fada, Grama, Voador, Psíquico e Elétrico',num:'062',evo:'2'},
                    {nome:'Alakazam',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'065',evo:'2'},
                    {nome:'Machamp',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'068',evo:'2'},
                    {nome:'Victreebel',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'071',evo:'2'},
                    {nome:'Golem',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'076',evo:'2'},
                    {nome:'Rhydon',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'112',evo:'0'},
                    {nome:'Omastar',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'139',evo:'1'},
                    {nome:'Kabutops',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'141',evo:'1'},
                ];
                break;
            case 'lendario':
                return [
                    {nome:'Mew',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'151',evo:'0'},
                    {nome:'Mewtwo',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'150',evo:'0'},
                ];
                break;
        }
    };

    function qttdInsignias(qttd) {

        if (qttd == 0) return random([1,2,3,4,5,6]);
        if (qttd == 1) return random([7,8,9,10,11,12]);
        if (qttd == 2) return random([13,14,15,16,17,18]);
        if (qttd == 3) return random([19,20,21,22,23,24]);
        if (qttd == 4) return random([25,26,27,28,29,30]);
        if (qttd == 5) return random([31,32,33,34,35,36]);
        if (qttd == 6) return random([37,38,39,40,41,42]);
        if (qttd == 7) return random([43,44,45,46,47,48]);
        if (qttd == 8) return random([49,50,51,52,53,54]);

    }

    function itemComum(){
        var uma_moeda = random(['10','20','30','40','50','60']);
        var duas_moedas = random(['20','30','30','40','40','40','50','50','50','50','60','60','60','60','60','70','70','70','70','70','70','80','80','80','80','80','90','90','90','90','100','100','100','110','110','120']);
        return ['Doce Raro','Corda de Fuga','Corda de Fuga','Repelente','Repelente','Repelente',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas','Pokéball','Pokéball','Pokéball','Pokéball','Pokéball',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas','Poção','Poção','Poção','Poção','Poção',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas','Cura Completa','Cura Completa','Cura Completa','Greatball','Greatball','Item raro'];
    }

    function itemRaro(){
        return ['TM','Elemento X ','Elemento X ','Max Poção','Max Poção','Max Poção','Escudo Guardião','Escudo Guardião','Escudo Guardião','Escudo Guardião','Reviver','Reviver','Reviver','Reviver','Reviver','Super Poção','Super Poção','Super Poção','Super Poção','Super Poção','Super Poção','Super Repelente','Super Repelente','Super Repelente','Super Repelente','Super Repelente','Ultraball','Ultraball','Ultraball','Ultraball','Pedra de Evolução','Pedra de Evolução','Pedra de Evolução','Doce Raro','Doce Raro','Pepita'];
    }

    function itemTM(numTM){
        var tm = [];
        tm[1] = {nome:'Mega Soco',tipo:'Normal',desc:'Ataque com +4d6'};
        tm[2] = {nome:'Vento Navalha ',tipo:'Normal',desc:'No próximo turno ataca com +4d6'};
        tm[3] = {nome:'Dança de Espadas',tipo:'Normal',desc:'Até o fim do combate seus ataques bem sucedidos causam 2 de dano a mais'};
        tm[4] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
        tm[5] = {nome:'Mega Chute',tipo:'Normal',desc:'Ataque com +6d6'};
        tm[6] = {nome:'Tóxico',tipo:'',desc:'Envenena o oponente, a cada turno o dano do veneno aumenta em 1. Não afeta pokémons do tipo Venenoso'};
        tm[7] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
        tm[8] = {nome:'Encontrão',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano paralisa o oponente (exceto pokémon do tipo normal)'};
        tm[9] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, você perde 1 PV'};
        tm[10] = {nome:'Gume-Duplo',tipo:'Normal',desc:'Ataque com +6d6. Para cada 3 de dano inflingido, você perde 1 PV'};
        tm[11] = {nome:'Raio de Bolhas',tipo:'Água',desc:'Ataque com +3d6. Se causar 2+ de dano reduz o próximo ataque do oponente em 1d6'};
        tm[12] = {nome:'Arma de Água',tipo:'Água',desc:'Ataque com +2d6'};
        tm[13] = {nome:'Raio de Gelo',tipo:'Gelo',desc:'Ataque com +4d6. Se causar 3+ de dano congela o oponente'};
        tm[14] = {nome:'Nevasca',tipo:'Gelo',desc:'Ataque com +6d6. Se causar 4+ de dano congela o oponente'};
        tm[15] = {nome:'Hiper Raio',tipo:'Normal',desc:'Ataque com +8d6. Não pode realizar nenhuma outra ação no turno seguinte'};
        tm[16] = {nome:'Dia de Pagamento',tipo:'Normal',desc:'Ataque com +2d6. Se vencer o duelo, receba 1d6 moedas para cada vez que usou esta habilidade'};
        tm[17] = {nome:'Submissão',tipo:'Lutador',desc:'Ataque com +4d6. Para cada 3 de dano inflingido, você perde 1 PV'};
        tm[18] = {nome:'Contra-ataque',tipo:'Lutador',desc:'Se o último ataque que você recebeu foi do tipo Normal ou Lutador, cause o dobro deste dano no oponente'};
        tm[19] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a metade do total de PVs do oponente, arredondado para baixo'};
        tm[20] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada acerto consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Você não pode realizar outras ações até que o pokémon vença ou desmaie'};
        tm[21] = {nome:'Mega Dreno',tipo:'Grama',desc:'Ataque com +2d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
        tm[22] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
        tm[23] = {nome:'Fúria do Dragão',tipo:'Dragão',desc:'Sempre causa 4 de dano, não precisa rolar dados'};
        tm[24] = {nome:'Raio do Trovão',tipo:'Elétrico',desc:'Ataque com +4d6. Se causar 4+ de dano paralisa o oponente'};
        tm[25] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 4+ de dano paralisa o oponente'};
        tm[26] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
        tm[27] = {nome:'Fissura',tipo:'Terrestre',desc:'Role um 1d6, um resultado 5 ou 6 desmaia o oponente'};
        tm[28] = {nome:'Escavar',tipo:'Terrestre',desc:'Você fica imune a qualquer tipo de dano no próximo turno, para então atacar com +5d6 no turno subsequente'};
        tm[29] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
        tm[30] = {nome:'Teleporte',tipo:'Psíquico',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
        tm[31] = {nome:'Mímico',tipo:'Normal',desc:'Utiliza a habilidade idêntica a do oponente'};
        tm[32] = {nome:'Duplicar-se',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
        tm[33] = {nome:'Refletir',tipo:'Psíquico',desc:'Até o fim do combate reduz à metade todo dano recebido de ataques comuns (mínimo 1), não cumulativo'};
        tm[34] = {nome:'Provocar',tipo:'Normal',desc:'No próximo turno, causa o dobro do dano recebido neste turno'};
        tm[35] = {nome:'Metrônomo',tipo:'Normal',desc:'Consulte na última página da pokédex'};
        tm[36] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +10d6. Você desmaia após o ataque'};
        tm[37] = {nome:'Ovo Bomba',tipo:'Normal',desc:'Ataque com +5d6'};
        tm[38] = {nome:'Incinerar',tipo:'Fogo',desc:'Ataque com +5d6. Incendeia o oponente se causa 3+ de dano'};
        tm[39] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 3-6'};
        tm[40] = {nome:'Golpe de Casco',tipo:'Normal',desc:'No seu próximo turno ataque com +5d6'};
        tm[41] = {nome:'Cura',tipo:'Normal',desc:'Cura metade do dano já recebido (mínimo 1)'};
        tm[42] = {nome:'Pesadelos',tipo:'Psíquico',desc:'Só funciona em pokémons adormecidos. Ataque com +5d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
        tm[43] = {nome:'Ataque Celeste',tipo:'Voador',desc:'No seu próximo turno ataque com +7d6'};
        tm[44] = {nome:'Dormir',tipo:'Psíquico',desc:'Você adormece, recupera todos os PVs e se livra de todas as outras condições. No segundo turno após o uso desta habilidade você acorda no início do turno'};
        tm[45] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
        tm[46] = {nome:'Onda Psíquica',tipo:'Psíquico',desc:'Role um 1d6, causa dano no oponente igual ao valor do dado'};
        tm[47] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +13d6. Você desmaia após o ataque'};
        tm[48] = {nome:'Desmoronamento',tipo:'Pedra',desc:'Ataque com +4d6'};
        tm[49] = {nome:'Ataque Triplo',tipo:'Normal',desc:'Ataque com +4d6'};
        tm[50] = {nome:'Substituto',tipo:'Normal',desc:'Você não recebe nenhum dano no próximo turno'};
        return tm[numTM];    
    }

    function calculaPoder(pokemon,nivel){

        var atk = 0;
        var pv = 0;

        if(nivel<10){
          atk = 3;
          pv = 3;  
        } else if(nivel<20){
          atk = 4;
          pv = 4;  
        } else if(nivel<30){
          atk = 5;
          pv = 5;  
        } else if(nivel<40){
          atk = 6;
          pv = 6;  
        } else if(nivel<50){
          atk = 7;
          pv = 7;  
        } else if(nivel<60){
          atk = 8;
          pv = 8;  
        } else if(nivel<70){
          atk = 9;
          pv = 9;  
        } else if(nivel<80){
          atk = 10;
          pv = 10;  
        } else if(nivel<90){
          atk = 11;
          pv = 11;  
        } else if(nivel<100){
          atk = 12;
          pv = 12;  
        }

        if(pokemon.evo == '1'){
            atk = atk + 1;
            pv = pv + 2;
        } else if(pokemon.evo == '2'){
            atk = atk + 2;
            pv = pv + 4;
        }

        return {atk:atk,pv:pv};

    }

    som = play('02 Title Screen.mp3');
    som.play();

    function play(file) {
        var sound = new Howl({
            src: ['./mp3/'+file],
            volume: 0.7,
            loop: true,
        });
        return sound;
    }

    $('#btnSom').click(function(){
        if($('#btnSom').val() == 'unmute'){
            $('#btnSom').val('mute');
            $('#btnSom').css('color','red');
        }
        else{
            $('#btnSom').val('unmute');
            $('#btnSom').css('color','teal');
        }
        som.pause();
    });

    $('#btnGerarGinasio').click(function(){

        var imagens = '';
        var pokemons = '';
        var lider = {};
        var ginasio = $('#selectGinasio').val();

        switch(ginasio){
            case "Pewter":

                lider = {
                    imglider: "https://cdn2.bulbagarden.net/upload/a/a6/Lets_Go_Pikachu_Eevee_Brock.png",
                    imginsignia: "https://cdn2.bulbagarden.net/upload/d/dd/Boulder_Badge.png",
                    lider: "Brock",
                    insignia: "Rocha",
                    pokemons: [
                        {nivel:"15",nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                        {nivel:"18",nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095',evo:'0'},
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = lider.pokemons[1];
                nivelPkmn = lider.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafianteLiam = {
                    pokemons: [
                        {nivel:"10",nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074',evo:'0'},
                        {nivel:"11",nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027',evo:'0'},
                    ]
                };

                pkmn = desafianteLiam.pokemons[0];
                nivelPkmn = desafianteLiam.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = desafianteLiam.pokemons[1];
                nivelPkmn = desafianteLiam.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>Treinador Escoteiro Liam:</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes do Líder</h5>'+
                '</div>');

                break;

            case "Cerulean":

                lider = {
                    imglider: "https://cdn2.bulbagarden.net/upload/f/f6/Lets_Go_Pikachu_Eevee_Misty.png",
                    imginsignia: "https://cdn2.bulbagarden.net/upload/9/9c/Cascade_Badge.png",
                    lider: "Misty",
                    insignia: "Cascata",
                    pokemons: [
                        {nivel:"18",nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120',evo:'0'},
                        {nivel:"21",nome:'Starmie',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'121',evo:'1'},
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = lider.pokemons[1];
                nivelPkmn = lider.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                        {nivel:"19",nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118',evo:'0'},
                    ]
                };

                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>Treinadora Fã de piquenique Diana:</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                        {nivel:"16",nome:'Horsea',tipo:'Água',fraqueza:'Grama e Elétrico',num:'116',evo:'0'},
                        {nivel:"16",nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090',evo:'0'},
                    ]
                };

                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = desafiante.pokemons[1];
                nivelPkmn = desafiante.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>Treinador Nadador Luis:</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Vermilion":
            
                lider = {
                    imglider: "https://cdn2.bulbagarden.net/upload/b/bc/Lets_Go_Pikachu_Eevee_Lt_Surge.png",
                    imginsignia: "https://cdn2.bulbagarden.net/upload/a/a6/Thunder_Badge.png",
                    lider: "Lt. Surge",
                    insignia: "Trovão",
                    pokemons: [
                        {nivel:"21",nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                        {nivel:"18",nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                        {nivel:"24",nome:'Raichu',tipo:'Elétrico',fraqueza:'Terrestre',num:'026',evo:'1'},
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = lider.pokemons[1];
                nivelPkmn = lider.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = lider.pokemons[2];
                nivelPkmn = lider.pokemons[2].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');


                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                        {nivel:"23",nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    ]
                };

                nomeDesafiante = 'Treinador Cavalheiro Tucker';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                        {nivel:"22",nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100',evo:'0'},
                        {nivel:"22",nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081',evo:'0'},
                    ]
                };

                nomeDesafiante = 'Treinador Engenheiro Baily';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = desafiante.pokemons[1];
                nivelPkmn = desafiante.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                        {nivel:"21",nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                        {nivel:"26",nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terrestre',num:'025',evo:'0'},
                    ]
                };

                nomeDesafiante = 'Treinador Marinheiro Dwayne';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                pkmn = desafiante.pokemons[1];
                nivelPkmn = desafiante.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';


                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes do Líder</h5>'+
                '</div>');

                break;
            case "Celadon":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Fuschia":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Dojo":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Silph":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Saffron":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Cinnabar":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Viridian":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Lorelei":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Bruno":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Agatha":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Lance":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
            case "Rival":

                lider = {
                    imglider: "",
                    imginsignia: "",
                    lider: "",
                    insignia: "",
                    pokemons: [
                    ]
                };

                pkmn = lider.pokemons[0];
                nivelPkmn = lider.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend(
                    '<center><img style="vertical-align: bottom;" width=60 src='+lider.imginsignia+'> <img height=284 src='+lider.imglider+'></center>'+
                    '<br><strong>Líder: </strong>'+lider.lider+
                    '<br><strong>Insígnia: </strong>'+lider.insignia+
                    '<center>'+imagens+'</center>'+pokemons+
                '</div><br>');

                imagens = '';
                pokemons = '';

                desafiante = {
                    pokemons: [
                    ]
                };

                nomeDesafiante = '';
                pkmn = desafiante.pokemons[0];
                nivelPkmn = desafiante.pokemons[0].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>'+nomeDesafiante+':</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os treinadores antes da Líder</h5>'+
                '</div>');

                break;
        }

        activateStressBox();

        $('#musicaTocando').val('');
        som.unload();
        som = play('29 Battle! (Gym Leader Battle).mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnGerarTreinador').click(function(){

        var qtdd = random([1,1,2,3,4,5]);
        var imagens = '';
        var pokemons = '';
        var arrayPokemons = [];
        var pkmn = '';
        var nivelPkmn = '';
        var poderPkmn = '';
        var nivel = '';
        var habil = '';

        var insignias = $('#selectInsignias').val();
        var terreno = $('#selectTerreno').val();

        pkmn = random(pokemon(terreno));
        nivelPkmn = qttdInsignias(insignias);
        poderPkmn = calculaPoder(pkmn,nivelPkmn);
        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
        habil = buscaHabilidade(pkmn.nome,Number(nivel));

        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

        if(qtdd >= 2){

            pkmn = random(pokemon(terreno));
            nivelPkmn = qttdInsignias(insignias);
            poderPkmn = calculaPoder(pkmn,nivelPkmn);
            nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
            habil = buscaHabilidade(pkmn.nome,Number(nivel));

            imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
            pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

            if(qtdd >= 3){

                pkmn = random(pokemon(terreno));
                nivelPkmn = qttdInsignias(insignias);
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                if(qtdd >= 4){

                    pkmn = random(pokemon(terreno));
                    nivelPkmn = qttdInsignias(insignias);
                    poderPkmn = calculaPoder(pkmn,nivelPkmn);
                    nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                    habil = buscaHabilidade(pkmn.nome,Number(nivel));

                    imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                    pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                    if(qtdd >= 5){

                        nivelPkmn = qttdInsignias(insignias);
                        if(nivelPkmn > 40){
                            pkmn = random(pokemon('epico'));
                        } else {
                            pkmn = random(pokemon(terreno));
                        }
                        poderPkmn = calculaPoder(pkmn,nivelPkmn);
                        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                        habil = buscaHabilidade(pkmn.nome,Number(nivel));

                        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                    }
                }
            }
        }

        $('.boxPokemon').prepend('<div class="boxNPC"><strong>Treinador:</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

        activateStressBox();

        $('#musicaTocando').val('');
        som.unload();
        som = play('10 Battle! (Trainer Battle).mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnGerarRocket').click(function(){

        var qtdd = random([1,1,2,3,4,5]);
        var imagens = '';
        var pokemons = '';
        var arrayPokemons = [];
        var pkmn = '';
        var nivelPkmn = '';
        var poderPkmn = '';
        var nivel = '';
        var habil = '';

        var insignias = $('#selectInsignias').val();
        var terreno = $('#selectTerreno').val();

        pkmn = random(pokemon(terreno));
        nivelPkmn = qttdInsignias(insignias);
        nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
        poderPkmn = calculaPoder(pkmn,nivelPkmn);
        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
        habil = buscaHabilidade(pkmn.nome,Number(nivel));

        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

        if(qtdd >= 2){

            pkmn = random(pokemon(terreno));
            nivelPkmn = qttdInsignias(insignias);
            nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
            poderPkmn = calculaPoder(pkmn,nivelPkmn);
            nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
            habil = buscaHabilidade(pkmn.nome,Number(nivel));

            imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
            pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

            if(qtdd >= 3){

                pkmn = random(pokemon(terreno));
                nivelPkmn = qttdInsignias(insignias);
                nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                if(qtdd >= 4){

                    pkmn = random(pokemon(terreno));
                    nivelPkmn = qttdInsignias(insignias);
                    nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
                    poderPkmn = calculaPoder(pkmn,nivelPkmn);
                    nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                    habil = buscaHabilidade(pkmn.nome,Number(nivel));

                    imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                    pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                    if(qtdd >= 5){

                        nivelPkmn = qttdInsignias(insignias);
                        nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
                        if(nivelPkmn > 40){
                            pkmn = random(pokemon('epico'));
                        } else {
                            pkmn = random(pokemon(terreno));
                        }
                        poderPkmn = calculaPoder(pkmn,nivelPkmn);
                        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                        habil = buscaHabilidade(pkmn.nome,Number(nivel));

                        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+pokemonConditions()+'<br>';

                    }
                }
            }
        }

        $('.boxPokemon').prepend('<div class="boxNPC"><strong>Equipe Rocket:</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

        activateStressBox();

        $('#musicaTocando').val('');
        som.unload();
        som = play('54 Final Battle! (Rival).mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnUndo').click(function(){
        $('.boxPokemon .boxNPC:first-child').remove();
    });

    $('#btnGerarEncontro').click(function(){

        var terreno = $('#selectTerreno').val();

        if (terreno == 'mata') terreno = 'floresta';
        if (terreno == 'caverna') terreno = 'colina';
        if (terreno == 'plato') terreno = 'montanha';
        if (terreno == 'ilha') terreno = 'agua';

        if ((terreno == 'pewter') || 
            (terreno == 'cerulean') || 
            (terreno == 'vermilion') || 
            (terreno == 'lavender') || 
            (terreno == 'celadon') || 
            (terreno == 'fuchsia') || 
            (terreno == 'cinnabar') || 
            (terreno == 'planalto')){
            terreno = 'especial';
        }

        var evento = random(encontro(terreno));
        var acontecimento = '';

        if (evento.par != 'nada')
            acontecimento = evento.par;

        var corbg = '';
        var faicon = '';

        switch(evento.tipo){
            case 'rocket': 
                corbg = '#cac'; 
                faicon = 'fa-rocket';
                break;
            case 'selvagem': 
                corbg = '#cec';
                faicon = 'fa-bug'; 
                break;
            case 'treinador': 
                corbg = '#ace';
                faicon = 'fa-male';
                break;
            case 'treinadora': 
                corbg = '#ace';
                faicon = 'fa-female';
                break;
            case 'item': 
                corbg = '#ffa'; 
                faicon = 'fa-usd';
                break;
            case 'rival': 
                corbg = '#faa'; 
                faicon = 'fa-exclamation-circle';
                break;
            case 'nada': 
                corbg = '#fff'; 
                faicon = '';
                break;
        }

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<h5 style="background-color: '+corbg+'; border-radius: 5px; padding: 5px;"> <i class="fa '+faicon+'"></i> '+evento.evento+'</h5>'+'<h6><i>'+acontecimento+'</i></h6>'+
        '</div>');

        $('#musicaTocando').val('');
        som.unload();
        if(evento.mp3 != '')
            som = play(evento.mp3+'.mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnGerarTM').click(function(){

        var numTM = randomNumber(1,50);
        var item = itemTM(numTM);

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<strong>TM'+numTM+':</strong> '+item.nome+' ('+item.tipo+') '+'- '+item.desc+
        '</div>');

        $('#musicaTocando').val('');
        som.unload();
        som = play('15 Victory! (Wild Poke’mon).mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnGerarItemComum').click(function(){

        var item = random(itemComum());

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<strong>Item comum:</strong> '+item+
        '</div>');

        $('#musicaTocando').val('');
        som.unload();
        som = play('15 Victory! (Wild Poke’mon).mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnGerarItemRaro').click(function(){

        var item = random(itemRaro());

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<strong>Item raro:</strong> '+item+
        '</div>');

        $('#musicaTocando').val('');
        som.unload();
        som = play('12 Victory! (Trainer Battle).mp3');
        if($('#btnSom').val() == 'unmute') 
            som.play();

    });

    $('#btnGerarPokemon').click(function(){

        var insignias = $('#selectInsignias').val();
        var terreno = $('#selectTerreno').val();

        var pkmn = random(pokemon(terreno));
        var nivelPkmn = qttdInsignias(insignias);

        var poderPkmn = calculaPoder(pkmn,nivelPkmn);

        var nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
        var habil = buscaHabilidade(pkmn.nome,Number(nivel));
    
        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<center><img width=200 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png></center>'+
          '<br><strong>'+pkmn.nome+'</strong>'+
          '<br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+
          '<br><i>Fraquezas:</i> '+pkmn.fraqueza+
          '<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+
          pokemonConditions()+
        '</div><br>');

        activateStressBox();

        if($('#btnSom').val() == 'unmute') {
            var cry = new Howl({
                src: ['./mp3/cries/'+pkmn.num+'.ogg'],
                volume: 0.3,
            });
            cry.play();
        }

    });

    $('.boxPokemon').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});