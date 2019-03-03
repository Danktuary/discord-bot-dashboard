import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueDiscordMessage from 'vue-discord-message';
import App from './App.vue';
import router from './core/router.js';
import store from './store/index.js';

Vue.use(BootstrapVue);
Vue.use(VueDiscordMessage, {
	profiles: {
		bot: {
			author: 'Bot',
			bot: true,
			avatar: 'red',
		},
	},
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
