class @HexPhoto
  ROTATION: 30
  ROUNDNESS: 30

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @radius = H.getHexSize()
    @snap.clear()
    @hex = @snap.hex(@radius, @ROTATION, @ROUNDNESS).attr
      fill: '#fff'
      stroke: '#fff'

    attrs = if H.winWidth > 768
      [-120, -50, 400, 400]
    else if H.winWidth > 568 and H.winWidth <= 768
      [-120, -50, 350, 350]
    else
      [-120, -50, 350, 350]

    @image = @snap.image(@options.image, attrs...).attr
      mask: @hex
    @setSize()
    @

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex
