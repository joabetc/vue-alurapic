<template>
  <div>
    <h1 class="centered">Registration</h1>
    <h2 class="centered"></h2>

    <form>
      <div class="control">
        <label for="title">Title</label>
        <input id="title" autocomplete="off" 
          @input="photo.title = $event.target.value">
      </div>
      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" 
          @input="photo.url = $event.target.value">
        <responsive-image/>
      </div>
      <div class="control">
        <label for="description">Description</label>
        <textarea id="description" autocomplete="off" 
          @input="photo.description = $event.target.value"></textarea>
      </div>
      <div class="centered">
        <my-button label="Save" type="submit" />
        <router-link to="/">
          <my-button label="Back" type="button" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
import Button from '../shared/my-button/Button.vue';

export default {
  components: {
    'responsive-image': ResponsiveImage,
    'my-button': Button
  },
  data() {
    return {
      photo: {
        title: '',
        url: '',
        description: ''
      }
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
</style>
