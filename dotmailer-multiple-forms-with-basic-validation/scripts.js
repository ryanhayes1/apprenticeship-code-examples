$(document).ready(function() {
  if ($('#newsletter').length) {
    $('#newsletter').submit(function(e) {
      var isChecked = document.getElementById('newsletter_consent_checkbox').checked;

      if (validate_signup(this)) {
        if (isChecked === true) {
          window.open("/newsletter-signup", "_blank");
        }
      } else {
        e.preventDefault();
      }
    });
  }

  if ($('.webform-client-form').length) {
    $('.webform-client-form').submit(function() {
      var isChecked = document.getElementById('enquiries_consent_checkbox').checked;
      var requiredFields = $('.required');
      var error = false;

      for (i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === '') {
          error = true;
        }
      }

      if ((isChecked === true) && (error === false)) {
        window.open("/newsletter-signup", "_blank");
      }
    });
  }
});
