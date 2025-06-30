// public/js/sendMail.js
import emailjs from 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';

export function initEmailForm() {
  const form = document.getElementById("contact-form");
  const loader = document.getElementById("loader");

  if (!form || !loader) return;

  // 初期化
  const serviceID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

  emailjs.init(publicKey);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    loader.classList.remove("hidden");

    const params = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(serviceID, templateID, params);
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      loader.classList.add("hidden");
    }
  });
}
