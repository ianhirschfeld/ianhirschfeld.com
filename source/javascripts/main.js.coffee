$(document).ready ->
  new Noise($('#bg-noise')[0]).draw(0.10, 150)

  # Setup photo
  $photo = $('#photo')
  hex = new HexPhoto $photo[0],
    image: $photo.data('image')
  hex.draw()

  # Setup social icon hexes
  $('#social-list svg').each ->
    hex = new HexIcon this
    hex.draw()

  # Setup portfolio hexes
  $('#work svg').each ->
    $el = $(this)
    hex = new HexPortfolio this,
      path: $el.next('h3').find('a').attr('href')
      imagePrimary: $el.data('primary')
      imageSecondary: $el.data('secondary')
    hex.draw()
