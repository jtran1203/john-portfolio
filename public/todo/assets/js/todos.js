// Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
  //if li is gray
  if($(this).css("color")==="rgb(128, 128, 128)"){
    //turn it black
    $(this).css("color", "black");
    $(this).css("text-decoration", "none");
  }else {
    $(this).css("color", "gray");
    $(this).css("text-decoration", "line-through");
}
});

//Click on X to delete ToDO

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText= $(this).val();
    $(this).val("");
    // create a new li add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>")
  }
});
