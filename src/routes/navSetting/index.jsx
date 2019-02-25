import React, { useState } from 'react';
import { connect } from 'dva';
import MainLayout from '../../layouts/main';
import NavTree from '../../components/NavTree';
import NavOps from '../../components/NavOps';
import './NavSetting.scss';

const treeData = [
  {
    title: '通用',
    key: 'common',
    children: [
      {
        title: 'YApi',
        key: 'http://yapi.dae.org/',

      },
      {
        title: 'GitHub',
        key: 'https://www.github.com',

      },
      {
        title: 'GitLab',
        key: 'http://gitlab.intranet.huiyin.com/dashboard/projects',

      },
      {
        title: 'OA',
        key: 'http://oa.huiyin.com:10000',

      },
      {
        title: 'Wiki',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16025633',

      },
      {
        title: 'Jira',
        key: 'http://jira.szjys.com/secure/Dashboard.jspa',

      },
      {
        title: 'JIRA 使用手册',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16026040',
      },
    ],
  },
  {
    title: '发布版本及进度',
    key: 'version',
    children: [
      {
        title: 'Coingame 综合项目进展',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=21137428',
      },
      {
        title: 'SP-WEB V加玩法等',
        key: 'http://jira.szjys.com/projects/GAME/versions/11503',

      },
    ],
  },
  {
    title: 'CoinGame',
    key: 'CoinGame',
    children: [
      {
        title: '资料库首页',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=14876710',

      },
      {
        title: '各环境使用表',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=21136833',

      },
      {
        title: '产品通用规则说明',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16027110',

      },
      {
        title: '前端需求文档',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=14876714',

      },
      {
        title: '手机端H5需求文档',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16024309',

      },
      {
        title: '后台管理系统需求文档',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16024335',

      },
      {
        title: '钱包管理系统需求文档',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16024811',

      },
      {
        title: 'service服务端口和版本列表',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=16023845',

      },
      {
        title: '发布计划',
        key: 'http://jira.szjys.com/projects/GAME?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page',

      },
      {
        title: '项目进度',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=21137859',

      },
    ],
  },
  {
    title: 'CoinCash 分销系统',
    key: 'CoinCash',
    children: [
      {
        title: '原型图',
        key: 'http://7.jeilzhang.sinaapp.com/#g=1',
      },
      {
        title: '开发接口文档',
        key: 'http://wiki.szjys.com/pages/viewpage.action?pageId=21137124',
      },
      {
        title: '后台管理(线上)',
        key: 'https://dist.coincash.com/',
      },
    ],
  },
  {
    title: 'AToken',
    key: 'AToken',
    children: [
      {
        title: '官网',
        key: 'https://www.atoken.com/',
      },
      {
        title: '新版官网-测试环境',
        key: 'http://testing-www.intranet.atoken.com/',
      },
      {
        title: '裂变邀请原型',
        key: 'http://3sxxmw.share.axure.org/#g=1&p=%E8%A3%82%E5%8F%98%E9%82%80%E8%AF%B7',
      },
    ],
  },
  {
    title: '运维',
    key: 'RunDeck',
    children: [
      {
        title: 'RunDeck',
        key: 'https://rundeck.dae.org/user/login',
      },
    ],
  },
];


const NavSetting = (props) => {
  console.log(props);

  const [selectedItem, setSelectedItem] = useState({ selectedId: '', selectTitle: '' });

  const onKeysSelected = (_selectedId, _selectTitle) => {
    setSelectedItem({ selectedId: _selectedId, selectTitle: _selectTitle });
  };

  return (
    <MainLayout selectedKey="navSetting" contentName="navSetting">
      <div className="tree_content">
        <NavTree treeData={treeData} onKeysSelected={onKeysSelected} />
      </div>
      <div className="ops_content">
        <NavOps selectedItem={selectedItem} />
      </div>
    </MainLayout>
  );
};

const mapStateToProps = state => ({ ...state });


export default connect(mapStateToProps)(NavSetting);
