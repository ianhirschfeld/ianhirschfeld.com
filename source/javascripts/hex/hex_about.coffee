class @HexAbout
  RADIUS: 125
  ROTATION: 30
  ROUNDNESS: 30

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @drawHex()
    @setSize()
    @

  drawHex: ->
    color = $('#themePrimaryColor').css('color')
    @hex = @snap.hex(@RADIUS, @ROTATION, @ROUNDNESS).attr
      fill: color
      stroke: color

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex
