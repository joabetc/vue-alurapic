import Vue from 'vue';

Vue.directive('my-transform', {

  bind(el, binding, vnode) {
    console.log(el);
  }

});