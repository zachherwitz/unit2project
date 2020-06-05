// OH HI PAGE //
$(() => {

  let emailArray = ['test1@testmail.com', 'test2@testmail.com', 'test3#testmail.com']

  let today = new Date();



  $('#email-button').text('Email Distro').click(() => {
    window.location.href = `mailto:${emailArray[0]}?subject=CallSheet&body=Call Sheet`
  })




})
// JQUERY GO BYE BYE //
