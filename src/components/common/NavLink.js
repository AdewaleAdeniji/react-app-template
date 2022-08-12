import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "rc-menu";
import Dropdown from "rc-dropdown";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { InsertChartOutlined } from "@mui/icons-material";
const LinkItem = ({ nav, activePath }) => {
  const history = useHistory();
  const renderLink = (nav) => {
    return (
      <Link to={nav.path}>
        {nav.icon}
        {nav.title}
        {nav.hasSubmenu && <ArrowDropDownIcon className={"ml-4"} />}
      </Link>
    );
  };
  const menu = (submenu) => (
    <Menu placement="bottomRight" className="menu-drop">
      {submenu.map((sub) => {
        return (
          <button className="btn-submenu" onClick={()=>history.push(sub.path)}>
            <InsertChartOutlined /> {sub.title}
          </button>
        );
      })}
    </Menu>
  );
  return (
    <li className={`navlink ${activePath === nav.key && "active"}`}>
      {nav.hasSubmenu ? (
        <Dropdown
          trigger={["click"]}
          overlay={menu(nav.submenu)}
          animation="slide-up"
          placement="bottomRight"
        >
          {renderLink(nav)}
        </Dropdown>
      ) : (
        renderLink(nav)
      )}
    </li>
  );
};
export default LinkItem;
