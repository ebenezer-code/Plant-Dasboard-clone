import React from "react";
import {BiMessageRounded} from "react-icons/bi";
import { IoNotificationsOutline} from "react-icons/io5"

function Icons (){
    
    return(
        <div>
           <div>
                <BiMessageRounded />
           </div>
           <div>
                <IoNotificationsOutline />
           </div>
           <div className="image">
                <img src="/img.jpeg" alt="name"/>
           </div>
        </div>
    )
}

export default Icons;