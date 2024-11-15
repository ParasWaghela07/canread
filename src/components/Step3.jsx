import { useEffect, useState } from "react";


function Step3({vis,setvis,setans}){

    const [rand,setrand]=useState(0);
    useEffect(()=>{
        const num=Math.floor(Math.random()*20) + 1;
        setrand(num);
        setans(num/2);
    },[])

    function submitHandler(){
        setvis(4);
    }
    return(
        <div className="flex flex-col justify-center items-center gap-y-10">
            <p className='text-white text-xl  text-center w-full'>Add {rand} in it !</p>
            <p className='text-white text-xl  text-center w-full'>(Example : 4 + {rand} = {4+rand})</p>
            <button className="bg-white p-2 text-black rounded-lg" onClick={submitHandler}>Next</button>
        </div>
    )
}

export default Step3;