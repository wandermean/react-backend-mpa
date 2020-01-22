This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

单品营销活动列表

1、时间控件，月份显示中文；

2、选择12-27号当天0点-23点时间查询，返回结果3条，页面展示5条；

3、活动状态选【待开始】搜索，列表中多了一条活动编码2152082200001的数据；

4、活动状态选【转化期】搜索，列表中多了一条活动编码2152082200001的数据；

活动商品列表

2、搜索条件为活动编码时，列表头部展示【合计：预订数量：813，支付金额：1,349,888】文案；

3、点行调到详情，报错；

维度查询

1、维度查询菜单中，城市tab列表中缺少一列活动大区；

2、维度查询菜单中，门店tab列表中缺少一列活动大区和一列活动分公司；

6、点维度查询菜单，多调了2个接口【queryStoreListByCityCode】和【queryActionCmmdtyInfoByPage.htm?page=1&rows=10】（待确认）；

7、点维度查询菜单，接口报错【queryAllRegion.htm】（不确定是否入参问题）；

8、点列表行，没调接口

9、搜索条件为活动编码时，列表头部展示【合计：预订数量：813，支付金额：1,349,888】文案；

10、没有调查询人员信息的接口【queryUser.htm】

2152082200001

赵晓峰  // "proxy": "http://o2omxsit.service.cnsuning.com/"
陈辉    // "proxy": "http://gsmssit.admin.cnsuning.com/"