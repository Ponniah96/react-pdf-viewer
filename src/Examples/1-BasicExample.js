import React,{useState} from "react";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
export default function BasicExample(){
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
    return(
        <>
            <h3>Basic Example</h3>
            <p>Basic Example will display PDF alone without any layout or properties.</p>
            <p>Please Upload Documents here</p>
            <form className="upload-pdf-form" onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange}/>
                <br /><br />
                <input type="submit" value="Upload PDF"/>
            </form>
            <br></br>
            <div className="pdf-view-layout">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">                  
                    {pdfResult?<><Viewer fileUrl={pdfResult} /></>:<p>No Data Found</p>}                
                </Worker>
            </div>
        </>
    )
}