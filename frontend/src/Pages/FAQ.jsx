import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./FAQ.css"; // (we’ll style below)

const faqs = [
  {
    question: "What is RuralCare+?",
    answer:
      "RuralCare+ is a multilingual telemedicine platform that bridges the gap between rural communities and quality healthcare."
  },
  {
    question: "How can I consult a doctor?",
    answer:
      "You can consult certified doctors remotely through secure video calls directly from our platform."
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes, all patient data and consultations are encrypted and handled according to healthcare privacy standards."
  },
  {
    question: "Do you support multiple languages?",
    answer:
      "Absolutely! We provide information and consultations in multiple local languages for better accessibility."
  },
  {
    question: "What if I don’t have stable internet?",
    answer:
      "Our platform is optimized for low bandwidth and also works with local health workers for follow-up and support."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">
        <FaQuestionCircle style={{ marginRight: "8px", color: "#4F46E5" }} />
        Frequently Asked Questions
      </h1>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span>{openIndex === index ? "–" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
