import React from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';

const { TreeNode } = Tree;

/**
 *
 * expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
 */

const NavTree = (props) => {
  const renderTreeNodes = data => data.map(item => (
    <TreeNode title={item.text} key={item.url} dataRef={item} />
  ));

  const renderTreeRoot = (treeRoot) => {
    if (treeRoot.length < 1) { return <TreeNode />; }
    const treeRootNode = treeRoot.map((rootItem) => {
      const hasPayload = rootItem.payload && rootItem.payload.length > 0;
      return <TreeNode title={rootItem.title} key={rootItem.title}>{hasPayload ? renderTreeNodes(rootItem.payload) : <TreeNode />}</TreeNode>;
    });
    return treeRootNode;
  };


  return (
    <Tree onSelect={props.onNodeSelect} selectedKeys={props.selectedKeys}>
      {renderTreeRoot(props.navigation)}
    </Tree>
  );
};

NavTree.propTypes = {
  navigation: PropTypes.array,
  onNodeSelect: PropTypes.func,
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

NavTree.defaultProps = {
  navigation: [],
  onNodeSelect: f => f,
  selectedKeys: [],
};

export default NavTree;
