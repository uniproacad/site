  window.onload = function () {
    const form = document.getElementById("upma-form");
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      submitButton.disabled = true; // disable the submit button

      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: "POST",
        body: data,
      })
        .then(() => {
          alert("Message sent successfully. Thank you!");
          form.reset(); // reset the form after successful submission
        })
        .catch((error) => console.error(error)) // catch and log any errors
        .finally(() => {
          submitButton.disabled = false; // re-enable the submit button
        });
    });
  };