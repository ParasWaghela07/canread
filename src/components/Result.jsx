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
            <img src="./public/emoji.gif" alt="" />
             {loading && <p className="text-white text-2xl">Reading.....your mind !!!</p>}
            {btn && <button className="text-black p-1 rounded-md font-bold text-xl bg-white" onClick={clickHandler}>Reveal Answer</button>}
            {reveal && <p className="text-white text-xl">ANSWER : {ans}</p>}
        </div> 
    )
}

export default Result;