import { defineConfig } from 'vite';

export default defineConfig({
  server: { port: 4321, strictPort: true },
  plugins: [{
    name: 'reload-slides',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.md')) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
    },
  }],
});
