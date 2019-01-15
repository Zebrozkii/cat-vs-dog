$(document).ready(function(){


  $("button#smile , button#laugh").click(function() {
    $("ul#cat").prepend('<li><img src="img/cat1.jpeg"/></li>');
    $("ul#dog").prepend('<li><img src="img/dogsmile.jpeg"/></li>"');
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
      });
    });

  $("button#meow , button#bark").click(function(){
    $("ul#cat").prepend('<li><img src="img/catmeow.gif"/></li>');
    $("ul#dog").prepend('<li><img src="img/dogbark.gif"/></li>');
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
      });
    });

  $("button#sad , button#cry").click(function(){
    $("ul#cat").prepend('<li><img src="img/catsad.jpeg"/></li>');
    $("ul#dog").prepend('<li><img src="img/dogsad.jpeg"/></li>');
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
      });
    });
});
