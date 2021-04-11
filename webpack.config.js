/** @format */

const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
	output: {
		path: __dirname + "/docs",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				loader: "image-webpack-loader",
				// Specify enforce: 'pre' to apply the loader
				// before url-loader/svg-url-loader
				// and not duplicate it in rules with them
				enforce: "pre",
			},
			{
				test: /\.(png|jpg|ico)$/,
				use: ["file-loader?name=[name].[ext]"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HTMLWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
		new BrowserSyncPlugin(
			// BrowserSync options
			{
				host: HOST,
				port: PORT,
				proxy: PROXY,
			},
			// plugin options
			{
				// prevent BrowserSync from reloading the page
				// and let Webpack Dev Server take care of this
				reload: false,
			}
		),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
