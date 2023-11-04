import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // root: '/syngrisi-demo-app/',
    base: '/syngrisi-demo-app/',
    plugins: [react()],
});
