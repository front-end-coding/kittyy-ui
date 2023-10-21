import link from './link.vue'
import type { App, Plugin } from 'vue';

type SFCWithInsall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInsall<T>).install = (app: App) => {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInsall<T>
}

const Link = withInstall(link)

export default Link;