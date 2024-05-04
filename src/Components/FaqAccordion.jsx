import React, { useState } from 'react';

const FaqAccordion = ({ faqs }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="faq-accordion" className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              className="flex items-center justify-between w-full p-3 font-medium text-left text-gray-600 border border-gray-300 rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordion === index}
              aria-controls={`faq-accordion-body-${index}`}
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transition-transform transform ${
                  openAccordion === index ? 'rotate-0' : 'rotate-180'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          {openAccordion === index && (
            <div className="p-3 bg-white border border-t-0 border-gray-300 rounded-b">
              <p className="text-gray-800">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default FaqAccordion;