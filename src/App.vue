<template>
  <div class="page-body">
    <h1 class="centered">{{ title }}</h1>
    <input type="search" class="filter" v-on:input="filter = $event.target.value" placeholder="Filter by the title of the photo">
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of filteredPhotos">
        <my-panel :title="photo.titulo">
            <img class="responsive-image" :src="photo.url" :alt="photo.title" />
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from './components/shared/panel/Panel.vue';

export default {
  components: {
    'my-panel': Panel
  },
  computed: {
    filteredPhotos() {
      if (this.filter) {
        return [];
      } else {
        return this.photos;
      }
    }
  },
  data() {
    return {
      title: 'Alurapic',
      photos: [],
      filter: ''
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err));
  }
}
</script>

<style>
  .page-body {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .centered {
    text-align: center;
  }
  .photo-list {
    list-style: none;
  }
  .photo-list .photo-list-item {
    display: inline-block;
  }
  .responsive-image {
    width: 100%;
  }
  .filter {
    display: block;
    width: 100%;
  }
</style>
