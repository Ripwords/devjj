import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Icons({}),
    Components({
      dirs: ['src/components', 'src/views'],
      resolvers: [
        IconsResolver({
          prefix: 'i'
        }),
        NaiveUiResolver(),
        (name) => {
          if (name.startsWith("Kinesis")) {
            return { importName: name, path: "vue-kinesis"}
          }
        }
      ]
    }),
  ]
})
