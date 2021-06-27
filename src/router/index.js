import { createWebHashHistory, createRouter} from 'vue-router';
import Layout from '@/layout/index.vue';

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/components/Redirect/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },
];

export const asyncRoutes = [];

const history = createWebHashHistory();
const router = createRouter({
  history,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: constantRoutes,
});

export default router;

export function resetRouter() {
  const newRouter = createRouter({
    history,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
    routes: constantRoutes,
  });
  router.matcher = newRouter.matcher; // reset router
}
