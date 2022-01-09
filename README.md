# banglejs-2-date-complication #

draws the current date as a simple complication for an analog clock on a Bangle.js 2

This module displays the current date as a complication for an analog clock on a [Bangle.js 2](https://www.espruino.com/Bangle.js2).

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let Complication = require('https://raw.githubusercontent.com/rozek/banglejs-2-date-complication/main/Complication.js');
```

Whenever needed, the module's exported `draw` method will then be invoked as follows:

```
Complication.draw(x,y, Radius, Settings);
```

`x` and `y` define the center of the area into which the complication should be drawn and `radius` its foreseen radius. If `x` contains the horizontal center of the screen, the complication will be either at the topmost or the bottommost possible position for complications - in both cases, it is allowed to cover more space than just a circular disc with the given radius. Instead, it may cover a horizontal span from `x-3*Radius` to `x+3*Radius` (an the same vertical span as small complications: `y-Radius`...`y+Radius`)

## License ##

[MIT License](LICENSE.md)
