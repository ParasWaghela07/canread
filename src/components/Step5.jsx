

function Step5({vis,setvis}){

    function submitHandler(){
        setvis(6);
    }
    return(
        <div className="flex flex-col justify-center items-center gap-y-10">
            <p className='text-white text-xl text-center w-full'>Subtract the number that you have assumed !</p>
            <p className='text-white text-xl text-center w-full'>(Example : 2 was assumed at the very start)</p>
            <button className="bg-white p-2 text-black rounded-lg" onClick={submitHandler}>Next</button>
        </div>
    )
}

export default Step5;