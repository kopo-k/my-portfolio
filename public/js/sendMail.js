// public/js/sendMail.js

export function initEmailForm({ serviceId, templateId, publicKey }) {
  emailjs.init(publicKey);
  console.log(serviceId, templateId, publicKey);

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm(serviceId, templateId, this)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          alert("Failed to send message: " + error.text);
        });
    });
  }
}
