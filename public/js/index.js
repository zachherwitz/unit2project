$(() => {

  $('#full-distros').hide()
  $('#full-contacts').hide()

  $('.contacts-tab').click(() => {
    $('#full-distros').hide()
    $('#full-contacts').show()
    $('.contacts-tab').addClass('underline')
    $('.distros-tab').removeClass('underline')
  })

  $('.distros-tab').click(() => {
    $('#full-contacts').hide()
    $('#full-distros').show()
    $('.contacts-tab').removeClass('underline')
    $('.distros-tab').addClass('underline')
  })


})
