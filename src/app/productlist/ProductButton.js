"use client"
export default function ProductButton({price}){
    return(
        <div>
            <button onClick={()=>alert(price)}>Click Me</button>
        </div>
    )
}