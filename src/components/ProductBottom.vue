<script setup>
defineProps({

});
</script>
<template>
  /* eslint-disable */
  </div>
  <ul class="  font-title text-base text-neutral-400">
    <li class="list-disc list-item text-shadow" v-if="!!desc1">{{desc1}}</li>
    <li class="list-disc list-item text-shadow"  v-if="!!desc2 ">{{desc2}}</li>
    <li class="list-disc list-item text-shadow" v-if="!!desc3">{{desc3}}</li>
  </ul>
  <span class=" font-title  text-2xl text-center text-secondary text-shadow">${{ price }}</span>
  </a>
  </article>
</template>
