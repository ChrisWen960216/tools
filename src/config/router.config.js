const routeItems = [
  {
    path: '/nav_setting',
    page: () => import('../routes/navSetting'),
  },
  {
    path: '/rxjs_hooks',
    page: () => import('../routes/rxjsHooks'),
  },
];

export default routeItems;
