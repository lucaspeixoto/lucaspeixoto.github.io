$( document ).ready(function() {

    function encontro() {
        return [
            {evento:'Você encontra um Membro da Equipe Rocket',tipo:'rocket'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking anterior',tipo:'selvagem'},
            {evento:'Você encontra um Treinador Aleatório',tipo:'treinador'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparecem 2 Pokémon selvagens do Ranking atual (Lute contra eles individualmente)',tipo:'selvagem'},
            {evento:'Você chegou a uma Cidade',tipo:'cidade'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Você encontra uma Treinadora Aleatória',tipo:'treinadora'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking seguinte',tipo:'selvagem'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Você chegou a um Centro Pokémon aleatório',tipo:'cidade'},
            {evento:'Você encontra um Treinador Aleatório',tipo:'treinador'},
            {evento:'Aparece 1 Pokémon selvagem do Ranking atual',tipo:'selvagem'},
            {evento:'Você chegou a uma Cidade',tipo:'cidade'}
        ];
    };

    function pokemon(ranking) {
        switch(ranking){
            case "safari":
                return [
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048'},
                    {nome:'Exeggcute',tipo:'Grama Psíquico',fraqueza:'Fantasma, Fogo, Voador, Gelo, Noturno, Venenoso e Inseto',num:'102'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047'},
                    {nome:'Venomoth',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'049'},
                    {nome:'Chansey',tipo:'Normal',fraqueza:'Lutador',num:'113'},
                    {nome:'Kangaskhan',tipo:'Normal',fraqueza:'Lutador',num:'115'},
                    {nome:'Tauros',tipo:'Normal',fraqueza:'Lutador',num:'128'},
                    {nome:'Scyther',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'123'},
                    {nome:'Goldeen',tipo:'Água',fraqueza:'Grama e Elétrico',num:'118'},
                    {nome:'Seaking',tipo:'Água',fraqueza:'Grama e Elétrico',num:'119'},
                    {nome:'Dratini',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'147'}
                ];
                break;
            case 1:
                return [
                    {nome:'Caterpie',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'010'},
                    {nome:'Weedle',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'013'},
                    {nome:'Magikarp',tipo:'Água',fraqueza:'Grama e Elétrico',num:'129'},
                    {nome:'Metapod',tipo:'Inseto',fraqueza:'Fogo, Voador e Pedra',num:'011'},
                    {nome:'Kakuna',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'014'},
                    {nome:'Zubat',tipo:'Voador Venenoso',fraqueza:'Psíquico, Elétrico, Gelo e Pedra',num:'041'},
                    {nome:'Pidgey',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'016'},
                    {nome:'Rattata',tipo:'Normal',fraqueza:'Lutador',num:'019'},
                    {nome:'Spearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'021'},
                    {nome:'Diglett',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'050'},
                    {nome:'Jigglypuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'039'},
                    {nome:'Nidoran♂',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'032'},
                    {nome:'Nidoran♀',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'029'},
                    {nome:'Paras',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'046'},
                    {nome:'Ekans',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'023'},
                    {nome:'Ditto',tipo:'Normal',fraqueza:'Lutador',num:'132'},
                    {nome:'Meowth',tipo:'Normal',fraqueza:'Lutador',num:'052'},
                    {nome:'Horsea',tipo:'Água',fraqueza:'Grama e Elétrico',num:'116'},
                    {nome:'Vulpix',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'037'},
                    {nome:'Sandshrew',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'027'},
                    {nome:'Poliwag',tipo:'Água',fraqueza:'Grama e Elétrico',num:'060'},
                    {nome:'Bellsprout',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'069'},
                    {nome:'Geodude',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'074'},
                    {nome:'Dratini',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'147'},
                    {nome:'Venonat',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'048'},
                    {nome:'Mankey',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'056'},
                    {nome:'Machop',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'066'},
                    {nome:'Shellder',tipo:'Água',fraqueza:'Grama e Elétrico',num:'090'},
                    {nome:'Charmander',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'004'},
                    {nome:'Abra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'063'},
                    {nome:'Doduo',tipo:'Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'084'},
                    {nome:'Gastly',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'092'},
                    {nome:'Squirtle',tipo:'Água',fraqueza:'Grama e Elétrico',num:'007'},
                    {nome:'Slowpoke',tipo:'Água Psíquico',fraqueza:'Fantasma, Noturno, Grama, Elétrico e Inseto',num:'079'},
                    {nome:'Bulbasaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'001'},
                    {nome:'Pikachu',tipo:'Elétrico',fraqueza:'Terreste',num:'025'}
                ];
                break;
            case 2:
                return [
                    {nome:'Oddish',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'043'},
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
                    {nome:'Staryu',tipo:'Água',fraqueza:'Grama e Elétrico',num:'121'},
                    {nome:'Rhyhorn',tipo:'Pedra Terrestre',fraqueza:'Metálico, Gelo, Água, Lutador, Grama e Terrestre',num:'111'},
                    {nome:'Pidgeotto',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'017'},
                    {nome:'Growlithe',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'058'},
                    {nome:'Omanyte',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'138'},
                    {nome:'Kabuto',tipo:'Pedra Água',fraqueza:'Grama, Elétrico, Lutador e Terrestre',num:'140'},
                    {nome:'Nidorina',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'030'},
                    {nome:'Nidorino',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'033'},
                    {nome:'Farfetch`d',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'083'},
                    {nome:'Poliwhirl',tipo:'Água',fraqueza:'Grama e Elétrico',num:'061'},
                    {nome:'Onix',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'095'},
                    {nome:'Lickitung',tipo:'Normal',fraqueza:'Lutador',num:'108'},
                    {nome:'Weepinbell',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'070'},
                    {nome:'Graveler',tipo:'Pedra Terrestre',fraqueza:'Metálico, Lutador, Água, Gelo, Grama e Terrestre',num:'075'},
                    {nome:'Butterfree',tipo:'Inseto Voador',fraqueza:'Fogo, Voador, Elétrico, Gelo e Pedra',num:'012'},
                    {nome:'Beedrill',tipo:'Inseto Voador',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'015'},
                    {nome:'Gloom',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'044'},
                    {nome:'Porygon',tipo:'Normal',fraqueza:'Lutador',num:'137'},
                    {nome:'Kadabra',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'064'},
                    {nome:'Ivysaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'002'},
                    {nome:'Charmeleon',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'005'},
                ];
                break;
            case 3:
                return [
                    {nome:'Wartortle',tipo:'Água',fraqueza:'Grama e Elétrico',num:'008'},
                    {nome:'Parasect',tipo:'Inseto Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso, Pedra e Inseto',num:'047'},
                    {nome:'Machoke',tipo:'Lutador',fraqueza:'Psíquico, Voador e Fada',num:'067'},
                    {nome:'Haunter',tipo:'Fantasma Venenoso',fraqueza:'Fantasma, Noturno, Psíquico e Terrestre',num:'093'},
                    {nome:'Ponyta',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'077'},
                    {nome:'Raticate',tipo:'Normal',fraqueza:'Lutador',num:'020'},
                    {nome:'Dragonair',tipo:'Dragão',fraqueza:'Fada, Gelo e Dragão',num:'148'},
                    {nome:'Dugtrio',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'051'},
                    {nome:'Marowak',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'105'},
                    {nome:'Wigglytuff',tipo:'Fada Normal',fraqueza:'Metálico e Venenoso',num:'040'},
                    {nome:'Tangela',tipo:'Grama',fraqueza:'Fogo, Voador, Gelo, Venenoso e Inseto',num:'114'},
                    {nome:'Persian',tipo:'Normal',fraqueza:'Lutador',num:'054'},
                    {nome:'Seadra',tipo:'Água',fraqueza:'Grama e Elétrico',num:'117'},
                    {nome:'Fearow',tipo:'Voador Normal',fraqueza:'Elétrico, Gelo e Pedra',num:'022'},
                    {nome:'Arbok',tipo:'Venenoso',fraqueza:'Psíquico e Terrestre',num:'024'},
                    {nome:'Sandslash',tipo:'Terrestre',fraqueza:'Água, Grama e Gelo',num:'028'},
                    {nome:'Venomoth',tipo:'Inseto Venenoso',fraqueza:'Fogo, Psíquico, Voador e Pedra',num:'049'},
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
                    {nome:'Venusaur',tipo:'Grama Venenoso',fraqueza:'Fogo, Psíquico, Voador e Gelo',num:'003'},
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
                    {nome:'Arcanine',tipo:'Fogo',fraqueza:'Água, Terrestre e Pedra',num:'059'}
                ];
                break;
            case 5:
                return [
                    {nome:'Articuno',tipo:'Gelo Voador',fraqueza:'Metálico, Fogo, Elétrico e Pedra',num:'144'},
                    {nome:'Zapdos',tipo:'Elétrico Voador',fraqueza:'Gelo e Pedra',num:'145'},
                    {nome:'Moltres',tipo:'Fogo Voador',fraqueza:'Água, Elétrico e Pedra',num:'146'},
                    {nome:'Dragonite',tipo:'Dragão Voador',fraqueza:'Fada, Dragão, Gelo e Pedra',num:'149'},
                    {nome:'Mew',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'151'},
                    {nome:'Mewtwo',tipo:'Psíquico',fraqueza:'Fantasma, Noturno e Inseto',num:'150'}
                ];
                break;
            case 6:
                return ['Articuno','Zapdos','Moltres','Dragonite','Mew','Mewtwo'];
                break;
        }
    };

    function nivel(ranking) {
        switch(ranking){
            case 1:
                return ['1','1','2','2','3','4'];
                break;
            case 2:
                return ['5','5','6','6','7','8'];
                break;
            case 3:
                return ['9','9','10','10','11','12'];
                break;
            case 4:
                return ['13','13','14','14','15','16'];
                break;
            case 5:
                return ['17','17','18','18','19','20'];
                break;
            case 6:
                return ['17','17','18','18','19','20'];
                break;
        }
    }

    function contAtributo(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function atributo() {
        atrib = random(['Role 3d6 e descarte o maior valor','Role 3d6, descarte o maior valor e some +1','Role 2d6','Role 2d6 e some +1','Role 3d6 e descarte o menor valor','Role 3d6, descarte o menor valor e some +1']);
        arrayDados = [];
        switch(atrib){
            case 'Role 3d6 e descarte o maior valor':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.sort();
                arrayDados.pop();
                return arrayDados[0]+arrayDados[1];
                break;
            case 'Role 3d6, descarte o maior valor e some +1':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.sort();
                arrayDados.pop();
                return arrayDados[0]+arrayDados[1]+1;
                break;
            case 'Role 2d6':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                return arrayDados[0]+arrayDados[1];
                break;
            case 'Role 2d6 e some +1':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                return arrayDados[0]+arrayDados[1]+1;
                break;
            case 'Role 3d6 e descarte o menor valor':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.sort();
                arrayDados.shift();
                return arrayDados[0]+arrayDados[1];
                break;
            case 'Role 3d6, descarte o menor valor e some +1':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.sort();
                arrayDados.shift();
                return arrayDados[0]+arrayDados[1]+1;
                break;
        }        
    }

    function recompensa(){
        return ['1 Pokemoeda','5 Pokemoeda','1 Pokeball','1 Cura','2 Pokeball','5 Pokemoeda','1 Cura','1 Great Ball','1 Pokemoeda','1 Ultra Ball','1 Ressurreição','1 Master Ball'];
    }

    function cidade(){
        return [
            {cidade:'Cidade de Pewter',descricao:'Você pode comprar uma Pedra de Evolução por 50 Pokemoedas. Com ela, você evolui seu Pokémon imediatamente, fazendo com que ele ganhe +1 ponto de atributo'},
            {cidade:'Cidade de Cerulean',descricao:'Em Cerulean você pode visitar a Caverna de Cerulean pagando 50 Pokemoedas. Cada vez que entrar, jogue 1d6. Se cair 6, aparece um Mewtwo selvagem para você enfrentar. Caso caia qualquer outro resultado, gere o Pokemon seguindo as regras normais'},
            {cidade:'Cidade de Vermillion',descricao:'Você pode comprar um Bilhete de Trem por 100 Pokemoedas. Quando utilizá-lo, você vai imediatamente para uma cidade em que já esteve anteriormente'},
            {cidade:'Cidade de Celadon',descricao:'Você pode comprar uma Flauta por 20 Pokemoedas. Com ela você pode evitar um encontro com um Pokémon selvagem'},
            {cidade:'Cidade de Fuschia',descricao:'Em Fuschia você pode pagar 50 Pokemoedas para entrar no Safari Pokemon. No Safari Pokémon, você pode enfrentar 5 Pokémons selvagens cada vez que entrar. Role na Tabela 13 para saber qual Pokémon selvagem aparece'},
            {cidade:'Cidade de Saffron',descricao:'Você pode comprar um Bilhete de Trem por 50 Pokemoedas. Quando utilizá-lo, você vai imediatamente para uma cidade em que já esteve anteriormente'},
            {cidade:'Cidade de Cinnabar',descricao:'Você pode comprar uma Vara de Pesca por 20 Pokemoedas. Quando utilizá-la, você vai enfrentar um Pokémon do tipo água'},
            {cidade:'Cidade de Viridian',descricao:'Na primeira vez que você chegar a Viridian, você recebe 1 Pokeball infalível! Com ela, você captura um Pokémon sem qualquer teste. Você só recebe este item uma vez'},
        ];
    }

    function treinador(){
        return [
            {qtdd:1,ranking:'atual'},
            {qtdd:1,ranking:'atual'},
            {qtdd:1,ranking:'atual'},
            {qtdd:2,ranking:'atual'},
            {qtdd:3,ranking:'atual'},
            {qtdd:3,ranking:'proximo'},
        ];
    }

    function rocket(){
        return [
            {qtdd:1,ranking:'atual'},
            {qtdd:1,ranking:'atual'},
            {qtdd:2,ranking:'atual'},
            {qtdd:2,ranking:'atual'},
            {qtdd:3,ranking:'atual'},
            {qtdd:3,ranking:'proximo'},
        ];
    }

    $('#btnGerarTreinador').click(function(){

        var trainer = random(treinador());
        var imagens = '';
        var pokemons = '';
        var ranking = Number($('#selectRanking').val());
        var arrayPokemons = [];

        arrayPokemons.push(random(pokemon(ranking)));
        arrayPokemons.push(random(pokemon(ranking)));
        arrayPokemons.push(random(pokemon(ranking)));
        arrayPokemons.push(random(pokemon(ranking+1)));

        imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[0].num+'.png>';
        pokemons = pokemons + '<br><strong>Pokémon:</strong> '+arrayPokemons[0].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[0].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[0].fraqueza+' <br>Dano '+stress(3,3);

        if(trainer.qtdd >= 2){
            imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[1].num+'.png>';
            pokemons = pokemons + '<br><br><strong>Pokémon:</strong> '+arrayPokemons[1].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[1].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[1].fraqueza+' <br>Dano '+stress(3,3);
            
            if(trainer.ranking == 'proximo'){
                imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[3].num+'.png>';
                pokemons = pokemons + '<br><br><strong>Pokémon:</strong> '+arrayPokemons[3].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[3].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[3].fraqueza+' <br>Dano '+stress(3,3);
            } else if(trainer.qtdd >= 3){
                imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[2].num+'.png>';
                pokemons = pokemons + '<br><br><strong>Pokémon:</strong> '+arrayPokemons[2].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[2].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[2].fraqueza+' <br>Dano '+stress(3,3);
            }

        }

        $('.boxPokemon').prepend('<div class="boxNPC"><strong>Treinador:</strong><br><center>'+imagens+'</center>'+pokemons+'</div>');

        activateStressBox();

    });

    $('#btnGerarRocket').click(function(){

        var trainer = random(rocket());
        var imagens = '';
        var pokemons = '';
        var ranking = Number($('#selectRanking').val());
        var arrayPokemons = [];

        arrayPokemons.push(random(pokemon(ranking)));
        arrayPokemons.push(random(pokemon(ranking)));
        arrayPokemons.push(random(pokemon(ranking)));
        arrayPokemons.push(random(pokemon(ranking+1)));

        imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[0].num+'.png>';
        pokemons = pokemons + '<br><strong>Pokémon:</strong> '+arrayPokemons[0].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[0].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[0].fraqueza+' <br>Dano '+stress(3,3);

        if(trainer.qtdd >= 2){
            imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[1].num+'.png>';
            pokemons = pokemons + '<br><br><strong>Pokémon:</strong> '+arrayPokemons[1].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[1].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[1].fraqueza+' <br>Dano '+stress(3,3);
            
            if(trainer.ranking == 'proximo'){
                imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[3].num+'.png>';
                pokemons = pokemons + '<br><br><strong>Pokémon:</strong> '+arrayPokemons[3].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[3].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[3].fraqueza+' <br>Dano '+stress(3,3);
            } else if(trainer.qtdd >= 3){
                imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[2].num+'.png>';
                pokemons = pokemons + '<br><br><strong>Pokémon:</strong> '+arrayPokemons[2].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[2].tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+arrayPokemons[2].fraqueza+' <br>Dano '+stress(3,3);
            }

        }

        $('.boxPokemon').prepend('<div class="boxNPC"><strong>Equipe Rocket:</strong><br><center>'+imagens+'</center>'+pokemons+'</div>');

        activateStressBox();

    });

    $('#btnUndo').click(function(){
        $('.boxPokemon .boxNPC:first-child').remove();
    });

    $('#btnGerarCidade').click(function(){

        var city = random(cidade());

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<strong>'+city.cidade+'</strong>: '+city.descricao+
        '</div>');

    });

    $('#btnGerarEncontro').click(function(){

        var evento = random(encontro());
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
            case 'cidade': 
                corbg = '#faa'; 
                faicon = 'fa-home';
                break;
        }

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<h5 style="background-color: '+corbg+'; border-radius: 5px; padding: 5px;"> <i class="fa '+faicon+'"></i> '+evento.evento+'</h5>'+
        '</div>');

    });

    $('#btnGerarRecompensa').click(function(){

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<strong>Recompensa:</strong> '+random(recompensa())+
        '</div>');

    });

    $('#btnGerarPokemon').click(function(){

        var ranking = Number($('#selectRanking').val());
        var pkmn = random(pokemon(ranking));
    
        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<center><img width=200 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png></center>'+
          '<br><strong>Pokémon:</strong> '+pkmn.nome+' '+random(nivel(ranking))+' / '+pkmn.tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+pkmn.fraqueza+' <br>Dano '+stress(3,3)+
        '</div>');

        activateStressBox();

    });

    $('#btnGerarSafari').click(function(){

        var ranking = Number($('#selectRanking').val());
        var pkmn = random(pokemon('safari'));
    
        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<center><img width=200 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+pkmn.num+'.png></center>'+
          '<br><strong>Pokémon:</strong> '+pkmn.nome+' '+random(nivel(ranking))+' / '+pkmn.tipo+' / Atributo '+atributo()+'<br>Fraquezas: '+pkmn.fraqueza+' <br>Dano '+stress(3,3)+
        '</div>');

        activateStressBox();

    });


    $('.boxPokemon').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

