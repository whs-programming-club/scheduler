$(document).ready(function () {
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var data = JSON.parse(blocks);
  var i;
  
  for (i = 0; i < data.length; i++) {
    var date = new Date();
    
    if (date.getDate() === 1) {
      
    } else if (date.getDate() === 2 || date.getDate() === 3 || date.getDate() === 4 || date.getDate() === 5) {
      
    }
  }
});
