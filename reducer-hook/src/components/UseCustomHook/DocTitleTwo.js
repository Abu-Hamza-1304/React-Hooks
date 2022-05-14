import React, { useState } from "react";
import UseDocumentTitle from "./UseDocumentTitle";

function DocTitleTwo() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `Count ${count}`;
  //   }, [count]);

  UseDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
}

export default DocTitleTwo;
