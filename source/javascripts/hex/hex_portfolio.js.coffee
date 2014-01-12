class @HexPortfolio
  RADIUS_SECONDARY: 135
  RADIUS_PRIMARY: 115
  ROTATION: 30
  ROUNDNESS: 30
  OPACITY_SECONDARY: 0.3
  OPACITY_OVERLAY: 0.5
  FADE_SPEED: 150

  constructor: (el, opts = {}) ->
    @options = opts
    @snap = Snap("##{el.id}")
    @

  draw: ->
    @drawHexSecondary(@options.imageSecondary)
    @drawHexPrimary(@options.imagePrimary)
    @drawHexOverlay()
    @drawText()
    @setSize()
    @setupGroup()
    @setupHover()
    @setupClick()
    @

  drawHexSecondary: (imageSrc) ->
    @hexSecondary = @snap.hex(@RADIUS_SECONDARY, @ROTATION, @ROUNDNESS).attr
      fill: '#fff'
      stroke: '#fff'
      opacity: @OPACITY_SECONDARY

    offset = -200 + Snap.Hexagon.width(@hexSecondary) / 2
    @imageSecondary = @snap.image(imageSrc, offset, offset).attr
      mask: @hexSecondary

  drawHexPrimary: (imageSrc) ->
    offset = @RADIUS_SECONDARY - @RADIUS_PRIMARY
    @hexPrimary = @snap.hex(@RADIUS_PRIMARY, @ROTATION, @ROUNDNESS)
      .transform(new Snap.Matrix().translate(offset, offset))
      .attr
        fill: '#fff'
        stroke: '#fff'

    offset = -180 + Snap.Hexagon.width(@hexPrimary) / 2
    @imagePrimary = @snap.image(imageSrc, offset, offset).attr
      mask: @hexPrimary

  drawHexOverlay: ->
    @hexOverlay = @snap.hex(@RADIUS_SECONDARY, @ROTATION, @ROUNDNESS).attr
      opacity: 0

  drawText: ->
    centerX = Snap.Hexagon.width(@hexSecondary) / 2
    centerY = Snap.Hexagon.height(@hexSecondary) / 2
    @text = @snap.text(centerX, centerY, 'Read more').attr
      fill: '#fff'
      'font-size': '2em'
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

  setupGroup: ->
    @group = @snap.g().attr cursor: 'pointer'
    @group.add @imageSecondary
    @group.add @imagePrimary
    @group.add @hexOverlay
    @group.add @text

  setupHover: ->
    @group.hover =>
      @hexSecondary.animate opacity: 1, @FADE_SPEED
      @hexPrimary.animate opacity: 0, @FADE_SPEED
      @hexOverlay.animate opacity: @OPACITY_OVERLAY, @FADE_SPEED
      @text.animate opacity: 1, @FADE_SPEED
    , =>
      @text.animate opacity: 0, @FADE_SPEED
      @hexOverlay.animate opacity: 0, @FADE_SPEED
      @hexPrimary.animate opacity: 1, @FADE_SPEED
      @hexSecondary.animate opacity: @OPACITY_SECONDARY, @FADE_SPEED

  setupClick: ->
    @group.click => window.location = @options.path
