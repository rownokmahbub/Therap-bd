'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import StudentModal from './StudentModal'
import StudentTable from './StudentTable'

const CreateStudent = () => {
  return (
    <div>
    <div className="flex justify-between my-10">
        <p className='text-2xl font-semibold'>Make New Batch Here</p>
       <StudentModal/>
    </div>
       <StudentTable />
    </div>
  )
}

export default CreateStudent