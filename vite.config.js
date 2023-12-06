export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/babymonitor': 'http://192.168.4.1',
    }
  }
});