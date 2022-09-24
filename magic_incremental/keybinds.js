Mousetrap.bind('a', function() { updateFirstProgressBar(0); });
Mousetrap.bind('s', function() { updateFirstProgressBar(0.1); });
Mousetrap.bind('d', function() { updateFirstProgressBar(0.5); });
Mousetrap.bind('f', function() { updateFirstProgressBar(1.0); });
Mousetrap.bind('w', function() { testFunction(); });

// test function
function updateFirstProgressBar(percentInDecimal) {
    var bar = $(".progress-bar").get(0) // jquery selectors always return an array of objects
    bar.style.width = "" + Math.round(percentInDecimal*100) + "%"
  }