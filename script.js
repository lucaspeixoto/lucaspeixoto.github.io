$( document ).ready(function() {
 
  $('#btnGenerate').click(function(){
    $('.title').html('Humano');
    $('.aspects').html(aspects('good')+', '+aspects('bad'));
    $('.good').html(skills('skilled')+', '+skills('skilled'));
    $('.bad').html(skills('bad'));
    $('.stress').html(stress(0,2)); 
  });

});