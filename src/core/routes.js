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
];
