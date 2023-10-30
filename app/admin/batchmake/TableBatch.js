import { Button } from "@nextui-org/react";
import BatchEdit from "./BatchEdit";
import BatchDelete from "./BatchDelete";

const tabledata = [
  
    {
      
      id: "01",
      studentname:'Mehbubur Rahman',
      batchtype:'class10',
      batchname:'regular',
      starttime:'10:30 AM',
      endtime:'11:30 PM',
      classdays:'7'
    },
    {
      
      id: "01",
      studentname:'Mehbubur Rahman',
      batchtype:'class10',
      batchname:'regular',
      starttime:'10:30 AM',
      endtime:'11:30 PM',
      classdays:'7'
    },
    {
      
      id: "01",
      studentname:'Mehbubur Rahman',
      batchtype:'class10',
      batchname:'regular',
      starttime:'10:30 AM',
      endtime:'11:30 PM',
      classdays:'7'
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

export default function TableBatch() {
  return (
    <div className="overflow-x-auto shadow-xl shadow-slate-200 dark:shadow-slate-900 border border-slate-100 dark:border-slate-500 rounded-t-xl ">
    <table className="min-w-full bg-slate-50 dark:bg-slate-800 ">
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
            {data.studentname}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.batchtype}
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
       
             
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500  md:space-x-4 space-y-3 lg:space-y-0">
           <BatchEdit/>
           <BatchDelete/>
          </td>
        
        </tr>
            )
        })}
        
     
      
        
     
      </tbody>
    </table>
  </div>
  );
}
