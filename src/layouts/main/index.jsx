import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MainLayout.scss';
import {
  Layout, Menu, Icon,
} from 'antd';
import siderBars from '../../config/siberBar.config';

const {
  Header, Content, Sider, Footer,
} = Layout;
const { SubMenu } = Menu;

const MainLayout = (props) => {
  const [collapsed, onCollapse] = useState(false);

  const renderMenuItem = (siderBar) => {
    const { key, icon, text } = siderBar;
    const menuItem = (
      <Menu.Item key={key}>
        {icon ? <Icon type={icon} /> : null}
        <span>{text}</span>
      </Menu.Item>
    );
    return menuItem;
  };

  const renderSubMenu = (siderBar) => {
    const {
      key, icon, text, children,
    } = siderBar;
    const subMenu = (
      <SubMenu
        key={key}
        title={(
          <span>
            {icon ? <Icon type={icon} /> : null}
            <span>{text}</span>
          </span>
)}
      >
        {children.map(menuItem => renderMenuItem(menuItem))}
      </SubMenu>
    );
    return subMenu;
  };


  const renderMainSider = () => {
    const siders = siderBars.map((siderBar) => {
      if (siderBar.children) { return renderSubMenu(siderBar); }
      return renderMenuItem(siderBar);
    });
    return siders;
  };

  const onSiderBarItemClick = (e) => {
    console.log(e);
  };

  const renderLogoContent = (siberCollapsed) => {
    const logoContent = siberCollapsed ? null : <div>内网工具集</div>;
    return logoContent;
  };

  const siderBar = renderMainSider();
  const logoContent = renderLogoContent(collapsed);
  return (
    <Layout style={{ minHeight: '100vh' }} className="mainLayout">
      <Sider collapsible collapsed={collapsed} onCollapse={() => onCollapse(!collapsed)}>
        <div className="logo_content">{logoContent}</div>
        <Menu theme="dark" defaultSelectedKeys={[props.selectedKey]} mode="inline" onClick={onSiderBarItemClick}>
          {siderBar}
        </Menu>
      </Sider>
      <Layout className="mainLayout_content">
        <Header style={{ background: '#fff' }} className="layout_header">
          {/* <UserCenter /> */}
        </Header>
        <Content style={{ margin: '0 16px', overflow: 'auto' }}>
          <div className={`layout_content ${props.contentName}`}>
            {props.children}
          </div>
        </Content>
        <Footer>
          Created by ChrisWen.
          {' '}
          <a href="mailto:chriswen@dae.org">Contact Me</a>
        </Footer>
      </Layout>
    </Layout>

  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
  selectedKey: PropTypes.string,
  contentName: PropTypes.string,
};

MainLayout.defaultProps = {
  children: null,
  selectedKey: '',
  contentName: '',
};

export default MainLayout;
