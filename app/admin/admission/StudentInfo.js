'use client'
import { Button } from "@nextui-org/react";
import { RxDividerVertical } from "react-icons/rx";
import {MdDelete} from 'react-icons/md'
import {AiFillCheckCircle} from 'react-icons/ai'
export default function StudentInfo() {



  return (
    <main className="container mx-auto border border-slate-100 rounded-xl dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
      <div className="flex justify-center items-center">
        <img className=" w-36 h-36" src="/logo.png" alt="" />
      </div>
      <div className="max-w-4xl px-4 md:px-10 flex flex-col justify-center py-10 items-center md:items-end mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 items-center  w-fit">
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
          <div className="bg-white dark:bg-slate-700 flex items-center gap-1 md:text-lg font-medium rounded-lg px-4 py-2 border border-slate-200 dark:border-slate-500">
            <p>Name</p>
            <RxDividerVertical/>
            <p> Rownok Mahbub</p>
          </div>
         
        </div>
        <div className="flex  flex-col justify-end items-center mt-5 gap-5 order md:flex-row">
        <Button color="danger">
        <MdDelete/>
              Delete Student
            </Button>
            <Button className="text-white order-first md:order-last" color="success">
            <AiFillCheckCircle/>
              Accept Student
            </Button>
        </div>
      </div>
      
    </main>
  );
}
