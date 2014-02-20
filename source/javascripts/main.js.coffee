$(document).ready ->
  # Setup photo
  $photo = $('#hex-photo')
  photo = new HexPhoto $photo[0],
    image: $photo.data('image')
  photo.draw()

  # Setup social icon hexes
  $('#social-list svg').each ->
    hex = new HexIcon this
    hex.draw()

  # Setup portfolio hexes
  $mightybell = $('#hex-mightybell')
  mightybell = new HexPortfolio $mightybell[0],
    imagePrimary: $mightybell.data('primary')
    imageSecondary: $mightybell.data('secondary')
    title: $mightybell.parent().attr('title')
  mightybell.draw()

  $hackdesign = $('#hex-hackdesign')
  hackdesign = new HexPortfolio $hackdesign[0],
    imagePrimary: $hackdesign.data('primary')
    imageSecondary: $hackdesign.data('secondary')
    title: $hackdesign.parent().attr('title')
  hackdesign.draw()

  $retinamacapps = $('#hex-retinamacapps')
  retinamacapps = new HexPortfolio $retinamacapps[0],
    imagePrimary: $retinamacapps.data('primary')
    imageSecondary: $retinamacapps.data('secondary')
    title: $retinamacapps.parent().attr('title')
  retinamacapps.draw()

  $studioluz = $('#hex-studioluz')
  studioluz = new HexPortfolio $studioluz[0],
    imagePrimary: $studioluz.data('primary')
    imageSecondary: $studioluz.data('secondary')
    title: $studioluz.parent().attr('title')
  studioluz.draw()

  # Position portfolio hexes
  positionRightOf mightybell, photo
  positionRightOf hackdesign, mightybell
  positionBottomRight retinamacapps, mightybell
  positionBottomRight studioluz, hackdesign

positionRightOf = (hex, originHex) ->
  $hex = $("##{hex.snap.node.id}")
  $originParent = $("##{originHex.snap.node.id}").parent()

  innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary

  $hex.parent().css
    position: 'absolute'
    top: $originParent.position().top
    left: $originParent.position().left + Snap.Hexagon.width(innerHex) + 30

positionBottomRight = (hex, originHex) ->
  $hex = $("##{hex.snap.node.id}")
  $originParent = $("##{originHex.snap.node.id}").parent()

  innerHex = if originHex.hex then originHex.hex else originHex.hexSecondary
  radius = if originHex.RADIUS then originHex.RADIUS else originHex.RADIUS_SECONDARY

  $hex.parent().css
    position: 'absolute'
    top: $originParent.position().top + (Snap.Hexagon.height(innerHex) / 2) + (radius / 2) + 30
    left: $originParent.position().left + (Snap.Hexagon.width(innerHex) / 2) + 15
