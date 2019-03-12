import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'dva';
import MainLayout from '../../layouts/main';

const NavSetting = (props) => {
  useEffect(() => {
    props.getNavigation();
  }, []);

  console.log(props.navigation);

  return (
    <MainLayout selectedKey="nav_setting">
      <Button loading={props.loading} onClick={props.getNavigation}>
        GetNavigation
      </Button>
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
