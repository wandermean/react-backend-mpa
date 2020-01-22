import React, { useContext, Fragment, memo, useMemo } from "react";
import moment from "moment";
import { Button, Select, DatePicker } from "antd";
import AppContext from "../../../context";
import styles from "./style.less";

const Option = Select.Option;

function QueryParams() {
  const { state, dispatch } = useContext(AppContext);
  const { functionArray, queryParams, storeArray } = state;

  return (
    <Fragment>
      <div className={styles.queryParams}>
        <span>AI巡店功能：</span>
        <Select
          value={queryParams.functionType}
          className={styles.selectCom}
          notFoundContent="暂无数据"
        >
          <Option key="-1">全部</Option>
        </Select>
        <Button
          type="primary"
        >
          查询
        </Button>
      </div>
    </Fragment>
  );
}

export default memo(QueryParams);
