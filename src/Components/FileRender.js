import React from 'react'

import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export default function Render({values,data,is_delete_btn}) {

console.log(values?.address.toUpperCase())

  const del =async(i)=>{
    console.log(i?.id._hex)
    const res=await values?.contract.deletes(parseInt(i?.id._hex));

}
  
return (
    <>
 <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex-wrap">
  <div className="-m-1 flex flex-wrap md:-m-2">

    {data&&data.map((i,k)=>
    <div className="flex w-1/3 flex-wrap" key={k}>
    <div className="w-full p-1 md:p-2">
    {i?.types==='video'?
          <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden">
           <video className="block h-full w-full rounded-lg object-cover object-center" autoplay loop controls muted>
          <source
            src={i?.uri}
            type="video/mp4" />
        </video>
        </div>
        :
        <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        src={i?.uri}
      />
    }
    </div>
    <div class="p-6 min-w-[100%]">
  <h5
    class="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50">
    {i?.id._hex}
  </h5>
  <p class="mb-4 text-base text-white dark:text-neutral-200">
    {i?.description}
  </p>
  <div className='flex  justify-between'>
    {is_delete_btn&&i?.own.toUpperCase()===values?.address.toUpperCase()?<button
      type="button"
      className="inline-block rounded w-10 h-10 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
      data-te-ripple-init
      onClick={()=>del(i)}
      data-te-ripple-color="light">
      <i className="fa-solid fa-trash text-red-500" style={{fontSize:"16px"}}></i>
    </button>:<></>}
    <div>
    <h3 className='text-white'>{parseInt(i?.timstamp._hex)}</h3>
      <div className='my-2'>
      <Jazzicon diameter={20} seed={jsNumberForAddress(i?.own)}/>
      </div>
    </div>
  </div>
</div>
  </div>
    )}
    
  </div>
</div>


    </>
  )
}
