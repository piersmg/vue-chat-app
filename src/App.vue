<template>
  <div id="app">
    <header>
      <h1>Chit Chapp</h1>
      <p>Realtime voice chat for gentlemen</p>
    </header>
    <div></div>
    <router-view></router-view>
  </div>
</template>

<script>
import {auth} from './firebase.js';

console.log(auth);

export default {

  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
