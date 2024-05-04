import React from "react";

const Policies = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container flex flex-col px-3  mt-6 mb-6 ">
      <h4 className="font-bold text-[1.7rem] mb-4">Policies</h4>
      <h6 className="text-[1rem] font-bold font-serif mb-3">
        Cancellation Policy
      </h6>
      <p className="font-serif  ">
        We understand that plans can change. However, due to the limited
        availability of space on our express cruises, cancellations are subject
        to the following fees
      </p>
      <div className="my-5">
        <li className="font-serif">Cancellations made 48 hours or more before your scheduled departure time: A full refund will be issued.</li>
        <li className="font-serif">Cancellations made within 48 hours of your scheduled departure time: No refunds will be given.</li>
      </div>
      <h6 className="text-[1rem] font-bold font-serif mb-3">
        Please Note
      </h6>
      <div className="my-3">
        <li className="font-serif">Any changes made less than 48 hours before the experience’s start time will not be accepted.</li>
        <li className="font-serif">Cut-off times are based on the experience’s local time.</li>
        <li className="font-serif">This experience requires good weather. If it’s canceled due to poor weather, you’ll be offered a different date or a full refund</li>
      </div>
    </div>
  );
});

export default Policies;
