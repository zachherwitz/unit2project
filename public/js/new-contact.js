/* Specific NEW PAGE JavaScript */
$(() => {

  const contactObject = {
    name: '',
    title: '',
    department: '',
    phone: '',
    email: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    emergencyContactRelationship: '',
    distros: ['']
  }

  console.log('new contact page starting', contactObject);

  let $siteContainer = $('.site-container').click(() => {$('input').first().focus()})

  // Creating Nametag
  let $nametag = $('#nametag')

  // Creating Form:
  let $form = $('form').click(() => {$('input').first().focus()})

  let $nameInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'name',
                      'id': 'nameInputField',
                      'placeholder': 'try typing a name and hitting enter',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'name')
                    })

  let $titleInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'title',
                      'id': 'titleInputField',
                      'placeholder': 'what is their title? be specific!',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'title')
                    })

  let $departmentInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'department',
                      'id': 'departmentInputField',
                      'placeholder': 'what department are they in?',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'department')
                    })

  let $phoneInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'phone',
                      'id': 'phoneInputField',
                      'placeholder': 'do you have a phone number for them?',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'phone')
                    })

  let $emailInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'email',
                      'id': 'emailInputField',
                      'placeholder': 'how about an email?',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'email')
                    })

  let $distrosInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'distros',
                      'id': 'distrosInputField',
                      'placeholder': 'add distros. seperate each distro with a " | "',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'distros')
                    })


  let $arrayOfInputs = [
    $nameInput,
    $departmentInput,
    $titleInput,
    $phoneInput,
    $emailInput,
    $distrosInput
  ]

  $arrayOfInputs[0].appendTo($form).focus()

  let distrosArray = []

  // APPEND NEXT INPUT
  const appendNextInput = () => {
    $form.children().hide(); // detach current input field
    $arrayOfInputs.shift() // remove input field from input array
    if ($arrayOfInputs[0]) { // if there is another input in the input field
      $arrayOfInputs[0].appendTo($form) // append the input to the form
      $('input').next().focus() // focus the input
    } else {
      $('<div>').css({'height': '10vh'}).appendTo($form)
      console.log('ready to hatch!');
      console.log(contactObject);
      let $submitButton = $('<input>')
                          .attr({
                            'type': 'submit',
                            'value': 'create contact',
                            'form': 'new-contact'
                          })
                          .addClass('submit-button')
                          .appendTo('.confirm-container')
    }
  }

  // ON ENTER PRESS
  const checkIfEnterPressed = (event, objectKey) => {
    if(event.target.name !== 'name') {
      updateLiveTyping(event, objectKey)
    }
    if(event.code === 'Enter') { // Checks to see if the button pressed is 'enter'
      event.preventDefault(); // prevents default input behavior
      let targetValue;
      // IF TEXT INPUT //
      // console.log(event.target);
      if(event.target.type === 'text') {
        if(event.target.name === 'name') {
          $('#nametag').animate({'height': '50vh'})
          $('#nametag').children().toggle()
          $('.top-tab-container').css({'display': 'flex', 'align-items': 'flex-end'})
          $('#nametag-name').css({'display': 'flex'})
          $('.contact-footer').css({'display': 'flex'})
        }
        if(event.target.name === 'distros') {
          let distrosString = event.target.value.replace(/\s/g,'')
          distrosArray = distrosString.split('|')
          for (let i = 0; i < distrosArray.length; i++) {
            $('<input>').attr({'type': 'text', 'name': 'distros', 'value': `${distrosArray[i]}`}).appendTo($form)
          }
          targetValue = distrosArray
          $('#distrosInputField').detach()
        } else {
          targetValue = event.target.value; // saves the current text in the input field to targetValue
          contactObject[objectKey] = targetValue // add input data to the object
        }
      }
      appendNextInput() // next input field appears
      updateNametag(objectKey, targetValue) // update name tag
    }
  }

  // UPDATE NAMETAG
  const updateLiveTyping = (event, objectKey) => {
    $(event.target).keyup(() => {
      $(`#nametag-${objectKey}`).text($(event.target).val())
    })
  }

  const updateNametag = (objectKey, targetValue) => {
    // append a new div with the objectkey and targetvalue
    if (objectKey !== 'name'){
      $(`#nametag-${objectKey}`).text(`${objectKey}: ${targetValue}`)
    } else {
      $(`#nametag-${objectKey}`).text(`${targetValue.toLowerCase()}`)
    }
  }
})
