$(function () {

    let getStartedInput = $('#getStartedEmailInput')
    let getStartedForm = $('#getStartedForm')
    console.log(getStartedForm)

    getStartedInput.on('keyup', function () {
        // updates email value with every key press
        getStartedForm.attr('action', `/signup.html?email=${this.value}`);

    })

    // applies email from index.html to signup form
    let signupEmailInput = $('#signupEmailInput')
    var queryString = decodeURIComponent(window.location.search);
    signupEmailInput.val(queryString.substring(7))


});