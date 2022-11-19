<script setup>
import Logo from "../icons/pinHideoutLogo.vue";
import Social from "./Social.vue";</script>
<template>
  <header class="flex justify-between xl:items-center xl:flex-col 4xl:ml-5 xl:ml-0">
    <div class="flex items-center xl:place-items-center">
      <Logo />
      <h1 class="pb-2.5 sm:text-2xl">Pin Hideout</h1>
      <span class="text-body text-xs font-title text-shadow sm:pt-1 pt-4">L.L.C.</span>
    </div>
    <div class="flex items-center 2xl:flex-col mt-8 mr-5 xl:mr-0">
      <h3 class=" text-body mr-2 flex flex-col items-center"><span class="uppercase font-title ">Follow Us</span>
        <span
          class="font-title text-xs">We post new stuff all the
    time!</span></h3>
      <Social facebook="bg-sky-600 outline-sky-800 outline-2  outline p-1 rounded shadow-md"
              instagram="bg-pink-400 outline-pink-600 outline-2  outline p-1 rounded shadow-md"
              pinterest="bg-red-600 outline-red-800 outline-2  outline p-1 rounded shadow-md"
              reddit="bg-orange-500 outline-orange-700 outline-2  outline p-1 rounded shadow-md"
              svgClass="h-10 w-10 xs:h-7 xs:w-7"
              tiktok="bg-neutral-900 outline-[#000] outline-2  outline p-1 rounded shadow-md"
              twitter="bg-sky-400 outline-sky-600 outline-2  outline p-1 rounded shadow-md" />
    </div>
  </header>
</template>


<style scoped>

</style>