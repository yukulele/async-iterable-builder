import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/AsyncIterableBuilder.ts'],
  outdir: './dist',
  minify: true,
  plugins: [dts()],
  sourcemap: 'external',
})
