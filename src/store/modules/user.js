import storage from '@/core/storage.js';

export default {
	namespaced: true,
	state: JSON.parse(storage.get('user')) || {
		id: null,
		username: null,
		discriminator: null,
	},
	mutations: {
		clear(state) {
			for (const key of Object.keys(state)) {
				state[key] = null;
			}

			storage.delete('user');
		},
		set(state, user) {
			for (const [key, value] of Object.entries(user)) {
				state[key] = value;
			}

			storage.set('user', JSON.stringify(state));
		},
	},
	getters: {
		tag: state => `${state.username}#${state.discriminator}`,
	},
};
