import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Timespent = () => {
    const [timespent,Settimespent]=  useState(0)

    useEffect(() =>{
    
        const timer =setTimeout(() => Settimespent((prev) =>prev + 1),1000)

        return () =>clearTimeout(timer)
    },[timespent])

  return (
    <div className='text-amber-400 absolute right-4 top-4s border rounded-full p-2 border-amber-400'>
        {timespent}
    </div>
  )
}

