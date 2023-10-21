import icon from './icon.vue';
import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

const Icon = withInstall(icon);
export default Icon;
