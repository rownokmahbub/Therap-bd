import React from 'react'
import {PiStudent} from 'react-icons/pi'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {GoPeople} from 'react-icons/go'
const Dashboard = () => {
    const infos=[
        {
            title:'Total Student',
            number:'200',
            icon:<PiStudent/>
        },
        {
            title:'Total Teacher',
            number:'20',
            icon:<FaChalkboardTeacher/>
        },
        {
            title:'Total Staff',
            number:'10',
            icon:<GoPeople/>
        },
        {
            title:'Total Student',
            number:'200',
            icon:<PiStudent/>
        },
    ]
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 items-center mt-10">

        {
            infos.map((info,i)=>{
                return(
                    <div key={i} className="bg-slate-50 border dark:border-slate-700 rounded-xl dark:bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center gap-4 px-5 py-4 shadow-xl shadow-slate-200 dark:shadow-slate-900">
            <div className="rounded-xl bg-cyan-300 dark:bg-primary px-3 py-3 ">
            <p className='text-4xl'>{info.icon}</p>
           
            </div>
                   <div>
                    <p className='text-normal'>{info.title}</p>
                    <p className='text-xl font-semibold text-slate-500 dark:text-slate-300'>{info.number}</p>
                   </div>
            </div>
                )
            })
        }
          
        </div>
    </div>
  )
}

export default Dashboard