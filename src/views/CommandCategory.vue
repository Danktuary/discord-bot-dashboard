<template>
	<b-list-group-item
		:to="{ name: 'command-category', params: { category: category.name } }"
		class="command-category flex-column align-items-start bg-dark text-light"
	>
		<div>
			<h5 class="mb-1">
				{{ category.displayName }}
				<b-badge v-if="category.restricted" variant="secondary">Restricted</b-badge>
			</h5>
			<b-button-group>
				<b-button
					v-for="command in filteredCommands"
					:key="command.name"
					:to="{ name: 'command', params: { command: command.name } }"
					active-class="active"
					variant="primary"
					class="command-link"
				>
					{{ command.displayName }}
				</b-button>
			</b-button-group>
		</div>
	</b-list-group-item>
</template>

<script>
import categories from '@/data/categories.js';
import commands from '@/data/commands.js';

export default {
	name: 'CommandCategory',
	props: {
		categoryName: String,
	},
	computed: {
		category() {
			return categories.find(c => c.name === this.categoryName);
		},
		filteredCommands() {
			return commands.filter(command => command.category === this.categoryName);
		},
	},
};
</script>

<style lang="scss">
.command-category {
	.command-link {
		border-left-color: rgba(#000, 0.1);

		&:first-child {
			border-left-width: 0;
		}
	}
}
</style>
