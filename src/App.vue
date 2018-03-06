<template>
  <div>
    <h1>{{ title }}</h1>
    <img v-bind:src="photo.url" v-bind:alt="photo.title" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alurapic',
      photo: {
        url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
        title: 'dog'
      }
    }
  }
}
</script>

<style>

</style>
