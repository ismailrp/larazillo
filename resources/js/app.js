// import './bootstrap';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import AppLayout from '@/Layouts/AppLayout.vue';

createInertiaApp({
  resolve: async(name) =>{
    const pages = import.meta.glob('./Pages/**/*.vue')
    const page = await resolvePageComponent(
      `./Pages/${name}.vue`,
      pages
    )
    page.default.layout = page.default.layout || AppLayout
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})