(function(){
    $("body").hide().fadeIn(1000);
})();

$(document).ready(function () {
    $("#calendar").zabuto_calendar({
      language: "en",
      today: true,
      nav_icon: {
        prev: '<span class="glyphicon glyphicon-chevron-left"></span>',
        next: '<i class="glyphicon glyphicon-chevron-right"></i>'
      }
      });
});
