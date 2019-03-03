<template>
	<div id="commands" class="container">
		<b-list-group v-if="categories.length">
			<command-category
				v-for="category in categories"
				:key="category.name"
				:category-name="category.name"
				:to="{ name: 'command-category', params: { category: category.name } }"
			/>
		</b-list-group>
		<div v-else>
			Sorry, no commands to display yet!
		</div>
	</div>
</template>

<script>
import CommandCategory from '@v/CommandCategory.vue';
import categories from '@/data/categories.js';
import commands from '@/data/commands.js';

export default {
	name: 'Commands',
	components: { CommandCategory },
	data() {
		return {
			categories,
			commands,
		};
	},
};
</script>
