class @HexAbout
  ROTATION: 30
  ROUNDNESS: 30

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @radius = H.getHexSize()
    @snap.clear()
    @drawHex()
    @setSize()
    @

  drawHex: ->
    color = $('#themePrimaryColor').css('color')
    @hex = @snap.hex(@radius, @ROTATION, @ROUNDNESS).attr
      fill: color
      stroke: color

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex
