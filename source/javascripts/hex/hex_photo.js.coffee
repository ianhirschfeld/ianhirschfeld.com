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

    # attrs = if H.winWidth > 768
    #   offsetX = -150 + Snap.Hexagon.width(@hex) / 2
    #   offsetY = -150 + Snap.Hexagon.height(@hex) / 2
    #   [offsetX, offsetY, 350, 350]
    # else if H.winWidth > 568 and H.winWidth <= 768
    #   offsetX = -150 + Snap.Hexagon.width(@hex) / 2
    #   offsetY = -150 + Snap.Hexagon.height(@hex) / 2
    #   [offsetX, offsetY, 350, 350]
    # else
    #   offsetX = -150 + Snap.Hexagon.width(@hex) / 2
    #   offsetY = -150 + Snap.Hexagon.height(@hex) / 2
    #   [offsetX, offsetY, 350, 350]
    size = H.getHexSize()
    sizeWH = size * 2
    offsetX = -size + Snap.Hexagon.width(@hex) / 2
    offsetY = -size + Snap.Hexagon.height(@hex) / 2
    attrs = [offsetX, offsetY, sizeWH, sizeWH]

    @image = @snap.image(@options.image, attrs...).attr
      mask: @hex
    @setSize()
    @

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex
