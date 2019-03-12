const routeItems = [
  {
    path: '/nav_setting',
    page: () => import('../routes/navSetting'),
    models: () => [
      import('../models/navigation'),
    ],
  },
  {
    path: '*',
    page: () => import('../routes/home'),
  },
];

export default routeItems;
