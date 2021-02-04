import Vue from 'vue';

Vue.filter('price', val => `$${(val / 100).toFixed(2)}`);
