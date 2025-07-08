import NotFoundPage from './index';

// 这个导出将在根路由文件中被导入和使用
export const notFoundRoute = {
  path: '*',
  component: NotFoundPage,
}; 