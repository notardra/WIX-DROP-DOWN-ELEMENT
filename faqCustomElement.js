// Data for the FAQ
const faqData = [
  {
    question: "Do the mock exams cost extra compared to Term 1 classes?",
    answer: "At Loyola, we have four terms of classes to get you ready for the GATE exam. These are Year 5 Term 2, Term 3, Term 4, and the Year 6 Mock Exams. The good news is that our mock exams are the same as our Term 1 classes, so no extra fees! We start early so we can finish all five exams before the big GATE exam on March 15th."
  },
  {
    question: "Many of the other GATE companies do not share their exam papers, can we take Loyola papers home?",
    answer: "Yes of course! There is no point in taking the exam if you can’t take the exam home afterwards. Other companies might not allow students to take their papers home because they might be embarrassed of their material and afraid of parents finding out of their quality. We think it's important to be able to take your exam home to look over it later."
  },
  {
    question: "What if I can't make it to the class because of the holidays?",
    answer: "If you're away, you can still join in online on Fridays through Zoom for any classes you miss. When you're back, you can go back to taking the exams at Murdoch University. We HIGHLY recommend you to come to a face to face class. This is the only opportunity for students to get practice in a real exam hall and reduce exam stress."
  },
  {
    question: "Is there a review session after the exams?",
    answer: "Yes, following the mock exams, we conduct a thorough review session. This includes 2 hours for taking the exam and 2 hours for a detailed marking and review session, aimed at reinforcing learning and addressing any misunderstandings."
  }
];

// Function to dynamically create the FAQ content
function createFAQ() {
  const faqContainer = document.getElementById("faq-container");
  faqContainer.style.fontFamily = "Arial, sans-serif";

  faqData.forEach(({ question, answer }) => {
    // Create FAQ item
    const faqItem = document.createElement("div");
    faqItem.style.borderBottom = "1px solid #444";
    faqItem.style.marginBottom = "20px";
    faqItem.style.paddingBottom = "10px";

    // Create question element
    const faqQuestion = document.createElement("div");
    faqQuestion.style.display = "flex";
    faqQuestion.style.justifyContent = "space-between";
    faqQuestion.style.cursor = "pointer";
    faqQuestion.style.fontSize = "18px";
    faqQuestion.style.color = "#0d0d0d;
    faqQuestion.style.padding = "10px 0";
    faqQuestion.innerHTML = `
      ${question} <span style="font-size: 20px; color: #730606;">+</span>
    `;
    faqQuestion.addEventListener("click", () => toggleAnswer(faqAnswer, faqQuestion));

    // Create answer element
    const faqAnswer = document.createElement("div");
    faqAnswer.style.display = "none";
    faqAnswer.style.marginTop = "10px";
    faqAnswer.style.color = "#474747";
    faqAnswer.style.fontSize = "16px";
    faqAnswer.style.lineHeight = "1.5";
    faqAnswer.textContent = answer;

    // Append question and answer to item
    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);

    // Append item to container
    faqContainer.appendChild(faqItem);
  });
}

// Function to toggle the visibility of the answer
function toggleAnswer(answerElement, questionElement) {
  const icon = questionElement.querySelector("span");
  if (answerElement.style.display === "block") {
    answerElement.style.display = "none";
    icon.textContent = "+";
  } else {
    answerElement.style.display = "block";
    icon.textContent = "-";
  }
}

// Call the function to create the FAQ
document.addEventListener("DOMContentLoaded", createFAQ);


