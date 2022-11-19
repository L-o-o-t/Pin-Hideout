<script setup>
import Facebook from "../icons/Facebook.vue";
import Instagram from "../icons/Instagram.vue";
import Pinterest from "../icons/Pinterest.vue";
import Reddit from "../icons/Reddit.vue";
import TikTok from "../icons/TikTok.vue";
import Twitter from "../icons/Twitter.vue";

defineProps( {
  svgClass: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  reddit: {
    type: String,
    required: true
  },
  pinterest: {
    type: String,
    required: true
  },
  tiktok: {
    type: String,
    required: true
  }
} );
</script>
<template>
  <ul id="social" class="flex justify-around w-96 xs:w-72">
    <li>
      <a href="https://twitter.com/pinhideout" target="_blank">
        <div :class="twitter">
          <svg :class="svgClass" aria-label="[title]" fill="currentColor" viewBox="0 0 512 512"
               xmlns="http://www.w3.org/2000/svg">
            <Twitter />
          </svg>
        </div>
      </a>
    </li>
    <li><a href="https://facebook.com/pinhideout" target="_blank">
      <div :class="facebook">
        <svg :class="svgClass" aria-label="[title]" fill="currentColor" viewBox="0 0 320 512"
             xmlns="http://www.w3.org/2000/svg">
          <Facebook />
        </svg>
      </div>
    </a></li>
    <li>
      <a href="https://instagram.com/pinhideout" target="_blank">
        <div :class="instagram">
          <svg :class="svgClass" aria-label="[title]" fill="currentColor" viewBox="0 0 448 512"
               xmlns="http://www.w3.org/2000/svg">
            <Instagram />
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="https://reddit.com/r/pinhideout" target="_blank">
        <div :class="reddit">
          <svg :class="svgClass" aria-label="[title]" fill="currentColor" viewBox="0 0 512 512"
               xmlns="http://www.w3.org/2000/svg">
            <Reddit />
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="https://pinterest.com/pinhideout" target="_blank">
        <div :class="pinterest">
          <svg :class="svgClass" aria-label="[title]" fill="currentColor" viewBox="0 0 384 512"
               xmlns="http://www.w3.org/2000/svg">
            <Pinterest />
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="" target="_blank">
        <div :class="tiktok">
          <svg :class="svgClass" aria-label="[title]" fill="currentColor" viewBox="0 0 448 512"
               xmlns="http://www.w3.org/2000/svg">
            <TikTok />
          </svg>
        </div>
      </a>
    </li>
  </ul>
</template>