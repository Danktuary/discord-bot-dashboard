const prefix = `${process.env.STORAGE_PREFIX || 'discord-bot-dashboard'}-`;

export default {
	prefix,
	get: key => localStorage.getItem(prefix + key),
	set: (key, data) => localStorage.setItem(prefix + key, data),
	delete: key => localStorage.removeItem(prefix + key),
};
