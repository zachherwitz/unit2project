$(() => {

  $('#emergency').click((event) => {
    $(event.currentTarget).children().toggle('slow');
  })


})
