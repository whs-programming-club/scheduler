var blocks = {
    highSchool: {
      "regular":[
        {"start":"7:45","end":"9:06","name":"Block 1","bold":false,"startHour":7,"startMinute":45,"endHour":9,"endMinute":6},
        {"start":"9:06","end":"9:16","name":"Break","bold":true,"startHour":9,"startMinute":6,"endHour":9,"endMinute":16},
        {"start":"9:21","end":"10:53","name":"Block 2","bold":false,"startHour":9,"startMinute":21,"endHour":10,"endMinute":53},
        {"start":"10:58","end":"12:19","name":"Block 3","bold":false,"startHour":10,"startMinute":58,"endHour":12,"endMinute":19},
        {"start":"12:19","end":"12:44","name":"Intervention","bold":false,"startHour":12,"startMinute":19,"endHour":12,"endMinute":44},
        {"start":"12:44","end":"1:14","name":"Lunch","bold":true,"startHour":12,"startMinute":44,"endHour":13,"endMinute":14},
        {"start":"1:19","end":"2:40","name":"Block 4","bold":false,"startHour":13,"startMinute":19,"endHour":14,"endMinute":40}
      ],

      "articulation":[
        {"start":"7:45","end":"8:53","name":"Block 1","bold":false,"startHour":7,"startMinute":45,"endHour":8,"endMinute":53},
        {"start":"8:58","end":"10:14","name":"Block 2","bold":false,"startHour":8,"startMinute":58,"endHour":10,"endMinute":14},
        {"start":"10:14","end":"10:34","name":"Break/Lunch","bold":true,"startHour":10,"startMinute":14,"endHour":10,"endMinute":34},
        {"start":"10:39","end":"11:47","name":"Block 3","bold":false,"startHour":10,"startMinute":39,"endHour":11,"endMinute":47},
        {"start":"11:52","end":"1:00","name":"Block 4","bold":false,"startHour":11,"startMinute":52,"endHour":13,"endMinute":0}
      ]
    },
    
    middleSchool: {
      "regular": [
        {"start":"7:30","end":"8:20","name":"0 Period","bold":false,"startHour":7,"startMinute":30,"endHour":8,"endMinute":20},
        {"start":"8:30","end":"8:37","name":"Homeroom","bold":false,"startHour":8,"startMinute":30,"endHour":8,"endMinute":37},
        {"start":"8:40","end":"9:27","name":"Period 1","bold":false,"startHour":8,"startMinute":40,"endHour":9,"endMinute":27},
        {"start":"9:30","end":"10:17","name":"Period 2","bold":false,"startHour":9,"startMinute":30,"endHour":10,"endMinute":17},
        {"start":"10:17","end":"10:25","name":"Break","bold":true,"startHour":10,"startMinute":17,"endHour":10,"endMinute":25},
        {"start":"10:25","end":"11:12","name":"Period 3","bold":false,"startHour":10,"startMinute":25,"endHour":11,"endMinute":12},
        {"start":"11:15","end":"12:02","name":"Period 4","bold":false,"startHour":11,"startMinute":15,"endHour":12,"endMinute":2},
        {"start":"12:05","end":"12:46","name":"First Lunch","bold":true,"startHour":12,"startMinute":5,"endHour":12,"endMinute":46},
        {"start":"12:49","end":"1:30","name":"Second Lunch","bold":true,"startHour":12,"startMinute":49,"endHour":1,"endMinute":30},
        {"start":"1:33","end":"2:20","name":"Period 6","bold":false,"startHour":13,"startMinute":33,"endHour":14,"endMinute":20},
        {"start":"2:23","end":"3:10","name":"Period 7","bold":false,"startHour":14,"startMinute":23,"endHour":15,"endMinute":10}
      ],
      
      "articulation":[
        {"start":"7:30","end":"8:20","name":"0 Period","bold":false,"startHour":7,"startMinute":30,"endHour":8,"endMinute":20},
        {"start":"8:30","end":"8:37","name":"Homeroom","bold":false,"startHour":8,"startMinute":30,"endHour":8,"endMinute":37},
        {"start":"8:40","end":"9:17","name":"Period 1","bold":false,"startHour":8,"startMinute":40,"endHour":9,"endMinute":17},
        {"start":"9:20","end":"9:57","name":"Period 2","bold":false,"startHour":9,"startMinute":20,"endHour":9,"endMinute":57},
        {"start":"9:57","end":"10:04","name":"Break","bold":true,"startHour":9,"startMinute":57,"endHour":10,"endMinute":4},
        {"start":"10:04","end":"10:41","name":"Period 3","bold":false,"startHour":10,"startMinute":4,"endHour":10,"endMinute":41},
        {"start":"10:44","end":"11:21","name":"Period 4","bold":false,"startHour":10,"startMinute":44,"endHour":11,"endMinute":21},
        {"start":"11:24","end":"11:58","name":"First Lunch","bold":true,"startHour":11,"startMinute":24,"endHour":11,"endMinute":58},
        {"start":"12:02","end":"12:36","name":"Second Lunch","bold":true,"startHour":12,"startMinute":2,"endHour":12,"endMinute":36},
        {"start":"12:39","end":"1:16","name":"Period 6","bold":false,"startHour":12,"startMinute":39,"endHour":13,"endMinute":16},
        {"start":"1:19","end":"1:56","name":"Period 7","bold":false,"startHour":13,"startMinute":19,"endHour":13,"endMinute":56}
      ]
    }
  };
  
  // Maintenance Note: Change `return blocks.middleSchool` to `return` when editing code

 var data = getSchool();

 function getSchool () {
   //var $Data = JSON.parse(blocks);
   var $Data = blocks;
   if (document.getElementsByName('school').value === 'high') {
     
   } else if (document.getElementsByName('school').value === 'middle') {
     
   } else {
     return $Data.middleSchool;
   }
 }

 function getTimeAdv (date) {
   return [ date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds() ];
 }
 
 function getNext () {
   var i;
   var cycle = true;
   var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
   var date = new Date();
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
           return hoursLeft + ' hours and ' + minutesLeft + ' minutes until the end of ' + render[i].name;
         }
       }
     }
     return 'School is over.';
   }
 }
 
 $(document).ready(function () {
   var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
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
 
 /*var timeUpdate = setInterval(function () {
   $('#time').html('The time is currently ' + new Date().toLocaleTimeString() + '.');
   $('#next').html(getNext());
 }, 500);*/
