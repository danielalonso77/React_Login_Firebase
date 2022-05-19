import React from "react";
export default function Alerts({message}) {
  return (
    <div className="bg-red-200 shadow-md border-red-400 text-red-500 px-4 py-3 rounded relative mb-2 text-center" >
        <span className="sm:inline block" >{message}</span> {""}
        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    </div>
  )
}
