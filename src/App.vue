<template>
  <div class="page-body">
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path ? route.path : '/'">
            {{ route.title }}
          </router-link>
        </li>
      </ul>
    </nav>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';

export default {
  data() {
    return {
      routes
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
