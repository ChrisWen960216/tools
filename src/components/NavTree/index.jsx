import React, { useState } from 'react';
import { Tree } from 'antd';
import PropTypes from 'prop-types';

const { TreeNode } = Tree;

const NavTree = (props) => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onExpand = (_expandedKeys) => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(_expandedKeys);
    setAutoExpandParent(false);
  };

  const onCheck = (_checkedKeys, _info) => {
    console.log('onCheck', _info);
    setCheckedKeys(_checkedKeys);
  };

  const onSelect = (_selectedKeys, _info) => {
    const title = _info.selectedNodes[0] ? _info.selectedNodes[0].props.title : null;
    setSelectedKeys(_selectedKeys);
    props.onKeysSelected(_selectedKeys, title);
  };

  const renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  });


  return (
    <Tree
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
    >
      {renderTreeNodes(props.treeData)}
    </Tree>
  );
};

export default NavTree;

NavTree.propTypes = {
  treeData: PropTypes.array.isRequired,
  onKeysSelected: PropTypes.func.isRequired,
};
