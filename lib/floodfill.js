function floodFillUtil(screen, x, y, prevC, newC)
{
    console.log(screen);
    var M = screen.length;
    var N = screen[0].length;
    if (x < 0 || x >= M || y < 0 || y >= N) return screen;
    if (screen[x][y] != prevC) return;
    if (screen[x][y] == newC)  return;

    screen[x][y] = newC;

    floodFillUtil(screen, x+1, y, prevC, newC);
    floodFillUtil(screen, x-1, y, prevC, newC);
    floodFillUtil(screen, x, y+1, prevC, newC);
    floodFillUtil(screen, x, y-1, prevC, newC);
}

module.exports.floodFill = function(screen, x, y, newC)
{
  var prevC = screen[x][y];
  floodFillUtil(screen, x, y, prevC, newC);
}
