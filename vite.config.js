import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        // This plugin tells Vite to treat all .js files as JSX
        // (your project uses .js extension but contains JSX syntax)
        {
            name: 'treat-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/)) return null;
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
        react(),
    ],
    // Allow PDF files to be imported as asset URLs (same as CRA behaviour)
    assetsInclude: ['**/*.pdf'],
    optimizeDeps: {
        esbuildOptions: {
            // Tell esbuild to handle JSX in .js files during dependency pre-bundling
            loader: {
                '.js': 'jsx',
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
