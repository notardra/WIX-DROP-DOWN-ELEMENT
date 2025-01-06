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
          }
  
          .question {
            cursor: pointer;
            padding: 10px;
            background-color: #32536a;
            color: white;
            border: none;
            text-align: left;
            outline: none;
            font-size: 16px;
            width: 100%;
          }
  
          .answer {
            padding: 10px;
            display: none;
            background-color: #f9f9f9;
            color: #162d3d;
            border-top: 1px solid #ddd;
          }
  
          .question:hover {
            background-color: #2a4561;
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
  