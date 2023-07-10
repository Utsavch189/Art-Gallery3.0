
import { useState } from 'react';
import AddImg from './AddImg'
import AddTxt from './AddTxt'
import ChooseImgOrVid from './ChooseImgOrVid';

function Upload({values}) {

    const[desc,setDesc]=useState('');
    const[uri,setUri]=useState('');
    const[filetype,setFileType]=useState('')

    const upload=async()=>{
        if(uri && filetype){
            const res=await values?.contract.upload(uri,desc,filetype);
        } 
    }

  return (
    <>
    <div id="popup-upload-modal" tabIndex={-1} className="hidden font-[Roboto] fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full justify-center bg-opacity-50 items-center bg-gray-900">
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div id="add-category-modal" className="relative bg-white rounded-lg shadow">
          <div className="px-4 py-2 flex justify-between items-center">
            <div>
              <div className="text-xl font-semibold text-gray-800">Dive into Web3</div>
            </div>
            <button className="px-2 py-2">
              <i className="items-center fa-solid fa-xmark text-2xl text-slate-400 hover:text-slate-600" onClick={values?.hideUploadModal} />
            </button>
          </div>
          <hr />
          <div className="px-4 py-2">
            <ChooseImgOrVid setFileType={setFileType}/>
            <AddImg values={values} setUri={setUri} filetype={filetype} uri={uri}/>
            <AddTxt desc={desc} setDesc={setDesc}/>
          </div>
          <hr />
          {/* <div className="px-4 py-5 flex justify-end space-x-2">
            <button className="px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 text-[13px] sm:text-base" onClick={updateNote}>{clientInfo?.note !== '' ? "Update" : "Save"}</button>
            {clientInfo?.note && <button className="px-4 py-2 rounded text-white bg-red-600 hover:bg-red-700 text-[13px] sm:text-base" onClick={remove}>Remove</button>}
            <button className="px-4 py-2 rounded text-white bg-gray-600 hover:bg-gray-700 text-[13px] sm:text-base" onClick={close}>Close</button>
          </div> */}
          <div className="px-4 py-3 flex justify-end space-x-2">
            <div>
              <button className="px-4 py-2 rounded text-white bg-gray-600 hover:bg-gray-700 text-[13px] sm:text-base" onClick={upload}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Upload