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
            {evento:'Você encontra um Treinador Aleatório',tipo:'treinador'},
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
                    {nome:'Oddish',tipo:'',fraqueza:'',num:''},
                    {nome:'Psyduck',tipo:'',fraqueza:'',num:''},
                    {nome:'Cubone',tipo:'',fraqueza:'',num:''},
                    {nome:'Goldeen',tipo:'',fraqueza:'',num:''},
                    {nome:'Clefairy',tipo:'',fraqueza:'',num:''},
                    {nome:'Magnemite',tipo:'',fraqueza:'',num:''},
                    {nome:'Seel',tipo:'',fraqueza:'',num:''},
                    {nome:'Grimer',tipo:'',fraqueza:'',num:''},
                    {nome:'Krabby',tipo:'',fraqueza:'',num:''},
                    {nome:'Exeggcute',tipo:'',fraqueza:'',num:''},
                    {nome:'Eevee',tipo:'',fraqueza:'',num:''},
                    {nome:'Drowzee',tipo:'',fraqueza:'',num:''},
                    {nome:'Voltorb',tipo:'',fraqueza:'',num:''},
                    {nome:'Tentacool',tipo:'',fraqueza:'',num:''},
                    {nome:'Koffing',tipo:'',fraqueza:'',num:''},
                    {nome:'Staryu',tipo:'',fraqueza:'',num:''},
                    {nome:'Rhyhorn',tipo:'',fraqueza:'',num:''},
                    {nome:'Pidgeotto',tipo:'',fraqueza:'',num:''},
                    {nome:'Growlithe',tipo:'',fraqueza:'',num:''},
                    {nome:'Omanyte',tipo:'',fraqueza:'',num:''},
                    {nome:'Kabuto',tipo:'',fraqueza:'',num:''},
                    {nome:'Nidorina',tipo:'',fraqueza:'',num:''},
                    {nome:'Nidorino',tipo:'',fraqueza:'',num:''},
                    {nome:'Farfetch`d',tipo:'',fraqueza:'',num:''},
                    {nome:'Poliwhirl',tipo:'',fraqueza:'',num:''},
                    {nome:'Onix',tipo:'',fraqueza:'',num:''},
                    {nome:'Lickitung',tipo:'',fraqueza:'',num:''},
                    {nome:'Weepinbell',tipo:'',fraqueza:'',num:''},
                    {nome:'Graveler',tipo:'',fraqueza:'',num:''},
                    {nome:'Butterfree',tipo:'',fraqueza:'',num:''},
                    {nome:'Beedrill',tipo:'',fraqueza:'',num:''},
                    {nome:'Gloom',tipo:'',fraqueza:'',num:''},
                    {nome:'Porygon',tipo:'',fraqueza:'',num:''},
                    {nome:'Kadabra',tipo:'',fraqueza:'',num:''},
                    {nome:'Ivysaur',tipo:'',fraqueza:'',num:''},
                    {nome:'Charmeleon',tipo:'',fraqueza:'',num:''}
                ];
                break;
            case 3:
                return [
                    {nome:'Wartortle',tipo:'',fraqueza:'',num:''},
                    {nome:'Parasect',tipo:'',fraqueza:'',num:''},
                    {nome:'Machoke',tipo:'',fraqueza:'',num:''},
                    {nome:'Haunter',tipo:'',fraqueza:'',num:''},
                    {nome:'Ponyta',tipo:'',fraqueza:'',num:''},
                    {nome:'Raticate',tipo:'',fraqueza:'',num:''},
                    {nome:'Dragonair',tipo:'',fraqueza:'',num:''},
                    {nome:'Dugtrio',tipo:'',fraqueza:'',num:''},
                    {nome:'Marowak',tipo:'',fraqueza:'',num:''},
                    {nome:'Wigglytuff',tipo:'',fraqueza:'',num:''},
                    {nome:'Tangela',tipo:'',fraqueza:'',num:''},
                    {nome:'Persian',tipo:'',fraqueza:'',num:''},
                    {nome:'Seadra',tipo:'',fraqueza:'',num:''},
                    {nome:'Fearow',tipo:'',fraqueza:'',num:''},
                    {nome:'Arbok',tipo:'',fraqueza:'',num:''},
                    {nome:'Sandslash',tipo:'',fraqueza:'',num:''},
                    {nome:'Venomoth',tipo:'',fraqueza:'',num:''},
                    {nome:'Chansey',tipo:'',fraqueza:'',num:''},
                    {nome:'Seaking',tipo:'',fraqueza:'',num:''},
                    {nome:'Golbat',tipo:'',fraqueza:'',num:''},
                    {nome:'Primeape',tipo:'',fraqueza:'',num:''},
                    {nome:'Hitmonlee',tipo:'',fraqueza:'',num:''},
                    {nome:'Hitmonchan',tipo:'',fraqueza:'',num:''},
                    {nome:'Jynx',tipo:'',fraqueza:'',num:''},
                    {nome:'Mr. Mime',tipo:'',fraqueza:'',num:''},
                    {nome:'Magneton',tipo:'',fraqueza:'',num:''},
                    {nome:'Dodrio',tipo:'',fraqueza:'',num:''},
                    {nome:'Dewgong',tipo:'',fraqueza:'',num:''},
                    {nome:'Kingler',tipo:'',fraqueza:'',num:''},
                    {nome:'Pidgeot',tipo:'',fraqueza:'',num:''},
                    {nome:'Clefable',tipo:'',fraqueza:'',num:''},
                    {nome:'Hypno',tipo:'',fraqueza:'',num:''},
                    {nome:'Raichu',tipo:'',fraqueza:'',num:''},
                    {nome:'Rhydon',tipo:'',fraqueza:'',num:''},
                    {nome:'Vileplume',tipo:'',fraqueza:'',num:''},
                    {nome:'Victreebel',tipo:'',fraqueza:'',num:''}
                ];
                break;
            case 4:
                return [
                    {nome:'Slowbro',tipo:'',fraqueza:'',num:''},
                    {nome:'Electrode',tipo:'',fraqueza:'',num:''},
                    {nome:'Weezing',tipo:'',fraqueza:'',num:''},
                    {nome:'Kangaskhan',tipo:'',fraqueza:'',num:''},
                    {nome:'Electabuzz',tipo:'',fraqueza:'',num:''},
                    {nome:'Tauros',tipo:'',fraqueza:'',num:''},
                    {nome:'Golem',tipo:'',fraqueza:'',num:''},
                    {nome:'Magmar',tipo:'',fraqueza:'',num:''},
                    {nome:'Omastar',tipo:'',fraqueza:'',num:''},
                    {nome:'Kabutops',tipo:'',fraqueza:'',num:''},
                    {nome:'Golduck',tipo:'',fraqueza:'',num:''},
                    {nome:'Alakazam',tipo:'',fraqueza:'',num:''},
                    {nome:'Rapidash',tipo:'',fraqueza:'',num:''},
                    {nome:'Muk',tipo:'',fraqueza:'',num:''},
                    {nome:'Gengar',tipo:'',fraqueza:'',num:''},
                    {nome:'Scyther',tipo:'',fraqueza:'',num:''},
                    {nome:'Pinsir',tipo:'',fraqueza:'',num:''},
                    {nome:'Nidoqueen',tipo:'',fraqueza:'',num:''},
                    {nome:'Nidoking',tipo:'',fraqueza:'',num:''},
                    {nome:'Ninetales',tipo:'',fraqueza:'',num:''},
                    {nome:'Machamp',tipo:'',fraqueza:'',num:''},
                    {nome:'Poliwrath',tipo:'',fraqueza:'',num:''},
                    {nome:'Tentacruel',tipo:'',fraqueza:'',num:''},
                    {nome:'Aerodactyl',tipo:'',fraqueza:'',num:''},
                    {nome:'Starmie',tipo:'',fraqueza:'',num:''},
                    {nome:'Venusaur',tipo:'',fraqueza:'',num:''},
                    {nome:'Cloyster',tipo:'',fraqueza:'',num:''},
                    {nome:'Vaporeon',tipo:'',fraqueza:'',num:''},
                    {nome:'Jolteon',tipo:'',fraqueza:'',num:''},
                    {nome:'Flareon',tipo:'',fraqueza:'',num:''},
                    {nome:'Blastoise',tipo:'',fraqueza:'',num:''},
                    {nome:'Exeggutor',tipo:'',fraqueza:'',num:''},
                    {nome:'Charizard',tipo:'',fraqueza:'',num:''},
                    {nome:'Lapras',tipo:'',fraqueza:'',num:''},
                    {nome:'Gyarados',tipo:'',fraqueza:'',num:''},
                    {nome:'Snorlax',tipo:'',fraqueza:'',num:''},
                    {nome:'Arcanine',tipo:'',fraqueza:'',num:''}
                ];
                break;
            case 5:
                return [
                    {nome:'Articuno',tipo:'',fraqueza:'',num:''},
                    {nome:'Zapdos',tipo:'',fraqueza:'',num:''},
                    {nome:'Moltres',tipo:'',fraqueza:'',num:''},
                    {nome:'Dragonite',tipo:'',fraqueza:'',num:''},
                    {nome:'Mew',tipo:'',fraqueza:'',num:''},
                    {nome:'Mewtwo',tipo:'',fraqueza:'',num:''}
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
        var pokemons = '';
        var ranking = Number($('#selectRanking').val());

        if(trainer.ranking == 'atual'){
            for(i=0;i<trainer.qtdd;i++)
                pokemons = pokemons + random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'<br>';
        } else {
            pokemons = pokemons + random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'<br>';
            pokemons = pokemons + random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'<br>';
            pokemons = pokemons + random(pokemon(ranking+1))+' '+random(nivel(ranking+1))+' / Tipo / '+atributo()+' - '+stress(3,3)+'<br>';
        }

        $('.boxPokemon').prepend('<div class="boxNPC"><strong>Treinador:</strong><br>'+pokemons+'</div>');

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
        pokemons = pokemons + '<br><strong>Pokémon:</strong> '+arrayPokemons[0].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[0].tipo+' / Fraquezas: '+arrayPokemons[0].fraqueza+' / Atributo '+atributo()+' - '+stress(3,3);

        if(trainer.qtdd >= 2){
            imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[1].num+'.png>';
            pokemons = pokemons + '<br><strong>Pokémon:</strong> '+arrayPokemons[1].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[1].tipo+' / Fraquezas: '+arrayPokemons[1].fraqueza+' / Atributo '+atributo()+' - '+stress(3,3);
            
            if(trainer.ranking == 'proximo'){
                imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[3].num+'.png>';
                pokemons = pokemons + '<br><strong>Pokémon:</strong> '+arrayPokemons[3].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[3].tipo+' / Fraquezas: '+arrayPokemons[3].fraqueza+' / Atributo '+atributo()+' - '+stress(3,3);
            } else if(trainer.qtdd >= 3){
                imagens = imagens + '<img width=100 src=https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+arrayPokemons[2].num+'.png>';
                pokemons = pokemons + '<br><strong>Pokémon:</strong> '+arrayPokemons[2].nome+' '+random(nivel(ranking))+' / '+arrayPokemons[2].tipo+' / Fraquezas: '+arrayPokemons[2].fraqueza+' / Atributo '+atributo()+' - '+stress(3,3);
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

        switch(evento.tipo){
            case 'rocket': corbg = '#cac'; break;
            case 'selvagem': corbg = '#cec'; break;
            case 'treinador': corbg = '#ace'; break;
            case 'cidade': corbg = '#faa'; break;
        }

        $('.boxPokemon').prepend(
        '<div class="boxNPC">'+
          '<h5 style="background-color: '+corbg+'; border-radius: 5px; padding: 5px;">'+evento.evento+'</h5>'+
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

    $('.boxPokemon').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

