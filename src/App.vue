<template>
  <div class="page-body">
    <my-menu :routes="routes" />
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'my-menu': Menu
  },
  data() {
    return {
      routes: routes.filter(route => route.menu)
    }
  }
}
</script>

<style>
  .page-body {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
  }
  .page-enter-active, .page.page-leave-active {
    transition: opacity 4s;
  }
</style>
