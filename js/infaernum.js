$( document ).ready(function() {

  function passado(){
    return ['Um invocador que tagarela com caídos','Alguém que já leu o que ainda será escrito','O fervor da divindade antiga, a encarnação da crença morta','Aos olhos dos outros, um louco qualquer','Alguém importante demais para lidar com o trabalho sujo','Astúcia e perspicácia te fizeram sobreviver até aqui','Um escravo, agora livre para continuar lutando','Alguém condenado à forca, salvo pelo prenúncio do fim','Aquele que carrega o peso de muitas mortes','Por algum motivo, um monstro','A justiça de uma única perspectiva','Um conhecedor das profundezas','Alguém que vê o que outros não veem','O servo de um caído que se opõe ao fim de tudo','A chave para um grande acontecimento','Um viajante de sonhos'];
  }

  function sorte(){
    return ['Manifestar milagres climáticos','Promover a cura, prestar auxílios milagrosos','Entender e ser compreendido por seres animalescos e bestas','Resistir, defender a qualquer custo, manter-se de pé','Encontrar caminhos e impedir que te encontrem','Causar boas primeiras impressões','Mover-se intensamente, com reflexos anormais','Esquematizar, lidar com armadilhas','Usar força bruta, superar limitações físicas','Perceber minúcias, notar detalhes ocultos','Investigar, usar da intuição para descobrir','Memorizar o que for preciso, gravar na mente','Improvisar, solucionar com o que é inesperado','Mentir, blefar, pintar como quiser a sua verdade','Conhecer e lidar com o oculto','Liderar, influenciar e cativar'];
  }

  function azar(){
    return ['Fazer-se compreender','Pensar estrategicamente','Empunhar armas','Travar embates físicos','Esconder-se','Ludibriar, blefar','Lidar com o oculto','Encontrar pistas','Perceber ameaças','Negociar','Agir com rapidez','Ler, discernir sinais ou runas','Entender a natureza','Discernir intenções','Tirar vidas','Sujeitar-se a outras opiniões'];
  }

  function tralha(){
    return ['Um pão quase mofado, um cantil com aguardente e um canivete','Um martelo, alguns pregos e um pequeno espelho','Uma corda com gancho, um saco de dormir e uma capa pesada','Um pequeno livro em branco, tinta e uma pena para escrita','Um jogo com cartas marcadas, um cachimbo e um pouco de fumo','Um frasco de perfume, algumas ervas e uma pedra de amolar','Uma pederneira, algumas tochas e um frasco de óleo','Uma barraca desmontada, uma mochila e um cobertor','Uma panela, alguns vegetais e frascos de temperos variados','Uma pá, um crucifixo e vestes cerimoniais','Um molho de várias chaves, alguns cadeados e um par de algemas','Um mapa de algum lugar, uma bússola e uma garrafa de vinho','Um bestiário com páginas faltando, uma estola e um rosário','Um fêmur humano, a pele de algum animal e pequenos crânios de aves','Um pequeno saco de couro cheio de sal, algumas agulhas e um chifre','Uma coroa de espinhos, algumas velas e um pergaminho com uma gravura'];
  }

  function bencao(){
    return ['Um escudo com um brasão estranho capaz de invocar relâmpagos','Um livro com vontade própria que materializa o que for escrito nele','Uma marreta ou berrante com o poder de causar tremores','Uma adaga que permite controlar a alma de quem for estocado por ela','Uma cruz com o dom de repelir caídos','Um mangual capaz de acertar golpes que explodem em chamas','Um animal possuído por um caído','Uma espada que fareja sangue','Um arco que cria flechas necrotizantes por sua corda retesada','Um espelho que mostra a verdade','Um chicote que congela o que é envolto por ele','Uma esfera de vidro que revela o que está por vir','Um cetro que comanda o corpo de alguém morto por ele','Um tridente capaz de controlar as águas e o que delas emerge','Um manto que torna invisível o que cobrir','Uma tatuagem que ganha vida quando seu sangue é derramado'];
  }

  $('#btnGerarPersonagem').click(function(){
    
    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<p><b>Passado: </b>'+random(passado())+
      '<br><b>Sorte: </b>'+random(sorte())+
      '<br><b>Azar: </b>'+random(azar())+
      '<br><b>Tralha: </b>'+random(tralha())+
      '<br><b>Benção: </b>'+random(bencao())+'</p>'+
    '</div>');

    $('.boxNPC').css({'border': 'solid 1px black', 'border-radius': '5px', 'padding': '10px', 'margin': '10px', 'margin-left': '0px', 'max-width': '550px', 'box-shadow': '5px 5px 10px lightgrey'});

  });

  setTimeout(function() {
      $("#btnGerarPersonagem").trigger('click');
  },10);

});

