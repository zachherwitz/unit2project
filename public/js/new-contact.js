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

  // Creating Nametag
  let $nametag = $('#nametag')

  // Creating Form:
  let $form = $('form').click(() => {$('input').first().focus()})

  let $nameInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'name',
                      'id': 'nameInputField',
                      'placeholder': 'try typing a name',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'name')
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

  let $titleInput = $('<input>')
                    .attr({
                      'type': 'text',
                      'name': 'title',
                      'id': 'titleInputField',
                      'placeholder': 'what is their title?',
                      'autocomplete': 'off'
                    })
                    .keydown((event) => {
                      checkIfEnterPressed(event, 'title')
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


  let $arrayOfInputs = [
    $nameInput,
    $titleInput,
    $departmentInput,
    $phoneInput,
    $emailInput
  ]

  $arrayOfInputs[0].appendTo($form).focus()

  // APPEND NEXT INPUT
  const appendNextInput = () => {
    $form.children().hide(); // detach current input field
    $arrayOfInputs.shift() // remove input field from input array
    if ($arrayOfInputs[0]) { // if there is another input in the input field
      $arrayOfInputs[0].appendTo($form) // append the input to the form
      $('input').next().focus() // focus the input
    } else {
      console.log('error, no more input fields!');
      console.log(contactObject);
      // $form.append(
      //   $nameInput, $titleInput, $departmentInput, $phoneInput, $emailInput).children().hide()
      let $submitButton = $('<input>')
                          .attr({
                            'type': 'submit',
                            'value': 'create contact'
                          })
                          .addClass('submit-button')
                          .appendTo($form)
    }
  }

  // ON ENTER PRESS
  const checkIfEnterPressed = (event, objectKey) => {
    if(event.code === 'Enter') { // Checks to see if the button pressed is 'enter'
      event.preventDefault(); // prevents default input behavior
      let targetValue;
      // IF TEXT INPUT //
      if (event.target.type === 'text') {
        targetValue = event.target.value; // saves the current text in the input field to targetValue
        contactObject[objectKey] = targetValue // add input data to the object
      }
      appendNextInput() // next input field appears
      updateNametag(objectKey, targetValue) // update name tag
    }
  }

    // UPDATE NAMETAG
    const updateNametag = (objectKey, targetValue) => {
      // append a new div with the objectkey and targetvalue
      $(`#nametag-${objectKey}`).text(`${objectKey}: ${targetValue}`)
    }
})
