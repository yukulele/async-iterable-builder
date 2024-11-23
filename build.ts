import { watch } from 'node:fs'
import Bun from 'bun'
import dts from 'bun-plugin-dts'
async function build() {
  console.time('build')
  await Bun.build({
    entrypoints: ['./src/AsyncIterableBuilder.ts'],
    outdir: './dist',
    minify: true,
    plugins: [dts()],
    sourcemap: 'external',
  })
  console.timeEnd('build')
}

await build()
if (process.argv[2] === 'watch') {
  const watcher = watch(
    `${import.meta.dir}/src`,
    { recursive: true },
    (event, filename) => {
      console.info(`Detected ${event} in ${filename} (src)`)
      console.info('compile...')
      build()
    },
  )

  process.on('SIGINT', () => {
    watcher.close()
    console.info('bye')
    process.exit(0)
  })
}
