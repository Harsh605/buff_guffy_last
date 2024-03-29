import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
const Newsletter = () => {
  return (
    <div className="bg-transparent p-4">
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="bigHeading mb-4 text-3xl font-extrabold  sm:text-4xl text-[#f1552c]">
              Our Newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-[#ffffff] md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <PersonIcon sx={{ color: 'gray' }} />
                  </div>
                  {/* <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your name" type="text" id="username" /> */}
                  <input
                    className="bg-transparent block py-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 sm:rounded-full dark:bg-[#342F49] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your name"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                {/* <div>
                      <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div> */}
              </div>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  {/* <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your name" type="text" id="username" /> */}
                  <input
                    className=" bg-transparent block py-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 sm:rounded-full  dark:bg-[#342F49] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="homePageBtnHover hover:text-black h-full absolute px-7 rounded-full bg-[#f1552c] top-0 right-0 text-sm font-medium text-center text-white rounded-full cursor-pointer bg-primary-700 border hover:bg-[#f1552c]  sm:rounded-full   dark:bg-primary-600  dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.{' '}
                <a
                  href="#"
                  className="font-medium text-primary-600 text-[#f1552c] hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
