$(function () {

    let getStartedInput = $('#getStartedEmailInput')
    let getStartedForm = $('#getStartedForm')
    let getStartedButton = $('#getStartedButton')

    getStartedInput.on('keyup', function () {
        // updates email value with every key press
        getStartedForm.attr('action', `signup.html?email=${this.value}`);

    })


    getStartedButton.on('click', function () {
        //check to see if email is valid
        if (getStartedInput[0].matches('input:valid')) {
            window.location.href = getStartedForm.attr('action')
        } else {
            //report invalid email to user
            getStartedForm[0].reportValidity();
        }
    })

    // applies email from index.html to signup form
    let signupEmailInput = $('#signupEmailInput')
    var queryString = decodeURIComponent(window.location.search);
    signupEmailInput.val(queryString.substring(7))


});