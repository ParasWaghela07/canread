

function Step2({vis,setvis}){

    function submitHandler(){
        setvis(3);
    }
    return(
        <div className="flex flex-col justify-center items-center gap-y-10">
            <p className='text-white text-xl w-[70%] text-center sm:w-full'>Double That Number !</p>
            <p className='text-white text-xl w-[70%] text-center sm:w-full'>(Example : 2 + 2 = 4)</p>
            <button className="bg-white p-2 text-black rounded-lg" onClick={submitHandler}>Next</button>
        </div>
    )
}

export default Step2;