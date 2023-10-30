
import Link from "next/link";
import StudentInfo from "./StudentInfo";
import {MdStreetview} from 'react-icons/md'


async function getData() {
    const res = await fetch(
      "http://localhost:4000/v1/student/pending-students?limit=10&page=1",{ cache: 'no-store' }
    );
 
    console.log(res);
    if (!res.ok) {
     
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  


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

export default async function PendingStudent() {

    const datas = await getData();
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
        
        {datas.results.map((data,i)=>{
            return(
              <tr key={i}  className="bg-white dark:bg-slate-700">
                <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.studentName_bn}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.studentName_en}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.class}
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            j
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
           jhjk
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
           kljh
          </td>
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500">
            {data.classdays}
          </td>
       
             
          <td className="px-6 py-3 whitespace-no-wrap border-b-2 border-slate-300 dark:border-slate-500 md:space-x-4 space-y-3 lg:space-y-0">

          <Link className="bg-primary px-3 py-2 flex items-center gap-2 w-fit rounded-lg text-white" href={`/admin/admission/studentinfo?studentId=${data.id}`}>
                <MdStreetview/>
                View
          </Link>
           
          </td>
        
        </tr>
            )
        })}
        
     
      
        
     
      </tbody>
    </table>
  </div>
  );
}
