import React from "react";
import { CiLocationOn } from "react-icons/ci";

const MeetUP = React.forwardRef((props, ref) => (
    <div ref={ref} className="container flex flex-col px-3 pb-6 border-b sm:mb-6">
      <h4 className="font-bold text-[1.7rem] mb-4">Meeting Up</h4>
      <h6 className="text-[1rem] font-bold font-serif mb-3">Meet Here</h6>
      <div className="flex">
        <div className="flex" style={{ width: "45px" }}>
          <CiLocationOn className="text-purple-500 text-[45px]" />
        </div>
        <div className="flex-grow">
          <h6 className="text-md font-semibold font-serif">
            89 South St, New York, NY 10038, USA,
          </h6>
          <p className="text-md font-serif mb-4">
            Board directly at Pier 16, South Street Seaport, Look for our blue
            "Circle Line" ticket booth at the entrance to Pier 16. Please arrive
            at Pier 16 at least 15 minutes before your scheduled departure time
          </p>
          <a href="https://www.google.com/maps?q=7.798496, 5.514526" target="_blank" rel="noopener noreferrer" className="text-md font-serif text-blue-500">Open in google map</a>
        <p className="mt-4 text-xl font-bold font-serif">
          End Here
        </p>
        <p className="font-serif">This activity ends back at the meeting point.</p>
        </div>
      </div>
    </div>
));

export default MeetUP;
