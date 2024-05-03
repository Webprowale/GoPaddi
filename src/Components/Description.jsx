import React from "react";
import SubNav from "./SubNav";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyNgnBold } from "react-icons/pi";
function Description() {
  return (
    <div className="container-fluid mt-3">
      <SubNav />
      <div className="grid sm:grid-cols-12 mt-5 ">
        <div className="sm:col-span-7">
          <div className="container flex flex-col ms-3">
            <h4 className="font-bold text-[2rem] ">Description</h4>
            <p className=" text-md font-serif">
              Ditch the crowded ferry lines and skip the slow tours! Our speedy
              Lady Liberty express cruise is the perfect way to experience the
              iconic New York giant in a flash. Imagine the wind whipping
              through your hair as you jet past Lady Liberty, getting up-close
              and personal with this awe-inspiring landmark. Snap epic photos
              with unobstructed views, and let our expert guide bring the
              statue's fascinating history to life with a live narration. Unlike
              those long, drawn-out tours, ours boasts convenient hourly
              departures, so you can easily squeeze it into your busy NYC
              adventure. Don't waste another minute - maximize your time and
              memories with this unforgettable Lady Liberty encounter!
            </p>
            <div className="flex  pb-10 border-b sm:gap-4 gap-2  mt-4">
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
            <h5 className="font-bold text-[1.7rem] mt-3 ">What's Covered</h5>
            <h6 className="text-[1rem] font-semibold my-2">The Cruise</h6>
            <div className="flex mb-3">
              <IoMdCheckmarkCircle className="text-green-500" />

              <p className="text-dm font-serif">
                The tour itself aboard the express cruise boat.
              </p>
            </div>
            <h6 className="text-[1rem] font-semibold my-2">
              50-Minute Scenic Cruise
            </h6>
            <div className="flex mb-3">
              <IoMdCheckmarkCircle className="text-green-500" />

              <p className="text-dm font-serif">
                Experience the excitement of a 50-minute sightseeing cruise
                around New York Harbor. Take in the refreshing sea breeze and
                soak up breathtaking views of the city skyline and iconic
                landmarks
              </p>
            </div>
            <h6 className="text-[1rem] font-semibold my-2">
              Live Guided Narration
            </h6>
            <div className="flex mb-3">
              <IoMdCheckmarkCircle className="text-green-500" />

              <p className="text-dm font-serif">
                Commentary by an expert guide throughout the cruise, sharing
                interesting facts and history about the Statue of Liberty and
                other landmarks you might see.
              </p>
            </div>
            <h6 className="text-[1rem] font-semibold my-2">
              Close-Up Views of the Statue of Liberty
            </h6>
            <div className="flex mb-3">
              <IoMdCheckmarkCircle className="text-green-500" />

              <p className="text-dm font-serif">
                Commentary by an expert guide throughout the cruise, sharing
                interesting facts and history about the Statue of Liberty and
                other landmarks you might see.
              </p>
            </div>
            <h6 className="text-[1rem] font-semibold my-2">Please Note</h6>
            <div className="flex mb-3 pb-6 border-b">
              <FaRegTimesCircle className="text-red-500 text-[1rem]" />
              <p className="text-dm font-serif">
                This cruise does not include access to Liberty Island or Ellis
                Island. Passengers will remain on the boat throughout the
                50-minute tour.
              </p>
            </div>
            <h4 className="font-bold text-[1.7rem] mb-4">Meeting Up</h4>
            <h6>Meet Here</h6>
            <div className="flex flex-col">
              
              <div>
                <h6 className="text-md font-semibold font-serif">
                <CiLocationOn className="text-purple-500 text-[1rem]" />
                  89 South St, New York, NY 10038, USA,
                </h6>
                <p className="text-md font-serif">
                  Board directly at Pier 16, South Street Seaport, Look for our
                  blue "Circle Line" ticket booth at the entrance to Pier 16.
                  Please arrive at Pier 16 at least 15 minutes before your
                  scheduled departure time
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5 sm:mx-10 ">
          <div className="container border rounded-md bg-gray-200">
            <div className="badge bg-blue-950 flex ps-3 py-5">
              <h6 className="text-md font-semibold text-white">From</h6>
              <h3 className="flex font-bold text-white">
                <PiCurrencyNgnBold size={25} />
                7000
              </h3>
            </div>
            <div className="flex justify-center mt-5 ">
              <form className="w-full max-w-lg rounded px-8 pt-6 pb-8 mb-2">
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block  text-sm font-bold mb-2"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="time"
                    className="block  text-sm font-bold mb-2"
                  >
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="text"
                    className="block  text-sm font-bold mb-2"
                  >
                    Participant
                  </label>
                  <input
                    id="text"
                    type="text"
                    placeholder="Enter text..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Check Avaibility
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
