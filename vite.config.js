import { defineConfig, loadEnv } from 'vite'

export default defineConfig(async ({ command, mode, isPreview, isSsrBuild }) => {
    const env = loadEnv(mode, process.cwd() + '/envDir', 'APP_')

    console.log(env);

    return {
        base: '/vite',
        clearScreen: true,
        envPrefix: 'APP_',
        // css: {
        //     devSourcemap: true
        // },

        logLevel: 'info',
        envDir: 'envDir',
        server: {
            open:'index.html',
            port: 3000,
            strictPort: true
        },
        preview: {
            port: 8080,
            strictPort: true
        }
    }
})
