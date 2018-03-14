<template>
  <div>
    <h1 class="centered">{{ title }}</h1>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filter by the title of the photo">
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of filteredPhotos">
        <my-panel :title="photo.titulo">
            <responsive-image :url="photo.url" :title="photo.title"/>
            <my-button 
              type="button" 
              label="Remove" 
              @buttonActivated="remove(photo)"
              :confirmation="true"/>
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/my-button/Button.vue';

export default {
  components: {
    'my-panel': Panel,
    'responsive-image': ResponsiveImage,
    'my-button': Button
  },
  computed: {
    filteredPhotos() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i');
        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  },
  methods: {
    remove(photo) {
      alert('Removing ' + photo.titulo);
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
  .centered {
    text-align: center;
  }
  .photo-list {
    list-style: none;
  }
  .photo-list .photo-list-item {
    display: inline-block;
  }
  .filter {
    display: block;
    width: 100%;
  }
</style>
