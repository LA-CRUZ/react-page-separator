import nodeResolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import reactSvgPlugin from 'vite-plugin-react-svg';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactSvgPlugin(), react(), nodeResolve()],
	// https://github.com/vitejs/vite/issues/6537
	// esbuild: {
	// 	jsxInject: `import React from 'react'`,
	// },
	// https://vitejs.dev/guide/build.html#library-mode
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.jsx'),
			name: 'react-page-separator',
		},
		rollupOptions: {
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {}),
			],
			output: {
				globals: {
					react: 'React',
				},
			},
		},
	},
	resolve: {
		alias: [
			{
				find: '@font',
				replacement: path.resolve(__dirname, './src/assets/fonts'),
			},
			{
				find: '@sass',
				replacement: path.resolve(__dirname, './src/assets/sass'),
			},
			{
				find: '@image',
				replacement: path.resolve(__dirname, './src/assets/images'),
			},
			{
				find: '@component',
				replacement: path.resolve(__dirname, './src/components'),
			},
			{
				find: '@icon',
				replacement: path.resolve(__dirname, './src/assets/icons'),
			},
			{
				find: '@lib',
				replacement: path.resolve(__dirname, './src/lib'),
			},
		],
	},
});
