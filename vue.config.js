const path = require('path');

module.exports = {
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				'@c': path.join(__dirname, 'src', 'components'),
				'@v': path.join(__dirname, 'src', 'views'),
				'@bsv': path.join(__dirname, 'node_modules', 'bootstrap-vue', 'es', 'components'),
			},
		},
	},
};
