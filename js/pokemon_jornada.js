$( document ).ready(function() {

    function buscaHabilidade(pokemon, nivel) {

        var habilidade = [];

        switch(pokemon){
            case "Bulbasaur":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[7] = {nome:'Semear',tipo:'Grama',desc:'No início do turno do oponente ele sofre 1 de dano e você recupera 1 PV. Efeito dobrado se super efetivo'};
                habilidade[13] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[20] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[27] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (2-6 se super efetivo)'};
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
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[30] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (2-6 se super efetivo)'};
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
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[30] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (2-6 se super efetivo)'};
                habilidade[43] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[55] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[65] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
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
                habilidade[12] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[16] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[20] = {nome:'Agulhas Gêmeas',tipo:'Inseto',desc:'Ataque com +3d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[25] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada uso consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Não é mais possível realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[30] = {nome:'Alfinetadas',tipo:'Inseto',desc:'Ataque com +1d6 dados'};
                habilidade[35] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
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
                habilidade[13] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[14] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[15] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[23] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[28] = {nome:'Rajada',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[34] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                return habilidade[nivel];
                break;        
            case "Pikachu":
                habilidade[1] = {nome:'Choque do Trovão',tipo:'Elétrico',desc:'Ataque com +2d6. Se causar 3+ de dano paralisa o oponente'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Onda do Trovão',tipo:'Elétrico',desc:'Paralisa o oponente'};
                habilidade[16] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[26] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 2-6'};
                habilidade[33] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[43] = {nome:'Trovão',tipo:'Elétrico',desc:'Ataque com +6d6. Se causar 3+ de dano paralisa o oponente'};
                return habilidade[nivel];
                break;
            case "Venonat":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade'};
                habilidade[11] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[27] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[30] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[35] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[38] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[43] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;        
            case "Venomoth":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Incapacitar',tipo:'Normal',desc:'Role um 1d6, um resultado 4-6 impede o oponente de usar sua habilidade'};
                habilidade[11] = {nome:'Supersônico',tipo:'Normal',desc:'Confunde o oponente com sucesso a 4-6 em 1d6'};
                habilidade[19] = {nome:'Confusão',tipo:'Psíquico',desc:'Ataque com +2d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[22] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[27] = {nome:'Sugar Vida',tipo:'Inseto',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[30] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[38] = {nome:'Raio Psíquico',tipo:'Psíquico',desc:'Ataque com +3d6. Se causar 3+ de dano confunde o oponente'};
                habilidade[43] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[50] = {nome:'Psíquico',tipo:'Psíquico',desc:'Ataque com +4d6. Se causar 3+ de dano reduz o ataque do oponente em 1d6'};
                return habilidade[nivel];
                break;        
            case "Nidoran♀":
                habilidade[1] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[17] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[23] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[30] = {nome:'Mordida',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
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
                habilidade[36] = {nome:'Mordida',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[46] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                return habilidade[nivel];
                break;        
            case "Nidoran♂":
                habilidade[1] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[17] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[23] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[30] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[38] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 6 desmaia o oponente'};
                return habilidade[nivel];
                break;        
            case "Nidorino":
                habilidade[1] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[5] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[8] = {nome:'Chifrada',tipo:'Normal',desc:'Ataque com +3d6'};
                habilidade[12] = {nome:'Chute Duplo',tipo:'Lutador',desc:'Ataque com +3d6'};
                habilidade[19] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[36] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[46] = {nome:'Chifre Furadeira',tipo:'Normal',desc:'Role um 1d6, um resultado 6 desmaia o oponente'};
                return habilidade[nivel];
                break;        
            case "Weepinbell":
                habilidade[1] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[23] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[29] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[38] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (2-6 se super efetivo)'};
                habilidade[49] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                return habilidade[nivel];
                break;        
            case "Spearow":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[22] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com a mesma quantidade de dados de ataque'};
                habilidade[29] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[36] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;        
            case "Fearow":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +1d6'};
                habilidade[5] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[9] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[25] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com a mesma quantidade de dados de ataque'};
                habilidade[34] = {nome:'Furadeira',tipo:'Voador',desc:'Ataque com +4d6'};
                habilidade[43] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;        
            case "Mankey":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[9] = {nome:'Chute Baixo',tipo:'Lutador',desc:'Ataque com +2d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[15] = {nome:'Golpe de Karatê',tipo:'Normal',desc:'Ataque com +2d6 com sucesso a 4-6'};
                habilidade[21] = {nome:'Pancadas Furiosas',tipo:'Normal',desc:'Ataque com +1d6 dados'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[33] = {nome:'Arremesso Sísmico',tipo:'Lutador',desc:'Ataque com +Xd6, no qual X é a quantidade total de PVs do oponente'};
                habilidade[39] = {nome:'Açoitar',tipo:'Normal',desc:'Ataque com +4d6. Durante 1d6-1 (mínimo 2) turnos não é possível escolher outra ação. Ao término da duração o Mankey fica confuso'};
                habilidade[45] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques causam 2 de dano a mais no oponente atual'};
                return habilidade[nivel];
                break;        
            case "Pidgey":
                habilidade[1] = {nome:'Rajada',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[12] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[19] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[28] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[36] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[44] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com a mesma quantidade de dados de ataque'};
                return habilidade[nivel];
                break;        
            case "Pidgeotto":
                habilidade[1] = {nome:'Rajada',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[5] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[12] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[21] = {nome:'Furacão',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[31] = {nome:'Ataque de Asa',tipo:'Voador',desc:'Ataque com +2d6'};
                habilidade[40] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[49] = {nome:'Espelho',tipo:'Voador',desc:'Copia o último ataque recebido, com a mesma quantidade de dados de ataque'};
                return habilidade[nivel];
                break;        
            case "Farfetch`d":
                habilidade[1] = {nome:'Bicada',tipo:'Voador',desc:'Ataque com +1d6'};
                habilidade[4] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[7] = {nome:'Encarar',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[23] = {nome:'Dança de Espadas',tipo:'Normal',desc:'Até o fim do combate seus ataques causam 2 de dano a mais'};
                habilidade[31] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                habilidade[39] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6'};
                return habilidade[nivel];
                break;        
            case "Rattata":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[7] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[14] = {nome:'Hiper Presas',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[23] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[34] = {nome:'Super Presas',tipo:'Normal',desc:'Ataque com +Xd6, no qual X é a metade dos PVs restantes do oponente (mínimo +1d6)'};
                return habilidade[nivel];
                break;        
            case "Raticate":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[3] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[7] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[14] = {nome:'Hiper Presas',tipo:'Normal',desc:'Ataque com +4d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[27] = {nome:'Focar Energia',tipo:'Normal',desc:'Até o final do combate os seus ataques tem sucesso a 4-6'};
                habilidade[41] = {nome:'Super Presas',tipo:'Normal',desc:'Ataque com +Xd6, no qual X é a metade dos PVs restantes do oponente (mínimo +1d6)'};
                return habilidade[nivel];
                break;        
            case "Ponyta":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causa 3+ de dano'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[14] = {nome:'Pisão',tipo:'Normal',desc:'Ataque com +3d6. Se causar 3+ de dano o oponente não pode atacar no próximo turno'};
                habilidade[21] = {nome:'Rosnar',tipo:'Normal',desc:'Reduz o ataque do oponente em 1d6 até o fim do combate'};
                habilidade[29] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Prende o oponente por X rodadas, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                habilidade[35] = {nome:'Derrubar',tipo:'Normal',desc:'Ataque com +4d6. Para cada 4 de dano inflingido, Ponyta perde 1 PV'};
                habilidade[45] = {nome:'Agilidade',tipo:'Psíquico',desc:'Até o fim do combate seus ataques ganham +2d6'};
                return habilidade[nivel];
                break;        
            case "Bellsprout":
                habilidade[1] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[7] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                habilidade[13] = {nome:'Enrolar',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[18] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[21] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[26] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[33] = {nome:'Folha Navalha',tipo:'Grama',desc:'Ataque com +3d6 com sucesso a 4-6 (2-6 se super efetivo)'};
                habilidade[42] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                return habilidade[nivel];
                break;        
            case "Oddish":
                habilidade[1] = {nome:'Absover',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[17] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[19] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[24] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[36] = {nome:'Dança de Pétalas',tipo:'Grama',desc:'Ataque com +3d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Oddish fica confuso'};
                habilidade[46] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;        
            case "Gloom":
                habilidade[1] = {nome:'Absover',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[15] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[17] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[19] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[28] = {nome:'Ácido',tipo:'Venenoso',desc:'Ataque com +2d6. Se causar 3+ de dano os seus próximos ataques causam 1 de dano a mais no oponente atual, até o final do combate'};
                habilidade[38] = {nome:'Dança de Pétalas',tipo:'Grama',desc:'Ataque com +3d6. Durante 1d6 turnos não é possível escolher outra ação. Ao término da duração o Oddish fica confuso'};
                habilidade[52] = {nome:'Raio Solar',tipo:'Grama',desc:'No seu próximo turno ataque com +6d6'};
                return habilidade[nivel];
                break;        
            case "Vulpix":
                habilidade[1] = {nome:'Chamas',tipo:'Fogo',desc:'Ataque com +2d6. Incendeia o oponente se causa 3+ de dano'};
                habilidade[7] = {nome:'Distrair',tipo:'Normal',desc:'Os seus ataques causam 1 de dano a mais no oponente atual'};
                habilidade[16] = {nome:'Ataque Rápido',tipo:'Normal',desc:'Ataque com +2d6. Sempre ataca primeiro'};
                habilidade[21] = {nome:'Rugido',tipo:'Normal',desc:'Foge automaticamente da luta. Só pode ser usado contra pokémons selvagens'};
                habilidade[28] = {nome:'Raio da Confusão',tipo:'Fantasma',desc:'Confunde o oponente'};
                habilidade[35] = {nome:'Lança-chamas',tipo:'Fogo',desc:'Ataque com +5d6, incendeia o oponente'};
                habilidade[42] = {nome:'Turbilhão de Fogo',tipo:'Fogo',desc:'Prende o oponente por X rodadas, no qual X é igual ao dano causado, ele não poderá atacar no turno dele. No seu próximo turno causa X-1 de dano. Quando X for zero o alvo se liberta e você poderá realizar outra ação'};
                return habilidade[nivel];
                break;        
            case "Tangela":
                habilidade[1] = {nome:'Constrição',tipo:'Normal',desc:'Ataque com +1d6. Se causar 3+ de dano reduz o próximo ataque do oponente em 1d6'};
                habilidade[3] = {nome:'Prender',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[7] = {nome:'Absover',tipo:'Grama',desc:'Ataque com +1d6. Recupera PVs igual a metade do dano causado (mínimo 1)'};
                habilidade[13] = {nome:'Chicote de Vinhas',tipo:'Grama',desc:'Ataque com +2d6'};
                habilidade[20] = {nome:'Pó Venenoso',tipo:'Venenoso',desc:'Envenena o oponente com sucesso a 3-6 em 1d6'};
                habilidade[27] = {nome:'Esporo Atordoante',tipo:'Grama',desc:'Paralisa o oponente com sucesso a 3-6 em 1d6'};
                habilidade[34] = {nome:'Pó do Sono',tipo:'Grama',desc:'Adormece o oponente com sucesso a 3-6 em 1d6'};
                habilidade[41] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[48] = {nome:'Crescer',tipo:'Normal',desc:'Até o fim do combate recebe +1d6 de ataque'};
                return habilidade[nivel];
                break;        
            case "Abra":
                habilidade[1] = {nome:'Teleporte',tipo:'Psíquico',desc:'Foge automaticamente da luta. Só pode ser usado por ou contra pokémons selvagens'};
                return habilidade[nivel];
                break;         
            case "Geodude":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Proteger-se',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[15] = {nome:'Pedrada',tipo:'Pedra',desc:'Ataque com +2d6'};
                habilidade[21] = {nome:'Autodestruição',tipo:'Normal',desc:'Ataque com +13d6. Geodude desmaia após o ataque'};
                habilidade[27] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                habilidade[32] = {nome:'Terremoto',tipo:'Terrestre',desc:'Ataque com +5d6'};
                habilidade[36] = {nome:'Explosão',tipo:'Normal',desc:'Ataque com +17d6. Geodude desmaia após o ataque'};
                return habilidade[nivel];
                break;         
            case "Onix":
                habilidade[1] = {nome:'Cabeçada',tipo:'Normal',desc:'Ataque com +1d6'};
                habilidade[7] = {nome:'Guinchar',tipo:'Normal',desc:'Os seus ataques causam 2 de dano a mais no oponente atual'};
                habilidade[15] = {nome:'Prender',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                habilidade[19] = {nome:'Pedrada',tipo:'Pedra',desc:'Ataque com +2d6'};
                habilidade[25] = {nome:'Fúria',tipo:'Normal',desc:'Ataque com +1d6. Cada uso consecutivo aumenta o ataque em +1d6. Não causar dano retira todo o bônus. Não é mais possível realizar outras ações até que o pokémon vença ou desmaie'};
                habilidade[33] = {nome:'Tapão',tipo:'Normal',desc:'Ataque com +4d6'};
                habilidade[43] = {nome:'Endurecer',tipo:'Normal',desc:'Até o fim do combate reduz em 1 todo dano recebido'};
                return habilidade[nivel];
                break;         
            case "Sandshrew":
                habilidade[1] = {nome:'Arranhão',tipo:'Normal',desc:'Ataque com +2d6'};
                habilidade[10] = {nome:'Ataque de Areia',tipo:'Normal',desc:'Reduz o próximo ataque do oponente em 1d6'};
                habilidade[17] = {nome:'Golpear',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 4-6 '};
                habilidade[24] = {nome:'Picada Venenosa',tipo:'Venenoso',desc:'Ataque com +1d6. Se causar 3+ de dano envenena o oponente'};
                habilidade[31] = {nome:'Rapidez',tipo:'Normal',desc:'Ataque com +3d6 com sucesso a 2-6'};
                habilidade[38] = {nome:'Ataque Furioso',tipo:'Normal',desc:'Ataque com +1d6-1 dados (mínimo +2)'};
                return habilidade[nivel];
                break;         
            /*
            case "":
                habilidade[] = {nome:'',tipo:'',desc:''};
                return habilidade[nivel];
                break;         
            */
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
            case "Weedle":
                habilidades = [1,5];
                break;
            case "Kakuna":
                habilidades = [1,5,7];
                break;
            case "Beedrill":
                habilidades = [1,5,7,12,16,20,25,30,35];
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
            case "Bellsprout":
                habilidades = [1,7,13,15,18,21,26,33,42];
                break;
            case "Pikachu":
                habilidades = [1,5,9,16,26,33,43];
                break;
            case "Venonat":
                habilidades = [1,5,11,19,22,27,30,35,38,43];
                break;
            case "Venomoth":
                habilidades = [1,5,11,19,22,27,30,38,43,50];
                break;
            case "Nidoran♀":
                habilidades = [1,5,8,12,17,23,30,38];
                break;
            case "Nidorina":
                habilidades = [1,5,8,12,19,27,36,46];
                break;
            case "Nidoran♂":
                habilidades = [1,5,8,12,17,23,30,38];
                break;
            case "Nidorino":
                habilidades = [1,5,8,12,19,27,36,46];
                break;
            case "Weepinbell":
                habilidades = [1,7,13,15,18,23,29,38,49];
                break;
            case "Spearow":
                habilidades = [1,5,9,15,22,29,36];
                break;
            case "Fearow":
                habilidades = [1,5,9,15,25,34,43];
                break;
            case "Mankey":
                habilidades = [1,5,9,15,21,27,33,39,45];
                break;
            case "Pidgey":
                habilidades = [1,5,12,19,28,36,44];
                break;
            case "Pidgeotto":
                habilidades = [1,5,12,21,31,40,49];
                break;
            case "Farfetch`d":
                habilidades = [1,4,7,15,23,31,39];
                break;
            case "Rattata":
                habilidades = [1,3,7,14,23,34];
                break;
            case "Raticate":
                habilidades = [1,3,7,14,27,41];
                break;
            case "Ponyta":
                habilidades = [1,7,14,21,29,35,45];
                break;
            case "Oddish":
                habilidades = [1,15,17,19,24,36,46];
                break;
            case "Vulpix":
                habilidades = [1,7,16,21,28,35,42];
                break;
            case "Gloom":
                habilidades = [1,15,17,19,28,38,52];
                break;
            case "Tangela":
                habilidades = [1,3,7,13,20,27,34,41,48];
                break;
            case "Abra":
                habilidades = [1];
                break;
            case "Geodude":
                habilidades = [1,7,15,21,27,32];
                break;
            case "Onix":
                habilidades = [1,7,15,19,25,33,43];
                break;
            case "Sandshrew":
                habilidades = [1,10,17,24,31,38];
                break;
            }

        for(i=habilidades.length;i>=0;i--){
            if(habilidades[i] <= nivel)
                return habilidades[i];
        }

    }

    function nivelMapa(mapa) {

        if ((mapa=='cidadePallet')||(mapa=='cidadeViridiana')||(mapa=='rota1')||(mapa=='rota2')){
            return random([1,2,3,4,5,6]);
        }else if ((mapa=='rota22')||(mapa=='florestaViridiana')||(mapa=='saidaFloresta')||(mapa=='cidadePewter')){
            return random([7,8,9,10,11,12]);
        }

    }

    function encontro(terreno) {

        switch(terreno){
            case 'vila':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                ];
                break;
            case 'estrada':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'15 Victory! (Wild Poke’mon)',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'15 Victory! (Wild Poke’mon)',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket'},
                ];
                break;
            case 'relva':
                return [
                    {mp3:'34 A Trainer Appears (Bad Guy Version)',evento:'Você encontra o seu Rival',tipo:'rival'},
                    {mp3:'15 Victory! (Wild Poke’mon)',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'15 Victory! (Wild Poke’mon)',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'35 A Trainer Appears (Rocket Duo Version)',evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket'},
                ];
                break;
            case 'mato':
                return [
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'',evento:'Nada acontece',tipo:'nada'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                ];
                break;
            case 'floresta':
                return [
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'32 A Trainer Appears (Girl Version)',evento:'Você encontra uma Treinadora',tipo:'treinadora'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'14 Battle! (Wild Poke’mon)',evento:'Aparece um Pokémon selvagem',tipo:'selvagem'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'24 A Trainer Appears (Boy Version)',evento:'Você encontra um Treinador',tipo:'treinador'},
                    {mp3:'',evento:'Você encontra um Item Comum',tipo:'item'},
                ];
                break;
        }

    }

    function pokemon(terreno) {
        switch(terreno){
            case 'relva':
                return [
                    {nome:'Farfetch`d',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'083',evo:'0'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020',evo:'1'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114',evo:'0'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044',evo:'1'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063',evo:'0'},
                ];
                break;
            case 'mato':
                return [
                    {nome:'Venomoth',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'049',evo:'1'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030',evo:'1'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070',evo:'1'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056',evo:'0'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022',evo:'1'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033',evo:'1'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033',evo:'1'},
                    {nome:'Pidgeotto',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'017',evo:'1'},
                ];
                break;
            case 'floresta':
                return [
                    {nome:'Venusaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'003',evo:'2'},
                    {nome:'Ivysaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'002',evo:'1'},
                    {nome:'Ivysaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'002',evo:'1'},
                    {nome:'Bulbasaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'001',evo:'0'},
                    {nome:'Bulbasaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'001',evo:'0'},
                    {nome:'Bulbasaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'001',evo:'0'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014',evo:'1'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069',evo:'0'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011',evo:'1'},
                    {nome:'Beedrill',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'015',evo:'2'},
                    {nome:'Beedrill',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'015',evo:'2'},
                    {nome:'Beedrill',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'015',evo:'2'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terreste',num:'025',evo:'0'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terreste',num:'025',evo:'0'},
                    {nome:'Butterfree',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'012',evo:'2'},
                    
                ];
                break;
            case 1:
                return [
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050'},
                    {nome:'Jigglypuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'039'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023'},
                    {nome:'Ditto',tipo:'Normal',fraqueza:'Lutador',num:'132'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052'},
                    {nome:'Horsea',tipo:'Água',fraqueza:'Grama e Elétrico',num:'116'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074'},
                    {nome:'Dratini',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'147'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090'},
                    {nome:'Charmander',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'004'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092'},
                    {nome:'Squirtle',tipo:'Água',fraqueza:'Grama e Elétrico',num:'007'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079'},
                ];
                break;
            case 2:
                return [
                    {nome:'Psyduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'054'},
                    {nome:'Cubone',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'104'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118'},
                    {nome:'Clefairy',tipo:'Fada',fraqueza:'Metálico e Venenoso',num:'035'},
                    {nome:'Magnemite',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'081'},
                    {nome:'Seel',tipo:'Água',fraqueza:'Grama e Elétrico',num:'086'},
                    {nome:'Grimer',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'088'},
                    {nome:'Krabby',tipo:'Água',fraqueza:'Grama e Elétrico',num:'098'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102'},
                    {nome:'Eevee',tipo:'Normal',fraqueza:'Lutador',num:'133'},
                    {nome:'Drowzee',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'096'},
                    {nome:'Voltorb',tipo:'Elétrico',fraqueza:'Terrestre',num:'100'},
                    {nome:'Tentacool',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'072'},
                    {nome:'Koffing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'109'},
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'120'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058'},
                    {nome:'Omanyte',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'138'},
                    {nome:'Kabuto',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'140'},
                    {nome:'Poliwhirl',tipo:'Água',fraqueza:'Grama e Elétrico',num:'061'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095'},
                    {nome:'Lickitung',tipo:'Normal',fraqueza:'Lutador',num:'108'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075'},
                    {nome:'Porygon',tipo:'Normal',fraqueza:'Lutador',num:'137'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064'},
                    {nome:'Charmeleon',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'005'},
                ];
                break;
            case 3:
                return [
                    {nome:'Wartortle',tipo:'Água',fraqueza:'Grama e Elétrico',num:'008'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067'},
                    {nome:'Haunter',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'093'},
                    {nome:'Dragonair',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'148'},
                    {nome:'Dugtrio',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'051'},
                    {nome:'Marowak',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'105'},
                    {nome:'Wigglytuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'040'},
                    {nome:'Persian',tipo:'Normal',fraqueza:'Lutador',num:'054'},
                    {nome:'Seadra',tipo:'Água',fraqueza:'Grama e Elétrico',num:'117'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028'},
                    {nome:'Chansey',tipo:'Normal',fraqueza:'Lutador',num:'113'},
                    {nome:'Seaking',tipo:'Água',fraqueza:'Grama e Elétrico',num:'119'},
                    {nome:'Golbat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'042'},
                    {nome:'Primeape',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'057'},
                    {nome:'Hitmonlee',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'106'},
                    {nome:'Hitmonchan',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'107'},
                    {nome:'Jynx',tipo:'Gelo Psíquico',fraqueza:'Metálico, Fantasma, Fogo, Noturno, Pedra e Inseto',num:'124'},
                    {nome:'Mr. Mime',tipo:'Fada Psíquico',fraqueza:'Fantasma, Metálico e Venenoso',num:'122'},
                    {nome:'Magneton',tipo:'Elétrico Metálico',fraqueza:'Fogo, Lutador e Terrestre',num:'082'},
                    {nome:'Dodrio',tipo:'Normal Voador',fraqueza:'Elétrico, Gelo e Pedra',num:'085'},
                    {nome:'Dewgong',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'087'},
                    {nome:'Kingler',tipo:'Água',fraqueza:'Grama e Elétrico',num:'099'},
                    {nome:'Pidgeot',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'018'},
                    {nome:'Clefable',tipo:'Fada',fraqueza:'Metálico e Venenoso',num:'036'},
                    {nome:'Hypno',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'097'},
                    {nome:'Raichu',tipo:'Elétrico',fraqueza:'Terreste',num:'026'},
                    {nome:'Rhydon',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'112'},
                    {nome:'Vileplume',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'045'},
                    {nome:'Victreebel',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'071'},
                ];
                break;
            case 4:
                return [
                    {nome:'Slowbro',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'080'},
                    {nome:'Electrode',tipo:'Elétrico',fraqueza:'Terrestre',num:'101'},
                    {nome:'Weezing',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'110'},
                    {nome:'Kangaskhan',tipo:'Normal',fraqueza:'Lutador',num:'115'},
                    {nome:'Electabuzz',tipo:'Elétrico',fraqueza:'Terrestre',num:'125'},
                    {nome:'Tauros',tipo:'Normal',fraqueza:'Lutador',num:'128'},
                    {nome:'Golem',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'076'},
                    {nome:'Magmar',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'126'},
                    {nome:'Omastar',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'139'},
                    {nome:'Kabutops',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'141'},
                    {nome:'Golduck',tipo:'Água',fraqueza:'Grama e Elétrico',num:'055'},
                    {nome:'Alakazam',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'065'},
                    {nome:'Rapidash',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'078'},
                    {nome:'Muk',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'089'},
                    {nome:'Gengar',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'094'},
                    {nome:'Scyther',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'123'},
                    {nome:'Pinsir',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'127'},
                    {nome:'Nidoqueen',tipo:'Venenoso Terrestre',fraqueza:'Água, Psíquico, Gelo e Terrestre',num:'031'},
                    {nome:'Nidoking',tipo:'Venenoso Terrestre',fraqueza:'Água, Psíquico, Gelo e Terrestre',num:'034'},
                    {nome:'Ninetales',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'038'},
                    {nome:'Machamp',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'068'},
                    {nome:'Poliwrath',tipo:'Água Lutador',fraqueza:'Fada, Grama, Voador, Psíquico e Elétrico',num:'062'},
                    {nome:'Tentacruel',tipo:'Água Venenoso',fraqueza:'Psíquico, Elétrico e Terrestre',num:'073'},
                    {nome:'Aerodactyl',tipo:'Pedra Voador',fraqueza:'Metálico, Água, Elétrico, Gelo e Pedra',num:'142'},
                    {nome:'Starmie',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'121'},
                    {nome:'Cloyster',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'091'},
                    {nome:'Vaporeon',tipo:'Água',fraqueza:'Grama e Elétrico',num:'134'},
                    {nome:'Jolteon',tipo:'Elétrico',fraqueza:'Terrestre',num:'135'},
                    {nome:'Flareon',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'136'},
                    {nome:'Blastoise',tipo:'Água',fraqueza:'Grama e Elétrico',num:'009'},
                    {nome:'Exeggutor',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'103'},
                    {nome:'Charizard',tipo:'Fogo Voador',fraqueza:'Água, Elétrico e Pedra',num:'006'},
                    {nome:'Lapras',tipo:'Água Gelo',fraqueza:'Grama, Elétrico, Lutador e Pedra',num:'131'},
                    {nome:'Gyarados',tipo:'Água Voador',fraqueza:'Elétrico e Pedra',num:'130'},
                    {nome:'Snorlax',tipo:'Normal',fraqueza:'Lutador',num:'143'},
                    {nome:'Arcanine',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'059'},
                ];
                break;
            case 5:
                return [
                    {nome:'Articuno',tipo:'Gelo Voador',fraqueza:'Metálico, Fogo, Elétrico e Pedra',num:'144'},
                    {nome:'Zapdos',tipo:'Elétrico Voador',fraqueza:'Gelo e Pedra',num:'145'},
                    {nome:'Moltres',tipo:'Fogo Voador',fraqueza:'Água, Elétrico e Pedra',num:'146'},
                    {nome:'Dragonite',tipo:'Dragão Voador',fraqueza:'Fada, Dragão, Gelo e Pedra',num:'149'},
                    {nome:'Mew',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'151'},
                    {nome:'Mewtwo',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'150'},
                ];
                break;
        }
    };

    function itemComum(){
        var uma_moeda = random(['10','20','30','40','50','60']);
        var duas_moedas = random(['20','30','30','40','40','40','50','50','50','50','60','60','60','60','60','70','70','70','70','70','70','80','80','80','80','80','90','90','90','90','100','100','100','110','110','120']);
        return ['Doce Raro','Corda de Fuga','Corda de Fuga','Repelente','Repelente','Repelente',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas','Pokéball','Pokéball','Pokéball','Pokéball','Pokéball',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas',uma_moeda+' moedas','Poção','Poção','Poção','Poção','Poção',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas',duas_moedas+' moedas','Cura Completa','Cura Completa','Cura Completa','Greatball','Greatball','Item raro'];
    }

    function itemRaro(){
        return ['TM','Elemento X ','Elemento X ','Max Poção','Max Poção','Max Poção','Escudo Guardião','Escudo Guardião','Escudo Guardião','Escudo Guardião','Reviver','Reviver','Reviver','Reviver','Reviver','Super Poção','Super Poção','Super Poção','Super Poção','Super Poção','Super Poção','Super Repelente','Super Repelente','Super Repelente','Super Repelente','Super Repelente','Ultraball','Ultraball','Ultraball','Ultraball','Pedra de Evolução','Pedra de Evolução','Pedra de Evolução','Doce Raro','Doce Raro','Pepita'];
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
                    imglider: "https://cdn.bulbagarden.net/upload/a/a6/Lets_Go_Pikachu_Eevee_Brock.png",
                    imginsignia: "https://cdn.bulbagarden.net/upload/d/dd/Boulder_Badge.png",
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
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                pkmn = lider.pokemons[1];
                nivelPkmn = lider.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

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
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                pkmn = desafianteLiam.pokemons[1];
                nivelPkmn = desafianteLiam.pokemons[1].nivel;
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                $('.boxPokemon').prepend('<div class="boxNPC"><strong>Desafiante Liam:</strong><br><center>'+imagens+'</center>'+pokemons+'</div><br>');

                $('.boxPokemon').prepend(
                '<div class="boxNPC">'+
                  '<h5 style="background-color: #ccc; border-radius: 5px; padding: 5px;"> <i class="fa fa-star"></i> Derrote todos os desafiantes antes do Líder</h5>'+
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

        var mapa = $('#selectMapa').val();
        var terreno = $('#selectTerreno').val();

        if (terreno == 'vila') {
            $('.boxPokemon').prepend(
            '<div class="boxNPC">'+
              'Não existem treinadores neste terreno!'+
            '</div>');
            return;
        }

        pkmn = random(pokemon(random(['relva','mato','floresta'])));
        nivelPkmn = nivelMapa(mapa);
        poderPkmn = calculaPoder(pkmn,nivelPkmn);
        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
        habil = buscaHabilidade(pkmn.nome,Number(nivel));

        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

        if(qtdd >= 2){

            pkmn = random(pokemon(random(['relva','mato','floresta'])));
            nivelPkmn = nivelMapa(mapa);
            poderPkmn = calculaPoder(pkmn,nivelPkmn);
            nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
            habil = buscaHabilidade(pkmn.nome,Number(nivel));

            imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
            pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

            if(qtdd >= 3){

                pkmn = random(pokemon(random(['relva','mato','floresta'])));
                nivelPkmn = nivelMapa(mapa);
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                if(qtdd >= 4){

                    pkmn = random(pokemon(random(['relva','mato','floresta'])));
                    nivelPkmn = nivelMapa(mapa);
                    poderPkmn = calculaPoder(pkmn,nivelPkmn);
                    nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                    habil = buscaHabilidade(pkmn.nome,Number(nivel));

                    imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                    pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                    if(qtdd >= 5){

                        pkmn = random(pokemon(random(['relva','mato','floresta'])));
                        nivelPkmn = nivelMapa(mapa);
                        poderPkmn = calculaPoder(pkmn,nivelPkmn);
                        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                        habil = buscaHabilidade(pkmn.nome,Number(nivel));

                        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

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

        var mapa = $('#selectMapa').val();
        var terreno = $('#selectTerreno').val();

        if (terreno == 'vila') {
            $('.boxPokemon').prepend(
            '<div class="boxNPC">'+
              'Não existem membros da Equipe Rocket neste terreno!'+
            '</div>');
            return;
        }

        pkmn = random(pokemon(random(['relva','mato','floresta'])));
        nivelPkmn = nivelMapa(mapa);
        nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
        poderPkmn = calculaPoder(pkmn,nivelPkmn);
        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
        habil = buscaHabilidade(pkmn.nome,Number(nivel));

        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

        if(qtdd >= 2){

            pkmn = random(pokemon(random(['relva','mato','floresta'])));
            nivelPkmn = nivelMapa(mapa);
            nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
            poderPkmn = calculaPoder(pkmn,nivelPkmn);
            nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
            habil = buscaHabilidade(pkmn.nome,Number(nivel));

            imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
            pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

            if(qtdd >= 3){

                pkmn = random(pokemon(random(['relva','mato','floresta'])));
                nivelPkmn = nivelMapa(mapa);
                nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
                poderPkmn = calculaPoder(pkmn,nivelPkmn);
                nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                habil = buscaHabilidade(pkmn.nome,Number(nivel));

                imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                if(qtdd >= 4){

                    pkmn = random(pokemon(random(['relva','mato','floresta'])));
                    nivelPkmn = nivelMapa(mapa);
                    nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
                    poderPkmn = calculaPoder(pkmn,nivelPkmn);
                    nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                    habil = buscaHabilidade(pkmn.nome,Number(nivel));

                    imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                    pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

                    if(qtdd >= 5){

                        pkmn = random(pokemon(random(['relva','mato','floresta'])));
                        nivelPkmn = nivelMapa(mapa);
                        nivelPkmn = nivelPkmn + random([1,2,3,4,5,6]);
                        poderPkmn = calculaPoder(pkmn,nivelPkmn);
                        nivel = nivelHabilidade(pkmn.nome,Number(nivelPkmn));
                        habil = buscaHabilidade(pkmn.nome,Number(nivel));

                        imagens = imagens + '<img width=150 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png>';
                        pokemons = pokemons + '<br><strong>'+pkmn.nome+'</strong><br>Nível '+nivelPkmn+' / '+pkmn.tipo+' / Ataque '+poderPkmn.atk+'d6 / PVs '+stress(poderPkmn.pv,poderPkmn.pv)+'<br><i>Fraquezas:</i> '+pkmn.fraqueza+'<br><i>Habilidade:</i> '+habil.nome+' ('+habil.tipo+') '+'- '+habil.desc+'<br>';

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

        var evento = random(encontro(terreno));

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
          '<h5 style="background-color: '+corbg+'; border-radius: 5px; padding: 5px;"> <i class="fa '+faicon+'"></i> '+evento.evento+'</h5>'+
        '</div>');

        $('#musicaTocando').val('');
        som.unload();
        if(evento.mp3 != '')
            som = play(evento.mp3+'.mp3');
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

        var mapa = $('#selectMapa').val();
        var terreno = $('#selectTerreno').val();

        if ((terreno == 'vila') || (terreno == 'estrada')) {
            $('.boxPokemon').prepend(
            '<div class="boxNPC">'+
              'Não existem pokémons selvagens neste terreno!'+
            '</div>');            
            return;
        }

        var pkmn = random(pokemon(terreno));
        var nivelPkmn = nivelMapa(mapa);

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