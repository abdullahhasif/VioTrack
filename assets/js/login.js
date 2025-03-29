window.addEventListener("load", function() {
    document.getElementById("loader-wrapper").style.display = "none";
});


$(document).ready(function() {
    const signUpButton = $('#signUp');
    const signInButton = $('#signIn');
    const container = $('#container');

    signUpButton.click(function() {
        container.addClass('right-panel-active');
    });

    signInButton.click(function() {
        container.removeClass('right-panel-active');
    });
});
