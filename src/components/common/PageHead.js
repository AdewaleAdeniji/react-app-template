import React from "react";

const PageHead = ({title, children}) => {
  return (
    <div className="page-head">
      <h4 className="page-title">{title}</h4>
      <div>
          {children}
      </div>
    </div>
  );
};
export default PageHead;