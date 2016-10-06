window.onload = function() {
  bindEventListeners();
  var sectionsId = [];
  $(".section").each(function(index, value) {
    sectionsId.push("#" + $(value).attr("id"));
  });

  function bindEventListeners() {
    $(".button").on("click", goToNextPage);
  }

  function goToNextPage() {
    var indexOfNext = null;
    var getParentOfTheButton = $(this).parent().attr("id");
    var current = "#" + getParentOfTheButton;
    var indexOfCurrent = sectionsId.indexOf(current);
    if (indexOfCurrent === 0) {
      indexOfNext = indexOfCurrent + 1;
    } else {
      indexOfNext = indexOfCurrent - 1;
    }

    var next = sectionsId[indexOfNext];


    $(current).css('z-index', 30);
    $(next).css('z-index', 20);
    $(current).addClass("hide");

    setTimeout(function() {
      $(current).css('z-index', 10);
      $(next).css('z-index', 30);
      $(current).removeClass('hide');
    }, 1400);



  }
};
