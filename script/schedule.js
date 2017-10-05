var blocks = {
  "regular":[
    {"start":"7:45","end":"9:06","name":"Block 1","bold":false,"startHour":7,"startMinute":45,"endHour":9,"endMinute":6},
    {"start":"9:06","end":"9:16","name":"Break","bold":true,"startHour":9,"startMinute":6,"endHour":9,"endMinute":16},
    {"start":"9:21","end":"10:53","name":"Block 2","bold":false,"startHour":9,"startMinute":21,"endHour":10,"endMinute":53},
    {"start":"10:58","end":"12:19","name":"Block 3","bold":false,"startHour":10,"startMinute":58,"endHour":12,"endMinute":19},
    {"start":"12:19","end":"12:44","name":"Intervention","bold":false,"startHour":12,"startMinute":19,"endHour":12,"endMinute":44},
    {"start":"12:44","end":"1:14","name":"Lunch","bold":true,"startHour":12,"startMinute":44,"endHour":1,"endMinute":14},
    {"start":"1:19","end":"2:40","name":"Block 4","bold":false,"startHour":1,"startMinute":19,"endHour":2,"endMinute":40}
  ],
  
  "articulation":[
    {"start":"7:45","end":"8:53","name":"Block 1","bold":false,"startHour":7,"startMinute":45,"endHour":8,"endMinute":53},
    {"start":"8:58","end":"10:14","name":"Block 2","bold":false,"startHour":8,"startMinute":58,"endHour":10,"endMinute":14},
    {"start":"10:14","end":"10:34","name":"Break/Lunch","bold":true,"startHour":10,"startMinute":14,"endHour":10,"endMinute":34},
    {"start":"10:39","end":"11:47","name":"Block 3","bold":false,"startHour":10,"startMinute":39,"endHour":11,"endMinute":47},
    {"start":"11:52","end":"1:00","name":"Block 4","bold":false,"startHour":11,"startMinute":52,"endHour":1,"endMinute":0}
  ]
};

// Maintenance Note: Change all `var data = blocks` to `var data = JSON.parse(blocks);` when editing code

function getTimeAdv () {
  var date = new Date();
  return [ date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds() ];
}

function getNext () {
  var i;
  var cycle = true;
  var data = blocks;
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var date = new Date();
  var nextEvent;
  var time = getTimeAdv();
  
  if (date.getDay() !== 0 || date.getDay() !== 6) {
    while (cycle) {
      
    }
  }
}

$(document).ready(function () {
  var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  var data = blocks;
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
  } else if (date.getDay() === 2 || date.getDate() === 3 || date.getDate() === 4 || date.getDate() === 5) {
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
