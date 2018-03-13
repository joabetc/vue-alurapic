<template>
  <div class="page-body">
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/registration">Registration</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .page-body {
    font-family: Helvetica, sans-serif;
    width: 96%;
    margin: 0 auto;
  }
</style>
