import {React,useRef,useEffect,useContext,useState} from "react";
import './SideBarCompStyle.css';
import { MainContext } from "../../Context/MainContext";
import { Link,useLocation } from "react-router-dom";
export default function NavigationBarComp(){
    const [toggleIcon,setToggleIcon] = useState('');
    const [sideBarT,setSideBarT] = useState(true);
    useEffect(() => {
        localStorage.setItem('toggleIcon', JSON.stringify(toggleIcon));
    }, [toggleIcon]);
    useEffect(() => {
        localStorage.setItem('sideBar', JSON.stringify(sideBarT));
    }, [sideBarT]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('toggleIcon'));
        const sideBarToggle = JSON.parse(localStorage.getItem('sideBar'));
        if (items) {
            setToggleIcon(items);
        }
        if(sideBarToggle){
            setSideBarT(sideBarToggle);
        }
      }, []);
    const {dispatch} = useContext(MainContext);
    const navtab  = useRef([]);
    const loc = useLocation();
    const data = useContext(MainContext);
    function clickNavTab(e,id){
        for( let ele of navtab.current){
            if(ele !== navtab.current[id]){
                ele.classList.remove('navTabActive');
            }
        }
        navtab.current[id].classList.add('navTabActive');
        if(id==0){
            setToggleIcon('dashbord');
        }
        else if(id==1){
            setToggleIcon('time');
        }
        else if(id==2){
            setToggleIcon('calende');
        }
        else if(id==3){
            setToggleIcon('property');
        }
        else if(id==4){
            setToggleIcon('maintenance');
        }
        else if(id==5){
            setToggleIcon('report');
        }
        else if(id==6){
            setToggleIcon('inspection');
        }
    }
    useEffect(()=>{
            const regex1 = /^\/dashboard/
            const regex2 = /^\/propertytimeline/
            const regex3 = /^\/calendar/
            const regex4 = /^\/property/
            //Agent
            // const regex5 = /^\/maintenance/
            // const regex6 = /^\/reports/
            // const regex7 = /^\/inspections/
            const regexd = /^\/dashboard\/.+/
            const regexrep = /^\/reports\/.+/
            if('/dashboard/regularmaintenance'==loc.pathname){
                navtab.current[4].classList.add('navTabActive');
                setToggleIcon('maintenance');
                setSideBarT(false);
                dispatch(
                    {
                        type:'sidebar',
                        payload:{
                            sidebar: false
                        }
                    }
                )
            }
            else if('/dashboard/riskassessment/download'===loc.pathname){
                navtab.current[5].classList.add('navTabActive');
                setToggleIcon('report');
                setSideBarT(false);
                dispatch(
                    {
                        type:'sidebar',
                        payload:{
                            sidebar: false
                        }
                    }
                )
            }
            else if('/dashboard/inspections&inventory'===loc.pathname){
                navtab.current[6].classList.add('navTabActive');
                setToggleIcon('inspection');
                setSideBarT(false);
                dispatch(
                    {
                        type:'sidebar',
                        payload:{
                            sidebar: false
                        }
                    }
                )
            }
            else if(regex1.test(loc.pathname)){
                navtab.current[0].classList.add('navTabActive');
                setToggleIcon('dashbord');
                if(regexd.test(loc.pathname)){
                        setToggleIcon('dashbord');
                        setSideBarT(false);
                        dispatch(
                            {
                                type:'sidebar',
                                payload:{
                                    sidebar: false
                                }
                            }
                        )
                }
                else{
                    setToggleIcon('dashbord');
                    setSideBarT(true);
                    dispatch(
                        {
                            type:'sidebar',
                            payload:{
                                sidebar: true
                            }
                        }
                    )
                }
                
            }
            else if(regex2.test(loc.pathname)){
                navtab.current[1].classList.add('navTabActive');
                setToggleIcon('time');
                setSideBarT(true);
                    dispatch(
                        {
                            type:'sidebar',
                            payload:{
                                sidebar: true
                            }
                        }
                    )
            }
            else if(regex3.test(loc.pathname)){
                navtab.current[2].classList.add('navTabActive');
                setToggleIcon('calende');
                setSideBarT(true);
                    dispatch(
                        {
                            type:'sidebar',
                            payload:{
                                sidebar: true
                            }
                        }
                    )
            }
            else if(regex4.test(loc.pathname)){
                navtab.current[3].classList.add('navTabActive');
                setToggleIcon('property');
                setSideBarT(true);
                    dispatch(
                        {
                            type:'sidebar',
                            payload:{
                                sidebar: true
                            }
                        }
                    )
            }
            // else if(regex5.test(loc.pathname)){
            //     navtab.current[4].classList.add('navTabActive');
            //     setToggleIcon('maintenance');
            //     setSideBarT(true);
            //         dispatch(
            //             {
            //                 type:'sidebar',
            //                 payload:{
            //                     sidebar: true
            //                 }
            //             }
            //         )
            // }
            // else if(regex6.test(loc.pathname)){
            //     navtab.current[5].classList.add('navTabActive');
            //     setToggleIcon('report');
            //     if(regexrep.test(loc.pathname)){
            //         setSideBarT(false);
            //         dispatch(
            //             {
            //                 type:'sidebar',
            //                 payload:{
            //                     sidebar: false
            //                 }
            //             }
            //         )
            //     }
            //     else{
            //         setSideBarT(true);
            //         dispatch(
            //             {
            //                 type:'sidebar',
            //                 payload:{
            //                     sidebar: true
            //                 }
            //             }
            //         )
            //     }
            // }
            // else if(regex7.test(loc.pathname)){
            //     navtab.current[6].classList.add('navTabActive');
            //     setToggleIcon('inspection');
            //     setSideBarT(true);
            //         dispatch(
            //             {
            //                 type:'sidebar',
            //                 payload:{
            //                     sidebar: true
            //                 }
            //             }
            //         )
            // }
    },[loc.pathname]);
    return(
        <>
            <div className="NavigationBarContainer">
                <div className="NavigationBar">
                    <Link to="/dashboard" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/dashboard",
                                    sidebar:true
                                }
                            });
                            
                        }}
                     style={{textDecoration:'none'}}>
                        <div ref={(ele)=>{
                            navtab.current[0]=ele
                        }} onClick={(e)=>{
                            clickNavTab(e,0);
                        }} className="NavTab">
                            <div className="Icon h-100">
                            {
                                toggleIcon=="dashbord"?
                                <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.41667C2.5 3.22899 2.52342 2.5 5.41667 2.5C8.30991 2.5 8.33333 3.22899 8.33333 5.41667C8.33333 7.60434 8.34256 8.33333 5.41667 8.33333C2.49077 8.33333 2.5 7.60434 2.5 5.41667Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 5.41667C11.6667 3.22899 11.6901 2.5 14.5834 2.5C17.4766 2.5 17.5 3.22899 17.5 5.41667C17.5 7.60434 17.5092 8.33333 14.5834 8.33333C11.6575 8.33333 11.6667 7.60434 11.6667 5.41667Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 14.5837C2.5 12.396 2.52342 11.667 5.41667 11.667C8.30991 11.667 8.33333 12.396 8.33333 14.5837C8.33333 16.7713 8.34256 17.5003 5.41667 17.5003C2.49077 17.5003 2.5 16.7713 2.5 14.5837Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 14.5837C11.6667 12.396 11.6901 11.667 14.5834 11.667C17.4766 11.667 17.5 12.396 17.5 14.5837C17.5 16.7713 17.5092 17.5003 14.5834 17.5003C11.6575 17.5003 11.6667 16.7713 11.6667 14.5837Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>:
                                <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.41667C1.5 2.22899 1.52342 1.5 4.41667 1.5C7.30991 1.5 7.33333 2.22899 7.33333 4.41667C7.33333 6.60434 7.34256 7.33333 4.41667 7.33333C1.49077 7.33333 1.5 6.60434 1.5 4.41667Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6665 4.41667C10.6665 2.22899 10.6899 1.5 13.5832 1.5C16.4764 1.5 16.4998 2.22899 16.4998 4.41667C16.4998 6.60434 16.5091 7.33333 13.5832 7.33333C10.6573 7.33333 10.6665 6.60434 10.6665 4.41667Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 13.5837C1.5 11.396 1.52342 10.667 4.41667 10.667C7.30991 10.667 7.33333 11.396 7.33333 13.5837C7.33333 15.7713 7.34256 16.5003 4.41667 16.5003C1.49077 16.5003 1.5 15.7713 1.5 13.5837Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6665 13.5837C10.6665 11.396 10.6899 10.667 13.5832 10.667C16.4764 10.667 16.4998 11.396 16.4998 13.5837C16.4998 15.7713 16.5091 16.5003 13.5832 16.5003C10.6573 16.5003 10.6665 15.7713 10.6665 13.5837Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                            
                            </div>
                            {
                                data.sidebar
                                ?
                                <div className="Text">Dashbord</div>
                                :
                                null
                            }
                            
                        </div>
                    </Link>
                    <Link to="/propertytimeline" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/propertytimeline",
                                    sidebar:true
                                }
                            });
                            
                        }}   style={{textDecoration:'none'}}>
                        <div ref={(ele)=>{
                            navtab.current[1]=ele
                        }} onClick={(e)=>{
                            clickNavTab(e,1);
                        }}  className="NavTab ">
                            <div className="Icon h-100 d-flex flex-column justify-content-center align-items-center">
                            {toggleIcon=="time"?
                            <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7082 10.0003C17.7082 14.2578 14.2573 17.7087 9.99984 17.7087C5.74234 17.7087 2.2915 14.2578 2.2915 10.0003C2.2915 5.74283 5.74234 2.29199 9.99984 2.29199C14.2573 2.29199 17.7082 5.74283 17.7082 10.0003Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.8595 12.4524L9.71783 10.5782V6.53906" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>:
                                <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7082 9.00033C16.7082 13.2578 13.2573 16.7087 8.99984 16.7087C4.74234 16.7087 1.2915 13.2578 1.2915 9.00033C1.2915 4.74283 4.74234 1.29199 8.99984 1.29199C13.2573 1.29199 16.7082 4.74283 16.7082 9.00033Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.8595 11.4524L8.71783 9.57823V5.53906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                            </div>
                            {
                                data.sidebar
                                ?
                                <div className="Text">Property Timeline</div>
                                :
                                null
                            }
                        </div>
                    </Link>
                    <Link to="/calendar" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/calendar",
                                    sidebar:true
                                }
                            });
                            
                        }}   style={{textDecoration:'none'}}>
                    <div ref={(ele)=>{
                        navtab.current[2]=ele
                    }} onClick={(e)=>{
                        clickNavTab(e,2);
                    }}  className="NavTab ">
                        <div  className="Icon" style={{position:'relative'}}>
                            {toggleIcon=='calende'?
                            <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3698 1.66699V4.40931V1.66699Z" fill="#21296D"/>
                                <path d="M13.3698 1.66699V4.40931" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63795 1.66699V4.40931V1.66699Z" fill="#21296D"/>
                                <path d="M6.63795 1.66699V4.40931" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5319 2.9834H6.4758C4.02856 2.9834 2.5 4.34668 2.5 6.85259V14.394C2.5 16.9393 4.02856 18.3341 6.4758 18.3341H13.5242C15.9791 18.3341 17.5 16.9629 17.5 14.457V6.85259C17.5077 4.34668 15.9868 2.9834 13.5319 2.9834Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.66669 7.91667H18.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.7018 11.0913H13.7095" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.0038 11.0913H10.0116" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.29828 11.0913H6.306" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.7018 14.3305H13.7095" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.0038 14.3305H10.0116" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.29828 14.3305H6.306" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            :
                            <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.57721 7.83688H17.4305" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.7017 11.0915H13.7094" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.0038 11.0915H10.0116" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.29822 11.0915H6.30594" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.7017 14.3303H13.7094" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.0038 14.3303H10.0116" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.29822 14.3303H6.30594" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.3698 1.66675V4.40906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.63795 1.66675V4.40906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5319 2.98267H6.4758C4.02856 2.98267 2.5 4.34594 2.5 6.85185V14.3932C2.5 16.9385 4.02856 18.3333 6.4758 18.3333H13.5242C15.9791 18.3333 17.5 16.9622 17.5 14.4563V6.85185C17.5077 4.34594 15.9868 2.98267 13.5319 2.98267Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            }
                        </div>
                        {
                            data.sidebar
                            ?
                            <div className="Text">Calendar</div>
                            :
                            null
                        }
                    </div>
                    </Link>
                    <Link to="/property" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/property",
                                    sidebar:true
                                }
                            });
                            
                        }}   style={{textDecoration:'none'}}>
                    <div ref={(ele)=>{
                        navtab.current[3]=ele
                    }} onClick={(e)=>{
                        clickNavTab(e,3);
                    }}  className="NavTab ">
                        <div className="Icon" style={{position:'relative'}}>
                            {toggleIcon=='property'?
                            <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.63093 17.3098V14.7542C7.63092 14.1042 8.16085 13.576 8.81743 13.5717H11.2225C11.8822 13.5717 12.417 14.1011 12.417 14.7542V17.3178C12.4169 17.8697 12.8618 18.3207 13.4191 18.3337H15.0225C16.6209 18.3337 17.9166 17.0509 17.9166 15.4685V8.19852C17.908 7.57601 17.6128 6.99145 17.1149 6.61119L11.6314 2.23808C10.6707 1.47663 9.30509 1.47663 8.34443 2.23808L2.88494 6.61912C2.38513 6.99784 2.08941 7.58338 2.08325 8.20646V15.4685C2.08325 17.0509 3.37898 18.3337 4.97734 18.3337H6.58072C7.15188 18.3337 7.6149 17.8753 7.6149 17.3098" fill="#21296D"/>
                                <path d="M7.63093 17.3098V14.7542C7.63092 14.1042 8.16085 13.576 8.81743 13.5717H11.2225C11.8822 13.5717 12.417 14.1011 12.417 14.7542V14.7542V17.3178C12.4169 17.8697 12.8618 18.3207 13.4191 18.3337H15.0225C16.6209 18.3337 17.9166 17.0509 17.9166 15.4685V15.4685V8.19852C17.908 7.57602 17.6128 6.99145 17.1149 6.61119L11.6314 2.23808C10.6707 1.47663 9.30509 1.47663 8.34443 2.23808L2.88494 6.61912C2.38513 6.99784 2.08941 7.58338 2.08325 8.20646V15.4685C2.08325 17.0509 3.37898 18.3337 4.97734 18.3337H6.58072C7.15188 18.3337 7.6149 17.8753 7.6149 17.3098V17.3098" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            :
                            <svg  className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.63099 17.3096V14.754C7.63098 14.1039 8.16091 13.5758 8.81749 13.5714H11.2226C11.8823 13.5714 12.4171 14.1009 12.4171 14.754V14.754V17.3175C12.4169 17.8694 12.8619 18.3205 13.4192 18.3334H15.0226C16.6209 18.3334 17.9166 17.0506 17.9166 15.4683V15.4683V8.19828C17.9081 7.57577 17.6129 6.99121 17.115 6.61094L11.6314 2.23783C10.6708 1.47639 9.30515 1.47639 8.34449 2.23783L2.885 6.61888C2.3852 6.9976 2.08947 7.58314 2.08331 8.20621V15.4683C2.08331 17.0506 3.37904 18.3334 4.97741 18.3334H6.58078C7.15194 18.3334 7.61496 17.875 7.61496 17.3096V17.3096" stroke="#52525B" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            }
                        </div>
                        {
                            data.sidebar
                            ?
                            <div className="Text">Property</div>
                            :
                            null
                        }
                    </div>
                    </Link>
                    <Link to="/dashboard/regularmaintenance" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/maintenance",
                                    sidebar:false
                                }
                            });
                            
                        }}   style={{textDecoration:'none'}}>
                    <div ref={(ele)=>{
                        navtab.current[4]=ele
                    }} onClick={(e)=>{
                        clickNavTab(e,4);
                    }}  className="NavTab ">
                        <div className="Icon" style={{position:'relative'}}>
                            {
                                toggleIcon=='maintenance'?
                                <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1501 7.44616L16.2834 4.22116C16.0959 3.89199 15.8667 4.02116 14.6501 4.24616C14.0509 3.76135 13.3787 3.37461 12.6584 3.10033C12.2959 2.05449 12.2667 1.66699 11.8626 1.66699H8.13755C7.75005 1.66699 7.72089 1.95033 7.34172 3.10033C6.62145 3.37461 5.94921 3.76135 5.35005 4.24616C4.17505 4.02533 3.90839 3.88366 3.71672 4.22116L1.85005 7.44616C1.66672 7.77116 1.87922 7.90449 2.68339 8.85033C2.56043 9.61206 2.56043 10.3886 2.68339 11.1503C1.91255 12.0462 1.65005 12.217 1.85005 12.5545L3.71672 15.7795C3.90422 16.1087 4.15839 15.9795 5.35005 15.7545C5.94921 16.2393 6.62145 16.626 7.34172 16.9003L7.75839 18.0545C7.78811 18.14 7.84484 18.2134 7.92001 18.2638C7.99518 18.3142 8.08471 18.3387 8.17505 18.3337H11.9001C12.2876 18.3337 12.3167 18.0503 12.6959 16.9003C13.4162 16.626 14.0884 16.2393 14.6876 15.7545C15.8626 15.9753 16.1292 16.117 16.3209 15.7795L18.1876 12.5545C18.3709 12.2295 18.1584 12.0962 17.3542 11.1503C17.4772 10.3886 17.4772 9.61206 17.3542 8.85033C18.0792 7.95449 18.3334 7.78366 18.1501 7.44616Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.4316 6.70679C11.3681 6.6771 11.298 6.66365 11.2277 6.6677C11.1574 6.67174 11.0894 6.69314 11.0298 6.72992C10.9702 6.7667 10.9211 6.81765 10.887 6.87804C10.8529 6.93843 10.8349 7.0063 10.8347 7.07534V9.4423L9.99984 9.99104L9.16496 9.4423V7.07534C9.16476 7.0063 9.14677 6.93843 9.11267 6.87804C9.07856 6.81765 9.02944 6.7667 8.96988 6.72992C8.91031 6.69314 8.84224 6.67174 8.77198 6.6677C8.70172 6.66365 8.63156 6.6771 8.56803 6.70679C8.01944 6.96354 7.55269 7.36231 7.21808 7.8601C6.88347 8.35789 6.6937 8.93583 6.66921 9.53162C6.64473 10.1274 6.78647 10.7185 7.07915 11.2411C7.37183 11.7637 7.80435 12.198 8.33009 12.4972V13.8568C9.40333 14.2704 10.5963 14.2704 11.6696 13.8568V12.4972C12.1953 12.198 12.6278 11.7637 12.9205 11.2411C13.2132 10.7185 13.3549 10.1274 13.3305 9.53162C13.306 8.93583 13.1162 8.35789 12.7816 7.8601C12.447 7.36231 11.9802 6.96354 11.4316 6.70679Z" fill="white"/>
                                </svg>
                                :<svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.15 7.44591L16.2833 4.22091C16.0958 3.89175 15.8667 4.02091 14.65 4.24591C14.0508 3.76111 13.3786 3.37437 12.6583 3.10008C12.2958 2.05425 12.2667 1.66675 11.8625 1.66675H8.13749C7.74999 1.66675 7.72083 1.95008 7.34166 3.10008C6.62139 3.37437 5.94915 3.76111 5.34999 4.24591C4.17499 4.02508 3.90833 3.88341 3.71666 4.22091L1.84999 7.44591C1.66666 7.77091 1.87916 7.90425 2.68333 8.85008C2.56037 9.61182 2.56037 10.3883 2.68333 11.1501C1.91249 12.0459 1.64999 12.2167 1.84999 12.5542L3.71666 15.7792C3.90416 16.1084 4.15833 15.9792 5.34999 15.7542C5.94915 16.2391 6.62139 16.6258 7.34166 16.9001L7.75833 18.0542C7.78805 18.1397 7.84478 18.2132 7.91995 18.2635C7.99512 18.3139 8.08465 18.3384 8.17499 18.3334H11.9C12.2875 18.3334 12.3167 18.0501 12.6958 16.9001C13.4161 16.6258 14.0883 16.2391 14.6875 15.7542C15.8625 15.9751 16.1292 16.1167 16.3208 15.7792L18.1875 12.5542C18.3708 12.2292 18.1583 12.0959 17.3542 11.1501C17.4771 10.3883 17.4771 9.61182 17.3542 8.85008C18.0792 7.95425 18.3333 7.78341 18.15 7.44591Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.4317 6.70654C11.3682 6.67685 11.298 6.66341 11.2278 6.66745C11.1575 6.6715 11.0894 6.6929 11.0299 6.72968C10.9703 6.76645 10.9212 6.8174 10.8871 6.87779C10.853 6.93819 10.835 7.00606 10.8348 7.0751V9.44205L9.9999 9.99079L9.16502 9.44205V7.0751C9.16482 7.00606 9.14683 6.93819 9.11273 6.87779C9.07862 6.8174 9.0295 6.76645 8.96994 6.72968C8.91037 6.6929 8.8423 6.6715 8.77204 6.66745C8.70179 6.66341 8.63163 6.67685 8.56809 6.70654C8.0195 6.9633 7.55275 7.36206 7.21814 7.85985C6.88353 8.35765 6.69376 8.93559 6.66928 9.53138C6.64479 10.1272 6.78653 10.7182 7.07921 11.2408C7.37189 11.7634 7.80441 12.1977 8.33015 12.497V13.8566C9.40339 14.2701 10.5964 14.2701 11.6696 13.8566V12.497C12.1954 12.1977 12.6279 11.7634 12.9206 11.2408C13.2133 10.7182 13.355 10.1272 13.3305 9.53138C13.306 8.93559 13.1163 8.35765 12.7817 7.85985C12.4471 7.36206 11.9803 6.9633 11.4317 6.70654Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            }
                            
 
                        </div>
                        {
                            data.sidebar
                            ?
                            <div className="Text">Maintenance</div>
                            :
                            null
                        }
                    </div>
                    </Link>
                    <Link to="/dashboard/riskassessment/download" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/reports",
                                    sidebar:false
                                }
                            });
                            
                        }}   style={{textDecoration:'none'}}>
                    <div ref={(ele)=>{
                        navtab.current[5]=ele
                    }} onClick={(e)=>{
                        clickNavTab(e,5);
                    }}  className="NavTab ">
                        <div className="Icon d-flex flex-row justify-content-center align-items-center">
                        {toggleIcon=='report'?
                        <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.29102C13.2572 2.29102 6.85965 2.29435 6.84965 2.29435C4.54965 2.30852 3.12549 3.82185 3.12549 6.13018V13.7935C3.12549 16.1135 4.56049 17.6327 6.88049 17.6327C6.88049 17.6327 13.2772 17.6302 13.288 17.6302C15.588 17.616 17.013 16.1018 17.013 13.7935V6.13018C17.013 3.81018 15.5772 2.29102 13.2572 2.29102Z" fill="#21296D" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.0967 13.5192H7.08008" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.0967 10.0299H7.08008" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.37616 6.54948H7.08032" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>:
                        <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0968 12.5194H5.08014" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.0968 9.03068H5.08014" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.37609 5.54997H5.08026" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2572 1.2915C11.2572 1.2915 4.85965 1.29484 4.84965 1.29484C2.54965 1.309 1.12549 2.82234 1.12549 5.13067V12.794C1.12549 15.114 2.56049 16.6332 4.88049 16.6332C4.88049 16.6332 11.2772 16.6307 11.288 16.6307C13.588 16.6165 15.013 15.1023 15.013 12.794V5.13067C15.013 2.81067 13.5772 1.2915 11.2572 1.2915Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        }
                        </div>
                        {
                            data.sidebar
                            ?
                            <div className="Text">Reports</div>
                            :
                            null
                        }
                    </div>
                    </Link>
                    <Link to="/dashboard/inspections&inventory" onClick={()=>{
                            dispatch({
                                type:"path",
                                payload:{
                                    path:"/inspections",
                                    sidebar:false
                                }
                            });
                            
                        }}   style={{textDecoration:'none'}}>
                    <div ref={(ele)=>{
                        navtab.current[6]=ele
                    }} onClick={(e)=>{
                        clickNavTab(e,6);
                    }}  className="NavTab ">
                        <div className="Icon" style={{position:'relative'}}>
                        {
                        toggleIcon=='inspection'?
                        <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9.80541" cy="9.80589" r="7.49047" stroke="#21296D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.0151 15.4043L17.9518 18.3334" stroke="#21296D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>:
                        <svg className="svgIcon" style={{position:'absolute',top:'0px',left:'0px'}} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.80547" cy="8.80541" r="7.49047" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.0153 14.4043L16.9519 17.3334" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        }
                        </div>
                        {
                            data.sidebar
                            ?
                            <div className="Text">Inspections</div>
                            :
                            null
                        }
                    </div>
                    </Link> 
                    <div className="BottomTabs mt-auto">
                    <div ref={(ele)=>{
                            navtab.current[7]=ele
                        }} onClick={(e)=>{
                            clickNavTab(e,7);
                        }}  className="NavTab ">
                            <div className="Icon h-100 d-flex flex-column justify-content-center align-items-center">
                                <svg className="svgIcon"  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7082 9.00033C16.7082 13.2578 13.2573 16.7087 8.99984 16.7087C4.74234 16.7087 1.2915 13.2578 1.2915 9.00033C1.2915 4.74283 4.74234 1.29199 8.99984 1.29199C13.2573 1.29199 16.7082 4.74283 16.7082 9.00033Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.8595 11.4524L8.71783 9.57823V5.53906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            {
                                data.sidebar
                                ?
                                <div className="Text">Contact & Support</div>
                                :
                                null
                            }
                        </div>
                        <div ref={(ele)=>{
                            navtab.current[8]=ele
                        }} onClick={(e)=>{
                            clickNavTab(e,8);
                        }}  className="NavTab ">
                            <div className="Icon h-100 d-flex flex-column justify-content-center align-items-center">
                                <svg className="svgIcon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7082 9.00033C16.7082 13.2578 13.2573 16.7087 8.99984 16.7087C4.74234 16.7087 1.2915 13.2578 1.2915 9.00033C1.2915 4.74283 4.74234 1.29199 8.99984 1.29199C13.2573 1.29199 16.7082 4.74283 16.7082 9.00033Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.8595 11.4524L8.71783 9.57823V5.53906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            {
                                data.sidebar
                                ?
                                <div className="Text">Notification</div>
                                :
                                null
                            }
                        </div>
                        <div ref={(ele)=>{
                            navtab.current[9]=ele
                        }} onClick={(e)=>{
                            clickNavTab(e,9);
                        }}  className="NavTab ">
                            <div className="Icon h-100 d-flex flex-column justify-content-center align-items-center">
                                <svg className="svgIcon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7082 9.00033C16.7082 13.2578 13.2573 16.7087 8.99984 16.7087C4.74234 16.7087 1.2915 13.2578 1.2915 9.00033C1.2915 4.74283 4.74234 1.29199 8.99984 1.29199C13.2573 1.29199 16.7082 4.74283 16.7082 9.00033Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.8595 11.4524L8.71783 9.57823V5.53906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            {
                                data.sidebar
                                ?
                                <div className="Text">Messages</div>
                                :
                                null
                            }
                        </div>
                        <div ref={(ele)=>{
                            navtab.current[10]=ele
                        }} onClick={(e)=>{
                            clickNavTab(e,10);
                        }}  className="NavTab ">
                            <div className="Icon h-100 d-flex flex-column justify-content-center align-items-center">
                                <svg className="svgIcon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7082 9.00033C16.7082 13.2578 13.2573 16.7087 8.99984 16.7087C4.74234 16.7087 1.2915 13.2578 1.2915 9.00033C1.2915 4.74283 4.74234 1.29199 8.99984 1.29199C13.2573 1.29199 16.7082 4.74283 16.7082 9.00033Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.8595 11.4524L8.71783 9.57823V5.53906" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>
                            {
                                data.sidebar
                                ?
                                <div className="Text">Profile</div>
                                :
                                null
                            }
                        </div>
                </div> 
                </div> 
                      
            </div>
        </>
    );
}