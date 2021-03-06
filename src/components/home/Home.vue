<template>
  <div>
    <h1 class="centered">{{ title }}</h1>
    <p v-show="message" class="centered">{{ message }}</p>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filter by the title of the photo">
    <ul class="photo-list">
      <li class="photo-list-item" v-for="photo of filteredPhotos" :key="photo._id">
        <my-panel :title="photo.titulo">
            <responsive-image :url="photo.url" :title="photo.title" v-my-transform:scale.animate="1.1"/>
            <router-link :to="{ name: 'update', params: { id: photo._id } }">
              <my-button type="button" label="update" />
            </router-link>
            <my-button 
              type="button" 
              label="Remove" 
              @buttonActivated="remove(photo)"
              :confirmation="true"
              buttonstyle="danger"/>
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Panel from '../shared/panel/Panel.vue';
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/my-button/Button.vue';
import PhotService from '../../domain/photo/PhotoService';

import transform from '../../directives/Transform';
import PhotoService from '../../domain/photo/PhotoService';

export default {
  components: {
    'my-panel': Panel,
    'responsive-image': ResponsiveImage,
    'my-button': Button
  },
  directives: {
    'my-transform': transform
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
      this.service
        .delete(photo._id)
        .then(() => {
          let index = this.photos.indexOf(photo);
          this.photos.splice(index, 1);
          this.message = 'Photo was removed successfully!'
        }, err => this.message = err.message);
    }
  },
  data() {
    return {
      title: 'Alurapic',
      photos: [],
      filter: '',
      message: ''
    }
  },
  created() {
    this.service = new PhotoService(this.$resource);

    this.service
      .list()
      .then(photos => this.photos = photos, err => this.message = err.message);
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
