import React from 'react'

const Faq = React.forwardRef((props,ref) => {
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
              <div
                id={`faq-accordion-body-${index}`}
                className={`${
                  openAccordion === index ? 'block' : 'hidden'
                } p-3 bg-white border border-t-0 border-gray-300 rounded-b`}
              >
                <p className="text-gray-800">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    const faqs = [
      {
        question: 'What is Flowbite?',
        answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
      },
      {
        question: 'Is there a Figma file available?',
        answer: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
      },
      {
        question: 'What are the differences between Flowbite and Tailwind UI?',
        answer: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.',
      },
      // Add more FAQs here
    ];
    
    return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">FAQs</h1>
          <FAQAccordion faqs={faqs} />
        </div>
      );
    };
})

export default Faq