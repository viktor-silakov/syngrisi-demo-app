import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // root: '/syngrisi-demo-app/',
    base: process.env.VITE_BASE_PATH || '/syngrisi-demo-app/',
    plugins: [react()],
});
