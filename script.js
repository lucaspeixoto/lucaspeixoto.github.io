$( document ).ready(function() {
 
  $('#btnGerarNPC').click(function(){

    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<h4 class="title">Humano</h4>'+
      '<p><b><i>'+aspects('good')+', '+aspects('bad')+'</i></b></p>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<h4 class="title">Humano</h4>'+
      '<p><b><i>'+aspects('good')+', '+aspects('bad')+'</i></b></p>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<h4 class="title">Humano</h4>'+
      '<p><b><i>'+aspects('good')+', '+aspects('bad')+'</i></b></p>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<h4 class="title">Humano</h4>'+
      '<p><b><i>'+aspects('good')+', '+aspects('bad')+'</i></b></p>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>'); 

    $('.boxNPC').css('border': 'solid 1px black', 'border-radius': '5px', 'padding': '5px', 'margin': '10px', 'max-width': '500px', 'box-shadow': '5px 5px 10px lightgrey');

  });

});