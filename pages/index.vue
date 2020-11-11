<template>
  <div class="imagen p-5">
    <h1 class="text-2xl text-center text-red-600 font-bold mt-2">
      Choa Heroky {{title}}
    </h1>
    <Tales />
  </div>
</template>

<script>
export default {
  

  async asyncData({$axios}) {
    console.log("@@@@@@@@@@@@@@@@@@@@")
    const title = await $axios.$get("https://jsonplaceholder.typicode.com/todos/1")
    return {
      title: title.title
    }
  },
};
</script>

<style>

.imagen {
  min-height: 100vh;
  background-image: url("https://c.wallhere.com/photos/e3/87/Lana_Rhoades_pornstar-1576499.jpg!d");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  border: 1px solid red;
}
</style>
