<template>
	<div>
		Input: {{ example.input }}
		<br />
		Output: {{ example.output }}
	</div>
</template>

<script>
export default {
	name: 'CommandExample',
	props: { example: Object },
};
</script>
