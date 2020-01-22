import App from "../App";
import SingleActList from "../pages/SingleActList/List";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: App,
        routes: [
          {
            path: "/singlelist",
            component: SingleActList,
          },
        ]
      }
    ]
  }
];
