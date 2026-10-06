import React from 'react'
import { useState } from 'react'
import { getAllCategories } from '../utils'
import { ButtonGroup } from '@heroui/react'
import { motion, spring } from "motion/react"
import { Button } from '@heroui/react'
import { Timespent } from './Timespent'

export const Myheader = ({selectedcateg,setselectedcateg}) => {
    const [categories,setCategories] = useState(getAllCategories())
    
  return (
    <div className='flex flex-col relative'>
      <motion.h1 
      initial = {{x:'100vw'}}
      animate = {{x:0,transition:{duration:1,type:spring,stiffness: 20}}}
      className="text-center text-3xl font-bold">
      Our Menu
      </motion.h1>
      <Timespent />
        <ButtonGroup variant="secondary"  className={"bg-amber-400text-ray-900 rounded-3xl"}>
            {categories.map((item,index) =>
            <Button key={index} onClick={() => setselectedcateg(item)} className = {selectedcateg == item ? "bg-gray-900 text-amber-400" : "bg-amber-400 text-gray-900"}>
                <ButtonGroup.Separator />
                <motion.span whileHover={{scale:1.1}}>
                 {item}
                </motion.span>
              
          </Button>
            )}
        </ButtonGroup>
    </div>
  )
}

