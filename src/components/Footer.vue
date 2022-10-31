<script setup>

import Social from './Social.vue';
</script>
<template>
  <footer
      class="col-start-2 col-end-8 4xl:col-start-1 4xl:col-end-9 row-start-3 bg-neutral-800  border-t-2 border-x-4 border border-[#111]  px-24 pt-24
        pb-3 2xl:p-0 2xl:pt-10">
<div class="flex justify-between 2xl:flex-col">
  <div class="flex flex-col items-center 2xl:mb-10">
    <h3 class=" text-body mr-2 flex flex-col items-center"><span class="uppercase font-title ">Follow Us</span>
      <span
          class="font-title text-xs">We post new stuff all the
    time!</span></h3>
  <div class=""><Social svgClass="h-10 w-10  xs:h-7 xs:w-7"
                        twitter="bg-sky-400 outline-sky-600 outline-2  outline p-1 rounded shadow-md"
                        facebook="bg-sky-600 outline-sky-800 outline-2  outline p-1 rounded shadow-md"
                        instagram="bg-pink-400 outline-pink-600 outline-2  outline p-1 rounded shadow-md"
                        reddit="bg-orange-500 outline-orange-700 outline-2  outline p-1 rounded shadow-md"
                        pinterest="bg-red-600 outline-red-800 outline-2  outline p-1 rounded shadow-md"
                        tiktok="bg-neutral-900 outline-[#111] outline-2  outline p-1 rounded shadow-md"/> </div>
</div>
  <div class="flex flex-col-reverse items-center" >
    <span class="font-title text-body mr-3 2xl:mr-0 text-shadow xs:text-xs">Copyright Pin Hideout L.L.C.  2022</span>
    <ul class="flex justify-evenly font-title text-body mb-5 xs:text-xs">
      <li class="mr-3"><a href="">Terms of Service</a></li>
      <li><a href="">Privacy Policy</a></li>
    </ul></div>
</div>
  </footer>
</template>