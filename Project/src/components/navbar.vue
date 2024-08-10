<template>
  <nav class="bg-black text-white m-6 p-4 rounded-lg font-jakarta">
    <div id="navbar" class="flex mx-auto items-center justify-between">
      <div class="text-lg font-bold lg:ml-4">Visa Indonesia</div>
      <button
        id="menu-button"
        class="md:hidden px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
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
      <button
        id="menu-button2"
        class="hidden px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
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
        class="hidden md:flex md:w-full md:space-x-1 lg:w-fit lg:flex md:items-center md:justify-center lg:space-x-6 text-sm"
      >
        <div class="flex justify-center m-2 text-lg lg:text-sm lg:m-0">
          <a href="#" class="">Home</a>
        </div>
        <div class="flex group justify-center m-2 text-lg lg:text-sm lg:m-0">
          <a
            id="trig1"
            href="#"
            class="text-gray-300 transition mb-1 hover:text-white"
            >Visa Services</a
          >
          <a
            id="trig2"
            href="#"
            class="text-gray-300 hidden transition mb-1 hover:text-white"
            >Visa Services</a
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            class="w-4 h-4 ml-1 mt-1"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
          <div
            id="drop1"
            class="opacity-5 absolute -z-10 mt-10 duration-300 flex flex-col"
          >
            <a class="mb-5">Link 1</a>
            <a>Link 2</a>
          </div>
          <div
            class="absolute opacity-0 transition -z-10 group-hover:z-10 mt-6 group-hover:opacity-100 bg-white text-black rounded-lg shadow-lg shadow-black"
          >
            <div class="p-5 flex flex-col justify-center space-y-3">
              <a href="">Link 1</a>
              <a href="">Link 2</a>
              <a href="">Link 3</a>
              <a href="">Link 4</a>
              <a href="">Link 5</a>
            </div>
          </div>
        </div>
        <div class="flex justify-center m-2 text-lg lg:text-sm lg:m-0">
          <a href="#" class="text-gray-300 hover:text-white">Extend Visa</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            class="w-4 h-4 ml-1 mt-1"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </div>
        <div class="flex justify-center m-2 text-lg lg:text-sm lg:m-0">
          <a href="#" class="text-gray-300 hover:text-white"
            >Information Center</a
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            class="w-4 h-4 ml-1 mt-1"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
            />
          </svg>
        </div>
        <div class="flex justify-center m-2 text-lg lg:text-sm lg:m-0">
          <a href="#" class="text-gray-300 hover:text-white">About Us</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 mt-1"
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
</template>

<script>
export default {
  name: "navbar",
};
</script>
