import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import New from '@/components/New'
import Pro from '@/components/Pro'
import Aboutus from '@/components/Aboutus'
import Prodetail from '@/components/Prodetail'
import Newdetail from '@/components/Newdetail'
import Newlist from '@/components/Newlist'
import Contactus from '@/components/Contactus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/pro/:id',
      name: 'pro',
      component: Pro
    },
    {
      path: '/pro/prodetail/:id',
      name: 'prodetail',
      component: Prodetail
    },
    {
      path: '/new',
      name: 'new',
      component: New,
      children: [
        {
          path: '/new/newdetail/:id',
          name: 'newdetail',
          component: Newdetail
        },{ 
          path: '/',
          name: 'newlist',
          component: Newlist
        }
      ]
    }
    ,{
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    }
    
    ,{
      path: '/contactus',
      name: 'contactus',
      component: Contactus
    }
  ]
})
