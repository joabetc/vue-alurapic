<template>
  <button class="button button-danger" :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: ['type', 'label']
}
</script>

<style>
  .button {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }
  .button-danger {
    background: firebrick;
    color: white;
  }
  .button-default {
    background: darkcyan;
    color: white;
  }
</style>
