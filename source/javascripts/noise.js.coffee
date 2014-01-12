class @Noise

  constructor: (el) ->
    @el = el
    @context = @el.getContext '2d'
    @resize window.innerWidth, window.innerHeight
    $(window).resize $.debounce(100, => @resize(window.innerWidth, window.innerHeight))
    @

  draw: (opacity = 1, size = 100)->
    canvas = document.createElement 'canvas'
    ctx = canvas.getContext '2d'
    canvas.width = canvas.height = size
    for x in [0..canvas.width-1] by 1
      for y in [0..canvas.height-1] by 1
        number = Math.floor Math.random() * 60
        ctx.fillStyle = "rgba(#{number},#{number},#{number},#{opacity})"
        ctx.fillRect x, y, 1, 1
    $(@el).css
      'backgroundImage': "url(#{canvas.toDataURL("image/png")})"
      'backgroundRepeat': 'repeat'
      'backgroundPosition': '0 0'

  resize: (width, height) ->
    $canvas = $(@el)
    $canvas.attr 'width', width
    $canvas.attr 'height', height
