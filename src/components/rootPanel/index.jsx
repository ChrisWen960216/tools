import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';
import './RootPanel.scss';

const RootPanel = (props) => {
  const [panelVisible, changePanelVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) { return props.onRootSubmit(values); }
      return false;
    });
  };

  const renderOpsPanel = () => {
    const { form: { getFieldDecorator } } = props;
    return (
      <div className="ops_panel">
        <Form onSubmit={handleSubmit}>
          <Form.Item label="分类标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入分类标题' }],
              initialValue: '',
            })(<Input placeholder="请输入分类标题..." />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" style={{ marginRight: '20px' }}>添加</Button>
            <Button type="default" onClick={() => changePanelVisible(false)}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div className="RootPanel">
      <div className="nav_header">
        <p>
          <span>目前处于: </span>
          <span className="primary_color">根</span>
        </p>
        <p>你可以:</p>
        <p>
          <span>1.</span>
          <span className="primary_color"> 添加 </span>
          <span>一个导航列表栏目</span>
        </p>
      </div>
      {panelVisible ? renderOpsPanel() : <Button type="primary" onClick={() => changePanelVisible(true)}>开始添加</Button>}
    </div>
  );
};


export default Form.create()(RootPanel);

RootPanel.propTypes = {
  form: PropTypes.object.isRequired,
  onRootSubmit: PropTypes.func,
};

RootPanel.defaultProps = {
  onRootSubmit: f => f,
};
