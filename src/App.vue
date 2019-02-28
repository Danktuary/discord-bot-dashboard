<template>
	<div id="app">
		<nav-bar />
		<router-view />
	</div>
</template>

<script>
import NavBar from '@v/partials/NavBar.vue';
import storage from './core/storage.js';

export default {
	name: 'App',
	components: { NavBar },
	created() {
		// dummy user setup
		storage.set('user', JSON.stringify({
			id: '123456789012345678',
			username: 'User',
			discriminator: '1234',
		}));
	},
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
