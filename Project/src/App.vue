<template>
  <!-- <nav
    class="font-jakarta bg-black text-white justify-between grid grid-cols-3 m-6 rounded-lg p-4 w-full max-w-7xl"
  >
    <div class="w-1/2">
      <h1 class="text-lg ml-5 mt-2">Visa Indonesia</h1>
    </div>
    <div class="col-span-2 mt-2">
      <ul class="flex space-x-9 relative -bottom-1 text-sm">
        <li><a href="#">Home</a> <arrow /></li>
        <li class="flex flex-row text-gray-400">
          <a href="#">Visa Services</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </li>
        <li class="flex flex-row text-gray-400">
          <a href="#">Extend Visa</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </li>
        <li class="flex flex-row text-gray-400">
          <a href="#">Information Center </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1 arrow"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </li>
        <li class="text-gray-400"><a href="#">About Us</a></li>
        <div class="bg-white flex rounded-md relative bottom-2">
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
            class="uppercase text-black font-bold w-full relative top-[0.55rem]"
          >
            My Account
          </h3>
        </div>
      </ul>
    </div>
  </nav> -->
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
    <div class="text-center font-ubuntu mt-16 mb-5 w-full md:w-1/2 mx-auto">
      <h1 class="text-2xl mb-5">One-stop Visa in Indonesia</h1>
      <p class="text-black/70">
        We Offer services that hassle-free and streamlined process for obtaining
        visas to enter and stay in Indonesia
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div class="max-w-sm border shadow bg-black rounded-lg border-black">
        <div class="p-1 bg-slate-800 rounded-lg m-1">
          <div class="bg-gradient-to-t from-slate-100 to bg-slate-800 p-14">
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
          <div class="bg-gradient-to-t from-slate-100 to bg-slate-800 p-14">
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
          <div class="bg-gradient-to-t from-slate-100 to bg-slate-800 p-14">
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
    </div>
  </section>
</template>
<script>
import logo from "./components/transaction.jpg";

export default {
  data() {
    return {
      logo,
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
</style>
