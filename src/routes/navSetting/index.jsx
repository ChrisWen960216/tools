import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import MainLayout from '../../layouts/main';
import NavTree from '../../components/navTree';
import NavPanel from '../../components/navPanel';
import './NavSetting.scss';

const NavSetting = (props) => {
  useEffect(() => {
    props.getNavigation();
  }, []);

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState({});

  const onRootSubmit = values => console.log(values);

  const onNodeSelect = (_selectedKeys, _info) => {
    setSelectedKeys(_selectedKeys);
    setSelectedInfo(_info);
  };


  return (
    <MainLayout selectedKey="nav_setting" contentName="nav_setting">
      <div className="nav_container">
        <NavTree navigation={props.navigation} onNodeSelect={onNodeSelect} selectedKeys={selectedKeys} />
      </div>
      <div className="panel_container">
        <NavPanel selectedInfo={selectedInfo} onRootSubmit={onRootSubmit} />
      </div>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return { ...state.navigation };
}

function mapDispatchToProps(dispatch) {
  return {
    getNavigation: () => dispatch({ type: 'navigation/getNavigation' }),
  };
}

NavSetting.propTypes = {
  getNavigation: PropTypes.func.isRequired,
  navigation: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSetting);
