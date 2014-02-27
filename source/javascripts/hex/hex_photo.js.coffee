class @HexPhoto
  ROTATION: 30

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @radius = H.getHexSize()
    @roundness = H.getHexRoundness()
    @snap.clear()
    @hex = @snap.hex(@radius, @ROTATION, @roundness).attr
      fill: '#fff'
      stroke: '#fff'

    size = H.getHexSize()
    sizeWH = size * 2
    offsetX = -size + Snap.Hexagon.width(@hex) / 2
    offsetY = -size + Snap.Hexagon.height(@hex) / 2

    @image = @snap.image(@options.image, offsetX, offsetY, sizeWH, sizeWH).attr
      mask: @hex
    @setSize()
    @

  setSize: ->
    @snap.attr
      width: "#{Snap.Hexagon.width(@hex)}px"
      height: "#{Snap.Hexagon.height(@hex)}px"
