import React from 'react';
import { Wrap } from './styles';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <Wrap>
      <Spin tip="Loading..." size="large" />
    </Wrap>
  );
};

export default Loading;
