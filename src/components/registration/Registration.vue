<template>
  <div>
    <h1 class="centered">Registration</h1>
    <h2 class="centered"></h2>

    <form @submit.prevent="save()">
      <div class="control">
        <label for="title">Title</label>
        <input id="title" autocomplete="off" v-model="photo.title">
      </div>
      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="photo.url">
        <responsive-image v-show="photo.url" :url="photo.url" :title="photo.title"/>
      </div>
      <div class="control">
        <label for="description">Description</label>
        <textarea id="description" autocomplete="off" v-model="photo.description"></textarea>
      </div>
      <div class="centered">
        <my-button label="Save" type="submit" />
        <router-link :to="{ name: 'home' }">
          <my-button label="Back" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/my-button/Button.vue';
import Photo from '../../domain/photo/Photo';
import PhotoService from '../../domain/photo/PhotoService';

export default {
  components: {
    'responsive-image': ResponsiveImage,
    'my-button': Button
  },
  data() {
    return {
      photo: new Photo()
    }
  },
  methods: {
    save() {
      this.service
        .save(this.photo)
        .then(() => {
          this.photo = new Photo()
        }, err => console.log(err));
    }
  },
  created() {
    this.service = new PhotoService(this.$resource);
  }
}
</script>

<style scoped>
  .centered {
    text-align: center;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .control label {
    display: block;
    font-weight: bold;
  }
  .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px;
  }
</style>
