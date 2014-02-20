class @HexIcon
  RADIUS: 25
  ROTATION: 30
  ROUNDNESS: 15
  FADE_SPEED: 150

  constructor: (el) ->
    @snap = Snap("##{el.id}")
    @parent = $(el).closest('a')
    @themePrimaryColor = $('#themePrimaryColor').css('color')
    @themeSecondaryColor = $('#themeSecondaryColor').css('color')
    @

  draw: ->
    @hex = @snap.hex(@RADIUS, @ROTATION, @ROUNDNESS).attr
      fill: @themeSecondaryColor
      stroke: @themeSecondaryColor
    @setSize()
    @setupHover()
    @

  setSize: ->
    @snap.attr
      width: Snap.Hexagon.width @hex
      height: Snap.Hexagon.height @hex

  setupHover: ->
    $(@parent).hover =>
      @hex.animate
        fill: @themePrimaryColor
        stroke: @themePrimaryColor
      , @FADE_SPEED
    , =>
      @hex.animate
        fill: @themeSecondaryColor
        stroke: @themeSecondaryColor
      , @FADE_SPEED