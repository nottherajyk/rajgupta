/**
 * contact.js
 * Validates the contact form, displays inline errors, and swaps in a success state after valid submission.
 */
(function () {
  let form = null;
  let successMessage = null;
  let feedback = null;
  let timeoutId = 0;

  function clearErrorState(fieldGroup) {
    fieldGroup.classList.remove('is-error');
    const field = fieldGroup.querySelector('.field-input, .field-textarea');
    if (field) {
      field.removeAttribute('aria-invalid');
    }
  }

  function clearErrors() {
    const groups = form.querySelectorAll('.field-group');
    groups.forEach(function clearGroup(group) {
      clearErrorState(group);
    });
    feedback.textContent = '';
  }

  function flagField(field) {
    const group = field.closest('.field-group');
    if (!group) {
      return;
    }

    group.classList.add('is-error');
    field.setAttribute('aria-invalid', 'true');
  }

  function validateFields() {
    const requiredFields = Array.prototype.slice.call(form.querySelectorAll('[data-required="true"]'));
    let isValid = true;

    requiredFields.forEach(function validateField(field) {
      if (field.value.trim() !== '') {
        return;
      }

      flagField(field);
      isValid = false;
    });

    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.indexOf('@') === -1) {
      flagField(emailField);
      isValid = false;
    }

    return isValid;
  }

  function restoreForm() {
    form.reset();
    clearErrors();
    form.hidden = false;
    successMessage.classList.remove('is-visible');
  }

  function showSuccess() {
    form.hidden = true;
    successMessage.classList.add('is-visible');
    timeoutId = window.setTimeout(restoreForm, 3000);
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.clearTimeout(timeoutId);
    clearErrors();

    if (!validateFields()) {
      feedback.textContent = 'Please complete all fields and use a valid email address.';
      return;
    }

    showSuccess();
  }

  function init() {
    form = document.getElementById('contact-form');
    successMessage = document.querySelector('.contact-success');
    feedback = document.querySelector('.form-feedback');

    if (!form || !successMessage || !feedback) {
      return;
    }

    form.addEventListener('submit', handleSubmit);
  }

  window.ContactForm = {
    init: init
  };
})();
