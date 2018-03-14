<template>
  <button @click="triggerAction()" class="button" :class="checkStyle" :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: ['type', 'label', 'confirmation', 'buttonstyle'],
  methods: {
    triggerAction() {
      if (this.confirmation) {
        if (confirm('Are you sure?')) {
          this.$emit('buttonActivated');
        }
        return;
      }
      this.$emit('buttonActivated');
    }
  },
  computed: {
    checkStyle() {
      if (this.buttonstyle == 'default' || this.buttonstyle) return 'button-default';
      if (this.buttonstyle == 'danger') return 'button-danger';
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
