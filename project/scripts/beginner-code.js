const mainNav = document.getElementById("main-nav");
const navToggle = document.getElementById("nav-toggle");
const form = document.querySelector(".contact-form");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: form.querySelector("input[name='name']").value,
    email: form.querySelector("input[name='email']").value,
    message: form.querySelector("textarea[name='message']").value
  };
  localStorage.setItem("contactFormData", JSON.stringify(formData));
  alert("Your message has been saved!");
});

const faqs = [
  {
    question: "Do I need to install anything before starting?",
    answer: "Not much! You only need a browser like Chrome or Firefox, and we recommend installing VS Code."
  },
  {
    question: "Is this site free to use?",
    answer: "Yes, all learning paths and resources here are 100% free for beginners."
  },
  {
    question: "Which languages do you teach?",
    answer: "We cover HTML, CSS, JavaScript, plus beginner-friendly guides for Python, C#, and SQL."
  }
];

const faqContainer = document.querySelector(".faq");

faqs.forEach(faq => {
  const faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  faqItem.innerHTML = `
    <h3 class="faq-question">${faq.question}</h3>
    <p class="faq-answer">${faq.answer}</p>
  `;

  faqContainer.appendChild(faqItem);
});

if (faqs.length === 0) {
  faqContainer.innerHTML = "<p>No FAQs available right now.</p>";
}
