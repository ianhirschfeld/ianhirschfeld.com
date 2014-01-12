class @HexPhoto
  RADIUS: 80
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

    offset = 0#-200 + Snap.Hexagon.width(@hexSecondary) / 2
    @image = @snap.image(@options.image, offset, offset).attr
      mask: @hex
    @setSize()
    @

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex
