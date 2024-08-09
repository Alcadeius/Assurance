<template>
  <nav class="bg-black text-white m-6 p-4 rounded-lg font-jakarta">
    <div class="flex mx-auto items-center justify-between">
      <div class="text-lg font-bold lg:ml-4">Visa Indonesia</div>
      <button
        id="menu-button"
        class="lg:hidden px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div
        id="menu"
        class="hidden lg:flex lg:items-center lg:space-x-6 text-sm"
      >
        <a href="#" class="">Home</a>
        <div class="flex">
          <a href="#" class="text-gray-300 hover:text-white">Visa Services</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </div>
        <div class="flex">
          <a href="#" class="text-gray-300 hover:text-white">Extend Visa</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </div>
        <div class="flex">
          <a href="#" class="text-gray-300 hover:text-white"
            >Information Center</a
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </div>
        <div class="flex">
          <a href="#" class="text-gray-300 hover:text-white">About Us</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </div>
        <div class="max-w-xl p-1 bg-white rounded-md flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 mr-3"
            viewBox="0 0 512 512"
          >
            <path
              d="M256 73.825a182.175 182.175 0 1 0 182.18 182.18A182.177 182.177 0 0 0 256 73.825zm0 71.833a55.05 55.05 0 1 1-55.054 55.046A55.046 55.046 0 0 1 256 145.658zm.52 208.723h-80.852c0-54.255 29.522-73.573 48.885-90.906a65.68 65.68 0 0 0 62.885 0c19.363 17.333 48.885 36.651 48.885 90.906z"
              data-name="Profile"
            />
          </svg>
          <h3
            class="uppercase text-black cursor-pointer font-bold w-full content-center"
          >
            My Account
          </h3>
        </div>
      </div>
    </div>
  </nav>
  <section>
    <p
      class="max-w-4 bg-gradient-to-b from-purple-300/80 to-green-300/80 rounded-full top-32 -z-10 absolute right-7 m-20 p-32 blur-sm"
    ></p>
    <p
      class="max-w-4 border-[1px] border-gray-300 rounded-full absolute -right-[3.5rem] -z-10 top-10 m-32 p-40"
    ></p>
    <p
      class="max-w-4 border-[1px] border-gray-300 rounded-full absolute -right-[9.5rem] -z-10 -top-16 m-40 p-60"
    ></p>
    <p
      class="max-w-4 border-[1px] border-gray-300 rounded-full absolute -right-[18.5rem] -z-10 -top-52 m-52 p-80"
    ></p>
    <div class="grid grid-rows-2 md:grid-cols-3 mt-28">
      <div class="mx-8 md:mx-20 mb-4 md:col-span-2 md:max-w-lg text-center">
        <h1 class="font-ubuntu font-[400] text-3xl">
          Visa application made simple, apply now!
        </h1>
        <p class="mb-5 font-jakarta">
          Say Goodbye to cumbersome paperwork and endless queues, and say hello
          to a hassle-free travel experience
        </p>
        <div class="flex justify-center">
          <p
            class="uppercase cursor-pointer transition hover:border-black hover:bg-transparent hover:border-2 hover:text-black font-jakarta text-center bg-black w-[40%] max-w-xl mr-2 text-white p-2 rounded-md"
          >
            Get Visa Now
          </p>
          <p class="content-center">or</p>
          <p
            class="uppercase cursor-pointer font-jakarta transition text-center hover:bg-black hover:text-white hover:border-transparent ml-2 border-black border-2 w-[40%] p-2 rounded-md"
          >
            Extend My Visa
          </p>
        </div>
      </div>
      <div class="mx-10 md:mx-auto md:mr-10">
        <img :src="logo" alt="" />
      </div>
    </div>
  </section>
  <section class="bg-gray-300/40 p-16 mt-10">
    <div class="text-center font-ubuntu mt-16 mb-16 w-full md:w-1/2 mx-auto">
      <h1 class="text-2xl mb-5">One-stop Visa in Indonesia</h1>
      <p class="text-black/70">
        We Offer services that hassle-free and streamlined process for obtaining
        visas to enter and stay in Indonesia
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="max-w-sm border shadow bg-black rounded-lg border-black">
        <div class="p-1 bg-slate-800 rounded-lg m-1">
          <div class="bg-gradient-to-t from-slate-400 to bg-slate-800 p-14">
            <div class="w-32 h-32 bg-black clip-hexagon mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-20 h-20 fil mx-auto relative top-5"
                viewBox="0 0 64 64"
              >
                <path
                  d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
                />
                <path
                  d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
                />
              </svg>
            </div>
          </div>
          <div class="p-5 font font-jakarta">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                B211A
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Experience a streamlined visa process with B211A, your gateway to
              hassle-free travel arrangements.
            </p>
            <a
              href="#"
              class="flex items-center px-3 py-2 -ml-3 text-sm font-medium text-center text-white"
            >
              Get Now
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-sm border shadow bg-black rounded-lg border-black">
        <div class="p-1 bg-slate-800 rounded-lg m-1">
          <div class="bg-gradient-to-t from-slate-400 to bg-slate-800 p-14">
            <div class="w-32 h-32 bg-black clip-hexagon mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-20 h-20 fil mx-auto relative top-5"
                viewBox="0 0 64 64"
              >
                <path
                  d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
                />
                <path
                  d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
                />
              </svg>
            </div>
          </div>
          <div class="p-5 font font-jakarta">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Visa On Arrival
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Simplify your entry experience with visa on arrival,ensuring a
              smooth start to your journey.
            </p>
            <a
              href="#"
              class="flex items-center px-3 py-2 -ml-3 text-sm font-medium text-center text-white"
            >
              Get Now
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-sm border shadow bg-black rounded-lg border-black">
        <div class="p-1 bg-slate-800 rounded-lg m-1">
          <div class="bg-gradient-to-t from-slate-400 to bg-slate-800 p-14">
            <div class="w-32 h-32 bg-black clip-hexagon mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-20 h-20 fil mx-auto relative top-5"
                viewBox="0 0 64 64"
              >
                <path
                  d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
                />
                <path
                  d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
                />
              </svg>
            </div>
          </div>
          <div class="p-5 font font-jakarta">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Extend Visa
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Extend your stay and make the most of your travel adventure with
              our convenient visa extension services.
            </p>
            <a
              href="#"
              class="flex items-center px-3 py-2 -ml-3 text-sm font-medium text-center text-white"
            >
              Get Now
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-16 mt-20">
    <div class="text-center font-jakarta lg:w-[40%] mx-auto mb-10">
      <p class="text-xs mb-5">1000+ Customer Order</p>
      <p class="font-ubuntu text-lg mb-5">
        Why you should choose Visa Indonesia Official
      </p>
      <p class="text-sm text-black/65">
        Explore the compelling Reasons to Choose Visa indonesia Official for
        Your Visa and Travel Needs
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div class="w-24 h-24 bg-black clip-hexagon mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 h-14 fil mx-auto relative top-5"
            viewBox="0 0 64 64"
          >
            <path
              d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
            />
            <path
              d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
            />
          </svg>
        </div>
        <p class="font-jakarta font-bold text-center mt-6">Easy Online Apply</p>
        <p class="font font-jakarta text-center text-black/60 mt-6">
          Simplify your application process with our user-friendly online
          platform,making it convenient and efficient for you to submit your
          requests from the comfort of your home or office.
        </p>
      </div>
      <div>
        <div class="w-24 h-24 bg-black clip-hexagon mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 h-14 fil mx-auto relative top-5"
            viewBox="0 0 64 64"
          >
            <path
              d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
            />
            <path
              d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
            />
          </svg>
        </div>
        <p class="font-jakarta font-bold text-center mt-6">
          Secure payment with Xendit
        </p>
        <p class="font font-jakarta text-center text-black/60 mt-6">
          Rest easy knowing that your finnancial transactions are protected
          through our partnership with Xendit,ensuring the highest level of
          security for all your payments and purchases.
        </p>
      </div>
      <div>
        <div class="w-24 h-24 bg-black clip-hexagon mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 h-14 fil mx-auto relative top-5"
            viewBox="0 0 64 64"
          >
            <path
              d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
            />
            <path
              d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
            />
          </svg>
        </div>
        <p class="font-jakarta font-bold text-center mt-6">
          Check Progress of your order
        </p>
        <p class="font font-jakarta text-center text-black/60 mt-6">
          Stay in the loop and monitor the status of your orders,allowing you to
          track the journey of your requests from initiation to
          completion,providing you with peace of mind and transparency.
        </p>
      </div>
      <div>
        <div class="w-24 h-24 bg-black clip-hexagon mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-14 h-14 fil mx-auto relative top-5"
            viewBox="0 0 64 64"
          >
            <path
              d="M54.688 17.188a7.256 7.256 0 0 0-9.724-9.308C42.048 3.614 37.165 1 32 1c-8.316 0-15.142 6.503-15.66 14.691h-1.235c-6.625 0-12.015 5.39-12.015 12.016 0 6.628 5.39 12.02 12.015 12.02h2.542v18.82A4.458 4.458 0 0 0 22.1 63h19.8a4.458 4.458 0 0 0 4.453-4.453v-18.82h2.541c6.626 0 12.016-5.392 12.016-12.02 0-4.383-2.411-8.408-6.222-10.52zM44.352 58.547c0 1.352-1.1 2.453-2.453 2.453H22.1a2.456 2.456 0 0 1-2.453-2.453V29.069c0-1.352 1.1-2.453 2.453-2.453h19.8c1.352 0 2.453 1.1 2.453 2.453v29.478zm4.543-20.82h-2.543v-8.658a4.458 4.458 0 0 0-4.453-4.453H22.1a4.458 4.458 0 0 0-4.453 4.453v8.658h-2.541c-5.523 0-10.016-4.495-10.016-10.02 0-5.522 4.493-10.016 10.016-10.016h2.203a1 1 0 0 0 1-1C18.31 9.142 24.451 3 32 3c4.782 0 9.289 2.57 11.762 6.71a1 1 0 0 0 1.39.334 5.255 5.255 0 0 1 2.798-.805 5.261 5.261 0 0 1 5.255 5.256c0 .931-.246 1.844-.711 2.639a1 1 0 0 0 .454 1.418c3.622 1.621 5.962 5.215 5.962 9.155 0 5.524-4.493 10.02-10.015 10.02z"
            />
            <path
              d="M27.203 37.957a.998.998 0 0 0 1.406-.148 1 1 0 0 0-.149-1.407l-2.51-2.032 2.51-2.028a1 1 0 1 0-1.257-1.556l-3.473 2.806a1.001 1.001 0 0 0 0 1.555l3.473 2.81zM30.666 38.122a1 1 0 0 0 1.278-.607L33.94 31.9a1 1 0 0 0-1.884-.671l-1.998 5.616a1 1 0 0 0 .607 1.277zM35.373 37.809a1 1 0 0 0 1.406.148l3.476-2.81a.998.998 0 0 0 0-1.555l-3.477-2.806a1 1 0 0 0-1.256 1.557l2.514 2.027-2.514 2.032a1 1 0 0 0-.15 1.407zM40.466 42.422H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 48.705H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2zM40.466 54.988H23.534a1 1 0 1 0 0 2h16.932a1 1 0 1 0 0-2z"
            />
          </svg>
        </div>
        <p class="font-jakarta font-bold text-center mt-6">
          Get document in one click
        </p>
        <p class="font font-jakarta text-center text-black/60 mt-6">
          Experience ultimate convenience with our 'one-click' document retrival
          system, enabling you to access your essential documents
          instantly,saving you time and effor in the process.
        </p>
      </div>
    </div>
  </section>
  <section class="p-16 mt-20 bg-gradient-to-b from-green-700 to-blue-600">
    <div class="font-jakarta text-center md:w-1/2 mx-auto mb-5">
      <h1 class="text-white text-lg mb-5">Less effort to get your visa</h1>
      <p class="text-white/60">
        Our Service ensures that you can acquire your visa with ease, saving
        your time and energy,so you can focus and planning and enjoying your
        trip without complicated paperwork and procedures
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      <div class="flex flex-col">
        <p
          class="bg-gradient-to-r from-slate-300 to-gray-200 w-full rounded-xl h-40"
        ></p>
        <div
          class="max-w-full rounded-lg bg-white relative -mt-24 overflow-hidden mx-auto p-10"
        >
          <div class="-ml-6 -mt-9">
            <p
              class="bg-blue-500 rounded-full w-6 h-6 justify-center text-white inline-flex"
            >
              1
            </p>
            <span class="font-jakarta text-sm"> Visa Information</span>
            <span
              ><svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                class="line w-10 h-10 inline-flex ml-2"
                viewBox="0 0 16 16"
              >
                <path d="M15.5 7.5v1H.5v-1z" style="fill-rule: evenodd" />
              </svg>
            </span>
            <p
              class="bg-gray-400 rounded-full w-6 h-6 ml-1 justify-center text-white inline-flex"
            >
              2
            </p>
            <span
              class="font-jakarta text-sm absolute w-full ml-1 mt-[0.40rem]"
            >
              User Information</span
            >
          </div>
          <div>
            <h1 class="font-jakarta text-xs text-black/80">Services</h1>
            <input
              type="text"
              class="mt-2 bg-white border outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="New visa"
            />
            <select
              id="countries"
              class="mt-2 bg-white border outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option selected>B211A Visa</option>
              <option>E-Visa on Arrival</option>
            </select>
          </div>
        </div>
        <div class="font-jakarta text-center mt-5 mx-auto">
          <h1 class="text-white text-lg font-bold">Online Registration</h1>
          <p class="text-white/75 text-sm mt-2">
            Begin the visa application process by completing an online
            registration form and provide all information
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <p
          class="bg-gradient-to-r from-yellow-200 to-green-200 -mb-10 w-full rounded-xl h-40"
        ></p>
        <div
          class="max-w-sm md:max-w-xs xl:max-w-64 rounded-lg mx-auto w-full -mt-10 bg-white"
        >
          <div class="flex flex-col items-center justify-end h-3/4">
            <button
              type="button"
              class="text-white relative bg-black hover:bg-black/90 font-medium rounded-lg text-xs px-5 py-2.5 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 256 256"
                xml:space="preserve"
                class="h-4 w-4 -ml-3 mr-2"
              >
                <defs></defs>
                <g
                  style="
                    stroke: none;
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: white;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 73.579 86.629 H 16.421 c -0.932 0 -1.688 0.756 -1.688 1.687 s 0.756 1.687 1.688 1.687 h 57.159 c 0.932 0 1.687 -0.756 1.687 -1.687 S 74.511 86.629 73.579 86.629 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: white;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                  <path
                    d="M 17.514 27.281 L 43.312 5.335 v 71.839 c 0 0.933 0.756 1.687 1.688 1.687 c 0.932 0 1.687 -0.755 1.687 -1.687 V 5.335 l 25.799 21.946 c 0.71 0.604 1.776 0.518 2.378 -0.192 c 0.604 -0.71 0.518 -1.775 -0.192 -2.379 L 46.114 0.416 c -0.001 -0.001 -0.002 -0.002 -0.003 -0.003 l -0.018 -0.015 c -0.055 -0.047 -0.12 -0.074 -0.179 -0.112 c -0.069 -0.045 -0.13 -0.099 -0.206 -0.134 c -0.004 -0.002 -0.009 -0.002 -0.013 -0.004 c -0.077 -0.035 -0.16 -0.049 -0.242 -0.072 c -0.074 -0.021 -0.145 -0.052 -0.22 -0.063 c -0.04 -0.006 -0.081 0.002 -0.121 -0.001 c -0.118 -0.008 -0.236 -0.015 -0.353 0.002 c -0.033 0.005 -0.064 0.021 -0.097 0.028 c -0.123 0.025 -0.245 0.055 -0.361 0.107 c -0.003 0.002 -0.007 0.002 -0.01 0.003 c -0.065 0.03 -0.117 0.078 -0.177 0.115 c -0.07 0.044 -0.144 0.077 -0.208 0.131 L 15.327 24.71 c -0.71 0.604 -0.796 1.669 -0.192 2.379 C 15.739 27.799 16.804 27.885 17.514 27.281 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: white;
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              Upload New Document
            </button>
          </div>
          <p
            class="bg-white w-32 h-32 relative mx-auto -top-48 rounded-tl-[50px] shadow shadow-black/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 256 256"
              xml:space="preserve"
              class="w-14 h-14 mx-auto relative top-10"
            >
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 77.474 17.28 L 61.526 1.332 C 60.668 0.473 59.525 0 58.311 0 H 15.742 c -2.508 0 -4.548 2.04 -4.548 4.548 v 80.904 c 0 2.508 2.04 4.548 4.548 4.548 h 58.516 c 2.508 0 4.549 -2.04 4.549 -4.548 V 20.496 C 78.807 19.281 78.333 18.138 77.474 17.28 z M 61.073 5.121 l 12.611 12.612 H 62.35 c -0.704 0 -1.276 -0.573 -1.276 -1.277 V 5.121 z M 74.258 87 H 15.742 c -0.854 0 -1.548 -0.694 -1.548 -1.548 V 4.548 C 14.194 3.694 14.888 3 15.742 3 h 42.332 v 13.456 c 0 2.358 1.918 4.277 4.276 4.277 h 13.457 v 64.719 C 75.807 86.306 75.112 87 74.258 87 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(0, 0, 0);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 60.163 32.067 c -2.418 -1.599 -5.324 -2.16 -8.182 -1.576 c -2.858 0.583 -5.313 2.236 -6.912 4.654 c -0.457 0.691 -0.267 1.622 0.424 2.079 c 0.689 0.456 1.621 0.267 2.078 -0.424 c 1.157 -1.75 2.936 -2.946 5.008 -3.369 c 2.073 -0.421 4.178 -0.019 5.929 1.138 c 3.63 2.4 4.63 7.306 2.23 10.936 L 42.428 73.2 c -1.157 1.749 -2.936 2.945 -5.008 3.368 c -2.076 0.423 -4.179 0.017 -5.928 -1.139 c -1.75 -1.157 -2.946 -2.936 -3.369 -5.008 c -0.423 -2.072 -0.019 -4.176 1.137 -5.926 c 0.001 -0.001 0.001 -0.001 0.002 -0.002 l 12.601 -19.059 c 0.938 -1.42 2.858 -1.812 4.278 -0.872 c 0.684 0.452 1.151 1.147 1.316 1.958 c 0.165 0.812 0.008 1.635 -0.444 2.318 L 34.527 67.724 c -0.457 0.69 -0.267 1.621 0.424 2.078 c 0.254 0.169 0.542 0.249 0.826 0.249 c 0.487 0 0.964 -0.236 1.253 -0.673 l 12.485 -18.884 c 0.895 -1.352 1.207 -2.976 0.882 -4.572 c -0.325 -1.596 -1.249 -2.968 -2.602 -3.861 c -2.798 -1.853 -6.582 -1.081 -8.435 1.72 L 26.759 62.84 c -0.002 0.002 -0.002 0.005 -0.004 0.007 c -3.307 5.008 -1.925 11.774 3.083 15.085 c 1.845 1.22 3.928 1.804 5.99 1.804 c 3.537 -0.001 7.01 -1.717 9.102 -4.882 L 63.241 47.16 C 66.554 42.151 65.173 35.38 60.163 32.067 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(0, 0, 0);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </p>
        </div>
        <div>
          <div class="font-jakarta text-center mt-10 mx-auto">
            <h1 class="text-white text-lg font-bold">Submit Document</h1>
            <p class="text-white/75 text-sm mt-2">
              After regristration,prepare and submit the required documents for
              your visa application.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <p
          class="bg-gradient-to-r from-red-100 to-pink-200 -mb-16 w-full rounded-xl h-40"
        ></p>
        <div
          class="max-w-sm md:max-w-xs xl:max-w-64 rounded-lg mx-auto w-full -mt-10 bg-white"
        >
          <img :src="xen" alt="Xendit" />
          <div class="p-4 font-jakarta">
            <p class="text-sm font-bold">Services</p>
            <div class="grid grid-cols-2 mt-2">
              <div class="text-black/50 text-xs">
                <p class="mb-1">B211A 1x</p>
                <p>Tax</p>
              </div>
              <div class="text-black/50 text-xs grid justify-items-end">
                <p class="mb-1">$120.5</p>
                <p>$20</p>
              </div>
            </div>
            <button
              type="button"
              class="text-white bg-black hover:bg-black/90 rounded-xl w-full mt-3 text-xs p-2"
            >
              Continue to Payments - $140.5
            </button>
          </div>
        </div>
        <div>
          <div class="font-jakarta text-center mt-5 mx-auto">
            <h1 class="text-white text-lg font-bold">Make Payment</h1>
            <p class="text-white/75 text-sm mt-2">
              Once your documents are submitted,proceed to make the payment for
              your visa application.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <p
          class="bg-gradient-to-bl from-slate-100 to-green-300 -mb-16 w-full rounded-xl h-40"
        ></p>
        <div
          class="bg-white w-full max-w-sm md:max-w-xs xl:max-w-64 mx-auto -mt-10 rounded-lg p-2"
        >
          <p
            class="bg-gradient-to-bl from-green-400 to-yellow-300 rounded-full w-28 h-28 -mt-14 mx-auto block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="mx-auto w-10 h-10 relative top-8"
            >
              <path
                d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"
              />
            </svg>
          </p>
          <p class="mx-auto text-center text-sm text-black/45 w-3/4">
            Your visa is already finish, make appointment to get it in our
            office.Thank you for using our services
          </p>
          <button
            type="button"
            class="text-white mx-auto mt-5 relative bg-black hover:bg-black/90 font-medium rounded-lg text-xs px-5 py-2.5 flex"
          >
            Make Appointment Now
          </button>
        </div>
        <div>
          <div class="font-jakarta text-center mt-5 mx-auto">
            <h1 class="text-white text-lg font-bold">Get Visa</h1>
            <p class="text-white/75 text-sm mt-2">
              After successful document verification and payment,you will
              receive your visa.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-16 mt-20">
    <div class="mx-auto w-full md:w-1/2 text-center">
      <h1 class="font-ubuntu text-2xl mb-1">What our customer says</h1>
      <p class="font-jakarta text-sm text-black/60">
        Hear What our clients have to say about their journeys with us and find
        out why they choose our services time and time again
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
      <div class="border-2 rounded-lg grid grid-cols-3 items-center p-5">
        <div class="grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="gray"
            fill="gray"
            class="opacity-10 flex relative -top-[6.4rem] -left-6"
          >
            <path
              d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div
            class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-2 font-jakarta">
          <h1 class="mb-2 font-bold">Mateo Goncalo</h1>
          <p class="text-sm text-black/55">
            Visa Indonesia Official made my recent trip a breeze. Getting my
            visa with a less effort was a game-changeer.Their teams's support
            was exceptional, ensuring i had all neccessary documents without any
            stress.Highly recommended!
          </p>
        </div>
      </div>
      <div class="border-2 rounded-lg grid grid-cols-3 items-center p-5">
        <div class="grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="gray"
            fill="gray"
            class="opacity-10 flex relative -top-[6.4rem] -left-6"
          >
            <path
              d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div
            class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-2 font-jakarta">
          <h1 class="mb-2 font-bold">Mateo Goncalo</h1>
          <p class="text-sm text-black/55">
            Visa Indonesia Official made my recent trip a breeze. Getting my
            visa with a less effort was a game-changeer.Their teams's support
            was exceptional, ensuring i had all neccessary documents without any
            stress.Highly recommended!
          </p>
        </div>
      </div>
      <div class="border-2 rounded-lg grid grid-cols-3 items-center p-5">
        <div class="grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="gray"
            fill="gray"
            class="opacity-10 flex relative -top-[6.4rem] -left-6"
          >
            <path
              d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div
            class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-2 font-jakarta">
          <h1 class="mb-2 font-bold">Mateo Goncalo</h1>
          <p class="text-sm text-black/55">
            Visa Indonesia Official made my recent trip a breeze. Getting my
            visa with a less effort was a game-changeer.Their teams's support
            was exceptional, ensuring i had all neccessary documents without any
            stress.Highly recommended!
          </p>
        </div>
      </div>
      <div
        class="border-2 rounded-lg grid lg:hidden grid-cols-3 items-center p-5"
      >
        <div class="grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="gray"
            fill="gray"
            class="opacity-10 flex relative -top-[6.4rem] -left-6"
          >
            <path
              d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div
            class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-2 font-jakarta">
          <h1 class="mb-2 font-bold">Chinmato</h1>
          <p class="text-sm text-black/55">
            Visa Indonesia Official made my recent trip a breeze. Getting my
            visa with a less effort was a game-changeer.Their teams's support
            was exceptional, ensuring i had all neccessary documents without any
            stress.Highly recommended!
          </p>
        </div>
      </div>
      <div
        class="border-2 rounded-lg grid lg:hidden grid-cols-3 items-center p-5"
      >
        <div class="grid justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="64"
            height="64"
            color="gray"
            fill="gray"
            class="opacity-10 flex relative -top-[6.4rem] -left-6"
          >
            <path
              d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <div
            class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-2 font-jakarta">
          <h1 class="mb-2 font-bold">Anginan Marta</h1>
          <p class="text-sm text-black/55">
            Visa Indonesia Official made my recent trip a breeze. Getting my
            visa with a less effort was a game-changeer.Their teams's support
            was exceptional, ensuring i had all neccessary documents without any
            stress.Highly recommended!
          </p>
        </div>
      </div>
      <div
        class="hidden lg:grid lg:grid-cols-2 lg:col-span-3 lg:w-3/4 mx-auto gap-5"
      >
        <div class="border-2 rounded-lg grid grid-cols-3 items-center p-5">
          <div class="grid justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              color="gray"
              fill="gray"
              class="opacity-10 flex relative -top-[6.4rem] -left-6"
            >
              <path
                d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div
              class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="w-14 h-14 relative left-1 top-1"
                xml:space="preserve"
              >
                <path
                  d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
                />
                <circle cx="16" cy="15.133" r="4.267" />
                <path
                  d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col col-span-2 font-jakarta">
            <h1 class="mb-2 font-bold">Chinmato</h1>
            <p class="text-sm text-black/55">
              Visa Indonesia Official made my recent trip a breeze. Getting my
              visa with a less effort was a game-changeer.Their teams's support
              was exceptional, ensuring i had all neccessary documents without
              any stress.Highly recommended!
            </p>
          </div>
        </div>
        <div class="border-2 rounded-lg grid grid-cols-3 items-center p-5">
          <div class="grid justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              color="gray"
              fill="gray"
              class="opacity-10 flex relative -top-[6.4rem] -left-6"
            >
              <path
                d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div
              class="bg-slate-600/45 w-16 h-16 rounded-full -mt-16 mx-auto relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="w-14 h-14 relative left-1 top-1"
                xml:space="preserve"
              >
                <path
                  d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
                />
                <circle cx="16" cy="15.133" r="4.267" />
                <path
                  d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col col-span-2 font-jakarta">
            <h1 class="mb-2 font-bold">Anginan Marta</h1>
            <p class="text-sm text-black/55">
              Visa Indonesia Official made my recent trip a breeze. Getting my
              visa with a less effort was a game-changeer.Their teams's support
              was exceptional, ensuring i had all neccessary documents without
              any stress.Highly recommended!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="p-16 mt-20 mx-3 bg-gradient-to-r from-slate-200 to-gray-300 rounded-lg"
  >
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="flex flex-col w-full lg:w-3/4 mx-auto justify-center">
        <h1 class="font-ubuntu text-2xl mb-5">
          Enjoy your vacation and dont worry about your documents
        </h1>
        <p class="font-jakarta text-sm text-black/70">
          Manage your visa documents easily with us.quickly,safely and
          reliably.All that just your smartphone
        </p>
        <button
          type="button"
          class="text-white inline-flex justify-center uppercase mt-10 w-full md:w-3/4 lg:w-[55%] bg-gray-800 hover:bg-gray-900 rounded-2xl text-sm px-5 py-2.5 mb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path
              d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
            ></path>
          </svg>
          <span class="mt-1">Find Services you need </span>
        </button>
      </div>
      <div class="grid grid-cols-2 mt-5">
        <div class="md:relative md:left-20 lg:left-32">
          <img :src="hp" alt="" />
        </div>
        <div>
          <img :src="hp" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="mx-16 mt-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="flex flex-col font-jakarta mb-5">
        <p class="text-blue-800 mb-5 text-xs font-bold">Support</p>
        <h1 class="text-2xl font-ubuntu">Frequently Asked Question</h1>
        <p class="font-jakarta text-sm text-black/50 mb-5">
          Here,you'll answers to a wide range of common inquiries,providing you
          with the insight and clarity you need.
        </p>
        <div class="rounded-lg border w-full p-4">
          <div class="flex w-1/2 max-w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-14 h-14 relative left-1 top-1"
              xml:space="preserve"
            >
              <path
                d="M16 31C7.729 31 1 24.271 1 16S7.729 1 16 1s15 6.729 15 15-6.729 15-15 15zm0-28C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"
              />
              <circle cx="16" cy="15.133" r="4.267" />
              <path
                d="M16 30c2.401 0 4.66-.606 6.635-1.671-.425-3.229-3.18-5.82-6.635-5.82s-6.21 2.591-6.635 5.82A13.935 13.935 0 0 0 16 30z"
              />
            </svg>
          </div>
          <p class="font-jakarta mt-3 font-semibold mb-3">
            Still Have Question
          </p>
          <p class="font-jakarta text-sm mb-3">
            Can't Find the answer you're looking for? please chat our team
          </p>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 rounded-xl text-sm px-5 py-2.5 me-2 mb-2"
          >
            Get in touch
          </button>
        </div>
      </div>
      <div class="flex flex-col font-jakarta">
        <div class="p-10 rounded-xl bg-black/5">
          <div class="flex-row flex justify-between mb-10">
            <h1 class="font-bold">Who needs the B211A visa?</h1>
            <span
              ><svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                class="w-6 h-6"
              >
                <path
                  d="M8 1a7 7 0 1 1-7 7 7 7 0 0 1 7-7m0-1a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"
                />
                <path d="M4 7h8v2H4z" />
              </svg>
            </span>
          </div>
          <ul class="text-black/65">
            <li class="mb-3">
              1.You want to stay in Indonesia for more than 60 days
            </li>
            <li class="mb-3">
              2.You don't know how long you want to stay and you want to keep
              the option open for longer than 60 days without having to leave
              the country
            </li>
            <li class="mb-3">
              3.After the visa you want to you apply for
              KITAS(investor,marriage,pension)
            </li>
            <li class="mb-3">
              4.your reason for entering the country is not for tourism
              purposes(e.g. volunteer work,internship,further education etc.)
            </li>
            <li class="mb-3">
              5.You stay longer than 30 days and travel a lot and can Not coming
              to the Immigration Office for the extension(personal appearance
              important).
            </li>
            <li class="mb-3">
              6.You only have a temporary passport and want to enter indonesia
            </li>
            <li>
              7.It is uncertain whether the Visa On Arrival will be granted due
              to your vaccination status or other formalities and you want to be
              on the safe side.
            </li>
          </ul>
        </div>
        <div
          class="flex-row flex justify-between mb-10 mx-10 mt-10 cursor-pointer"
        >
          <h1 class="font-bold">How long is the visa valid?</h1>
          <span>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"
              />
              <path d="M9 4H7v3H4v2h3v3h2V9h3V7H9V4z" />
            </svg>
          </span>
        </div>
        <div class="flex-row flex justify-between mb-10 mx-10 cursor-pointer">
          <h1 class="font-bold">
            How long does it take for my visa to be ready?
          </h1>
          <span>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"
              />
              <path d="M9 4H7v3H4v2h3v3h2V9h3V7H9V4z" />
            </svg>
          </span>
        </div>
        <div class="flex-row flex justify-between mb-10 mx-10 cursor-pointer">
          <h1 class="font-bold">
            How often does it happen that a visa application is rejected?
          </h1>
          <span>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"
              />
              <path d="M9 4H7v3H4v2h3v3h2V9h3V7H9V4z" />
            </svg>
          </span>
        </div>
        <div class="flex-row flex justify-between mb-10 mx-10 cursor-pointer">
          <h1 class="font-bold">Who is my sponsor?</h1>
          <span>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"
              />
              <path d="M9 4H7v3H4v2h3v3h2V9h3V7H9V4z" />
            </svg>
          </span>
        </div>
        <div class="flex-row flex justify-between mb-10 mx-10 cursor-pointer">
          <h1 class="font-bold">Do i have to go into quarantine upon entry?</h1>
          <span>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"
              />
              <path d="M9 4H7v3H4v2h3v3h2V9h3V7H9V4z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>
  <footer class="bg-black p-20 overflow-hidden relative">
    <div class="font-jakarta text-white text-center mx-auto relative top-60">
      <h1 class="font-ubuntu text-3xl">
        Apply for your visa today, quick and easy
      </h1>
      <p class="text-white/35 text-lg relative top-5 z-10">
        it's all online to create it! so no worries.Its quick and easy
      </p>
      <button
        class="bg-white p-3 rounded-full relative w-1/2 md:w-[30%] lg:w-[20%] top-16 z-10"
      >
        <span
          class="uppercase text-black font-jakarta font-bold flex justify-center content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 mr-1"
            viewBox="0 0 50 50"
          >
            <path
              d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
            ></path>
          </svg>
          Find services
        </span>
      </button>
      <button class="bg-[#09406C] p-4 rounded-full relative top-14 left-3 z-10">
        <span class="uppercase text-white font-jakarta font-semibold">
          Consult now
        </span>
      </button>
      <div class="font-jakarta relative top-52 z-10">
        <p>Copyright &copy; Visa Indonesia 2023</p>
        <p class="text-white/35">Design & Developed by s.p Digital</p>
      </div>
    </div>
    <p
      class="w-96 h-96 relative opacity-50 -bottom-60 left-[35%] mt-20 bg-gradient-to-l from-blue-800 to-purple-950 rounded-full blur-3xl"
    ></p>
    <p
      class="border absolute border-white/20 w-[35rem] h-[35rem] left-[30%] -bottom-80 rounded-full"
    ></p>
    <p
      class="border absolute border-white/20 w-[60rem] h-[60rem] left-[15%] -bottom-[35rem] rounded-full"
    ></p>
    <p
      class="border absolute border-white/20 w-[75rem] h-[75rem] left-[5%] -bottom-[40rem] rounded-full"
    ></p>
  </footer>
</template>

<script>
import logo from "./components/transaction.jpg";
import xen from "./components/xendit.png";
import quote from "./components/quote-svgrepo-com.svg";
import hp from "./components/handphone.png";
export default {
  data() {
    return {
      logo,
      xen,
      quote,
      hp,
    };
  },
};
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});
</script>
<style scoped>
.arrow {
  fill: rgb(172, 172, 172);
}
.fil {
  fill: white;
}
.line {
  fill: grey;
  opacity: 0.4;
}
</style>
