import React from "react";
import PageHead from "./PageHead";
import CloseIcon from "@mui/icons-material/Close";

const SidePopup = ({ show, title, children, closeFunction }) => {
  return (
    show ? (
      <div className="side-overlay">
        <div className="side-content">
          <PageHead title={title}>
            <button
              className="tos-delete btn tos-btn"
              onClick={() => closeFunction()}
            >
              <CloseIcon />
            </button>
          </PageHead>
          <div className="side-contentful">{children}</div>
        </div>
      </div>
    ) :  null
  );
};
export default SidePopup;
