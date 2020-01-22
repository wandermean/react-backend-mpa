import React, { useReducer, useEffect, memo } from "react";
import QueryParams from "./components/QueryParams";
import MainTable from "./components/MainTable";
import AppContext from "../context";
import reducer from "./store/reducer";
import { changeLoading } from "./store/action";
import Loading from "../../../../../components/loading/loading";

const defaultState = {
  loading: false,
  editShow: false,
  pagination: {
    pageNumber: 1,
    pageSize: 10,
    totalCount: 0
  },
  queryParams: {},
  tableData: [],
  nowRecord: {}
};

function List() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { loading, editShow } = state;

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Loading loading={loading} />
      {!editShow ? (
        <div>
          <div className={"idx-main"}>
            <p className={"u-title"}>AI结果标记</p>
          </div>
          <QueryParams />
          <MainTable />
        </div>
      ) : (
        <div />
      )}
    </AppContext.Provider>
  );
}

export default memo(List);
