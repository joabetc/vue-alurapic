import Vue from 'vue';

Vue.directive('my-transform', {

  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener('dblclick', function() {
      let increment = binding.value || 90;
      let animate = false;

      if (binding.modifiers.animate) {
        animate = true;
      }

      current += increment;
      el.style.transform = `rotate(${current}deg)`;

      if (animate) el.style.transition = 'transform 0.5s';

    })
  }

});