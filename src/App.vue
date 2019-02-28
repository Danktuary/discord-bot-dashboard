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
@import 'assets/sass/app.scss';
</style>
