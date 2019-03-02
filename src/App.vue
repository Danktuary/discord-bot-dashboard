<template>
	<div id="app">
		<nav-bar />
		<main id="content-wrapper" class="container bg-dark my-4 py-3 rounded">
			<router-view />
		</main>
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

body {
	color: #fff;
	background-color: #1a1a1a;
}

#content-wrapper {
	border: 1px solid rgba(#fff, 0.1);
}
</style>
