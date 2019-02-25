import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './NavOps.scss';

const NavOpsContent = (props) => {
  const { selectTitle, selectedId } = props.selectedItem;

  const [type, changeType] = useState('');

  const renderOpsForm = (type) => {
    console.log(type);
    return (
      <React.Fragment>
        <h1>{selectTitle}</h1>
        <Button type="default" onClick={() => changeType('')}>取消</Button>
      </React.Fragment>
    );
  };

  const renderOpsPanel = (_selectedId, _selectTitle) => {
    if (_selectedId && _selectedId.length > 0) {
      return (
        <div className="selected_item">
          <div className="header">
            <span>当前选择的节点是:</span>
            <span>{_selectTitle}</span>
          </div>
          <div className="ops_panel">
            {type
              ? (
                <div className="ops_form">
                  {renderOpsForm()}
                </div>
              )
              : (
                <React.Fragment>
                  <div className="intro">
              请选择你想要进行的操作:
                  </div>
                  <div className="btnGroup">
                    <Button type="default" htmlType="button" onClick={() => changeType('edit')}>编辑</Button>
                    <Button type="primary" htmlType="button" onClick={() => changeType('add')}>添加</Button>
                    <Button type="danger" htmlType="button" onClick={() => changeType('delete')}>删除</Button>
                  </div>
                </React.Fragment>
              )}
          </div>
        </div>
      );
    }
    return <div className="no_selected">尚未选择任何节点</div>;
  };

  return renderOpsPanel(selectedId, selectTitle);
};

export default NavOpsContent;

NavOpsContent.propTypes = {
  selectedItem: PropTypes.object.isRequired,
};
