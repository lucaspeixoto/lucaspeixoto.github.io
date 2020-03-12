$( document ).ready(function() {
 
  $('#btnGerarNPC').click(function(){

    $('.boxNPCs').html(
    '<div class="boxNPC">'+
      '<h3 class="title">Humano</h3>'+
      '<i><h4 class="aspects">'+aspects('good')+', '+aspects('bad')+'</h4></i>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<h3 class="title">Humano</h3>'+
      '<i><h4 class="aspects">'+aspects('good')+', '+aspects('bad')+'</h4></i>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<h3 class="title">Humano</h3>'+
      '<i><h4 class="aspects">'+aspects('good')+', '+aspects('bad')+'</h4></i>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

    $('.boxNPCs').append(
    '<div class="boxNPC">'+
      '<h3 class="title">Humano</h3>'+
      '<i><h4 class="aspects">'+aspects('good')+', '+aspects('bad')+'</h4></i>'+
      '<p><strong>Perito (+2) em:</strong> '+skills('skilled')+', '+skills('skilled')+'</p>'+
      '<p><strong>Ruim (-2) em:</strong> '+skills('bad')+'</p>'+
      '<p><strong>Estresse: </strong>'+stress(0,2)+'</p>'+
    '</div>');

  });

});