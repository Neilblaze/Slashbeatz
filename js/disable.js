document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("Firebug launched");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("Script injection prevented!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("Script injection prevented!");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("Script injection prevented!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("Script injection prevented!");
      window.event.returnValue = false;
    });
  }