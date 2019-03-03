<template>
	<transition name="fade" mode="out-in">
		<div id="command" :key="$route.params.command">
			<b-card
				class="bg-dark"
			>
				<template slot="header">
					Command info about <strong>{{ command.displayName }}</strong>
				</template>
				<b-card-sub-title>{{ command.description }}</b-card-sub-title>
				<div v-if="command.examples && command.examples.length">
					<command-example
						v-for="(example, index) in command.examples"
						:key="`example-${index}`"
						:example="example"
					/>
				</div>
			</b-card>
		</div>
	</transition>
</template>

<script>
import CommandExample from './CommandExample.vue';
import commands from '@/data/commands.js';

export default {
	name: 'Command',
	components: { CommandExample },
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
