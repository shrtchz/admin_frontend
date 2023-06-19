import React, {useState} from 'react'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import LiveReport from './LiveReport'


const Header = () => {
  const [isLiveOpen, setIsLiveOpen]= useState(false)

  const handleOpen= ()=>{
    console.log('Live Opened')
    setIsLiveOpen(true)

  }
  const handleLiveClose= ()=>{
    console.log('Live Closed')
    setIsLiveOpen(false)

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
                  <span className='icon_addb'>
                  <AiIcons.AiOutlinePlus className='col' size={13}/>

                    Live Reporting
                  </span>
                  <span className='col-2'></span>
               </div>
               <div className=' col-2'></div>

            </div>
           

          </div>

        </header>
        <LiveReport isOpen={isLiveOpen} isClose={handleLiveClose}/>


    </div>
  )
}

export default Header