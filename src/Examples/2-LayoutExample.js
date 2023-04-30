import React,{useState} from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
export default function LayoutExample(){
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfResult,setPdfResult]=useState(null);
    const handleChange=(e)=>{
        let uploadedFiles= e.target.files[0];
        if(uploadedFiles && uploadedFiles.type ==="application/pdf"){
            let filereader = new FileReader();
            filereader.readAsDataURL(uploadedFiles);
            filereader.onload=(e)=>{
                setPdfFile(e.target.result);
            }
        }            
    }
    const handleSubmit=(e)=>{
        if(pdfFile !==null){
            setPdfResult(pdfFile)
        }
        e.preventDefault();
    }
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
        <>
            <h3>Layout Example</h3>
            <p>Layout Example will display PDF alone with PDF Viewer default layout options.</p>
            <p>Please Upload Documents here</p>
            <form className="upload-pdf-form" onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange}/>
                <br /><br />
                <input type="submit" value="Upload PDF"/>
            </form>
            <br></br>
            <div className="pdf-view-layout">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">                  
                    {pdfResult?<><Viewer fileUrl={pdfResult} plugins={[defaultLayoutPluginInstance]} /></>:<p>No Data Found</p>}                
                </Worker>
            </div>
        </>
    )
}