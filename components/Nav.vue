<template>
  <header>
    <h1 class="bg-yellow-900 text-white text-3xl px-5">LecturApp</h1>
    <nav class="grid grid-cols-4 divide-x divide-white bg-yellow-900">
      <ul><li><NuxtLink  to="/diario">Diario</NuxtLink ></li></ul>
      <ul><li><NuxtLink to="/">Cuentos</NuxtLink></li></ul>
      <ul><li><NuxtLink to="/resultados">Resultados</NuxtLink></li></ul>
      <ul><li><NuxtLink to="/favoritos">Favoritos</NuxtLink></li></ul>     
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
ul {
  @apply p-2 text-white text-center font-bold text-sm
}


</style>
