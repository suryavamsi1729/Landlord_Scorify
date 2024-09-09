import {React,useEffect,useContext} from "react";
import DocViewer,{  DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import "./DocViewer.css";
import './InspectionInventory.css';
import { MainContext } from "../Context/MainContext";
export default function DocumentViewerComp() {
    const {dispatch} = useContext(MainContext);
    const docs = [
        {   uri: require("./pdffolder/sample.pdf"),
            fileType: "pdf",
            fileName: "demo.pdf"
        }
    ]
    useEffect(
        ()=>{
            const heads = document.querySelector('#pdf-controls');
            // const exit = document.createElement("button");
            // exit.classList.add("DocumentExitbtn");
            // heads.appendChild(heads);
            // heads.addEventListener("click",()=>{
            //     dispatch(
            //         {
            //             type:"docView",
            //             payload:{
            //                 docView:false
            //             }
            //         }
            //     )
            // })
            console.log(heads);
        }
    )
    return (
        <>
            <DocViewer style={{width: "100%" , height: "100%"}} documents={docs} pluginRenderers={DocViewerRenderers}
             />
        </>
        );
}