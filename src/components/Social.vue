<script setup>
import Facebook from "./Icons/Facebook.vue";
import Instagram from "./Icons/Instagram.vue";
import Pinterest from "./Icons/Pinterest.vue";
import Reddit from "./Icons/Reddit.vue";
import TikTok from "./Icons/TikTok.vue";
import Twitter from "./Icons/Twitter.vue";

defineProps({
  svgClass: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  reddit: {
    type: String,
    required: true,
  },
  pinterest: {
    type: String,
    required: true,
  },
  tiktok: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <ul id="social" class="flex justify-around w-96 xs:w-72">
    <li>
      <a target="_blank" href="https://twitter.com/pinhideout">
      <div :class="twitter">
            <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" aria-label="[title]" fill="currentColor"
                 viewBox="0 0 512 512">
<Twitter />
            </svg>
      </div>
    </a>
    </li>
    <li><a target="_blank" href="https://facebook.com/pinhideout">
      <div :class="facebook">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" aria-label="[title]" fill="currentColor"
             viewBox="0 0 320 512">
          <Facebook />
        </svg>
      </div>
    </a></li>
    <li>
      <a target="_blank" href="https://instagram.com/pinhideout">
      <div :class="instagram">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" aria-label="[title]" fill="currentColor"
             viewBox="0 0 448 512">
          <Instagram />
        </svg>
      </div>
    </a>
    </li>
    <li>
      <a target="_blank" href="https://reddit.com/r/pinhideout">
      <div :class="reddit">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" aria-label="[title]" fill="currentColor"
             viewBox="0 0 512 512">
          <Reddit />
        </svg>
      </div>
    </a>
    </li>
    <li>
      <a target="_blank" href="https://pinterest.com/pinhideout">
      <div :class="pinterest">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" aria-label="[title]" fill="currentColor"
             viewBox="0 0 384 512">
          <Pinterest />
        </svg>
      </div>
    </a>
    </li>
    <li>
      <a target="_blank" href="">
      <div :class="tiktok">
        <svg :class="svgClass" xmlns="http://www.w3.org/2000/svg" aria-label="[title]" fill="currentColor"
             viewBox="0 0 448 512">
          <TikTok />
        </svg>
      </div>
    </a>
    </li>
  </ul>
</template>