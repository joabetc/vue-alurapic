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
      photos: []
    }
  },
  created() {
    alert('Component was created!');
  }
}
</script>

<style>

</style>
