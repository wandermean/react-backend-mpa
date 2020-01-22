import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import routes from "./router/index";
import { renderRoutes } from "react-router-config";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import './css/_reset.css';

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <div>{renderRoutes(routes)}</div>
    </ConfigProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
