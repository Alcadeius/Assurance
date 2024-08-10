<template>
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
</template>
<script>
import hp from "../assets/handphone.png";
export default {
  name: "benefit",
  data() {
    return {
      hp,
    };
  },
};
</script>
