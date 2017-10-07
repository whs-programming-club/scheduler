// Maintenance Note: Change all `var data = blocks` to `var data = JSON.parse(blocks);` when editing code

function getTimeAdv (date) {
  return [ date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds() ];
}

function getNext () {
  var i;
  var cycle = true;
  var data = JSON.parse(blocks);
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var date = new Date();
  date.setHours(9);
  date.setMinutes(54);
  var render;
  var currentEvent;
  var time = getTimeAdv(date);
  
  if (date.getDay() !== 0 || date.getDay() !== 6) {
    if (date.getDay() === 1) {
      render = data.articulation;
    } else {
      render = data.regular;
    }
    
    var currentTime = 0;
    var nextTime = 0;
    var hoursLeft = 0;
    var minutesLeft = 0;
    for (i = 0; i < render.length; i++) {
      currentTime = (time[0] * 60) + time[1];
      nextTime = (render[i].endHour * 60) + render[i].endMinute;
      if (currentTime < nextTime) {
        hoursLeft = Math.floor((nextTime - currentTime) / 60);
        minutesLeft = Math.floor((nextTime - (hoursLeft * 60)) - currentTime);
        if (hoursLeft === 0) {
          return minutesLeft + ' minutes until the end of ' + render[i].name;
        } else if (hoursLeft !== 0) {
          return hoursLeft + ' hours and ' + minutesLeft + ' until the end of ' + render[i].name;
        }
      }
    }
  }
}

$(document).ready(function () {
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var data = JSON.parse(blocks);
  var i;
  var date = new Date();
  var render;
  if (date.getDay() === 1) {
    render = data.articulation;
    for (i = 0; i < render.length; i++) {
      if (!render[i].bold) {
        $('#display').append('<tr><td>' + render[i].name + ':</td><td>' + render[i].start + '-' + render[i].end + '</td></tr>');
      } else if (render[i].bold) {
        $('#display').append('<tr><td><strong>' + render[i].name + ':</strong></td><td><strong>' + render[i].start + '-' + render[i].end + '</strong></td></tr>');
      }
    }
    document.getElementsByTagName('title')[0].innerHTML += ': ' + days[new Date().getDay()];
  } else if (date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5) {
    render = data.regular;
    for (i = 0; i < render.length; i++) {
      if (!render[i].bold) {
        $('#display').append('<tr><td>' + render[i].name + ':</td><td>' + render[i].start + '-' + render[i].end + '</td></tr>');
      } else if (render[i].bold) {
        $('#display').append('<tr><td><strong>' + render[i].name + ':</strong></td><td><strong>' + render[i].start + '-' + render[i].end + '</strong></td></tr>');
      }
    }
    document.getElementsByTagName('title')[0].innerHTML += ': ' + days[new Date().getDay()];
  } else if (date.getDay() === 0 || date.getDay() === 6) {
    document.getElementsByTagName('title')[0].innerHTML += ': ' + days[new Date().getDay()];
    $('#text').show();
    $('#text').text("No school today, it's " + days[date.getDay()] + "!");
  }
});
