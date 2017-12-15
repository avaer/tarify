import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'lib/tar.js',
	plugins: [
    resolve(),
    commonjs(),
  ],
	// sourceMap: true,
	output: [
		{
			format: 'cjs',
			name: 'tarify',
			file: 'build/tarify.js'
		},
	]
};
