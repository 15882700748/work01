module.exports = {
	publicPath: process.env.NODE_ENV === 'production'  // 打包环境
		//   ? '/production-sub-path/'
		? './'
		: '/',
	// 输出文件目录
	outputDir: 'docs',
	// eslint-loader 是否在保存的时候检查
	lintOnSave: false, //关闭eslint
	// use the full build with in-browser compiler?
	// https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	// compiler: false,
	// webpack配置
	// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	// vue-loader 配置项
	// https://vue-loader.vuejs.org/en/options.html
	// vueLoader: {},
	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: false,//代码可读性
	// css相关配置
	// use thread-loader for babel & TS in production build
	// enabled by default if the machine has more than 1 cores
	// 是否启用dll
	// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	// dll: false,
	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	// webpack-dev-server 相关配置
	devServer: {
		open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: 8080,
		https: false,
		hotOnly: false,
		proxy: null, // 设置代理
		before: app => {}
	},
	// 第三方插件配置
}