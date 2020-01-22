let prefixURL = "/o2omx-web/ai/config/";

const DI = {
  //查询门店功能配置列表
  queryAiTouringStoreConfig: prefixURL + "queryAiTouringStoreConfig.htm",

  //查询全部业态列表
  querySiteInfoList: prefixURL + "querySiteInfoList.htm",

  //查询全部大区列表
  queryAreaInfoList: prefixURL + "queryAreaInfoList.htm",

  //查询门店列表
  queryStoreInfoListByCode: prefixURL + "queryStoreInfoListByCode.htm",

  //查询全部AI巡店功能列表
  queryAllAiCheckType: prefixURL + "queryAllAiCheckType.htm",

  //查询对应业态下AI巡店功能列表
  queryFunctionInfoList: prefixURL + "queryFunctionInfoList.htm",

  //查询Ai功能配置
  queryAiFunctionConfig: prefixURL + "queryAiFunctionConfig.htm",

  //新增Ai功能配置
  insertAiFunctionConfig: prefixURL + "insertAiFunctionConfig.htm",
  
  //检测Ai功能配置
  checkFunctionConfigExist: prefixURL + "checkFunctionConfigExist.htm",

  //编辑Ai功能配置
  editAiFunctionConfig: prefixURL + "editAiFunctionConfig.htm",

  //删除Ai功能配置
  deleteAiFunctionConfig: prefixURL + "deleteAiFunctionConfig.htm",
  
  //新增門店配置
  insertAiTouringStoreConfig: prefixURL + "insertAiTouringStoreConfig.htm",

  //刪除門店配置
  deleteAiTouringStoreConfig: prefixURL + "deleteAiTouringStoreConfig.htm",

  //編輯門店配置
  editAiTouringStoreConfig: prefixURL + "editAiTouringStoreConfig.htm",

  //准确率分析结果查询
  queryAnalyseDetail: "/o2omx-web/ai/mark/queryAnalyseDetail.htm",

  //监测结果准确率查询
  queryAnalyseMonitorChart: "/o2omx-web/ai/mark/queryAnalyseMonitorChart.htm",

  //图表识别准确率查询查询
  queryAnalysePhotoChart: "/o2omx-web/ai/mark/queryAnalysePhotoChart.htm",

  //AI门店结果列表 - 查询
  queryStoreResultMarkInfo: "/o2omx-web/ai/mark/queryStoreResultMarkInfo.htm",

  //AI门店
  queryStoresByStaffId: "/o2omx-web/ai/mark/queryStoresByStaffId.htm",

  //AI图片结果列表
  queryPhotoResultMarkInfo: "/o2omx-web/ai/mark/queryPhotoResultMarkInfo.htm",

  //AI图片结果列表 - 修改
  updatePhotoResultMarkInfo: "/o2omx-web/ai/mark/updatePhotoResultMarkInfo.htm"
};

export default DI;
