'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import BatchModal from './BatchModal'
import TableBatch from './TableBatch'

const BatchMake = () => {
  return (
    <div>
    <div className="flex justify-between my-10">
        <p className='text-2xl font-semibold'>Make New Batch Here</p>
       <BatchModal/>
    </div>
       <TableBatch />
    </div>
  )
}

export default BatchMake