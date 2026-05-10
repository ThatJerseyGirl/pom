const form = document.querySelector("form");

function onFormSubmit(event) {
   event.preventDefault();
   const data = new FormData(event.target);
   const dataObject = Object.fromEntries(data.entries());
   console.log(dataObject);
   form.reset();
}
console.log("JavaScript is connected!");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || service === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you! Your message has been submitted.";
  formMessage.style.color = "black";

  console.log("Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Service:", service);
  console.log("Message:", message);

  contactForm.reset();
});