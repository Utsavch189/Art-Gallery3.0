import React from 'react'
import { useEffect } from 'react';
import {
  Alert,
  initTE,
} from "tw-elements";

export default function Success({success}) {

  useEffect(()=>{
    initTE({ Alert });
  },[])

  return (
    <>
    <div
  className="mb-3 hidden w-full items-center rounded-lg bg-green-200 px-6 py-5 text-base text-green-700 data-[te-alert-show]:inline-flex"
  role="alert"
  data-te-alert-init=""
  data-te-alert-show=""
>
  <strong className="mr-1">{success}</strong>
  <button
    type="button"
    className="ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
    data-te-alert-dismiss=""
    aria-label="Close"
  >
    <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </button>
</div>

    </>
  )
}
