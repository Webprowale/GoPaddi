import React, { useRef } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";

 const Covered = React.forwardRef((props, ref) => (
  <div ref={ref} className="container flex flex-col px-3 ">
    <h5 className="font-bold text-[1.7rem] mt-3 ">What's Covered</h5>
    <h6 className="text-[1rem] font-semibold my-2">The Cruise</h6>
    <div className="flex items-center">
      <div className="flex" style={{ width: "35px" }}>
        <IoMdCheckmarkCircle className="text-green-500 text-[35px]" />
      </div>
      <p className="flex-grow  text-dm font-serif">
        The tour itself aboard the express cruise boat.
      </p>
    </div>
    <h6 className="text-[1rem] font-semibold my-2">
      50-Minute Scenic Cruise
    </h6>
    <div className="flex ">
      <div className="flex" style={{ width: "35px" }}>
        <IoMdCheckmarkCircle className="text-green-500 text-[35px]" />
      </div>
      <p className="flex-grow ">
        Experience the excitement of a 50-minute sightseeing cruise around New
        York Harbor. Take in the refreshing sea breeze and soak up
        breathtaking views of the city skyline and iconic landmarks
      </p>
    </div>
    <h6 className="text-[1rem] font-semibold my-2">Live Guided Narration</h6>
    <div className="flex ">
      <div className="flex" style={{ width: "35px" }}>
        <IoMdCheckmarkCircle className="text-green-500 text-[35px]" />
      </div>
      <p className=" flex-grow text-dm font-serif">
        Commentary by an expert guide throughout the cruise, sharing
        interesting facts and history about the Statue of Liberty and other
        landmarks you might see.
      </p>
    </div>
    <h6 className="text-[1rem] font-semibold my-2">
      Close-Up Views of the Statue of Liberty
    </h6>
    <div className="flex">
      <div className="flex" style={{ width: '35px' }}>
        <IoMdCheckmarkCircle className="text-green-500 text-[35px]" />
      </div>
      <p className=" flex-grow text-dm font-serif">
        Commentary by an expert guide throughout the cruise, sharing
        interesting facts and history about the Statue of Liberty and other
        landmarks you might see.
      </p>
    </div>
    <h6 className="text-[1rem] font-semibold my-2">Please Note</h6>
    <div className="flex  pb-6 border-b">
      <div className="flex" style={{ width: '35px' }}>
        <FaRegTimesCircle className="text-red-500 text-[35px]" />
      </div>
      <p className="text-dm font-serif">
        This cruise does not include access to Liberty Island or Ellis
        Island. Passengers will remain on the boat throughout the 50-minute
        tour.
      </p>
    </div>
  </div>
))
export default Covered;