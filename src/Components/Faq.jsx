import React from "react";
import FaqAccordion from "./FaqAccordion"
const Faq = React.forwardRef((props,ref) => {
    const faqs = [
      {
        question: 'Does Rivieria Resort Lekki have bars on the premises?',
        answer: 'Enjoy your holiday retreat the greatest way possible with Riviera bar and poolside bar accessible right in front of your doorstep for whenever you need a sip or two.',
      },
      {
        question: 'Does Riviera offer airport transfer?;',
        answer: 'Enjoy your holiday retreat the greatest way possible with Riviera bar and poolside bar accessible right in front of your doorstep for whenever you need a sip or two.',
      },
      {
        question: 'What types of entertainment are available at Riviera Hotel?',
        answer: 'Enjoy your holiday retreat the greatest way possible with Riviera bar and poolside bar accessible right in front of your doorstep for whenever you need a sip or two.',
      },
      {
        question: 'Does Rivieria Resort Lekki have bars on the premises?',
        answer: 'Enjoy your holiday retreat the greatest way possible with Riviera bar and poolside bar accessible right in front of your doorstep for whenever you need a sip or two.',
      },
      {
        question: 'Does Riviera offer airport transfer?;',
        answer: 'Enjoy your holiday retreat the greatest way possible with Riviera bar and poolside bar accessible right in front of your doorstep for whenever you need a sip or two.',
      },
      {
        question: 'What types of entertainment are available at Riviera Hotel?',
        answer: 'Enjoy your holiday retreat the greatest way possible with Riviera bar and poolside bar accessible right in front of your doorstep for whenever you need a sip or two.',
      },
      
      
    ];
  
    return (
      <div ref={ref} className="container-fluid p-6">
        <h1 className="text-2xl font-bold mb-4">FAQs</h1>
        <FaqAccordion faqs={faqs} />
      </div>
    );
  });
  
  

export default Faq