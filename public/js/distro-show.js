$(() => {



  const populateEmails = () => {
    let emailAddresses = $('#emails').text();
    let emailSubject = $('#distroName').text();
    // console.log(emailAddresses, emailSubject);
    window.location.href = `mailto:${emailAddresses}?subject=${emailSubject}`

  }

  const $populateEmailButton = $('<button>')
                                .text('Populate Emails')
                                .click(() => {
                                  populateEmails()
                                })
                                .appendTo('body')


})
