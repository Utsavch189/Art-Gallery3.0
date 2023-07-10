import React, { useState,useContext } from 'react';
import { UploadFile } from '../storage/store';



export default function AddImg({values,setUri,filetype,uri}) {
    
  const[url,setUrl]=useState("");

  const convert=async(e)=>{
    const file=e.target.files[0]
    values?.setLoading(true);
    const uri=await UploadFile(file)
    if(uri){
      values?.setLoading(false);
      setUrl(URL.createObjectURL(file));
      setUri(uri);
    }
  }


  return (
    <>
    <div className="mb-3">
      <label
        htmlFor="formFileSm"
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        File
      </label>
      <input
        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        id="formFileSm"
        type="file"
        onChange={convert}
      />
    </div>

    {url&&filetype==='image' ?  <img
    src={url}
    className="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
    alt="..."
      /> : uri&&filetype==='video' ?
      <video className="w-full h-[400px] shadow-lg" autoPlay="" loop="" controls="" muted="">
      <source
        src={uri}
        type="video/mp4"
      />
    </video>:<></>
    }

    </>
  )
}
