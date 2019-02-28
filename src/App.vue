<template>
	<div id="app">
		<nav-bar />
		<router-view />
	</div>
</template>

<script>
import NavBar from '@v/partials/NavBar.vue';

export default {
	name: 'App',
	components: { NavBar },
};
</script>

<style lang="scss">
@import 'assets/sass/app.scss';
</style>
