import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import AddEvents from './AddEvents'



const Header = () => {
  const [isOpen, setIsOpen] =useState(false)
  const handleOpen= ()=>{
    console.log('Live Opened')
    setIsOpen(true)

  }
  const handleClose= ()=>{
    console.log('Live Closed')
    setIsOpen(false)

  }
  return (
    <div className='pred_header'>
         <header className='container-fluid d-flex flex-column justify-content-center'>
          <div className='row  justify-content-between '>
            <div className='col-7 d-flex align-items-center'>
            <div className='d-flex justify-content-between allsicons'>
            <div>
              <BsIcons.BsTrash3 className='sicon' size={20}/>

            </div>
            <div className=''>
              <HiIcons.HiDotsVertical className='sicon' size={25}/>

            </div>
            <div className=''>
              {/* <HiIcons.HiDotsVertical className='sicon' size={25}/> */}

            </div>
            
            </div>
            </div>
            <div className='col-5 row ailgn-items-center g-0 '>
               <div className='col row justify-content-between align-items-center'>
                  <span className='col-6 font'>
                  1 - 20 of 100
                  </span>
                 
                  <span className='col-3 d-flex align-items-center icon_color'>
                    <BsIcons.BsArrowLeftCircle />

                  </span>
                  <span className='col-3 d-flex align-items-center icon_color'>
                     <BsIcons.BsArrowRightCircle />

                  </span>
         

               </div>
               <div className='col icon_add d-flex align-items-center' onClick={handleOpen}>
               <span className='col-2'></span>

                  <span className='icon_addb col-6 d-flex align-items-center justify-content-center'>
                  <AiIcons.AiOutlinePlus  size={13}/>

                    Add
                  </span>
                  <span className='col-1'></span>
               </div>
               <div className=' col-2'></div>

            </div>
           

          </div>
        </header>
        <AddEvents isOpen={isOpen} isClose={handleClose}/>
    </div>
  )
}

export default Header