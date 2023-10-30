import React from "react";
import {PiNotification} from 'react-icons/pi'
const Notice = () => {
    const marque=[
        {
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sint non doloremque modi nobis ipsum ducimus voluptates laborum corrupti veniam?'
        },
        {
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sint non doloremque modi nobis ipsum ducimus voluptates laborum corrupti veniam?'
        },
        {
            title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sint non doloremque modi nobis ipsum ducimus voluptates laborum corrupti veniam?'
        },

    ]
  return (
    <div className="container mx-auto">
      <h4 className="flex justify-center items-center mx-auto text-md lg:text-lg  bg-sky-100 dark:bg-sky-800 px-4 py-1 my-5 w-fit rounded-lg border-t-4 border-sky-300 text-sky-600 dark:text-sky-200">
        Notice
      </h4>

      <div className="bg-white flex flex-col gap-4 dark:bg-slate-800 rounded-lg pt-4 px-6 py-3">
      {
        marque.map((mar,i)=>{
            return(
                <div key={i} className="bg-slate-50 dark:bg-slate-600 rounded-lg px-4 py-2 flex flex-col lg:flex-row items-center flex-shrink-0 gap-3">
                <PiNotification className="text-xl bg-primary text-white  dark:bg-primary p-3 w-10 rounded-full h-10"/>
              {mar.title}
                </div>
              
            )
        })
      }
       
      </div>
    </div>
  );
};

export default Notice;
