import React from 'react';
import { Checkbox } from 'antd';
import MainLayout from '../../layouts/main';
import './Home.scss';

const Home = () => (
  <MainLayout contentName="Home">
    <div className="home_content">
      <h2>内网工具集</h2>
      <h3>Feature</h3>
      <p>
        <Checkbox checked />
        <span>可配置的导航页面</span>
      </p>
      <h3>Todo</h3>
      <p>
        <Checkbox checked={false} />
        <span>批量处理翻译文件</span>
      </p>
      <p>
        <Checkbox checked={false} />
        <span>可配置的座位表</span>
      </p>
    </div>
  </MainLayout>
);

export default Home;
