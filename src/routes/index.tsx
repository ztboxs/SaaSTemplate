import {
  Outlet,
  Route,
  Router,
  RouterProvider,
  createHashHistory,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { MainLayout } from '@/components/layouts';

// 导入所有模块化路由配置
import { homeRoute } from '@/pages/home/route';
import { aboutRoute } from '@/pages/about/route';
import { notFoundRoute } from '@/pages/notfound/route';
import { faqRoute } from '@/pages/faq/route';
import { landingRoute } from '@/pages/landing/route';
import { loginRoute } from '@/pages/login/route';

// 创建根路由
// eslint-disable-next-line react-refresh/only-export-components
export const rootRoute = createRootRouteWithContext<Record<string, never>>()({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});

// 使用模块化配置创建路由
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: homeRoute.path,
  component: homeRoute.component,
});

const aboutRouteInstance = new Route({
  getParentRoute: () => rootRoute,
  path: aboutRoute.path,
  component: aboutRoute.component,
});

const faqRouteInstance = new Route({
  getParentRoute: () => rootRoute,
  path: faqRoute.path,
  component: faqRoute.component,
});

const landingRouteInstance = new Route({
  getParentRoute: () => rootRoute,
  path: landingRoute.path,
  component: landingRoute.component,
});

const loginRouteInstance = new Route({
  getParentRoute: () => rootRoute,
  path: loginRoute.path,
  component: loginRoute.component,
});

const notFoundRouteInstance = new Route({
  getParentRoute: () => rootRoute,
  path: notFoundRoute.path,
  component: notFoundRoute.component,
});

// 创建路由树
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRouteInstance,
  faqRouteInstance,
  landingRouteInstance,
  loginRouteInstance,
  notFoundRouteInstance,
]);

// 创建路由器
const hashHistory = createHashHistory();
const router = new Router({
  routeTree,
  history: hashHistory,
});

// 声明路由类型
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// 路由提供组件
export function AppRouter() {
  return <RouterProvider router={router} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export { router }; 