$(() => {
  $('.distro-container').toggle()
  $('.contact-container').toggle()
  $('.contacts-buttons-container').toggle()

  $('#distro-toggle-button').click(() => {
    $('.distro-container').toggle('slow')
  })

  $('#contact-toggle-button').click(() => {
    $('.contact-container').toggle('slow')
  })

  $('#contacts-container-button').click(() => {
    $('.contacts-buttons-container').toggle('slow')
  })

})
