import React, { useRef } from "react";
import Liberty from "./Components/Liberty";
import Carousel from "./Components/Carousel";
import Description from "./Components/Description";
import MeetUP from "./Components/MeetUP";
import Form from "./Components/Form";
import Covered from "./Components/Covered";
import Itinerary from "./Components/Itinerary";
import Policies from "./Components/Policies";
import Review from "./Components/Review";
import Faq from "./Components/Faq";
import Experience from "./Components/Experience";

function App() {
  const btnCovered = useRef();
  const btnMeetUp = useRef();
  const btnItinerary = useRef();
  const btnPolicies = useRef();
  const btnReview = useRef();
  const btnFaq = useRef();

  const handleCovered = () => {
    if (btnCovered.current) {
      btnCovered.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMeetUp = () => {
    if (btnMeetUp.current) {
      btnMeetUp.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleItinerary = () => {
    if (btnItinerary.current) {
      btnItinerary.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePolicies = () => {
    if (btnPolicies.current) {
      btnPolicies.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleReview = () => {
    if (btnPolicies.current) {
      btnPolicies.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleFaq = () => {
    if (btnFaq.current) {
      btnFaq.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-fluid w-full bg-white flex flex-col">
      <Carousel />
      <Liberty />
      <div className="flex flex-wrap gap-4 ms-2 mt-4 border-b">
        <button className="border-0 outline-0 font-bold text-sm text-gray-500 border-b-2 border-blue-600">
          Description
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleCovered}>
          What's Covered
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleMeetUp}>
          Meeting Up
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleItinerary}>
          Itinerary Breakdown
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handlePolicies}>
          Policies
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleReview}>
          Reviews
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleFaq}>
          FQAs
        </button>
      </div>
      <div className="grid sm:grid-cols-12 mt-5 ">
        <div className="sm:col-span-7">
          <Description />
          <Covered ref={btnCovered} />
          <MeetUP ref={btnMeetUp} />
          <Itinerary ref={btnItinerary} />
          <Policies ref={btnPolicies} />
        </div>
        <div className="sm:col-span-5 sm:mx-10 ">
          <Form />
        </div>
      </div>
      <div className="mx-0">
      <Review ref={btnReview} />
      <Faq ref={btnFaq} />
      <Experience />
      </div>
    </div>
  );
}

export default App;
