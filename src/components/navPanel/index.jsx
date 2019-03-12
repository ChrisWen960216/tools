import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'antd';
import { isEmptyObject } from '../../utils/data';
import RootPanel from '../rootPanel';

const NavPanel = (props) => {
  const renderItemPanel = () => null;


  const renderRootPanel = () => <RootPanel onRootSubmit={props.onRootSubmit} />;

  const renderNavPanel = (_selectedInfo) => {
    const result = isEmptyObject(_selectedInfo);
    if (result) { return renderRootPanel(); }
    return renderItemPanel(_selectedInfo);
  };

  return (
    <div className="NavPanel">
      {renderNavPanel(props.selectedInfo)}
    </div>
  );
};

NavPanel.propTypes = {
  selectedInfo: PropTypes.object,
  onRootSubmit: PropTypes.func,
};

NavPanel.defaultProps = {
  selectedInfo: {},
  onRootSubmit: f => f,
};

export default NavPanel;
