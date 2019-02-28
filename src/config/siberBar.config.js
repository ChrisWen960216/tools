const sideBars = [
  {
    key: 'navSetting',
    icon: 'setting',
    text: '导航设置',
  },
  {
    key: 'customerManagement',
    icon: 'team',
    text: 'Demo',
    children: [
      {
        key: 'rxjs_hooks',
        text: 'rxjsHooks',
      },
    ],
  },
  // {
  //   key: 'commissionRecord',
  //   icon: 'money-collect',
  //   text: '佣金记录',
  // },
  // {
  //   key: 'editPassword',
  //   icon: 'lock',
  //   text: '修改密码',
  // },
];

export default sideBars;
