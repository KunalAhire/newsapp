import React from "react";
import spinner from './spinner.gif'

const Spinner=()=>{
        return(
            <div className="text-center">
                <img src={spinner} alt="Loading..." className="my-3" style={{width:'50px'}}/>
            </div>
        )
}
export default Spinner;