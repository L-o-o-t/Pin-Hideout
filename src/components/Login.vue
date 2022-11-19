<script setup>

</script>
<template>
  <form accept-charset="utf-8" action="http://newsletter.subernova.com/demo/subscribe"
        class="mb-20 mt-5 grid grid-cols-4 xl:px-5"
        method="POST">
    <label for="email">Email</label><br />
    <input id="email" class="col-start-2 xl:col-start-1 xl:col-end-5 col-end-4 row-start-2" name="email" type="email" />
    <br />
    <label for="password">Password</label><br />
    <input id="password" class="col-start-2 xl:col-start-1 xl:col-end-5 col-end-4 row-start-3" name="password"
           type="password" />
    <br />

    <div class="flex justify-end col-start-3 col-end-4 row-start-4 xl:col-end-5 xl:row-start-6">
      <input id="submit" name="submit" type="submit" value="Submit" /></div>
  </form>
</template>

<script>
export default {
  name: "Login"
};
</script>