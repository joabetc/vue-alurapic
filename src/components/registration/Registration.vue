<template>
  <div>
    <h1 class="centered">Registration</h1>
    <h2 class="centered">{{ photo.titulo }}</h2>

    <h2 v-if="photo._id" class="centered">Updating</h2>
    <h2 v-else class="centered">Incluindo</h2>
    <form @submit.prevent="save()">
      <div class="control">
        <label for="title">Title</label>
        <input name="title" v-validate data-vv-rules="required" id="title" autocomplete="off" v-model="photo.titulo">
        <span class="error" v-show="errors.has('title')">Title is required</span>
      </div>
      <div class="control">
        <label for="url">URL</label>
        <input name="url" v-validate data-vv-rules="required" id="url" autocomplete="off" v-model="photo.url">
        <span class="error" v-show="errors.has('url')">URL is required</span>
        <responsive-image v-show="photo.url" :url="photo.url" :title="photo.titulo"/>
      </div>
      <div class="control">
        <label for="description">Description</label>
        <textarea id="description" autocomplete="off" v-model="photo.descricao"></textarea>
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
      photo: new Photo(),
      id: this.$route.params.id
    }
  },
  methods: {
    save() {
      this.service
        .save(this.photo)
        .then(() => {
          if (this.id) this.$router.push({ name: 'home'});
          this.photo = new Photo()
        }, err => console.log(err));
    }
  },
  created() {
    this.service = new PhotoService(this.$resource);
    if (this.id) {
      this.service
        .find(this.id)
        .then(photo => this.photo = photo);
    }
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
  .error {
    color: red;
  }
</style>
