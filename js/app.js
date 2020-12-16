var x = 0;


$(document).ready(function() {
  var obj = document.createElement("audio");
  obj.src="sound/right-answer.mp3";
  obj.autoPlay=false;
  obj.preLoad=true;       

  $("span[data-answer='correct']").click(function() {
      obj.play();
  });

});

$(document).ready(function() {
  var obj = document.createElement("audio");
  obj.src="sound/wrong-answer.mp3";
  obj.autoPlay=false;
  obj.preLoad=true;       

  $("span[data-answer='incorrect']").click(function() {
      obj.play();
  });

});


$(".carousel-control.left1").click(function () {
  $("#myCarousel").carousel("prev");
});

$(".carousel-control.right1").click(function () {
  $("#myCarousel").carousel("next");
});

$("#myCarousel").carousel({
  wrap: false,
});


$("span[data-answer='correct']").click(function () {
  if (!$(this).hasClass("answered")) {
    $(this).after(
      '<img src="img/tick_icon.jpg" style="height:50px;width:50px"/>'
    );

    $(this).addClass("answered");
    $("span[data-answer='incorrect']:first").addClass("answered");
    if (x==1){
      $("span[data-answer='incorrect']:eq(1)").addClass("answered");
    }
    x++;
    // $("#myAudioElement")[0].play();
  }
});

$("span[data-answer='incorrect']").click(function () {
  if (!$(this).hasClass("answered")) {
    $(this).after(
      '<img src="img/wrong_icon.jpg" style="height:50px;width:50px" class="remove"/>'
    );
    setTimeout(function () {
      $(".remove").remove();
    }, 200);
  }
});

$(".showAnswers").click(function(){
  $("span[data-answer='correct']").trigger('click');
})


$("replayCar").click(function(){
  $("#myCarousel").doLayout();
});
// this.myCarousel.removeAll();
// var items = [];
// for (...) {
//    items.push(<item def>);
{/* }
this.myCarousel.add(items);
this.carousel.doLayout(); // Force the carousel to re-render
this.myCarousel.scrollToCard(0); // This will send the user back to the first card */}