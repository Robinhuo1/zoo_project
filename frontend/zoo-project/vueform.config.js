// vueform.config.(js|ts)

import en from '@vueform/vueform/locales/en'
import vueform from '@vueform/vueform/dist/vueform'
import { defineConfig } from '@vueform/vueform'

// You might place these anywhere else in your project
import '@vueform/vueform/dist/vueform.css'
import {axiosHttp} from "@/helpers/backend.js";

export default defineConfig({
  theme: vueform,
  locales: { en },
  locale: 'en',
  axios: axiosHttp,
  floatPlaceholders: false,
})
