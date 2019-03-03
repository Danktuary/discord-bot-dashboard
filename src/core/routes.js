import Home from '@v/Home.vue';

export default [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/me',
		name: 'me',
		// route level code-splitting
		// this generates a separate chunk (me.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "me" */ '@v/Me.vue'),
	},
	{
		path: '/commands',
		name: 'commands',
		component: () => import(/* webpackChunkName: "commands" */ '@v/Commands.vue'),
		children: [
			{
				path: 'categories/:category',
				name: 'command-category',
				component: () => import(/* webpackChunkName: "command-category" */ '@v/CommandCategory.vue'),
			},
			{
				path: ':command',
				name: 'command',
				component: () => import(/* webpackChunkName: "command" */ '@v/Command.vue'),
			},
		],
	},
];
