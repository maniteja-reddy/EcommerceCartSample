import React from 'react'
import { watchData } from '../data/watch'

import Navbar from '../components/Navbar'
const WatchPage = () => {
  return (
   <>
    <Navbar/>
    <div className='pagesection'>
        {watchData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt=" "/>
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>    
            )
        })}
    </div>
  </>
  )
}
export default WatchPage