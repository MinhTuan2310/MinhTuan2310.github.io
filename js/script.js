$(".back-to-top").hide();
$("#Portfolio button").click(function(event) {
  var data = $(this).attr("data");
  if(data == undefined){
    $("#Portfolio .row > div").show()
  } else {
    var divShows = $(`#Portfolio div[data=${data}]`);
    var hiddenShows = $("#Portfolio .row > div").not(divShows);
    $(divShows).show();
    $(hiddenShows).hide();
  }
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

});
$(window).scroll(function(event){
  if ($(window).scrollTop() >= $("#Portfolio").offset().top){
    $("#header .navbar").addClass("fixed-top");
    $("#header").addClass("dummy-padding");
    $(".back-to-top").show(1000);

  } else {
    $("#header .navbar").removeClass("fixed-top");
    $("#header").removeClass("dummy-padding");
    $(".back-to-top").hide(1000);


  }
});




