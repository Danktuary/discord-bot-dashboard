<template>
	<b-navbar id="nav-bar" toggleable="lg" type="dark" variant="dark">
		<b-navbar-brand href="#">Bot Dashboard</b-navbar-brand>
		<b-navbar-toggle target="nav-collapse" />
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item :to="{ name: 'home' }">Home</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown right>
					<template slot="button-content">
						{{ user.username }}
					</template>
					<b-dropdown-item :to="{ name: 'me' }">Profile</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'NavBar',
	computed: mapState(['user']),
};
</script>
