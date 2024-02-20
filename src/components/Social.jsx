import React from 'react';
import Excel from './Excel';

export default function Social() {
  return (
    <div className=''>
      
      <h1>Social Media Analytics</h1>  
       
      <div className='inline-flex items-centre p-3'>
        <p className='p-2'> 
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
<a href="https://lookerstudio.google.com/reporting/763a27ac-c3be-4949-9530-6d4fedf5cacf/page/lepcD?s=j8nxoTdvyHc" target="_blank" rel="noopener noreferrer">
          User Profiling on the basis of Gender{" "}
          </a>
</span>
</button>
         
        </p>
        <p className='p-2'>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
<a href="https://lookerstudio.google.com/reporting/04fc444f-9d80-4a16-ab8e-1a1323866b41/page/qZocD?s=tqP394u1e28" target="_blank" rel="noopener noreferrer">
          User Profiling on the basis of Age{" "}
          </a>
</span>
</button>
          
        </p>
        <p className='p-2'>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  <a href="http://127.0.0.1:5000/" target="_blank" rel="noopener noreferrer">
          Sentiment Analysis{" "}
          </a>
</span>
</button>
        
        </p>
       
        <br />
      </div>
      {/* <Excel filePath={'/demographics.csv'}/>
      <Excel filePath={'/final-nlp.csv'}/> */}
    </div>
  );
}
