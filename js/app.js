lightbox.option({
  maxWidth: 960,
});

$('input').on("keyup", function () {
  $(".flex a").each(function () {
      if ($(this).attr('data-title').toLowerCase().indexOf($('input').val().toLowerCase()) != -1) {
        $(this).show();
    } else {
        $(this).hide();
    }
  });
});