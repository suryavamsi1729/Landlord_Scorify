import {React,forwardRef} from "react";
import './SideBarCompStyle.css';
const NavTabitmComp = forwardRef(function NavTabitmComp(props,ref){
    return(
        <>
            <div className="NavTab" ref={ref}>
                <div className="Icon"></div>
                <div className="Text">{props.data.text}</div>
            </div>
        </>
    );
});
export default NavTabitmComp;