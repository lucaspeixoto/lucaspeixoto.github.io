$( document ).ready(function() {

    function encontro() {
        return ['Você encontra um Membro da Equipe Rocket','Aparece 1 Pokémon selvagem do Ranking atual','Aparece 1 Pokémon selvagem do Ranking atual','Aparece 1 Pokémon selvagem do Ranking atual','Aparece 1 Pokémon selvagem do Ranking anterior','Você encontra um Treinador Aleatório','Aparece 1 Pokémon selvagem do Ranking atual','Aparece 1 Pokémon selvagem do Ranking atual','Aparecem 2 Pokémon selvagens do Ranking atual (Lute contra eles individualmente)','Você chegou a uma Cidade','Aparece 1 Pokémon selvagem do Ranking atual','Você encontra um Treinador Aleatório','Aparece 1 Pokémon selvagem do Ranking atual','Aparece 1 Pokémon selvagem do Ranking atual','Aparece 1 Pokémon selvagem do Ranking seguinte','Aparece 1 Pokémon selvagem do Ranking atual','Você chegou a um Centro Pokémon aleatório','Você encontra um Treinador Aleatório','Aparece 1 Pokémon selvagem do Ranking atual','Você chegou a uma Cidade',];
    };

    function pokemon(ranking) {
        switch(ranking){
            case 1:
                return ['Caterpie','Weedle','Magikarp','Metapod','Kakuna','Zubat','Pidgey','Rattata','Spearow','Diglett','Jigglypuff','Nidoran♂','Nidoran♀','Paras','Ekans','Ditto','Meowth','Horsea','Vulpix','Sandshrew','Poliwag','Bellsprout','Geodude','Dratini','Venonat','Mankey','Machop','Shellder','Charmander','Abra','Doduo','Gastly','Squirtle','Slowpoke','Bulbasaur','Pikachu'];
                break;
            case 2:
                return ['Oddish','Psyduck','Cubone','Goldeen','Clefairy','Magnemite','Seel','Grimer','Krabby','Exeggcute','Eevee','Drowzee','Voltorb','Tentacool','Koffing','Staryu','Rhyhorn','Pidgeotto','Growlithe','Omanyte','Kabuto','Nidorina','Nidorino','Farfetch`d','Poliwhirl','Onix','Lickitung','Weepinbell','Graveler','Butterfree','Beedrill','Gloom','Porygon','Kadabra','Ivysaur','Charmeleon'];
                break;
            case 3:
                return ['Wartortle','Parasect','Machoke','Haunter','Ponyta','Raticate','Dragonair','Dugtrio','Marowak','Wigglytuff','Tangela','Persian','Seadra','Fearow','Arbok','Sandslash','Venomoth','Chansey','Seaking','Golbat','Primeape','Hitmonlee','Hitmonchan','Jynx','Mr. Mime','Magneton','Dodrio','Dewgong','Kingler','Pidgeot','Clefable','Hypno','Raichu','Rhydon','Vileplume','Victreebel'];
                break;
            case 4:
                return ['Slowbro','Electrode','Weezing','Kangaskhan','Electabuzz','Tauros','Golem','Magmar','Omastar','Kabutops','Golduck','Alakazam','Rapidash','Muk','Gengar','Scyther','Pinsir','Nidoqueen','Nidoking','Ninetales','Machamp','Poliwrath','Tentacruel','Aerodactyl','Starmie','Venusaur','Cloyster','Vaporeon','Jolteon','Flareon','Blastoise','Exeggutor','Charizard','Lapras','Gyarados','Snorlax','Arcanine'];
                break;
            case 5:
                return ['Articuno','Zapdos','Moltres','Dragonite','Mew','Mewtwo'];
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
        console.log(atrib);
        switch(atrib){
            case 'Role 3d6 e descarte o maior valor':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                console.log(arrayDados);
                arrayDados.sort();
                arrayDados.pop();
                return arrayDados[0]+arrayDados[1];
                break;
            case 'Role 3d6, descarte o maior valor e some +1':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                console.log(arrayDados);
                arrayDados.sort();
                arrayDados.pop();
                return arrayDados[0]+arrayDados[1]+1;
                break;
            case 'Role 2d6':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                console.log(arrayDados);
                return arrayDados[0]+arrayDados[1];
                break;
            case 'Role 2d6 e some +1':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                console.log(arrayDados);
                return arrayDados[0]+arrayDados[1]+1;
                break;
            case 'Role 3d6 e descarte o menor valor':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                console.log(arrayDados);
                arrayDados.sort();
                arrayDados.shift();
                return arrayDados[0]+arrayDados[1];
                break;
            case 'Role 3d6, descarte o menor valor e some +1':
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                arrayDados.push(contAtributo(1,6));
                console.log(arrayDados);
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
                pokemons = pokemons + '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
        } else {
            pokemons = pokemons + '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
            pokemons = pokemons + '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
            pokemons = pokemons + '<center>'+random(pokemon(ranking+1))+' '+random(nivel(ranking+1))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
        }

        $('.boxPokemon').html('<div class="boxNPC">'+pokemons+'</div>');

        activateStressBox();

    });

    $('#btnGerarRocket').click(function(){

        var trainer = random(rocket());
        var pokemons = '';
        var ranking = Number($('#selectRanking').val());

        if(trainer.ranking == 'atual'){
            for(i=0;i<trainer.qtdd;i++)
                pokemons = pokemons + '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
        } else {
            pokemons = pokemons + '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
            pokemons = pokemons + '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
            pokemons = pokemons + '<center>'+random(pokemon(ranking+1))+' '+random(nivel(ranking+1))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>';
        }

        $('.boxPokemon').html('<div class="boxNPC">'+pokemons+'</div>');

        activateStressBox();

    });

    $('#btnGerarCidade').click(function(){

        var city = random(cidade());

        $('.boxPokemon').html(
        '<div class="boxNPC">'+
          '<center><h4>'+city.cidade+'</h4></center>'+
          '<p>'+city.descricao+'</p>'+
        '</div>');

    });

    $('#btnGerarEncontro').click(function(){

        $('.boxPokemon').html(
        '<div class="boxNPC">'+
          '<center>'+random(encontro())+'</center>'+
        '</div>');

    });

    $('#btnGerarRecompensa').click(function(){

        $('.boxPokemon').html(
        '<div class="boxNPC">'+
          '<center>'+random(recompensa())+'</center>'+
        '</div>');

    });

    $('#btnGerarPokemon').click(function(){

        var ranking = Number($('#selectRanking').val());
    
        $('.boxPokemon').html(
        '<div class="boxNPC">'+
          '<center>'+random(pokemon(ranking))+' '+random(nivel(ranking))+' / Tipo / '+atributo()+' - '+stress(3,3)+'</center>'+
        '</div>');

        activateStressBox();

    });

    $('.boxPokemon').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

});

