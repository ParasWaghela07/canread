import { useEffect, useState } from "react";


function Result({vis,ans,setvis}){

    const [btn,setbtn]=useState(false);
    const [reveal,setreveal]=useState(false);
    const [loading,setloading]=useState(true);

    function loader() {
        setTimeout(()=>{
            setbtn(true);
            setloading(false);
        },5000)
    }

    function clickHandler(){
        setreveal(true);
        setbtn(false);
    }
    useEffect(()=>{
        loader();
    },vis)
    return(
        <div className="flex flex-col justify-center items-center gap-y-10">
            <img src="emoji.gif" alt="" className="w-[300px]"/>
             {loading && <p className="text-xl bg-white text-black p-2 rounded-lg font-serif">Reading.....your mind !!!</p>}
            {btn && <button className="text-black p-1 rounded-md font-bold text-xl bg-white" onClick={clickHandler}>Reveal Answer</button>}
            {reveal && <p className="text-white text-xl">ANSWER : {ans}</p>}
        </div> 
    )
}

export default Result;