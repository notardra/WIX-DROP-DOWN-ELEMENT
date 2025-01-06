class FAQElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .faq-container {
          font-family: Arial, sans-serif;
          font-size: 20px; /* Make the text larger */
          width: 90%; /* Increase the width */
          margin: 20px auto; /* Center it on the page with spacing */
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Add shadow for better visual appearance */
          padding: 20px; /* Extra padding around the FAQ container */
          background-color: white; /* Neutral background color */
          border-radius: 10px; /* Rounded edges for the entire FAQ section */
        }

        .question {
          cursor: pointer;
          padding: 15px; /* Add spacing */
          background-color: #830303; /* Loyola theme color */
          color: white;
          border: none;
          text-align: left;
          outline: none;
          font-size: 22px; /* Slightly larger font for questions */
          font-weight: bold; /* Bold font */
          font-family: Arial, sans-serif; /* Arial font for questions */
          width: 100%;
          border-radius: 8px; /* Rounded corners */
          margin-bottom: 20px; /* Add gap between each question */
          transition: background-color 0.3s ease; /* Smooth hover transition */
        }

        .question:hover {
          background-color: #670202; /* Slightly darker hover effect */
        }

        .answer {
          padding: 20px; /* Add spacing */
          display: none;
          background-color: #f9f9f9; /* Answer panel color */
          color: #162d3d; /* Darker font color */
          border-top: 3px solid #ddd; /* Border at the top for better aesthetics */
          font-family: "Futura", sans-serif; /* Futura Light font for answers */
          font-size: 18px; /* Slightly smaller font for answers */
          border-radius: 8px; /* Match the rounded corners */
          margin-top: -15px; /* Align nicely under the question */
        }
      </style>
      <div class="faq-container">
        <button class="question">Do the mock exams cost extra compared to Term 1 classes?</button>
        <div class="answer">At Loyola, we have four terms of classes to get you ready for the GATE exam...</div>

        <button class="question">Many of the other GATE companies do not share their exam papers, can we take Loyola papers home?</button>
        <div class="answer">Yes of course! There is no point in taking the exam if you can’t take the exam home afterwards...</div>

        <button class="question">What if I can't make it to the class because of the holidays?</button>
        <div class="answer">If you're away, you can still join in online on Fridays through Zoom...</div>

        <button class="question">Is there a review session after the exams?</button>
        <div class="answer">Yes, following the mock exams, we conduct a thorough review session...</div>
      </div>
    `;

    const questions = this.shadowRoot.querySelectorAll(".question");
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === "block";
        answer.style.display = isVisible ? "none" : "block";
      });
    });
  }
}

customElements.define("faq-element", FAQElement);

