/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import GraphQlProvider from '@/libs/GraphqlProvider';
import 'antd/dist/antd.css';
import './public/favicon.ico';
import Apps from './Apps';

const createElementRoot = () => {
  document.body.style.margin = "0px";
  document.body.style.padding = "0px";
  document.body.style.clear = "both";
  let div = document.createElement('div');
  div.setAttribute('id', 'root');
  return div;
}

const elementRoot = createElementRoot();
const root = document.querySelector('body').appendChild(elementRoot);

const headers = {
  // 'authorization': key ? key : '',
};

const Root = () => {
  return (
    <GraphQlProvider headers={headers}>
      <Apps />
    </GraphQlProvider>
  );
}

ReactDOM.render(<Root />, root);
