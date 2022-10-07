import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/index'
import '@csstools/normalize.css'
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('svg-icon', () => import('@/components/SvgIcon/index.vue'))
app.use(router)

app.mount('#app')
