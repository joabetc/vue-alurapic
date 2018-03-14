<template>
  <button @click="triggerAction()" class="button button-danger" :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: ['type', 'label'],
  methods: {
    triggerAction() {
      if (confirm('Are you sure?')) {
        this.$emit('buttonActivated');
      }
    }
  }
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
