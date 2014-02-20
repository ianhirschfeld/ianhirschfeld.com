$(document).ready ->
  # Setup photo
  $photo = $('#hex-photo')
  photo = new HexPhoto $photo[0],
    image: $photo.data('image')
  photo.draw()

  # Setup about
  $about = $('#hex-about')
  about = new HexAbout $about[0]
  about.draw()

  # Setup social icon hexes
  $('#social-list svg').each ->
    hex = new HexIcon this
    hex.draw()

  # Setup portfolio hexes
  $mightybell = $('#hex-mightybell')
  mightybell = new HexPortfolio $mightybell[0],
    imagePrimary: $mightybell.data('primary')
    imageSecondary: $mightybell.data('secondary')
    text: $mightybell.parent().attr('title')
  mightybell.draw()

  $hackdesign = $('#hex-hackdesign')
  hackdesign = new HexPortfolio $hackdesign[0],
    imagePrimary: $hackdesign.data('primary')
    imageSecondary: $hackdesign.data('secondary')
    text: $hackdesign.parent().attr('title')
  hackdesign.draw()

  $retinamacapps = $('#hex-retinamacapps')
  retinamacapps = new HexPortfolio $retinamacapps[0],
    imagePrimary: $retinamacapps.data('primary')
    imageSecondary: $retinamacapps.data('secondary')
    text: $retinamacapps.parent().attr('title')
  retinamacapps.draw()

  $studioluz = $('#hex-studioluz')
  studioluz = new HexPortfolio $studioluz[0],
    imagePrimary: $studioluz.data('primary')
    imageSecondary: $studioluz.data('secondary')
    text: $studioluz.parent().attr('title')
  studioluz.draw()

  # Position hexes
  positionBottomRight about, photo
  positionRightOf mightybell, photo
  positionRightOf hackdesign, mightybell
  positionBottomRight retinamacapps, mightybell
  positionBottomRight studioluz, hackdesign

  # Position about
  $('#about-intro-container').css
    width: Snap.Hexagon.width(about.hex)
    height: Snap.Hexagon.height(about.hex)
    position: 'absolute'
    top: 0
    left: 0

positionRightOf = (hex, originHex) ->
  $hex = $("##{hex.snap.node.id}")
  $originParent = $("##{originHex.snap.node.id}").parent()
  originParentPosition = $originParent.position()

  innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary

  $hex.parent().css
    position: 'absolute'
    top: originParentPosition.top
    left: originParentPosition.left + Snap.Hexagon.width(innerHex) + 30

positionBottomRight = (hex, originHex) ->
  $hex = $("##{hex.snap.node.id}")
  $originParent = $("##{originHex.snap.node.id}").parent()
  originParentPosition = $originParent.position()

  innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary
  radius = if originHex.RADIUS then originHex.RADIUS else originHex.RADIUS_SECONDARY

  $hex.parent().css
    position: 'absolute'
    top: originParentPosition.top + (Snap.Hexagon.height(innerHex) / 2) + (radius / 2) + 30
    left: originParentPosition.left + (Snap.Hexagon.width(innerHex) / 2) + 15
