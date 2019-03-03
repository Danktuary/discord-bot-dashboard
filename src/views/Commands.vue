<template>
	<div id="commands" class="container">
		<div class="row">
			<div class="col-md-8">
				<b-list-group v-if="commands.length" class="mt-2">
					<b-list-group-item
						v-for="command in commands"
						:key="command.name"
						href="#"
						class="flex-column align-items-start bg-dark text-light"
					>
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">{{ command.displayName }}</h5>
						</div>
						<p class="mb-0">{{ command.description }}</p>
					</b-list-group-item>
				</b-list-group>
				<div v-else>
					Sorry, no commands yet!
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Commands',
	data() {
		return {
			commands: [
				{
					name: 'ping',
					displayName: 'Ping',
					description: 'Pong',
				},
				{
					name: 'beep',
					displayName: 'Beep',
					description: 'Beep',
				},
				{
					name: 'lorem',
					displayName: 'Lorem ipsum',
					description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt delectus officia vitae? Nesciunt aliquid quidem, quaerat cupiditate suscipit.',
				},
			],
		};
	},
};
</script>
