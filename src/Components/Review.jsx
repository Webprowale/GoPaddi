import React, {useState} from "react";
import { MdStar } from "react-icons/md";

const Review = React.forwardRef((props, ref) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div ref={ref} className="container-fluid w-full mb-5 bg-gray-200 flex p-4 flex-col">
      <div className="grid sm:grid-cols-12">
        <div className="sm:col-span-4 p-5">
          <h6 className="font-serif font-semibold mb-3">Sort</h6>
          <div className="inline-block relative w-64 mb-5">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="recent">Recent</option>
              <option value="popular">Popular</option>
              <option value="common">Common</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 8.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <MdStar
                key={index}
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
              />
            ))}
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            1,745 global ratings
          </p>
          <div className="flex items-center mt-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              5 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: "70%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              70%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              4 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: "17%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              17%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              3 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: "8%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              8%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              2 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: "4%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              4%
            </span>
          </div>
          <div className="flex items-center mt-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              1 star
            </a>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div
                className="h-5 bg-yellow-300 rounded"
                style={{ width: "1%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              1%
            </span>
          </div>
        </div>
        <div className="sm:col-span-8 sm:p-5">
        <article className="border-b bg-white p-3 sm:p-5">
      <div className="flex items-center mb-4">
        <div className="font-medium dark:text-white">
          <p>
            Jese Leos
            <time
              dateTime="2014-08-16 19:00"
              className="block text-sm text-gray-500 dark:text-gray-400"
            >
              Joined on August 2014
            </time>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
          Thinking to buy another one!
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Reviewed in the United Kingdom on{" "}
          <time dateTime="2017-03-03 19:00">March 3, 2017</time>
        </p>
      </footer>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        This is my third Invicta Pro Diver. They are just fantastic value for
        money. This one arrived yesterday and the first thing I did was set the
        time, popped on an identical strap from another Invicta and went in the
        shower with it to test the waterproofing.... No problems.
      </p>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        It is obviously not the same build quality as those very expensive
        watches. But that is like comparing a Citroën to a Ferrari. This watch
        was well under £100! An absolute bargain.
      </p>
      <a
        href="#"
        className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Read more
      </a>
      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          19 people found this helpful
        </p>
        <div className="flex items-center mt-3">
          <a
            href="#"
            className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Helpful
          </a>
          <a
            href="#"
            className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
          >
            Report abuse
          </a>
        </div>
      </aside>
    </article>
        </div>
      </div>
    </div>
  );
});

export default Review;
