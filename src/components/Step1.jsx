

function Step1({vis,setvis}){

    function submitHandler(){
        setvis(2);
    }
    return(
        <div className="flex flex-col justify-center items-center gap-y-10">
            <p className='text-white text-xl text-center w-[90%] '>Assume a random number of your choice !</p>
            <p className='text-white text-xl text-center w-full'>(Example : 2)</p>
            <button className="bg-white p-2 text-black rounded-lg" onClick={submitHandler}>Next</button>
        </div>
    )
}

export default Step1;