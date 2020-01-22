import React, { useContext, memo } from "react";
import { Table } from "antd";
import AppContext from "../../../context";
import styles from "./style.less";

function MainTable() {
  const { state, dispatch } = useContext(AppContext);
  const { pagination } = state;

  const columns = [
    {
      align: "center",
      title: "序号",
      width: 100,
      key: "key",
      render: function(text, record, index) {
        return <span>{index + 1}</span>;
      }
    },
    {
      title: "门店名称",
      dataIndex: "storeName",
      key: "storeName"
    },
    {
      title: "门店编码",
      dataIndex: "storeCode",
      key: "storeCode"
    },
    {
      title: "AI巡店功能",
      dataIndex: "functionName",
      key: "functionName"
    },
    {
      title: "巡检时间",
      dataIndex: "touringTime",
      key: "touringTime"
    },
    {
      title: "AI检测结果",
      dataIndex: "aiResult",
      key: "aiResult",
      render: text => {
        if (!text) {
          return;
        }
        return text == 1 ? "正常" : "异常";
      }
    },
    {
      title: "检测结果详情",
      dataIndex: "aiDetail",
      key: "aiDetail",
      render: text => {
        if (text === "0") return "有人、开灯";
        else if (text === "1") return "有人、关灯";
        else if (text === "2") return "无人、开灯";
        else if (text === "3") return "无人、关灯";
      }
    },
    {
      title: "人工核实结果",
      dataIndex: "markResult",
      key: "markResult",
      render: text => {
        if (!text) {
          return;
        }
        return text == 1 ? "正确" : "错误";
      }
    },
    {
      title: "核实结果详情",
      dataIndex: "markDetail",
      key: "markDetail",
      render: text => {
        if (text === "0") return "有人、开灯";
        else if (text === "1") return "有人、关灯";
        else if (text === "2") return "无人、开灯";
        else if (text === "3") return "无人、关灯";
      }
    },
    {
      title: "图片识别准确率",
      dataIndex: "correctRate",
      key: "correctRate",
      render: text => {
        if (!text) {
          return;
        }
        return `${text}%`;
      }
    },
    {
      title: "操作栏",
      key: "action",
      render: record =>
        record.resultStatus == 1 ? <a>已核实</a> : <a>进行核实</a>
    }
  ];

  return (
    <Table
      pagination={{
        current: pagination.pageNumber,
        defaultPageSize: pagination.pageSize,
        total: pagination.totalCount
      }}
      className={styles.mianTable}
      columns={columns}
      dataSource={state.tableData}
      rowKey={record => `${record.uuid}`}
      locale={{ emptyText: "暂无数据" }}
    />
  );
}

export default memo(MainTable);
