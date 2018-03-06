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
    this.$http.get('http://localhost:3000/v1/fotos');
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err));
    });
  }
}
</script>

<style>

</style>
