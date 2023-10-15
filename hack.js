
const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const jobTitleInput = document.getElementById("job-title");
const companyInput = document.getElementById("company");
const workEmailInput = document.getElementById("work-email");
const phoneInput = document.getElementById("phone");
const countryInput = document.getElementById("country");
const submitButton = document.getElementById("submit-button");
const confirmationMessage = document.getElementById("confirmation-message");


function isFormValid() {
  return (
    firstNameInput.validity.valid &&
    lastNameInput.validity.valid &&
    jobTitleInput.validity.valid &&
    companyInput.validity.valid &&
    workEmailInput.validity.valid &&
    phoneInput.validity.valid &&
    countryInput.validity.valid &&
    agreeCheckbox.checked
  );
}

function updateSubmitButtonState() {
  submitButton.disabled = !isFormValid();
}

firstNameInput.addEventListener("input", updateSubmitButtonState);
lastNameInput.addEventListener("input", updateSubmitButtonState);
jobTitleInput.addEventListener("input", updateSubmitButtonState);
companyInput.addEventListener("input", updateSubmitButtonState);
workEmailInput.addEventListener("input", updateSubmitButtonState);
phoneInput.addEventListener("input", updateSubmitButtonState);
countryInput.addEventListener("input", updateSubmitButtonState);


contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  
  if (isFormValid()) {
   
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const jobTitle = jobTitleInput.value;
    const company = companyInput.value;
    const workEmail = workEmailInput.value;
    const phone = phoneInput.value;
    const country = countryInput.value;

    
    const confirmationText = `Thank you, ${firstName} ${lastName}! Your message has been sent.`;
    confirmationMessage.textContent = confirmationText;
    
    
    contactForm.reset();
    submitButton.disabled = true;
    
  }
});
