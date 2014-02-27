class @HexAbout
  ROTATION: 30

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @radius = H.getHexSize()
    @roundness = H.getHexRoundness()
    @snap.clear()
    @drawHex()
    @setSize()
    @

  drawHex: ->
    color = $('#themePrimaryColor').css('color')
    @hex = @snap.hex(@radius, @ROTATION, @roundness).attr
      fill: color
      stroke: color

  setSize: ->
    @snap.attr
      width: "#{Snap.Hexagon.width(@hex)}px"
      height: "#{Snap.Hexagon.height(@hex)}px"
