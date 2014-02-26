class @HexPortfolio
  ROTATION: 30
  OPACITY_SECONDARY: 0.3
  OPACITY_OVERLAY: 0.5
  FADE_SPEED: 150

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @radius_secondary = H.getHexSize()
    @radius_primary = H.getHexSize() - 20
    @roundness = H.getHexRoundness()
    @snap.clear()
    @drawHexSecondary(@options.imageSecondary)
    @drawHexPrimary(@options.imagePrimary)
    @drawHexOverlay()
    @drawText()
    @drawHexHover()
    @setSize()
    @setupHover()
    @

  drawHexSecondary: (imageSrc) ->
    @hexSecondary = @snap.hex(@radius_secondary, @ROTATION, @roundness).attr
      fill: '#fff'
      stroke: '#fff'
      opacity: @OPACITY_SECONDARY

    size = H.getHexSize()
    sizeWH = size * 2
    offsetX = -size + Snap.Hexagon.width(@hexSecondary) / 2
    offsetY = -size + Snap.Hexagon.height(@hexSecondary) / 2
    attrs = [offsetX, offsetY, sizeWH, sizeWH]

    @imageSecondary = @snap.image(imageSrc, attrs...).attr
      mask: @hexSecondary

  drawHexPrimary: (imageSrc) ->
    offset = @radius_secondary - @radius_primary
    @hexPrimary = @snap.hex(@radius_primary, @ROTATION, @roundness)
      .transform(new Snap.Matrix().translate(offset, offset))
      .attr
        fill: '#fff'
        stroke: '#fff'

    size = H.getHexSize()
    sizeWH = size * 2
    offsetX = -size + Snap.Hexagon.width(@hexSecondary) / 2
    offsetY = -size + Snap.Hexagon.height(@hexSecondary) / 2
    attrs = [offsetX, offsetY, sizeWH, sizeWH]

    @imagePrimary = @snap.image(imageSrc, attrs...).attr
      mask: @hexPrimary

  drawHexOverlay: ->
    @hexOverlay = @snap.hex(@radius_secondary, @ROTATION, @roundness).attr
      opacity: 0

  drawHexHover: ->
    @hexHover = @snap.hex(@radius_secondary, @ROTATION, @roundness).attr
      fill: '#fff'
      stroke: '#fff'
      opacity: 0
      cursor: 'pointer'

  drawText: ->
    centerX = Snap.Hexagon.width(@hexSecondary) / 2
    centerY = Snap.Hexagon.height(@hexSecondary) / 2
    @text = @snap.text(centerX, centerY, @options.text).attr
      fill: '#fff'
      'font-family': 'osp-dindin'
      'text-transform': 'uppercase'
      'line-height': 1
      opacity: 0
    setTimeout =>
      @text.attr
        x: parseInt(@text.attr('x')) - parseInt(@text.attr('width').substring(0, @text.attr('width').length - 2)) / 2
        y: parseInt(@text.attr('y')) + parseInt(@text.attr('height')) / 2 - 6
    , 250

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hexSecondary
      height: Snap.Hexagon.height @hexSecondary

  setupHover: ->
    return if H.isTouchDevice()
    @hexHover.hover =>
      @hexSecondary.animate opacity: 1, @FADE_SPEED
      @hexPrimary.animate opacity: 0, @FADE_SPEED
      @hexOverlay.animate opacity: @OPACITY_OVERLAY, @FADE_SPEED
      @text.animate opacity: 1, @FADE_SPEED
    , =>
      @text.animate opacity: 0, @FADE_SPEED
      @hexOverlay.animate opacity: 0, @FADE_SPEED
      @hexPrimary.animate opacity: 1, @FADE_SPEED
      @hexSecondary.animate opacity: @OPACITY_SECONDARY, @FADE_SPEED
