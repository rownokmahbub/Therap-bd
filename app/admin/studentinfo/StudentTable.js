import { Button } from "@nextui-org/react";

import StudentEdit from "./StudentEdit";
import StudentDelete from "./StudentDelete";

const tabledata = [
  
    {
      
      id: "01",
      namebn:'rownok',
      nameen:'rownok',
      fathername:'rownok',
      fathermobile:'01232425',
      mothername:'rownok',
      mothermobile:'01233434',
      studentmobile:'0123342344',
      pergram:'rownok',
      perpouroshova:'rownok',
      perdakghor:'rownok',
      perthana:'rownok',
      perzela:'rownok',
      pregram:'rownok',
      prepouroshova:'rownok',
      predakghor:'rownok',
      prethana:'rownok',
      prezela:'rownok',
      protisthan:'Biggan Pathshala',
      protisthanaddress:'Thana Council Para',
      shift:'Day',
      class:'class 6',
      time:'10:30 PM',
      year:'2023',
     
    },
   
      
    ];

const tablehead = [
  {
    key: "1",
    label: "ID",
  },
  {
    key: "2",
    label: "STUDENT NAME",
  },
  {
    key: "3",
    label: "Batch Type",
  },
  {
    key: "4",
    label: " Batch Name",
  },
  {
    key: "5",
    label: "Start Time",
  },
  {
    key: "6",
    label: "End Time",
  },
  {
    key: "7",
    label: "Class Days",
  },
  {
  key: "8",
  label: "Action",
},
];

export default function StudentTable() {
  return (
    <div className="overflow-x-auto shadow-xl shadow-slate-200 dark:shadow-slate-900 border border-slate-100 dark:border-slate-500 rounded-t-xl ">
    <table className="min-w-full bg-slate-50 dark:bg-slate-800">
      <thead>
        <tr>
        {tablehead.map((head)=>{
            return(
                <th key={head.key} className="px-6 py-4 border-b-2 border-slate-300 dark:border-slate-500 text-left text-xs leading-4 font-semibold  uppercase tracking-wider">
            {head.label}
          </th>
            )
        })}
        
        
        
        </tr>
      </thead>
      <tbody>
        {/* Sample data rows */}
        
        {tabledata.map((data)=>{
            return(
              <tr key={data.key}  className="bg-white dark:bg-slate-700">
                <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.id}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.namebn}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.nameen}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.batchname}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.starttime}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.endtime}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.classdays}
          </td>
       
             
          <td className="px-6 py-3  border-b-2 border-slate-300 dark:border-slate-500  md:space-x-4 space-y-3 lg:space-y-0">
           <StudentEdit/>
           <StudentDelete/>
          </td>
        
        </tr>
            )
        })}
        
     
      
        
     
      </tbody>
    </table>
  </div>
  );
}
