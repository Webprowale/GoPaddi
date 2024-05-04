import React, { useRef } from "react";
import Liberty from "./Components/Liberty";
import Carousel from "./Components/Carousel";
import Description from "./Components/Description";
import MeetUP from "./Components/MeetUP";
import Form from "./Components/Form";
import Covered from "./Components/Covered";

function App() {
  const btnCovered = useRef();
  const btnMeetUp = useRef();

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

  return (
    <div className="container-fluid bg-white">
      <Carousel />
      <Liberty />
      <div className="flex flex-wrap gap-4 ms-2 border-b">
        <button className="border-0 outline-0 font-bold text-sm text-gray-500 border-b-2 border-blue-600">
          Description
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleCovered}>
          What's Covered
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500" onClick={handleMeetUp}>
          Meeting Up
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500">
          Iterlity Breakdown
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500">
          Policies
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500">
          Reviews
        </button>
        <button className="border-0 outline-0 font-bold text-sm text-gray-500">
          FQAs
        </button>
      </div>
      <div className="grid sm:grid-cols-12 mt-5 ">
        <div className="sm:col-span-7">
          <Description />
          <Covered ref={btnCovered} />
          <MeetUP ref={btnMeetUp} />
        </div>
        <div className="sm:col-span-5 sm:mx-10 ">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
