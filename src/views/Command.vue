<template>
	<transition name="fade" mode="out-in">
		<div id="command" :key="$route.params.command">
			<b-card :header="command.name" class="bg-dark">
				{{ command.description }}
			</b-card>
		</div>
	</transition>
</template>

<script>
import commands from '@/data/commands.js';

export default {
	name: 'Command',
	computed: {
		command() {
			return commands.find(cmd => cmd.name === this.$route.params.command);
		},
	},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	position: relative;
	top: 0;
	left: 0;
	transition: all 0.15s ease-in-out;
}

.fade-enter {
	opacity: 0;
	left: -1em;
}

.fade-leave-to {
	opacity: 0;
	left: 1em;
}
</style>
