<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="photo of photos">
        <img :src="photo.url" :alt="photo.title" />
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Alurapic',
      photos: [
        {
          url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
          title: 'dog'
        },
        {
          url: 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg',
          title: 'dog'
        }
      ]
    }
  }
}
</script>

<style>

</style>
