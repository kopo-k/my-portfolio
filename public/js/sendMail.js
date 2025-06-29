// public/js/sendMail.js
import emailjs from 'https://cdn.emailjs.com/dist/email.min.js';

export function initEmailForm() {
  emailjs.init("YOUR_PUBLIC_KEY"); // 公開鍵をここに記入

  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
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

