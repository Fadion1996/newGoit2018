import Vue from 'vue'
import Router from 'vue-router'
import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop' 

Vue.use(Router)

export default new Router({
  routes: [//    { 
    //      path: '/', 
    //      name: 'home', 
    //      component: home 
    //    }, 
    //    { 
    //      path: '/details', 
    //      name: 'details', 
    //      component: details 
    //    }, 
    //    { 
    //      path: '/search', 
    //      name: 'search', 
    //      component: search 
    //    }, 
      { 
      path: '/previewcard', 
      name: 'PreviewCardTop', 
      component: PreviewCardTop }]
})
