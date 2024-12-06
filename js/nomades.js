$( document ).ready(function() {

  function tipo(){
    return ["Um humano (Vida 40 / Força 8 / Proteção 5) com cabeça de ","Uma criatura (Vida 70 / Força 10 / Proteção 10) que lembra um(a) ","Um humanoide alto (Vida 60 / Força 8 / Proteção 10) parecido com um(a) ","Um humano forte (Vida 50 / Força 10 / Proteção 5) com características de "];
  }

  function animal(){
    return ['Rato','Aranha','Corvo','Bode','Cachorro','Cobra','Morcego','Esqueleto','Mosca','Lobo','Gafanhoto','Réptil','Polvo'];
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

$('#btnGerarCriatura').click(function(){
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<p><b>Aparência e habilidades: </b>'+random(tipo())+' '+random(animal())+
      '<br>'+random(caracteristica1())+
      '<br>'+random(caracteristica2())+
      '<br>'+random(caracteristica3())+
      '<br><br><b>Um pedido: </b>'+random(pedido())+
      '<br><b>E uma recompensa: </b>'+random(recompensa())+
      '<br><b>E/ou uma ameaça: </b>'+random(ameaca())+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  setTimeout(function() {
      $("#btnGerarCriatura").trigger('click');
  },10);

});

