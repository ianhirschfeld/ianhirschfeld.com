$(document).ready ->
  H.setWinWidth()
  H.drawSocial()
  H.setup()
  H.draw()
  H.position()

$(window).resize $.debounce 100, ->
  H.setWinWidth()
  H.setup()
  H.draw()
  H.position()
