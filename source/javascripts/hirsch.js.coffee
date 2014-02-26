class window.Hirsch
  @winWidth: null

  @getHexSize: ->
    $('#hexes li:eq(0)').width() / 2

  @getHexRoundness: ->
    if @winWidth > 768
      30
    else if @winWidth > 568 and @winWidth <= 768
      20
    else
      20

  @setWinWidth: ->
    @winWidth = $(window).width()

  @setup: ->
    # Setup photo
    $photo = $('#hex-photo')
    H.photo = new HexPhoto $photo[0],
      image: $photo.data('image')

    # Setup about
    $about = $('#hex-about')
    H.about = new HexAbout $about[0]

    # Setup portfolio hexes
    $mightybell = $('#hex-mightybell')
    H.mightybell = new HexPortfolio $mightybell[0],
      imagePrimary: $mightybell.data('primary')
      imageSecondary: $mightybell.data('secondary')
      text: $mightybell.parent().attr('title')

    $hackdesign = $('#hex-hackdesign')
    H.hackdesign = new HexPortfolio $hackdesign[0],
      imagePrimary: $hackdesign.data('primary')
      imageSecondary: $hackdesign.data('secondary')
      text: $hackdesign.parent().attr('title')

    $retinamacapps = $('#hex-retinamacapps')
    H.retinamacapps = new HexPortfolio $retinamacapps[0],
      imagePrimary: $retinamacapps.data('primary')
      imageSecondary: $retinamacapps.data('secondary')
      text: $retinamacapps.parent().attr('title')

    $studioluz = $('#hex-studioluz')
    H.studioluz = new HexPortfolio $studioluz[0],
      imagePrimary: $studioluz.data('primary')
      imageSecondary: $studioluz.data('secondary')
      text: $studioluz.parent().attr('title')

  @draw: ->
    @photo.draw()
    @about.draw()
    @mightybell.draw()
    @hackdesign.draw()
    @retinamacapps.draw()
    @studioluz.draw()

  @drawSocial: ->
    $('#social-list svg').each ->
      hex = new HexIcon this
      hex.draw()

  @position: ->
    setTimeout =>
      # Position hexes
      if @winWidth > 568
        @positionBottomRight @about, @photo
        @positionRightOf @mightybell, @photo
        @positionRightOf @hackdesign, @mightybell
        @positionBottomRight @retinamacapps, @mightybell
        @positionBottomRight @studioluz, @hackdesign
      else if @winWidth > 320 and @winWidth <= 568
        @positionRightOf @about, @photo
        @positionBottomLeft @mightybell, @about
        @positionRightOf @hackdesign, @mightybell
        @positionBottomLeft @retinamacapps, @mightybell
        @positionRightOf @studioluz, @retinamacapps
      else
        @positionBottomRight @about, @photo
        @positionBottomLeft @mightybell, @about
        @positionBottomRight @hackdesign, @mightybell
        @positionBottomLeft @retinamacapps, @hackdesign
        @positionBottomRight @studioluz, @retinamacapps

      # Position about
      $('#about-intro-container').css
        width: Snap.Hexagon.width(@about.hex)
        height: Snap.Hexagon.height(@about.hex)
        position: 'absolute'
        top: 0
        left: 0
      $('#about-intro p').show()
    , 100

  @positionRightOf: (hex, originHex) ->
    $hex = $("##{hex.snap.node.id}")
    $originParent = $("##{originHex.snap.node.id}").closest('li')
    originParentPosition = $originParent.position()

    innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary

    $hex.closest('li').css
      position: 'absolute'
      top: originParentPosition.top
      left: originParentPosition.left + Snap.Hexagon.width(innerHex) + 30

  @positionBottomRight: (hex, originHex) ->
    $hex = $("##{hex.snap.node.id}")
    $originParent = $("##{originHex.snap.node.id}").closest('li')
    originParentPosition = $originParent.position()

    innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary
    radius = H.getHexSize()

    $hex.closest('li').css
      position: 'absolute'
      top: originParentPosition.top + (Snap.Hexagon.height(innerHex) / 2) + (radius / 2) + 30
      left: originParentPosition.left + (Snap.Hexagon.width(innerHex) / 2) + 15

  @positionBottomLeft: (hex, originHex) ->
    $hex = $("##{hex.snap.node.id}")
    $originParent = $("##{originHex.snap.node.id}").closest('li')
    originParentPosition = $originParent.position()

    innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary
    radius = H.getHexSize()

    $hex.closest('li').css
      position: 'absolute'
      top: originParentPosition.top + (Snap.Hexagon.height(innerHex) / 2) + (radius / 2) + 30
      left: originParentPosition.left - (Snap.Hexagon.width(innerHex) / 2) - 15

window.H = window.Hirsch
