$( document ).ready(function() {

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  setTimeout(function() {
      $("#btnGerarCacada").trigger('click');
  },10);


  $('#btnGerarMonstro').click(function(){

    var clado = $('#selectClado').val();
    var estrelas = $('#selectEstrelas').val();
    var habilidades = '';
    var nivel_max = '';
    var retorno = '';
    var subclado = '';
    var features = [];
    var gifts = [];
    var banes = [];
    var pericias = '';
    var attributes = '';
    var estresse = '';

    if(clado == '') clado = random(['vampiro','bruxo','lobisomem','demonio','morto','reptiliano','estranho']);
    if(estrelas == '') estrelas = random(['1','2','3','4','5']);

    switch(estrelas){
      case '1':

        pericias = exclusiveRandom(skills('ihunt'),6);

        attributes = '<div><strong>HABILIDADES</strong>'+
          '<div class="textIndent"><strong>Boa (+3):</strong> '+pericias[0]+'</div>'+
          '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[1]+', '+pericias[2]+'</div>'+
          '<div class="textIndent"><strong>Média (+1):</strong> '+pericias[3]+', '+pericias[4]+', '+pericias[5]+'</div></div>';

        estrelas = '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>';

        break;
      case '2':

        pericias = exclusiveRandom(skills('ihunt'),8);

        attributes = '<div><strong>HABILIDADES</strong>'+
          '<div class="textIndent"><strong>Grande (+4):</strong> '+pericias[0]+'</div>'+
          '<div class="textIndent"><strong>Boa (+3):</strong> '+pericias[1]+'</div>'+
          '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[2]+', '+pericias[3]+'</div>'+
          '<div class="textIndent"><strong>Média (+1):</strong> '+pericias[4]+', '+pericias[5]+', '+pericias[6]+', '+pericias[7]+'</div></div>';

        estrelas = '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>';

        break;
      case '3':

        pericias = exclusiveRandom(skills('ihunt'),9);

        attributes = '<div><strong>HABILIDADES</strong>'+
          '<div class="textIndent"><strong>Ótima (+5):</strong> '+pericias[8]+'</div>'+
          '<div class="textIndent"><strong>Grande (+4):</strong> '+pericias[0]+'</div>'+
          '<div class="textIndent"><strong>Boa (+3):</strong> '+pericias[1]+'</div>'+
          '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[2]+', '+pericias[3]+'</div>'+
          '<div class="textIndent"><strong>Média (+1):</strong> '+pericias[4]+', '+pericias[5]+', '+pericias[6]+', '+pericias[7]+'</div></div>';

        estrelas = '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>';

        break;
      case '4':

        pericias = exclusiveRandom(skills('ihunt'),11);

        attributes = '<div><strong>HABILIDADES</strong>'+
          '<div class="textIndent"><strong>Ótima (+5):</strong> '+pericias[8]+'</div>'+
          '<div class="textIndent"><strong>Grande (+4):</strong> '+pericias[0]+'</div>'+
          '<div class="textIndent"><strong>Boa (+3):</strong> '+pericias[1]+', '+pericias[9]+'</div>'+
          '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[2]+', '+pericias[3]+', '+pericias[10]+'</div>'+
          '<div class="textIndent"><strong>Média (+1):</strong> '+pericias[4]+', '+pericias[5]+', '+pericias[6]+', '+pericias[7]+'</div></div>';

        estrelas = '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>';

        break;
      case '5':

        pericias = exclusiveRandom(skills('ihunt'),12);

        attributes = '<div><strong>HABILIDADES</strong>'+
          '<div class="textIndent"><strong>Incrível (+6):</strong> '+pericias[10]+'</div>'+
          '<div class="textIndent"><strong>Ótima (+5):</strong> '+pericias[8]+'</div>'+
          '<div class="textIndent"><strong>Grande (+4):</strong> '+pericias[0]+'</div>'+
          '<div class="textIndent"><strong>Boa (+3):</strong> '+pericias[1]+', '+pericias[9]+'</div>'+
          '<div class="textIndent"><strong>Razoável (+2):</strong> '+pericias[2]+', '+pericias[3]+', '+pericias[10]+'</div>'+
          '<div class="textIndent"><strong>Média (+1):</strong> '+pericias[4]+', '+pericias[5]+', '+pericias[6]+'</div></div>';

        estrelas = '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>';

        break;
    };

    estresse = '<p><strong>ESTRESSE</strong><br>'+
      '<strong>'+nbsp(4)+'Físico: </strong>'+characterStressHunt('Atleta',pericias)+' + Valor da Habilidade Atleta<br>'+
      '<strong>'+nbsp(4)+'Mental: </strong>'+characterStressHunt('Sobrevivente',pericias)+' + Valor da Habilidade Sobrevivente';

    switch(clado){
      case "vampiro":
        subclado = random(['Vampiro','Morcego Vampiro','Cascavel Vampira','Lobo Vampiro']);
        break;
    };

    switch(subclado){
      case "Vampiro":
        features.push('Bebedor de Sangue (5)',' Propagação: Propagação Inferior e Levantar do Túmulo (2)',' Regeneração (3)',' Sentidos Especiais: Farejar Sangue (2)',' Imortal: Não Envelhece (2)');
        banes.push('Fraqueza Mortal: Estaca no Coração (U2, P5)',' Fome: Sangue (U1, P2)');
        break;
      case "Morcego Vampiro":
        features.push('Bebedor de Sangue (5)',' Propagação: Propagação Inferior e Levantar do Túmulo (2)',' Regeneração (3)',' Sentidos Especiais: Farejar Sangue (2)',' Imortal: Não Envelhece (2)',' Euforia (1)',' Sentidos Especiais: Leitura De Almas (+1)');
        gifts.push('Telepatia (1)');
        banes.push('Fraqueza Mortal: Estaca no Coração (U2, P5)',' Fome: Sangue (U1, P2)',' Fraqueza Mortal: Luz do Sol (U2, P3)');
        break;
      case "Cascavel Vampira":
        features.push('Bebedor de Sangue (5)',' Propagação: Propagação Inferior e Levantar do Túmulo (2)',' Regeneração (3)',' Sentidos Especiais: Farejar Sangue (2)',' Imortal: Não Envelhece (2)',' Arma Natural: Letal (6)');
        banes.push('Fraqueza Mortal: Estaca no Coração (U2, P5)',' Fome: Sangue (U2, P2)');
        break;
      case "Lobo Vampiro":
        features.push('Bebedor de Sangue (5)',' Propagação: Propagação Inferior e Levantar do Túmulo (2)',' Regeneração (3)',' Sentidos Especiais: Farejar Sangue (2)',' Imortal: Não Envelhece (2)',' Euforia (1)',' Potência Desumana (3)',' Armadura Profana (3)');
        banes.push('Fraqueza Mortal: Estaca no Coração (U2, P5)',' Fome: Sangue (U1, P2)',' Territorialista: Enfrentará ameaças ao território com violência abjeta e avassaladora');
        break;
    };

    if(gifts == '') 
      gifts = 'Nenhum';

    $('.boxiHunt').html(
      '<center><h4>'+subclado+'</h4></center>'+
      '<center><h6>'+estrelas+'</h6></center>'+
      '<div><strong>ASPECTOS</strong></div>'+
      '<div class="textIndent"><strong>Alto-conceito:</strong> '+''+'</div>'+
      '<div class="textIndent"><strong>Drama:</strong> '+''+'</div>'+
      '<div class="textIndent"><strong>Emprego:</strong> '+''+'</div>'+
      '<div class="textIndent"><strong>Quadro dos Sonhos:</strong> '+''+'</div><br>'+
      attributes+'<br>'+
      '<div><strong>TRAÇOS</strong>'+
      '<div class="textIndent"><strong>Características:</strong> '+features+'</div>'+
      '<div class="textIndent"><strong>Dons:</strong> '+gifts+'</div>'+
      '<div class="textIndent"><strong>Fraquezas:</strong> '+banes+'</div>'+
      '</div>'+
      estresse
    );

    $('.boxiHunt').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

    activateStressBox();

  });

  $('#btnGerarCacada').click(function(){

    var cliente = random(['Um monstro','Um cliente representando uma corporação','Um indivíduo milionário','Uma pessoa desesperada','Um contratante profissional obcecado pelo sucesso da caçada','Um grupo muito curioso acerca do alvo','Uma comunidade pobre precisando de ajuda','Um anônimo benevolente']);
    var monstro_um = random(['Um Vampiro','Um Bruxo','Um Lobisomem','Um Demônio','Um Morto-vivo','Um Reptiliano','Uma Criatura estranha...']);
    var monstro_dois = random(['um Vampiro','um Bruxo','um Lobisomem','um Demônio','um Morto-vivo','um Reptiliano','uma Criatura estranha...']);
    var problema = random(['Na verdade, o monstro é de boa, o problema é o cliente','Machucou uma pessoa amada','Aterrorizou uma comunidade','Roubou algo valioso','Assassinato em massa','Uma richa pessoal','Rivalidade romântica','Nenhum, absolutamente nada']);
    var local = random(['Distante, um local isolado','Um bairro local','Propriedade privada de um ricaço','Edifício corporativo','Zona abandonada','Comunidade fechada autossuficiente','Área rural','Universo paralelo']);
    var risco = random(['O monstro deve ser capturado vivo','Tem muita grana em jogo','Tem um objeto envolvido','A reputação do contratante','Há uma pessoa importante na história','O monstro está atrás de um aprendiz','Uma pessoa quer se aliar ao monstro','Nenhum, nada mesmo']);
    var escopo = random([
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Grupo',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Grupo',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Grupo',
    ]);
    var escopo_extra = '';

    var plot_um = random(['O cliente está morto','O monstro é uma criatura diferente da especificada','Os policiais já estão investigando o caso','O caso tem total atenção do público','Ingredientes raros são necessários','O monstro implora por perdão e tem suas razões','O cliente é o vilão da história','Nada, tudo normal']);
    var plot_dois = random(['Surge uma contraoferta interessante','A coisa é mais complicada e profunda do que aparenta ser','Você caiu numa cilada','O monstro já estava morto quando você chegou','Tem um outro #iHunter na caçada','Você fica super a fim do monstro','O monstro é o cliente, ele quer apenas ser morto','Nada, tudo normal']);
    var consequencia = random(['Yay, deu tudo certo nessa caçada!','O cliente não pagou tudo o que devia','O cliente não te pagou','Surgem boletos inesperados','Sua vida de #iHunter é descoberta','Inimigos foram feitos','Tretas no seu trampo regular','Expectativas como #iHunter são rapidamente aumentadas']);

    if(randomNumber(1,20) == 1){
      alvo = monstro_um+' & '+monstro_dois;
    } else {
      alvo = monstro_um;
    }

    if(randomNumber(1,20) == 1)
      escopo_extra = ' (absurdamente mal categorizado)';

    $('.boxiHunt').html(
      '<div><strong>CAÇADA</strong>'+
      '<div class="textIndent"><strong>Cliente:</strong> '+cliente+'</div>'+
      '<div class="textIndent"><strong>Alvo:</strong> '+alvo+'</div>'+
      '<div class="textIndent"><strong>Problema:</strong> '+problema+'</div>'+
      '<div class="textIndent"><strong>Local:</strong> '+local+'</div>'+
      '<div class="textIndent"><strong>Risco:</strong> '+risco+'</div>'+
      '<div class="textIndent"><strong>Escopo:</strong> '+escopo+escopo_extra+'</div>'+
      '</div><br>'+
      '<div><strong>RESOLUÇÕES</strong>'+
      '<div class="textIndent"><strong>Plot twist 1:</strong> <span class="hideContent">'+plot_um+'</span></div>'+
      '<div class="textIndent"><strong>Plot twist 2:</strong> <span class="hideContent">'+plot_dois+'</span></div>'+
      '<div class="textIndent"><strong>Consequência:</strong> <span class="hideContent">'+consequencia+'</span></div>'+
      '</div>'      
    );

    $('.boxiHunt').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});
    $('.hideContent').css({'background-color':'black'});
    $('.hideContent').mouseenter(function() { $( this ).css({'background-color':'white'}) });
    $('.hideContent').mouseleave(function() { $( this ).css({'background-color':'black'}) });

  });


  $('#btnGerarGig').click(function(){

    var cliente = random(['Monster','Corporate Cliente','Wealthy Individual','Overwhelmed Executor','The Upwardly Mobile','Curious Party','Poor Community','The Mysterious Benefactor']);
    var monstro_um = random(['A Vampire','A Wizard','A Werewolf','A Demon','A Hungry Dead','A Reptoid','Something Else...']);
    var monstro_dois = random(['A Vampire','A Wizard','A Werewolf','A Demon','A Hungry Dead','A Reptoid','Something Else...']);
    var problema = random(['Actually, They’re Good','Hurt a Loved One','Terrorized the Community',' Stole Something','Mass Murder','Personal Insult','Romantic Rivalry','Nothing. Just, nothing.']);
    var local = random(['Distant, Isolated Zone','Local Neighborhood','Estate','Operational Business','Derelict Zone','Self-Contained Community','Rural Area','Mysterious Otherworld']);
    var risco = random(['The Monster Itself','The Capital Interests','The Macguffin','The Reputation','The Person of Interest','The Unwilling Recruit','The Eager Recruit','Nothing whatsoever']);
    var escopo = random([
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Mob',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Mob',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Individual',
      '<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i> - Mob',
    ]);
    var escopo_extra = '';

    var plot_um = random(['The Client Is Dead','The Monster’s Something Else','Cops on the Scene','Public Attention','Rare Ingredients Needed','Monster Pleads','The Client’s The Baddie','No First Hangup']);
    var plot_dois = random(['Counter Offer','It Runs Deep','You’re Being Framed','Monster’s Already Dead','Other Hunter','Hot Monster','Suicide By #iHunt','No Second Hangup']);
    var consequencia = random(['Job Went Off Without A Hitch','Client Underpays','Client Doesn’t Pay','Unexpected Expenses','Real Life Caught Up','Enemies Were Made','Day Job Woes','Rapidly Increased Expectations']);

    if(randomNumber(1,20) == 1){
      alvo = monstro_um+' & '+monstro_dois;
    } else {
      alvo = monstro_um;
    }

    if(randomNumber(1,20) == 1)
      escopo_extra = ' (Wildly Miscategorized)';

    $('.boxiHunt').html(
      '<div><strong>THE HUNT</strong>'+
      '<div class="textIndent"><strong>The Client:</strong> '+cliente+'</div>'+
      '<div class="textIndent"><strong>The Mark:</strong> '+alvo+'</div>'+
      '<div class="textIndent"><strong>The Trouble:</strong> '+problema+'</div>'+
      '<div class="textIndent"><strong>The Place:</strong> '+local+'</div>'+
      '<div class="textIndent"><strong>The Charge:</strong> '+risco+'</div>'+
      '<div class="textIndent"><strong>The Scope:</strong> '+escopo+escopo_extra+'</div>'+
      '</div><br>'+
      '<div><strong>SURPRISES</strong>'+
      '<div class="textIndent"><strong>The Hangup:</strong> <span class="hideContent">'+plot_um+'</span></div>'+
      '<div class="textIndent"><strong>The Other Hangup:</strong> <span class="hideContent">'+plot_dois+'</span></div>'+
      '<div class="textIndent"><strong>The Aftermath:</strong> <span class="hideContent">'+consequencia+'</span></div>'+
      '</div>'      
    );

    $('.boxiHunt').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});
    $('.hideContent').css({'background-color':'black'});
    $('.hideContent').mouseenter(function() { $( this ).css({'background-color':'white'}) });
    $('.hideContent').mouseleave(function() { $( this ).css({'background-color':'black'}) });

  });

});