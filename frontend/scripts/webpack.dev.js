const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { OUTPUT_PATH } = require("./constants");

const devConfig = {
	mode: "development",
	devtool: "cheap-module-source-map",
	devServer: {
		disableHostCheck: true,
		contentBase: OUTPUT_PATH,
		host: "cos-metrik-frontend.herokuapp.com",
		port: 443,
		hot: true,
		overlay: true,
		open: true,
		historyApiFallback: true,
		proxy: {
			context: ["/api"],
			target: "https://cos-metrik-backend.herokuapp.com",
			secure: false,
			changeOrigin: true,
		},
	},
};

module.exports = merge(commonConfig, devConfig);
