window.onload = function () {
  const form = document.querySelector('#upma-form');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (submitButton) {
      submitButton.disabled = true; // disable the submit button
    }
    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        // Handle the successful submission here.
        alert("Message sent successfully. Thank you!");
        form.reset(); // reset the form after successful submission
      } else {
        // Handle the submission error here.
        alert("Sorry, could not process your request at this time. Please, try again later.");
      }
    })
    .catch(error => {
      // Handle any network or other errors here.
      //console.error(error);
      alert("An error just occured. Please, check your connection and try again.");
    })
    .finally(() => {
        if (submitButton) {
          submitButton.disabled = false; // re-enable the submit button
        }
    });
  });

};
