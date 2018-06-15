$(document).ready(function() {
   /**
   * Cookie validation
   */

  if ($('#signup').length) {
    var $signup = $('#signup');
    
    $signup.submit(function(e) {

      var email =  document.getElementById('email').value;
      var emailVal = email.indexOf('@');
      var errorString = '';

      if ((email === '') || (emailVal === -1)) {
        var isError = false;
        errorString = 'Please enter your email address';

        if (errorString.length > 0)
          isError = true;

        if (isError)
          alert(errorString);
        return !isError;

      }
      else {
        createCookie('gated_resource', 'value', 365);
      }
    });
  }
}

/**
 * Helper for creating cookies.
 */
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

/**
 * Helper for reading cookies.
 */
function readCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");

  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}
