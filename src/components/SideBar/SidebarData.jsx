import React from 'react'
import * as FaIcons from  'react-icons/fa'
import * as AiIcons from  'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as IoIcons from  'react-icons/ri'
import * as RiIcons from  'react-icons/fa'
import * as CiIcons from 'react-icons/ci'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as HiIcons from 'react-icons/hi'
import * as GiIcons from 'react-icons/gi'
import * as TbIcons from 'react-icons/tb'
// import * as Icons from '../../assets/icons'
{/* <link rel="stylesheet" href="../" /> */}

// import * as MdIcons from 'react-icons/md'
// import * as Icons from '../../assets/icons/'
// import Miscellaneous from '../../assets/icons/miscellaneous.png'
import Telephone from '../../assets/icons/telephone.png'
import Invoice from '../../assets/icons/invoice.png'
import {Miscellaneous, Consultations } from '../../../utils.jsx'

export const SidebarDash =[
    {
        title:'Dashboard',
        path:'/',
        // icon:<IoGridOutline/>
        icon:<MdIcons.MdOutlineDashboard size={18}/>

    },
    {
        title:'Accesslogs ',
        path:'/accesslogs',
        icon:<BiIcons.BiKey size={18}/>
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<CiIcons.CiMail size={18}/>
    },
    {
        title:'Shoutbox',
        path:'/shoutbox',
        icon:<BiIcons.BiBell size={18}/>
    },
   {
        title:'Media',
        path:'/media',
        icon:<BiIcons.BiFilm size={18}/>
    },
    {
        title:'Forecast',
        path:'/forecast',
        icon:<BsIcons.BsDisplay size={18}/>
    }
    
]
export const SidebarData=[
    {
        title:'Posts',
        path:'/posts',
        icon:<TbIcons.TbMailbox size={18}/>
    },
    {
        title:'Settings',
        path:'/settings',
        icon:<FaIcons.FaTools size={18}/>
    },
    {
        title:'Consultations',
        path:'/consultations',
        icon:<Consultations size={18}/>
        // icon:<BiIcons.BiBell/>
        // icon:<Telephone/>
        // icon:<img src={Telephone} alt='telephone'/>
    },
    {
        title:'Fundraisers',
        path:'/fundraisers',
        icon:<BiIcons.BiMoneyWithdraw size={18}/>
    },
    {
        title:'Advertising',
        path:'/advertising',
        icon:<GiIcons.GiMegaphone size={18}/>
    },
    {
        title:'Users',
        path:'/users',
        icon:<HiIcons.HiOutlineUserGroup size={18}/>,
        subMenu:[
            {
                title:'General',
                path:'/general',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Administration',
                path:'/admin',
                icon:<FaIcons.FaUsers/>
            },

        ]
    },
    {
        title:'Subscription',
        path:'/subscription',
        icon:<FaIcons.FaRss size={18}/>
    },
       {
        title:'Invoices',
        path:'/invoices',
        icon:<FaIcons.FaFileInvoiceDollar size={18}/>
        // icon:'../../assets/invoice.ico'
        // icon:<img src={Invoice} alt='invoice'/>
    },
    {
        title:'Payments',
        path:'/payments',
        icon:<CiIcons.CiWallet size={18}/>
    },
    {
        title:'Miscellaneous',
        path:'/miscellaneous',
        // icon:<Miscellaneous/>
        // icon:<BiBell/>
        icon:<Miscellaneous/>
        // icon:<img src={Miscellaneous} alt='miscellaneous'/>
    },
]