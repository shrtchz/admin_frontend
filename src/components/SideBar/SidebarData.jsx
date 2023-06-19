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
import Post from '../../assets/Icns/post icon.png'
import Predict from '../../assets/Icns/prediction icon.png'
import Trends from '../../assets/Icns/trending image.png'
import Evnts from '../../assets/Icns/events icon.png'
import Mrkplc from '../../assets/Icns/market place icon.png'


import './styles.css'

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
        title:'POSTS',
        path:'/posts/listingevents',
        icon:<img src={Post} />,
        subMenu:[
            {
                title:'Predictions',
                path:'/posts/predictions',
                icon:<img src={Predict} alt='predict'/>
            },
            {
                title:'Events',
                path:'/posts/events',
                icon:<img src={Evnts} alt='evnts'/>
            },
            {
                title:'Marketplace',
                path:'/posts/marketplace',
                icon:<img src={Mrkplc} alt='market' />
            },
             {
                title:'Trending',
                path:'/posts/trending',
                icon:<img src={Trends} alt='trends'/>
            },
        ]
    },
    {
        title:'SETTINGS',
        path:'/settings/categories',
        icon:<FaIcons.FaTools size={18}/>,
        subMenu:[
            {
                title:'Categories',
                path:'/settings/categories',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Subcategories',
                path:'/settings/subcategories',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Markets',
                path:'/settings/markets',
                icon:<FaIcons.FaUsers/>
            }, {
                title:'Tips',
                path:'/settings/tips',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Currencies',
                path:'/settings/currencies',
                icon:<FaIcons.FaUsers/>
            }, {
                title:'Fees and Taxes',
                path:'/settings/fees&taxes',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Picks',
                path:'/settings/picks',
                icon:<FaIcons.FaUsers/>
            },

        ]
    },
    {
        title:'CONSULTATION',
        path:'/consultations',
        icon:<Consultations size={18}/>
        // icon:<BiIcons.BiBell/>
        // icon:<Telephone/>
        // icon:<img src={Telephone} alt='telephone'/>
    },
    {
        title:'FUNDRAISERS',
        path:'/fundraisers',
        icon:<BiIcons.BiMoneyWithdraw size={18}/>
    },
    {
        title:'ADVERTISING',
        path:'/advertising',
        icon:<GiIcons.GiMegaphone size={18}/>
    },
    {
        title:'USERS',
        path:'#',
        icon:<HiIcons.HiOutlineUserGroup size={18}/>,
        subMenu:[
            {
                title:'General',
                path:'/users/allusers',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Administration',
                path:'/users/alladmins',
                icon:<FaIcons.FaUsers/>
            },

        ]
    },
    {
        title:'SUBSCRIPTION',
        path:'/subscription',
        icon:<FaIcons.FaRss size={18}/>
    },
       {
        title:'INVOICES',
        path:'/invoices',
        icon:<FaIcons.FaFileInvoiceDollar size={18}/>
        // icon:'../../assets/invoice.ico'
        // icon:<img src={Invoice} alt='invoice'/>
    },
    {
        title:'PAYMENTS',
        path:'/payments',
        icon:<CiIcons.CiWallet size={18}/>
    },
    {
        title:'MISCELLANEOUS',
        path:'#',
        // icon:<Miscellaneous/>
        // icon:<BiBell/>
        icon:<Miscellaneous/>,
        subMenu:[
            {
                title:'App Manager',
                path:'/miscellaneous/appmanager',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Privacy Policy',
                path:'/miscellaneous/privacy&policy',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Terms of Service',
                path:'/miscellaneous/termsofservice',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'FAQs',
                path:'/miscellaneous/faqs',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Social Media',
                path:'/miscellaneous/socialmedia',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Blogs',
                path:'/miscellaneous/blogs',
                icon:<FaIcons.FaUsers/>
            }, {
                title:'News',
                path:'/miscellaneous/news',
                icon:<FaIcons.FaUsers/>
            },
            {
                title:'Promotins',
                path:'/miscellaneous/promotions',
                icon:<FaIcons.FaUsers/>
            }, {
                title:'Email portals',
                path:'/miscellaneous/emailportals',
                icon:<FaIcons.FaUsers/>
            },

        ]
        // icon:<img src={Miscellaneous} alt='miscellaneous'/>
    },
]