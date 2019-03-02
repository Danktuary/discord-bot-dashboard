<template>
	<b-navbar id="nav-bar" toggleable="lg" type="dark" variant="dark">
		<b-navbar-brand href="#">Bot Dashboard</b-navbar-brand>
		<b-navbar-toggle target="nav-collapse" />
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item :to="{ name: 'home' }" exact active-class="active">Home</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav class="ml-auto">
				<template v-if="user && user.id">
					<b-nav-item-dropdown right>
						<template slot="button-content">{{ userTag }}</template>
						<b-dropdown-item :to="{ name: 'me' }" active-class="active">Profile</b-dropdown-item>
						<b-dropdown-item href="#" @click.prevent="logout">Logout</b-dropdown-item>
					</b-nav-item-dropdown>
				</template>
				<template v-else>
					<b-nav-item href="#" @click.prevent="login">Login</b-nav-item>
				</template>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	name: 'NavBar',
	computed: {
		...mapState(['user']),
		...mapGetters({ userTag: 'user/tag' }),
	},
	methods: {
		login() {
			this.$store.commit('user/set', {
				id: '123456789012345678',
				username: 'User',
				discriminator: '1234',
			});
		},
		logout() {
			this.$store.commit('user/clear');
		},
	},
};
</script>

<style lang="scss">
#nav-bar {
	border-bottom: 1px solid rgba(#fff, 0.1);
}
</style>
