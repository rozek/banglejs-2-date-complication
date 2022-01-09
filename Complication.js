(function () {
  let Months = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
  ];

  exports.draw = function draw (x,y, Radius, Settings) {
    let halfScreenWidth   = g.getWidth() / 2;
    let largeComplication = (x === halfScreenWidth);

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.setFont('Vector', 18);
    g.setFontAlign(0,0);

    let today = new Date(), Text;
    if (largeComplication) {
      Text = Months[today.getMonth()] + ' ' + today.getDate();
    } else {
      Text = '' + today.getDate();
    }

    g.drawString(Text, x,y);
  };
})();
