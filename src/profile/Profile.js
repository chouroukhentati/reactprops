import React from 'react'


    
const Picture = (props) => {
        return (
          <div>
            {props.children}
            <p>{props.name}</p>
            <p>{props.bio}</p>
            <p>{props.professions}</p>
            <button onClick={()=>props.myfunction(props.name)}>Alert</button>
          </div>

        )
       }
   

 
export default Picture;

