import React,{useState,useEffect} from 'react'
import Render from './FileRender';





export default function Body({values}) {

  return (
    <>
      <div className="bg-black h-[100%] flex-wrap min-h-screen [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" style={{"display":"flex","flexDirection":"column","justifyContent":"flex-start","alignItems":"center"}}>
      <Render values={values} data={values?.data} is_delete_btn={true}/>
      </div>
      
    </>
  )
}
