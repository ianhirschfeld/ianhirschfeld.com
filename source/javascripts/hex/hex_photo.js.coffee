class @HexPhoto
  RADIUS: 125
  ROTATION: 30
  ROUNDNESS: 30

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @hex = @snap.hex(@RADIUS, @ROTATION, @ROUNDNESS).attr
      fill: '#fff'
      stroke: '#fff'

    @image = @snap.image(@options.image, -120, -50, 400, 400).attr
      mask: @hex
    @setSize()
    @

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex
