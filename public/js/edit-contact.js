$(() => {

  // $('.distros-container').children().remove();

  const addDistro = () => {
    console.log('adding distro');
    const $newDistroInput = $('<input>').addClass('distro-input')
                                        .addClass('new-input')
                                        .attr({'type': 'text', 'name': 'distros'})
                                        .appendTo('.distros-container')
  }

  const $addDistroButton = $('<div>').addClass('add-distro-button')
                                     .click(addDistro)
                                     .appendTo('.distros-container')





})
