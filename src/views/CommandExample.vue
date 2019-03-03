<template>
	<discord-messages>
		<discord-message>
			{{ prefix }}{{ commandName }}
			<template v-if="example.input">{{ example.input }}</template>
		</discord-message>
		<discord-message user="bot">
			<template v-if="example.output">{{ example.output }}</template>
		</discord-message>
	</discord-messages>
</template>

<script>
export default {
	name: 'CommandExample',
	props: {
		commandName: String,
		example: Object,
	},
	data() {
		return {
			prefix: '!',
		};
	},
};
</script>
