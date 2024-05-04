import React from 'react'
import { PiCurrencyNgnBold } from "react-icons/pi";
function Form() {
  return (
    <div className="container border rounded-md bg-gray-200 mt-4 sm:mt-0">
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
  )
}

export default Form