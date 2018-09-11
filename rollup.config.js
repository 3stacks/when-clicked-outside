import babel from 'rollup-plugin-babel';

export default {
    format: 'cjs',
    entry: 'src/index.js',
    dest: 'index.js',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env']
            ]
        })
    ]
}