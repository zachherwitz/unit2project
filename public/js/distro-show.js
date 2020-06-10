$(() => {


  const populateEmails = () => {
    let emailAddresses = $('#emails').text();
    let emailSubject = $('#distroName').text();
    // console.log(emailAddresses, emailSubject);
    window.open(`mailto:${emailAddresses}?subject=${emailSubject}`)
  }
  $('#emails').hide();

  $('.populating-text').click(populateEmails)

})

  // const $populateEmailButton = $('<button>').text('Populate Emails')
  //                                           .click(() => {
  //                                             populateEmails()
  //                                           })
  //                                           .appendTo('.site-container')
  //                                           .attr(
  //                                             "target", "_blank"
  //                                           )
  // })
