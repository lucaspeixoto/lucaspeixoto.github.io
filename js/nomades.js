$( document ).ready(function() {

  function tipo(){

    let type = random(['humano','criatura','humanoide','forte']);

    switch(type) {

        case "humano":
            return {
                aparencia: "Um humano com a cabeça de ",
                habilidades: "Vida 40 / Força 8 / Proteção 5"
            }
            break;

        case "criatura":
              return {
                  aparencia: "Uma criatura que lembra ",
                  habilidades: "Vida 70 / Força 10 / Proteção 10"
              }
              break;

        case "humanoide":
            return {
                aparencia: "Um humanoide alto parecido com ",
                habilidades: "Vida 60 / Força 8 / Proteção 10"
            }
            break;
            
        case "forte":
            return {
                aparencia: "Um humano forte com características de ",
                habilidades: "Vida 50 / Força 10 / Proteção 5"
            }
            break;
    }
  }

  function animal(){
    return ['um Rato','uma Aranha','um Corvo','um Bode','um Cachorro','uma Cobra','um Morcego','um Esqueleto','uma Mosca','um Lobo','um Gafanhoto','um Réptil','um Polvo'];
  }
  
  function caracteristica1(){
    return ['Fala a língua dos personagens','Está portando uma Arma Futurista (p.213)','Se comunica com gestos inteligíveis','Usa uma língua antiga. É compreensível','Conhece a história/Conflito de um dos personagens','Surge acompanhada por um Inimigo','Já enfrentou um Aliado. Talvez ele saiba de algo','Flamejante. Todos no alcance curto perdem 2 de Vida por turno','Está portando uma Arma Lendária (p.213)','Pode ter surgido de uma Água-viva já descoberta','Mostra evidência de ter capturado um <i>Aliado</i>, se houver','Propõe um acordo aos personagens (p.225), se não for hostil','Tem relação com o Objetivo Final'];
  }

  function caracteristica2(){
    return ['É grande e robusta (Vida +25)','Pode atravessar paredes comuns','Pode se transformar em humano','Consegue criar ilusões','Imune a Poderes (p.205)','Exoesqueleto orgânico (Proteção +5','Pode ficar invisível por até 2 turnos','Carapaça resistente (Proteção +7)','É muito <i>Ágil</i>','Ferida apenas com armas Lendárias','Se teletransporta por curtas distâncias','Usa uma armadura leve (Proteção +3)','Tem garras afiadas (Força +3). '];
  }

  function caracteristica3(){
    return ['Vários olhos. <i>Atenta</i>','Com asas (pode voar)','<i>Muito Forte</i> (Força +4)','Morto-vivo (Vida -10)','Com grandes presas','Olhos totalmente brancos','Usa um respirador mecânico','Olhos vermelhos brilhantes','Emite luzes coloridas','Patas de aranha. Pode escalar paredes','Quatro braços (dois ataques por turno)','Usa trajes ritualísticos coloridos','Emite um ruído grave, baixo'];
  }

  function pedido(){
    return ['Que matem outra Criatura Estranha rival. Ela está em um Lugar Estranho (p.231).','Que encontrem e tragam um Artefato específico (p.214).','Que matem um de seus Inimigos. É um inimigo em comum.','Que sacrifiquem um Aliado, trazendo-a prova de sua morte. Fará duas Ameaças.','Que sequestrem uma pessoa (p.232) importante e a levem até ela.','Que roubem um objeto de grande valor de um Lugar na Cidade (p.231).','Que destruam um novo Antagonista (p.210) e tragam prova do feito. Ele terá ligação com o Antagonista atual.','Que encontrem uma Água-viva e mostrem a ela a localização.','Que eliminem alguém relevante do Culto do Vidro.','Que roubem documentos da Guilda em um Local da Cidade bem guardado (p.231).','Que sequestrem uma pessoa (p.232) importante e a levem até ela.','Que destruam um grupo de Antagonistas (p.210) em um Lugar Estranho (p.231).','Que matem um membro importante da Guilda (p.46).'];
  }

  function recompensa(){
    return ['Um Artefato (p.214).','Transforma uma arma em um Artefato. Sorteie resultados nas tabelas (p.214).','Uma Arma Lendária (p.213).','Uma pista importante para o Objetivo Final.','A localização exata de um Inimigo.','Trará a cabeça de um Inimigo até o final da Temporada.','Ajudar os personagens com um Aliado que esteja em perigo ou com a eliminação de um Inimigo.','Um Artefato (p.214).','Um Equipamento Lendário (p.229).','Apresentar os personagens a um novo e poderoso Aliado.','Se tornará uma Aliada dos personagens durante esta Temporada e a próxima.','Uma pista importante para o Objetivo Final.','Transforma uma arma em um Artefato. Sorteie resultados nas tabelas (p.214).'];
  }

  function ameaca(){
    return ['Ela irá matar um Aliado.','A criatura irá espalhar o caos pela Cidade. Os personagens aceitarão?','Entregará os personagens a um Inimigo ou Antagonista. Haverá uma emboscada.','Irá se juntar ao Antagonista ou a um Inimigo relevante para a Temporada.','Influenciará um dos Aliados a se tornar um traidor/Inimigo.','Matar os personagens.','Impedir que os personagens cumpram o Objetivo Final da temporada.','Atacar e destruir a base de operações (p.151) dos personagens, se houver.','Capturar um Aliado e entregá-lo a um Inimigo.','Entregar os personagens para o Culto do Vidro. Haverá uma emboscada.','Transformar um Aliado em um Inimigo através de controle mental.','Influenciar a Guilda a considerar os personagens traidores. Ela se tornará inimiga.','Ela irá atrás dos Aliados para matá-los, um por Temporada.'];
  }

  function objeto(){
    return ['Um anel (+1 de Foco máximo).','Um par de luvas.','Um instrumento musical. Qual?','Estatueta de Criatura Estranha. (p.224)','Bracelete. (+1 de Poder, se possível).','Um Medalhão.','Uma <i>Arma Medieval</i> (p.213).','Uma máscara (+1 de Destino máximo).','Saco com ervas (usos limitados, p.87).','Uma <i>Arma Futurista</i> (p.213).','Uma fruta (perecível, p.87).','Um gadget com bateria infinita.','Uma vela (usos limitados, p.87).'];
  }


  function caracteristica_objeto(){
    return ['Dourado.','Congelado. Não fere o usuário.','Feito de ossos.','Muito leve. Pesa poucos gramas.','Pesa mais de 10 quilos.','<i>Instável</i> (p.87).','Quente ao toque.','Fica invisível ao comando do usuário.','<i>Imprevisível</i> (p.87).','Emite luz forte quando segurado.','Emite fogo, mas não queima o usuário.','Afasta o Vazio. (+1 de Proteção).','Muda forma (novo Objeto ao usar).'];
  }


  function vantagem_objeto(){
    return ['Recupera 10 pontos de Vida de alguém. <i>Imprevisível</i> (p.87)','Usuário ganha o talento Muito Forte (p.109) por 5 turnos.','Usuário fica invisível por 5 Turnos.','Anima um cadáver por 10 Turnos, obediente ao criador (Vida 15 / Força 8 / Proteção 3).','Usuário pode flutuar por 3 Turnos. Altura máxima de 20 metros, velocidade de corrida.','Cria um escudo ao redor do usuário com Proteção +10 por 2 Turnos.','Velocidade! Personagem ganha uma ação extra por Turno. Dura 3 Turnos.','Usuário é transportado para um lugar no raio de 1 km. Ele deve conhecer o local e mentalizá-lo.','Comanda a mente de alguém a fazer algo, desde que não o coloque em risco.','Cria uma aura de fogo de 2 metros de raio, com Força 10, por 2 Turnos.','Se usado por uma Terceira Entidade (p.205), ganha +1 de Poder por uma Cena.','Pode ler a mente de alguém por 30 segundos. O resultado surge em até 3 Palavras-Chave (p.234).','Traz alguém de volta à vida, com Vida 5. Artefato se desmancha em seguida.'];
  }

  function pedido_objeto(){
    return ['Atrai uma Criatura Estranha (p.224) como Inimigo. Sorteie novamente para o próximo uso.','É ilógico que o usuário perca a consciência por 3 turnos.','Artefato explode com Força 15 no final do Turno seguinte. É destruído.','Objetos eletrônicos no ambiente deixam de funcionar.','Usuário passa por um espelho sem querer! (p.99)','Funciona apenas uma vez ao dia.','Tem um efeito diferente a cada uso. Sorteie um cada vez que usá-lo.','Queima! O usuário perde 5 pontos de Vida.','Funciona apenas duas vezes ao dia.','Afeta a memória do personagem, perde 1 ponto de Experiência. Se não tiver, perde 5 de Vida.','Causa uma onda de choque de 5 metros e Força 5 quando ativado. Atinge também o usuário.','Usuário gasta 1 ponto de Foco. Se não tiver, perde 5 pontos de Vida.','Suga a Força Primordial! Usuário e perde 5 pontos de Vida.'];
  }

  function consequencia_objeto(){
    return ['O dono original, uma Criatura Estranha (p.224) quer ele de volta, e vira um Inimigo.','Um Antagonista (p.210) novo ou já existente quer o Artefato.','O Culto do Vidro (p.51) busca o Artefato e pode fazer uma emboscada.','Um grupo ou seita verá o portador do Artefato como um profeta.','Até três Inimigos se unem para roubá-lo. Quando um aparecer, é lógico que apareçam outros.','O portador contrai uma doença. Em três Temporadas ele morrerá. Qual a cura?','Um novo Antagonista (p.210 ) surge na próxima Temporada para recuperar o Artefato.','Um membro da Guilda quer o Artefato, mas não sabe que ele está com os jogadores.','Uma Criatura Estranha (p.224) precisa do Artefato para sobreviver e fará de tudo para obtê-lo.','Um Aliado torna-se obcecado pelo Artefato e pretende obtê-lo, custe o que custar.','Outro personagem (sorteado e mantido em segredo, só ele saberá) fica obcecado pelo Artefato.','Um Antagonista (p.210) quer o Artefato. Ele se revelará no próximo episódio.','O Artefato é a isca de uma armadilha criada por um Inimigo. É uma emboscada! Ele está aqui!'];
  }

  $('#btnGerarCriatura').click(function(){

    var criatura = tipo();
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<p><b>Aparência: </b>'+criatura.aparencia+' '+random(animal())+
      '<br><b>Habilidades: </b>'+criatura.habilidades+
      '<br><br><b>Características: </b>'+
      '<br>'+random(caracteristica1())+
      '<br>'+random(caracteristica2())+
      '<br>'+random(caracteristica3())+
      '<br><br><b>Pedido: </b>'+random(pedido())+
      '<br><b>Recompensa: </b>'+random(recompensa())+
      '<br><b>Ameaça: </b>'+random(ameaca())+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  $('#btnGerarArtefato').click(function(){
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<p><b>Objeto: </b>'+random(objeto())+
      '<br><b>Característica: </b>'+random(caracteristica_objeto())+
      '<br><b>O que ele dá: </b>'+random(vantagem_objeto())+
      '<br><b>O que ele pede: </b>'+random(pedido_objeto())+
      '<br><b>As consequências: </b>'+random(consequencia_objeto())+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  setTimeout(function() {
      $("#btnGerarCriatura").trigger('click');
  },10);

});

