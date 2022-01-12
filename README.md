# banglejs-2-date-complication #

draws the current date as a simple complication for an analog clock on a Bangle.js 2

This module displays the current date as a complication for an analog clock on a [Bangle.js 2](https://www.espruino.com/Bangle.js2).

<table>
 <tr valign="top">
   <td align="center"><img src="smallDateComplication.png"><br>small date complication</td>
   <td align="center"><img src="largeDateComplication.png"><br>large date complication</td>
 </tr>
</table>

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let Clockwork = require(...);
Clockwork.windUp({
  complications: {
    b:require('https://raw.githubusercontent.com/rozek/banglejs-2-date-complication/main/Complication.js'),
  }
  ...
});
```

It supports both small and large complication areas and adjusts its output automatically: in large areas, both the current month and the current day of the month are shown, in small areas just the day.

## Example ##

The following code shows a complete example for a (still simple) analog clock using this complication:

```
let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

Clockwork.windUp({
  face: require('https://raw.githubusercontent.com/rozek/banglejs-2-twelve-fold-clock-face/main/ClockFace.js'),
  hands:require('https://raw.githubusercontent.com/rozek/banglejs-2-hollow-clock-hands/main/ClockHands.js'),
  complications: {
    b:require('https://raw.githubusercontent.com/rozek/banglejs-2-date-complication/main/Complication.js'),
  }
},{
  Foreground:'#000000', Background:'#FFFFFF', Seconds:'#FF0000',
  withDots:true
});
```

## License ##

[MIT License](LICENSE.md)
