import React from 'react'
import { GoHomeFill , GoQuote, GoBookmarkFill} from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LuMessageCircleCode } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import ModeApplcation from './Mode';
import MoreApplcations from './Seeting';

const LeftSideBerConetent = [
    {
        icone:<GoHomeFill />,
        title:'Home'
    },

  
     {
        icone:<MdOutlineOndemandVideo />,
        title:'Reel'
    },
        
       {
        icone:<GoQuote />,
        title:'Create Post'  
      },

      {
         icone:<GoBookmarkFill />,
         title:'BookMark'
      },
  
       {
        icone:<FaSearch />,
        title:'Search'
    },


      {
           icone:<MdPeopleAlt />,
           title:'Friend'
       }

       ,
       
      {
        
        icone:<IoIosNotificationsOutline />,
        title:'Notifications'
      },


     {
         icone:<LuMessageCircleCode />,
         title:'Message'
   },
   
   {
      icone:<AiOutlineUser />,
      title:'Profile'
   },

   
   {
     icone:<IoTime />,
     title:'History'
   }   ,

   {
    iconea1:<ModeApplcation/>,
   },

   {
    iconea2:<MoreApplcations/>,
   }
]


function LeftSideber() {
    return (
        <>
            <section className='fixed'>
               <div className='flex flex-col gap-7 hidden md:flex mt-10 pl-20'>
                  <h1 className='text-2xl font-bold text-black-mood-text-color'>Nexora</h1>
                   {
                    LeftSideBerConetent.map((value)=> (
                        <div className='flex items-center gap-2'>
                            <span className='text-black-mood-text-color text-2xl cursor-pointer'>{value.icone}</span>
                            <span className='text-2xl text-black-mood-text-color cursor-pointer'>{value.title}</span>
                            <div className=''>
                               <div className='relative top-20 text-white-mode-text-color'>{value.iconea1}</div>
                              <div className='relative top-20'>{value.iconea2}</div>
                            </div>
                        </div>
                        
                    ))
                   }
                 

               </div>
            
            </section>
        </>
    )
}

export default LeftSideber