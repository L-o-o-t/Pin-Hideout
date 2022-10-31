<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <div id="popup-start" class="grid grid-cols-8   relative">

    <div class="col-start-2 col-end-8 4xl:col-start-1 4xl:col-end-9 row-start-2 text-neutral-50 bg-neutral-700   border-x-4 border-[#111]">
      <div class="grid grid-cols-8 xl:grid-cols-1">
        <div class="col-start-2 col-end-8 4xl:col-start-1 4xl:col-end-9 mb-20">
<Header />
        </div>
        <div class="col-start-2 col-end-8 4xl:col-start-1 4xl:col-end-9  text-neutral-400">
          <div class="flex flex-col justify-items-center">
<!--               main-->
            <Main />
            <div class="col-start-2 col-end-8 grid grid-col-4  justify-center">
              <h2
                  class="col-end-4 col-start-2 text-primary flex justify-center text-3xl md:text-xl xs:text-base ">Subscribe to
              our news
              letter</h2>
             <div class="col-start-2 col-end-4 row-start-2 text-2xl md:text-base xs:text-xs p-5 max-w-5xl"><span
                 class="">Be the
               first
              to find
              out
              about our latest Hat Pins, Stickers and Patches. New stuff gets released all the time! We will never spam
              you and you can unsubscribe
              anytime.</span></div></div></div>
          <form class="mb-20 mt-5 grid grid-cols-4 xl:px-5" action="http://newsletter.subernova.com/demo/subscribe"
                method="POST"
                accept-charset="utf-8">
           <label for="email">Email</label><br/>
            <input type="email" name="email" id="email"/>
            <br/>
            <div class="flex col-start-2 col-end-4 xl:col-end-5 xl:col-start-1">
            <input type="checkbox" name="gdpr" id="gdpr"/>
            <span class="xs:text-xs"><strong>Marketing permission</strong>: I give my consent to  to be in
              touch
              with me via
              email
              using the information I have provided in this form for the purpose of news, updates and marketing.</span>
            <br/></div>
            <input type="hidden" name="list" value="UwTOxLT6FpyfwSNkqUKR7g"/>
            <input type="hidden" name="subform" value="yes"/>
            <div class="flex justify-end col-start-3 col-end-4 row-start-4 xl:col-end-5 xl:row-start-6">
              <input type="submit" name="submit" id="submit" value="Submit"/></div>
          </form>
          </div>
        </div>
      </div>
  <Footer />
    </div>
</template>

<style scoped>

</style>
