import React from "react";
function Description() {
  return (
    <div className="container mt-3 px-3 flex flex-col">
        <h4 className="font-bold text-[2rem] ">Description</h4>
        <p className=" text-md font-serif">
          Ditch the crowded ferry lines and skip the slow tours! Our speedy Lady
          Liberty express cruise is the perfect way to experience the iconic New
          York giant in a flash. Imagine the wind whipping through your hair as
          you jet past Lady Liberty, getting up-close and personal with this
          awe-inspiring landmark. Snap epic photos with unobstructed views, and
          let our expert guide bring the statue's fascinating history to life
          with a live narration. Unlike those long, drawn-out tours, ours boasts
          convenient hourly departures, so you can easily squeeze it into your
          busy NYC adventure. Don't waste another minute - maximize your time
          and memories with this unforgettable Lady Liberty encounter!
        </p>
        <div className="flex  pb-10 border-b sm:gap-4 gap-2 mt-4">
          <div className="bg-gray-300 rounded-sm sm:p-3 p-2">
            <h6>Guided Tours 🧭🕵️‍</h6>
          </div>
          <div className="bg-gray-300 rounded-sm sm:p-3 p-2">
            <h6>Sightseeing Cruise ⛴️</h6>
          </div>
          <div className="bg-gray-300 rounded-sm sm:p-3 p-2">
            <h6>Cultural Immersion 🌍</h6>
          </div>
        </div>
      </div>
    
  );
}

export default Description;
