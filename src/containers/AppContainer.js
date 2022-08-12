import React from "react";
import SideBar from "../components/layout-components/SideBar";


const AppContainer = ({user, children, activePath}) => {
    return (
        <>
            {/* <NavBar/> */}
            <SideBar activePath={activePath}/>
            {/* <Fade top> */}
            <div className="app-container">
            {children}
            </div>
            {/* </Fade> */}
        </>
        )
}
export default AppContainer;
