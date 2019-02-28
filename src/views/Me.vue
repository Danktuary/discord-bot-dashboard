<template>
	<div id="me">
		This is me, {{ user.username }}.
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Me',
	computed: mapState(['user']),
};
</script>
