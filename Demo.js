  let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

  Clockwork.windUp({
    hands:require('https://raw.githubusercontent.com/rozek/banglejs-2-hollow-clock-hands/main/ClockHands.js'),
    complications: {
      b:require('https://raw.githubusercontent.com/rozek/banglejs-2-date-complication/main/Complication.js'),
    }
  },{
    Foreground:'#000000', Background:'#FFFFFF', Seconds:'#FF0000'
  });
