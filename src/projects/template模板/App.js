import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { renderRoutes } from "react-router-config";

function useQuery() {
    const query = window.location.search.substring(1);
    const pairs = query.split("&");
    let args = {};
    let pos;
    let idx;
    let argname;
    let val;

    for (var i = 0; i < pairs.length; i++) {
      pos = pairs[i];
      idx = pos.indexOf("=");
      if (idx == -1) continue;
      argname = pos.substring(0, idx);
      val = decodeURIComponent(pos.substring(idx + 1));
      args[argname] = val;
    }
    return args;
}

const App = props => {
  const query = useQuery();
  let history = useHistory();
  useEffect(() => {
    const to = query['to'];
    history.push(`/${to}`)
  }, [])
  return (
    <div>
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App;
