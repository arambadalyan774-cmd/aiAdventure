"use client"
import { useState } from "react"


 const Button=()=>{

    const [clicked,setClicked]=useState(false)
    const [text, setText]=useState("click me!")
    const handleClick=()=>{
    setClicked(true)
        if( clicked){
       
     
            setText("stop click")
        }
        else{
               setClicked(false)
               setText("click me!")
        }
        console.log(clicked)

    }
   return(
        <button onClick={handleClick}>{text}</button>
    )

 }

 export default Button