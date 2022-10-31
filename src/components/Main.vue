<script setup>
import Products from "./Products.vue";
import PinHideoutLogo from './icons/pinHideoutLogo.vue';
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="col-span-full xl:flex xl:justify-center">
      <h2 class="text-5xl ml-5 xl:ml-0">Featured</h2>
    </div>
    <div class="col-span-full row-start-2">
  <!-- Product Grid -->
  <div
      class="grid grid-cols-4 5xl:grid-cols-3 4xl:grid-cols-4  3xl:grid-cols-3 2xl:grid-cols-2 lg:grid-cols-1  justify-items-center">
   <Products />
  </div>
  </div>
  </div>
  <div class="col-start-3 col-end-11 ">
    <div class="flex justify-center">
      <a class="text-neutral-800 font-title text-3xl text-shadow" href="#">
      <button
          class="rounded bg-primary p-3 flex items-center shadow-md outline outline-2 outline-[#432986] my-20 lg:my-10">
        <pin-hideout-logo />  <span class="font-title">View Shop</span>
      </button>
      </a>
    </div>
  </div>

</template>
