import { useEffect } from "react";

function UseDocumentTitle(count) {
  // custom hooks starts with the word "use"
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default UseDocumentTitle;
