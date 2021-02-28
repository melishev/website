import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default async (context, inject) => {
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'https://via.placeholder.com/300',
    loading: require(`${'~/assets/svg/loader.svg'}`),
    attempt: 3,
    lazyComponent: true,
    observer: true,
    throttleWait: 500
  })
}